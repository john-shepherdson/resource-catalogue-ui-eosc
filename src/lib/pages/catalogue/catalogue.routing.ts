import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanActivateViaAuthGuard} from '../../services/can-activate-auth-guard.service';
import {CatalogueFormComponent} from './catalogue-form.component';
import {UpdateCatalogueComponent} from "./update-catalogue.component";


const providerRoutes: Routes = [

  {
    path: 'add',
    component: CatalogueFormComponent,
    canActivate: [CanActivateViaAuthGuard],
    data: {
      breadcrumb: 'New Catalogue'
    }
  },
  // {
  //   path: 'add/:catalogueId',
  //   component: UpdateServiceProviderComponent,
  //   canActivate: [CanActivateViaAuthGuard],
  //   data: {
  //     breadcrumb: 'New Catalogue'
  //   }
  // },
  {
    path: 'update/:catalogueId',
    component: UpdateCatalogueComponent,
    canActivate: [CanActivateViaAuthGuard],
    data: {
      breadcrumb: 'Update Catalogue'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(providerRoutes)],
  exports: [RouterModule]
})

export class CatalogueRouting {
}
