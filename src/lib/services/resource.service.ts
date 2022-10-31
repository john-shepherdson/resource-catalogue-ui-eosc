import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../environments/environment';
import {
  Indicator,
  Measurement,
  VocabularyTree,
  Provider,
  RichService,
  Service,
  ServiceHistory,
  Vocabulary,
  Type, ProviderBundle, InfraService, LoggingInfo
} from '../domain/eic-model';
import {BrowseResults} from '../domain/browse-results';
import {Paging} from '../domain/paging';
import {URLParameter} from '../domain/url-parameter';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Info} from '../domain/info';

declare var UIkit: any;


@Injectable()
export class ResourceService {

  constructor(public http: HttpClient, public authenticationService: AuthenticationService) {
  }
  base = environment.API_ENDPOINT;
  private options = {withCredentials: true};
  ACCESS_TYPES;
  ORDER_TYPE;

  static removeNulls(obj) {
    const isArray = obj instanceof Array;
    for (const k in obj) {
      if (obj[k] === null || obj[k] === '') {
        isArray ? obj.splice(k, 1) : delete obj[k];
      } else if (typeof obj[k] === 'object') {
        if (typeof obj[k].value !== 'undefined' && typeof obj[k].lang !== 'undefined') {
          if (obj[k].value === '' && obj[k].lang === 'en') {
            obj[k].lang = '';
          }
        }
        ResourceService.removeNulls(obj[k]);
      }
      if (obj[k] instanceof Array && obj[k].length === 0) {
        delete obj[k];
      } else if (obj[k] instanceof Array) {
        for (const l in obj[k]) {
          if (obj[k][l] === null || obj[k][l] === '') {
            delete obj[k][l];
          }
        }
      }
    }
  }

  getAll(resourceType: string) {
    let params = new HttpParams();
    params = params.append('from', '0');
    params = params.append('quantity', '10000');
    return this.http.get(this.base + `/${resourceType}/all`, {params});
  }

  getAllIndicators(resourceType: string) {
    let params = new HttpParams();
    params = params.append('from', '0');
    params = params.append('quantity', '10000');
    return this.http.get<Paging<Indicator>>(this.base + `/${resourceType}/all`, {params});
  }

  getBy(resourceType: string, resourceField: string) {
    return this.http.get(this.base + `/${resourceType}/by/${resourceField}/`);
  }

  getSome(resourceType: string, ids: string[]) {
    return this.http.get(this.base + `/${resourceType}/byID/${ids.toString()}/`);
  }

  get(resourceType: string, id: string) {
    return this.http.get(this.base + `/${resourceType}/${id}/`, this.options);
  }

  search(urlParameters: URLParameter[]) {
    let searchQuery = new HttpParams();
    for (const urlParameter of urlParameters) {
      for (const value of urlParameter.values) {
        searchQuery = searchQuery.append(urlParameter.key, value);
      }
    }
    searchQuery.delete('to');
    /*return this.http.get(`/service/all${questionMark}${searchQuery.toString()}`).map(res => <SearchResults<Service>> <any> res);*/
    // const questionMark = urlParameters.length > 0 ? '?' : '';
    // return this.http.get<SearchResults<RichService>>(this.base + `/service/rich/all${questionMark}${searchQuery.toString()}`, this.options)
    return this.http.get<Paging<RichService>>(
      this.base + `/service/rich/all?orderField=name&order=asc&${searchQuery.toString()}`, this.options);
  }

  getAllVocabulariesByType() {
    return this.http.get<Map<Type, Vocabulary[]>>(this.base + `/vocabulary/byType`);
  }

  getVocabularyByType(type: string) {
    return this.http.get<Vocabulary[]>(this.base + `/vocabulary/byType/${type}`);
  }

  getNestedVocabulariesByType(type: string) {
    return this.http.get<VocabularyTree>(this.base + `/vocabulary/vocabularyTree/${type}`);
  }

  getSubcategoriesIdsFromSuperCategory(parent: string, type: string) {
    let params = new HttpParams();
    params = params.append('parent', parent);
    params = params.append('type', type);
    return this.http.get<string[]>(this.base + '/service/childrenFromParent', {params});
  }

  getServices() {
    return this.http.get(this.base + '/service/by/ID/'); // needs capitalized 'ID' after back changes
  }

  getService(id: string, catalogue_id?: string) {
    // if version becomes optional this should be reconsidered
    // return this.http.get<Service>(this.base + `/service/${version === undefined ? id : [id, version].join('/')}`, this.options);
    if (!catalogue_id) catalogue_id = 'eosc';
    return this.http.get<Service>(this.base + `/service/${id}/?catalogue_id=${catalogue_id}`, this.options);
  }

  getRichService(id: string, catalogueId?:string, version?: string) {
    if (!catalogueId) catalogueId = 'eosc';
    return this.http.get<RichService>(this.base + `/service/rich/${id}?catalogue_id=${catalogueId}`, this.options);
    // return this.http.get<RichService>(this.base + `/service/rich/${version === undefined ? id : [id, version].join('/')}/`, this.options);
  }

  getPendingService(id: string) {
    return this.http.get<RichService>(this.base + `/pendingService/rich/${id}/`, this.options);
  }

  getSelectedServices(ids: string[]) {
    /*return this.getSome("service", ids).map(res => <Service[]> <any> res);*/
    // return this.getSome('service/rich', ids).subscribe(res => <RichService[]><any>res);
    return this.http.get<RichService[]>(this.base + `/service/rich/byID/${ids.toString()}/`, this.options);
  }

  getServicesByCategories() {
    return this.http.get<BrowseResults>(this.base + '/service/by/category/');
  }

  getServicesOfferedByProvider(id: string): Observable<RichService[]> {
    return this.search([{key: 'quantity', values: ['100']}, {key: 'provider', values: [id]}]).pipe(
      map(res => Object.values(res.results))
    );
  }

  deleteService(id: string) {
    return this.http.delete(this.base + '/service/' + id, this.options);
  }

  deletePendingService(id: string) {
    return this.http.delete(this.base + '/pendingService/' + id, this.options);
  }

  /** Recommendations **/

  getRecommendedServices(limit: number) {
    return this.http.get<RichService[]>(this.base + `/recommendation/getRecommendationServices/${limit}/`, this.options);
  }

  /** STATS **/
  getVisitsForProvider(provider: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/provider/visits/${provider}`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/visits/${provider}`);
    }
  }

  getCategoriesPerServiceForProvider(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=SUBCATEGORY`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=SUBCATEGORY`);
    }
  }

  getDomainsPerServiceForProvider(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
    return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=SCIENTIFIC_SUBDOMAIN`, {params});
  } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=SCIENTIFIC_SUBDOMAIN`);
    }
  }

  getTargetUsersPerServiceForProvider(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=TARGET_USERS`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=TARGET_USERS`);
    }
  }

  getAccessModesPerServiceForProvider(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=ACCESS_MODES`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=ACCESS_MODES`);
    }
  }

  getAccessTypesPerServiceForProvider(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=ACCESS_TYPES`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=ACCESS_TYPES`);
    }
  }

  getOrderTypesPerServiceForProvider(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=ORDER_TYPE`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToVocabulary?vocabulary=ORDER_TYPE`);
    }
  }

  getMapDistributionOfServices(provider?: string) {
    let params = new HttpParams();
    if (provider) {
      params = params.append('providerId', provider);
      return this.http.get(this.base + `/stats/provider/mapServicesToGeographicalAvailability`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/mapServicesToGeographicalAvailability`);
    }
  }

  getFavouritesForProvider(provider: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/provider/favourites/${provider}`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/favourites/${provider}`);
    }
  }

  getAddsToProjectForProvider(provider: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/provider/addToProject/${provider}`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/addToProject/${provider}`);
    }
  }

  getOrdersForProvider(provider: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/provider/orders/${provider}`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/orders/${provider}`);
    }
  }

  getRatingsForProvider(provider: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/provider/ratings/${provider}`, {params});
    } else {
      return this.http.get(this.base + `/stats/provider/ratings/${provider}`);
    }
  }

  getVisitationPercentageForProvider(provider: string) {
    return this.get('stats/provider/visitation', provider);
  }

  getPlacesForProvider(provider: string) {
    return this.getServicesOfferedByProvider(provider);
  }

  getVisitsForService(service: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/service/visits/${service}`, {params});
    }
    return this.http.get(this.base + `/stats/service/visits/${service}`);
  }

  getFavouritesForService(service: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/service/favourites/${service}`, {params});
    }
    return this.http.get(this.base + `/stats/service/favourites/${service}`);
  }

  getAddToProjectForService(service: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/service/addToProject/${service}`, {params});
    }
    return this.http.get(this.base + `/stats/service/addToProject/${service}`);
  }

  getRatingsForService(service: string, period?: string) {
    let params = new HttpParams();
    if (period) {
      params = params.append('by', period);
      return this.http.get(this.base + `/stats/service/ratings/${service}`, {params});
    }
    return this.http.get(this.base + `/stats/service/ratings/${service}`);
  }
  /** STATS **/

  /** Service Measurements **/
  getLatestServiceMeasurement(id: string) {
    return this.http.get<Paging<Measurement>>(this.base + `/measurement/latest/service/${id}`);
  }

  getServiceMeasurements(id: string) {
    return this.http.get<Paging<Measurement>>(this.base + `/measurement/service/${id}`);
  }

  postMeasurement(measurement: Measurement) {
    return this.http.post(this.base + '/measurement', measurement, this.options)
      ;
  }

  postMeasurementUpdateAll(id: string, measurement: Measurement[]) {
    let params = new HttpParams();
    params = params.append('serviceId', id);
    // const options = {params, withCredentials: true};
    return this.http.post(this.base + '/measurement/updateAll', measurement, {params, withCredentials: true});
  }
  /** Service Measurements **/

  /** Indicators **/
  postIndicator(indicator: Indicator) {
    return this.http.post(this.base + '/indicator', indicator, this.options);
  }
  /** Indicators **/

  // groupServicesOfProviderPerPlace(id: string) {
  //   return this.getServicesOfferedByProvider(id).subscribe(res => {
  //     const servicesGroupedByPlace = {};
  //     for (const service of res) {
  //       for (const place of service.places) {
  //         if (servicesGroupedByPlace[place]) {
  //           servicesGroupedByPlace[place].push(res);
  //         } else {
  //           servicesGroupedByPlace[place] = [];
  //         }
  //       }
  //     }
  //     return servicesGroupedByPlace;
  //   });
  // }

  getProvidersNames(status?: string) {
    let params = new HttpParams();
    params = params.append('from', '0');
    params = params.append('quantity', '10000');
    if (status === 'approved provider') {
      return this.http.get<Paging<Provider>>(this.base + `/provider/all/?status=approved provider`, {params, withCredentials: true});
    }
    return this.http.get<Paging<Provider>>(this.base + `/provider/all/`, {params, withCredentials: true});
  }

  getProviders(from: string, quantity: string) {
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('quantity', quantity);
    params = params.append('orderField', 'creation_date');
    params = params.append('order', 'desc');
    return this.http.get(this.base + `/provider/all`, {params});
    // return this.getAll("provider");
  }

  getProviderBundles(from: string, quantity: string, orderField: string, order: string, query: string,
                     status: string[], templateStatus: string[], auditState: string[], catalogue_id: string[]) {
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('quantity', quantity);
    params = params.append('orderField', orderField);
    params = params.append('order', order);
    if (query && query !== '') {
      params = params.append('query', query);
    }
    if (status && status.length > 0) {
      for (const statusValue of status) {
        params = params.append('status', statusValue);
      }
    }
    if (templateStatus && templateStatus.length > 0) {
      for (const templateStatusValue of templateStatus) {
        params = params.append('templateStatus', templateStatusValue);
      }
    }
    if (auditState && auditState.length > 0) {
      for (const auditValue of auditState) {
        params = params.append('auditState', auditValue);
      }
    }
    if (catalogue_id && catalogue_id.length > 0) {
      for (const catalogueValue of catalogue_id) {
        params = params.append('catalogue_id', catalogueValue);
      }
    } else params = params.append('catalogue_id', 'all');
    return this.http.get(this.base + `/provider/bundle/all`, {params});
    // return this.getAll("provider");
  }

  getResourceBundles(from: string, quantity: string, orderField: string, order: string, query: string,
                     active: string, resource_organisation: string[], status: string[], auditState: string[], catalogue_id: string[]) {
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('quantity', quantity);
    params = params.append('orderField', orderField);
    params = params.append('order', order);
    // params = params.append('active', active);
    if (query && query !== '') {
      params = params.append('query', query);
    }
    if (status && status.length > 0) {
      for (const statusValue of status) {
        params = params.append('status', statusValue);
      }
    }
    if (active && active !== '') {
      params = params.append('active', active);
    }
    if (resource_organisation && resource_organisation.length > 0) {
      for (const providerValue of resource_organisation) {
        params = params.append('resource_organisation', providerValue);
      }
    }
    if (auditState && auditState.length > 0) {
      for (const auditValue of auditState) {
        params = params.append('auditState', auditValue);
      }
    }
    if (catalogue_id && catalogue_id.length > 0) {
      for (const catalogueValue of catalogue_id) {
        params = params.append('catalogue_id', catalogueValue);
      }
    } else params = params.append('catalogue_id', 'all');
    return this.http.get(this.base + `/service/adminPage/all`, {params});
    // return this.getAll("provider");
  }

  getMyServiceProviders() {
    return this.http.get<Provider[]>(this.base + '/provider/getMyServiceProviders');
  }

  getRandomResources(quantity: string) {
    return this.http.get<InfraService[]>(this.base + `/resource/randomResources?quantity=${quantity}`, this.options);
  }

  getSharedServicesByProvider(id: string, from: string, quantity: string, order: string, orderField: string) {
    return this.http.get<Paging<InfraService>>(this.base +
      `/resource/getSharedResources/${id}?from=${from}&quantity=${quantity}&order=${order}&orderField=${orderField}`);
  }

  getEU() {
    return this.http.get(this.base + '/vocabulary/countries/EU');
  }

  getWW() {
    return this.http.get(this.base + '/vocabulary/countries/WW');
  }

  // this should be somewhere else, I think
  expandRegion(places, eu, ww) {
    const iEU = places.indexOf('EU');
    if (iEU > -1) {
      places.splice(iEU, 1);
      places.push(...eu);
    }
    const iWW = places.indexOf('WW');
    if (iWW > -1) {
      places.splice(iWW, 1);
      places.push(...ww);
    }
    return places;
  }

  uploadService(service: Service, shouldPut: boolean, comment: string) {
    // console.log(JSON.stringify(service));
    // console.log(`knocking on: ${this.base}/service`);
    return this.http[shouldPut ? 'put' : 'post']<Service>(this.base + `/service?comment=${comment}`, service, this.options);
  }

  uploadServiceWithMeasurements(service: Service, measurements: Measurement[]) {
    return this.http.put<Service>(this.base + '/service/serviceWithMeasurements', {service, measurements}, this.options);
  }

  uploadPendingService(service: Service, shouldPut: boolean, comment: string) {
    return this.http.put<Service>(this.base + '/pendingService/transform/resource', service, this.options);
  }

  uploadTempPendingService(service: Service) {
    return this.http.put<Service>(this.base + '/pendingService/pending', service, this.options);
  }

  uploadTempService(service: Service) {
    return this.http.put<Service>(this.base + '/pendingService/service', service, this.options);
  }

  getFeaturedServices() {
    return this.http.get<Service[]>(this.base + `/service/featured/all/`);
  }

  getServiceHistory(serviceId: string) {
    return this.http.get<Paging<ServiceHistory>>(this.base + `/service/history/${serviceId}/`);
  }

  getServiceLoggingInfoHistory(serviceId: string) {
    return this.http.get<Paging<LoggingInfo>>(this.base + `/resource/loggingInfoHistory/${serviceId}/`);
  }

  getInfo() {
    return this.http.get<Info>(this.base + `/info/all`);
  }

  auditResource(id: string, action: string, comment: string) {
    return this.http.patch(this.base + `/resource/auditResource/${id}?actionType=${action}&comment=${comment}`, this.options);
  }

  verifyResource(id: string, active: boolean, status: string) { // for 1st service
    return this.http.patch(this.base + `/resource/verifyResource/${id}?active=${active}&status=${status}`, {}, this.options);
  }

  getServiceTemplate(id: string) {  // gets oldest(?) pending resource of the provider // replaced with /resourceBundles/templates?id=testprovidertemplate
    return this.http.get<Service[]>(this.base + `/resource/getServiceTemplate/${id}`);
  }

  getResourceTemplateOfProvider(id: string) {  // returns the template, service or datasource
    return this.http.get<any[]>(this.base + `/resourceBundles/templates?id=${id}`);
  }

  sendEmailForOutdatedResource(id: string) {
    return this.http.get(this.base + `/resource/sendEmailForOutdatedResource/${id}`);
  }

  moveResourceToProvider(resourceId: string, providerId: string, comment: string) {
    return this.http.post(this.base + `/resource/changeProvider?resourceId=${resourceId}&newProvider=${providerId}&comment=${comment}`, this.options);
  }

  public handleError(error: HttpErrorResponse) {
    // const message = 'Server error';
    const message = error.error;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    UIkit.notification.closeAll();
    UIkit.notification({message: message, status: 'danger', pos: 'top-center', timeout: 5000});
    return throwError(error);
  }
}
