export class Description {
    desc: string;
    label: string;
    mandatory?: boolean;
    recommended?: boolean;
}

/** Provider Description Template **/

export const providerDescMap = new Map()
  // Basic Information //
  .set('fullNameDesc', {mandatory: true, label: 'Name', placeholder: 'Write full name...', desc: 'Full Name of the Provider/Organisation offering Resources and acting as main contact point for the Resources.'})
  .set('abbreviationDesc', {mandatory: true, label: 'Abbreviation', placeholder: 'Write abbreviation...', desc: 'Abbreviation of the Provider Name.'})
  .set('websiteDesc', {mandatory: true, label: 'Website', placeholder: 'webpage URL', desc: 'Website with information about the Provider.'})
  .set('legalEntityDesc', {mandatory: true, label: 'Legal Entity', desc: 'Is the Provider a Legal Entity?'})
  .set('legalStatusDesc', {mandatory: false, label: 'Legal Status', placeholder: 'Write legal status...', desc: 'Legal status of the Provider. The legal status is usually noted in the registration act/statutes. For independent legal entities this should be the legal status of the Provider. For embedded Providers this should be the legal status of the hosting legal entity.'})
  .set('hostingLegalEntityDesc', {mandatory: false, label: 'Hosting Legal Entity', placeholder: 'Write hosting legal entity...', desc: 'A Hosting Legal Entity (HLE) is an institution registered as an EOSC resource provider, that is a legal entity and agrees to be accountable for resources onboarded to EOSC. Resources may be onboarded by a resource provider which is not a legal entity, but only if the Hosting Legal Entity field includes one legal entity already registered as resource provider, if this has been agreed in advance with them.'})
  // Marketing Information //
  .set('descriptionDesc', {mandatory: true, label: 'Description', placeholder: 'Write a description...', desc: 'A high-level description of the Provider in fairly non-technical terms, with the vision, mission, objectives, background, experience.'})
  .set('logoDesc', {mandatory: true, label: 'Logo', placeholder: 'logo URL', desc: 'Link to the logo/visual identity of the Provider. Go to the Provider\'s website --> Right Click on the Provider\'s logo on the website --> Select "Copy Image Link" --> Paste it in the field below.'})
  .set('multimediaURLDesc', {mandatory: false, label: 'Multimedia URL', placeholder: 'Write link to multimedia...', desc: 'Links to video, slideshow, photos, screenshots with details of the Provider.'})
  .set('multimediaNameDesc', {mandatory: false, label: 'Multimedia Name', placeholder: 'Write multimedia name...', desc: 'Short description of the Multimedia content.'})
  // Classification Information //
  .set('scientificDomainDesc', {mandatory: false, label: 'Scientific Domain', placeholder: 'Select scientific domain...', desc: 'A named group of Providers that offer access to the same type of Resources.'})
  .set('scientificSubdomainsDesc', {mandatory: false, label: 'Scientific Subdomain', placeholder: 'Select scientific subdomain after selecting scientific domain...', desc: 'A named group of Providers that offer access to the same type of Resources, within the defined domain.'})
  .set('tagsDesc', {mandatory: false, label: 'Tags', placeholder: 'Write tag...', desc: 'Keywords associated to the Provider to simplify search by relevant keywords.'})
  .set('structureTypesDesc', {mandatory: false, label: 'Structure Type', placeholder: 'Select structure type...', desc: 'Structure Type of the Provider (single-sited, distributed, mobile, virtual, etc.).'})
  // Location Information //
  .set('streetNameAndNumberDesc', {mandatory: true, label: 'Street Name and Number', placeholder: 'Write street name and number...', desc: 'Street and Number of incorporation or Physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile Providers.'})
  .set('postalCodeDesc', {mandatory: true, label: 'Postal Code', placeholder: 'Write postal code...', desc: 'Postal code of incorporation or physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile Providers.'})
  .set('cityDesc', {mandatory: true, label: 'City', placeholder: 'Write city...', desc: 'City of incorporation or physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile Providers.'})
  .set('regionDesc', {mandatory: false, label: 'Region', placeholder: 'Write region...', desc: 'Region of incorporation or physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile Providers.'})
  .set('countryDesc', {mandatory: true, label: 'Country', placeholder: 'Write country...', desc: 'Country of incorporation or physical location of the Provider or its coordinating centre in the case of distributed, virtual, and mobile Providers.'})
  // Contact Information --> //
  // Main Contact/Provider Manager
  .set('mainContactFirstNameDesc', {mandatory: true, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Provider\'s main contact person/Provider manager.'})
  .set('mainContactLastNameDesc', {mandatory: true, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Provider\'s main contact person/Provider manager.'})
  .set('mainContactEmailDesc', {mandatory: true, label: 'Email', placeholder: 'Write email...', desc: 'Email of the Provider\'s main contact person/Provider manager.'})
  .set('mainContactPhoneDesc', {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Phone of the Provider\'s main contact person/Provider manager.'})
  .set('mainContactPositionDesc', {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Provider\'s main contact person/Provider manager.'})
  // Public Contact
  .set('publicContactFirstNameDesc', {mandatory: false, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Provider\'s contact person to be displayed publicly at the Portal.'})
  .set('publicContactLastNameDesc', {mandatory: false, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Provider\'s contact person to be displayed publicly at the Portal.'})
  .set('publicContactEmailDesc', {mandatory: true, label: 'Email', placeholder: 'Write email...', desc: 'Email of the Provider\'s contact person to be displayed publicly at the Portal or general email to contact the Provider.'})
  .set('publicContactPhoneDesc', {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Phone of the provider\'s contact person to be displayed publicly at the Portal or general phone to contact the Provider.'})
  .set('publicContactPositionDesc', {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Provider\'s contact person to be displayed publicly at the Portal.'})
  // <-- Contact Information //
  // Maturity Information //
  .set('lifeCycleStatusDesc', {mandatory: false, label: 'Life Cycle Status', placeholder: 'Write life cycle status...', desc: 'Current status of the Provider life-cycle.'})
  .set('certificationsDesc', {mandatory: false, label: 'Certifications', placeholder: 'Write certifications...', desc: 'List of certifications obtained for the Provider (including the certification body, the certificate number or URL if available).'})
  // Dependencies //
  .set('participatingCountriesDesc', {mandatory: false, label: 'Participating Countries', placeholder: 'Select participating countries...', desc: 'Providers that are funded by several countries should list here all supporting countries (including the coordinating country first).'})
  .set('affiliationDesc', {mandatory: false, label: 'Affiliations', placeholder: 'Write affiliations...', desc: 'Providers that are members or affiliated or associated with other organisations should list those organisations here.'})
  .set('networksDesc', {mandatory: false, label: 'Networks', placeholder: 'Select network...', desc: 'Providers that are members of networks should list those networks here.'})
  .set('catalogueIdDesc', {mandatory: false, label: 'Catalogue', placeholder: 'Select catalogue...', desc: 'The ID of the Catalogue this Provider is originally registered at.'})
  // Other //
  .set('ESFRIDomainDesc', {mandatory: false, label: 'ESFRI Domain', placeholder: 'Select ESFRI domain...', desc: 'ESFRI domain classification (Applicable to ESFRIs only).'})
  .set('ESFRITypeDesc', {mandatory: false, label: 'ESFRI Type', placeholder: 'Select ESFRI type...', desc: 'If the research infrastructure is (part of) an ESFRI project indicate how the RI participates: a) is a node of an ESFRI project, b) is an ESFRI project, c) is an ESFRI landmark, d) is not an ESFRI project or landmark.'})
  .set('merilScientificDomainsDesc', {mandatory: false, label: 'MERIL Scientific Domain', placeholder: 'Select MERIL scientific domain...', desc: 'MERIL scientific domain classification.'})
  .set('merilScientificSubdomainsDesc', {mandatory: false, label: 'MERIL Scientific Subdomain', placeholder: 'Select MERIL scientific subdomain after selecting MERIL scientific domain...', desc: 'MERIL scientific subdomain classification.'})
  .set('areasOfActivityDesc', {mandatory: false, label: 'Area of Activity', placeholder: 'Write areas of activity...', desc: 'Basic research, Applied research or Technological development.'})
  .set('societalGrandChallengesDesc', {mandatory: false, label: 'Societal Grand Challenges', placeholder: 'Write societal grand challenges...', desc: 'Provider’s participation in the Grand Societal Challenges defined by the European Commission.'})
  .set('nationalRoadmapsDesc', {mandatory: false, label: 'National Roadmaps', placeholder: 'Write national roadmaps...', desc: 'Provider\'s participation in a national roadmap.'})
;


/** Service Description Template **/

export const serviceDescMap = new Map()
// Basic Information //
  .set('nameDesc', {mandatory: true, label: 'Name', placeholder: 'Write full name...', desc: 'Brief and descriptive name of the Resource as assigned by the Provider.'})
  .set('abbreviationDesc', {mandatory: true, label: 'Abbreviation', placeholder: 'Write abbreviation...', desc: 'Abbreviation or short name of the Resource.'})
  .set('resourceOrganisationDesc', {mandatory: true, label: 'Resource Organisation', placeholder: 'Select resource organisation...', desc: 'The name of the organisation that manages or delivers the resource, or that coordinates the Resource delivery in a federated scenario.'})
  .set('resourceProvidersDesc', {mandatory: false, label: 'Resource Providers', placeholder: 'Select resource provider...', desc: 'The name(s) of (all) the Provider(s) that manage or deliver the Resource in federated scenarios.'})
  .set('webpageDesc', {mandatory: true,  label: 'Webpage', placeholder: 'Write webpage url...', desc: 'Webpage with information about the Resource usually hosted and maintained by the Provider.'})
// Marketing Information //
  .set('descriptionDesc', {mandatory: true,  label: 'Description', placeholder: 'Write a description...', desc: 'A high-level description in fairly non-technical terms of a) what the Resource does, functionality it provides and Resources it enables to access, b) the benefit to a user/customer delivered by a Resource; benefits are usually related to alleviating pains (e.g., eliminate undesired outcomes, obstacles or risks) or producing gains (e.g. increased performance, social gains, positive emotions or cost saving), c) list of customers, communities, users, etc. using the Resource.'})
  .set('taglineDesc', {mandatory: true,  label: 'Tagline', placeholder: 'Write a tagline...', desc: 'Short catchphrase for marketing and advertising purposes. It will be usually displayed close to the Resource name and should refer to the main value or purpose of the Resource.'})
  .set('logoDesc', {mandatory: true,  label: 'Logo', placeholder: 'Link to the logo', desc: 'Link to the logo/visual identity of the Resource. The logo will be visible at the Portal. If there is no specific logo for the Resource the logo of the Provider may be used. Go to the Resource Provider\'s website --> Right Click on the Resource Provider\'s logo on the website --> Select "Copy Image Link" --> Paste it in the below field.'})
  .set('multimediaURLDesc', {mandatory: false, label: 'Multimedia URL', placeholder: 'Write link to multimedia...', desc: 'Link to video, screenshots or slides showing details of the Resource.'})
  .set('multimediaNameDesc', {mandatory: false, label: 'Multimedia Name', placeholder: 'Write multimedia name...', desc: 'Short description of the Multimedia content.'})
  .set('useCaseURLDesc', {mandatory: false, label: 'Use Cases URL', placeholder: 'Write use case URL...', desc: 'Link to use cases supported by this Resource.'})
  .set('useCaseNameDesc', {mandatory: false, label: 'Use Cases Name', placeholder: 'Write use case name...', desc: 'Short description of the Use Case content.'})
// Classification Information //
  .set('scientificDomainDesc', {mandatory: true,  label: 'Scientific Domain', placeholder: 'Select scientific domain...', desc: 'The branch of science, scientific discipline that is related to the Resource.'})
  .set('scientificSubDomainDesc', {mandatory: true,  label: 'Scientific Subdomain', placeholder: 'Select scientific subdomain after selecting scientific domain...', desc: 'The subbranch of science, scientific subdiscipline that is related to the Resource.'})
  .set('categoryDesc', {mandatory: true,  label: 'Category', desc: 'A named group of Resources that offer access to the same type of Resources.'})
  .set('subcategoryDesc', {mandatory: true,  label: 'Subcategory', desc: 'A named group of Resources that offer access to the same type of Resources, within the defined Resource category.'})
  .set('targetUsersDesc', {mandatory: true,  label: 'Target Users', placeholder: 'Select target users...', desc: 'Type of users that commissions a Provider to deliver a Resource.'})
  .set('accessTypeDesc', {mandatory: false, label: 'Access Type', placeholder: 'Select access type...', desc: 'The way a user can access the Resource (Remote, Physical, Virtual, etc.).'})
  .set('accessModeDesc', {mandatory: false, label: 'Access Mode', placeholder: 'Select access mode...', desc: 'Eligibility/criteria for granting access to the Resource to users (excellence-based, free-conditionally, free etc.).'})
  .set('tagsDesc', {mandatory: false, label: 'Tags', placeholder: 'Write tag...', desc: 'Keywords associated to the Resource to simplify search by relevant keywords.'})
// Geographical and Language Availability Information //
  .set('geographicalAvailabilityDesc', {mandatory: true, label: 'Geographical Availability', placeholder: 'Select geographical availability...', desc: 'Locations where the Resource is offered.'})
  .set('languageAvailabilitiesDesc', {mandatory: true, label: 'Language Availability', placeholder: 'Select language availability...', desc: 'Languages of the (user interface of the) Resource.'})
// Location Information //
  .set('resourceGeographicLocationsDesc', {mandatory: false, label: 'Geographic Location', placeholder: 'Select geographic locations...', desc: 'List of geographic locations where data, samples, etc. are stored and processed.'})
// Contact Information --> //
// Main Contact/Service Owner
  .set('mainContactFirstNameDesc', {mandatory: true,  label: 'First Name ', placeholder: 'Write first name...', desc: 'First Name of the Resource\'s main contact person/Resource manager.'})
  .set('mainContactLastNameDesc', {mandatory: true,  label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Resource\'s main contact person/Resource manager.'})
  .set('mainContactEmailDesc', {mandatory: true,  label: 'Email', placeholder: 'Write email...', desc: 'Email of the Resource\'s main contact person/Resource manager.'})
  .set('mainContactPhoneDesc', {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Telephone of the Resource\'s main contact person/Resource manager.'})
  .set('mainContactPositionDesc', {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Resource\'s main contact person/Resource manager.'})
  .set('mainContactOrganisationDesc', {mandatory: false, label: 'Organisation', placeholder: 'Write organisation...', desc: 'The organisation to which the Resource\'s main contact person/Resource manager is affiliated.'})
// Public Contact //
  .set('publicContactFirstNameDesc', {mandatory: false, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Resource\'s contact person to be displayed publicly at the Portal.'})
  .set('publicContactLastNameDesc', {mandatory: false, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Resource\'s contact person to be displayed publicly at the Portal.'})
  .set('publicContactEmailDesc', {mandatory: true,  label: 'Email', placeholder: 'Write email...', desc: 'Email of the Resource\'s contact person or a generic email of the Provider to be displayed publicly at the Portal.'})
  .set('publicContactPhoneDesc', {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Telephone of the Resource\'s contact person to be displayed publicly at the Portal.'})
  .set('publicContactPositionDesc', {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Resource\'s contact person to be displayed publicly at the Portal.'})
  .set('publicContactOrganisationDesc', {mandatory: false, label: 'Organisation', placeholder: 'Write organisation...', desc: 'The organisation to which the Resource\'s public contact person is affiliated.'})
// Other
  .set('helpdeskEmailDesc', {mandatory: true,  label: 'Helpdesk Email', placeholder: 'Write email...', desc: 'The email to ask more information from the Provider about the Resource.'})
  .set('securityContactEmailDesc', {mandatory: true,  label: 'Security Contact Email', placeholder: 'Write email...', desc: 'The email to contact the Provider for critical security issues about the Resource.'})
// <-- Contact Information //
// Maturity Information //
  .set('technologyReadinessLevelDesc', {mandatory: true,  label: 'Technology Readiness Level', placeholder: 'Select technology readiness level...', desc: 'The Technology Readiness Level of the Resource.'})
  .set('phaseDesc', {mandatory: false, label: 'Life Cycle Status', placeholder: 'Write life cycle status...', desc: 'Status of the Resource life-cycle.'})
  .set('certificationsDesc', {mandatory: false, label: 'Certifications', placeholder: 'Write certifications...', desc: 'List of certifications obtained for the Resource (including the certification body or URL if available).'})
  .set('standardsDesc', {mandatory: false, label: 'Standards', placeholder: 'Write standards...', desc: 'List of standards supported by the Resource.'})
  .set('openSourceTechnologiesDesc', {mandatory: false, label: 'Open Source Technologies', placeholder: 'Write open source technologies...', desc: 'List of open source technologies supported by the Resource.'})
  .set('versionDesc', {mandatory: false, label: 'Version', placeholder: 'Write version...', desc: 'Version of the Resource that is in force.'})
  .set('lastUpdateDesc', {mandatory: false, label: 'Last Update', placeholder: 'Write last update...', desc: 'Date of the latest update of the Resource.'})
  .set('changeLogDesc', {mandatory: false, label: 'Change Log', placeholder: 'Write change log...', desc: 'Summary of the Resource features updated from the previous version.'})
// Dependencies Information //
  .set('requiredServicesDesc', {mandatory: false, label: 'Required Resources', placeholder: 'Select required resources...', desc: 'List of other Resources required to use this Resource.'})
  .set('relatedServicesDesc', {mandatory: false, label: 'Related Resources', placeholder: 'Select related resources...', desc: 'List of other Resources that are commonly used with this Resource.'})
  .set('relatedPlatformsDesc', {mandatory: false, label: 'Related Platforms', placeholder: 'Write related platform...', desc: 'List of suites or thematic platforms in which the Resource is engaged or Providers (Provider groups) contributing to this Resource.'})
  .set('resourceCatalogueIdDesc', {mandatory: false, label: 'Catalogue', placeholder: 'Select catalogue...', desc: 'The ID of the Catalogue this Resource is originally registered at.'})
// Attribution Information //
  .set('fundingBodyDesc', {mandatory: false, label: 'Funding Body', placeholder: 'Select funding body...', desc: 'Name of the funding body that supported the development and/or operation of the Resource.'})
  .set('fundingProgramDesc', {mandatory: false, label: 'Funding Program', placeholder: 'Select funding program...', desc: 'Name of the funding program that supported the development and/or operation of the Resource.'})
  .set('grantProjectNameDesc', {mandatory: false, label: 'Grant/Project Name', placeholder: 'Write grant/project name...', desc: 'Name of the project that supported the development and/or operation of the Resource.'})
// Management Information //
  .set('helpdeskPageDesc', {mandatory: false, label: 'Helpdesk Page', placeholder: 'helpdesk page URL', desc: 'The URL to a webpage to ask more information from the Provider about this Resource.'})
  .set('userManualDesc', {mandatory: false, label: 'User Manual', placeholder: 'user manual URL', desc: 'Link to the Resource user manual and documentation.'})
  .set('termsOfUseDesc', {mandatory: false, label: 'Terms Of Use', placeholder: 'terms of use URL', desc: 'Webpage describing the rules, Resource conditions and usage policy which one must agree to abide by in order to use the Resource.'})
  .set('privacyPolicyDesc', {mandatory: false, label: 'Privacy Policy', placeholder: 'privacy policy URL', desc: 'Link to the privacy policy applicable to the Resource.'})
  .set('accessPolicyDesc', {mandatory: false, label: 'Access Policy', placeholder: 'access policy URL', desc: 'Information about the access policies that apply.'})
  .set('serviceLevelDesc', {mandatory: false, label: 'Resource Level', placeholder: 'service level URL', desc: 'Webpage with the information about the levels of performance of the Resource that a Provider is expected to deliver.'})
  .set('trainingInformationDesc', {mandatory: false, label: 'Training Information', placeholder: 'training information URL', desc: 'Webpage to training information on the Resource.'})
  .set('statusMonitoringDesc', {mandatory: false, label: 'Status Monitoring', placeholder: 'status monitoring URL', desc: 'Webpage with monitoring information about the Resource.'})
  .set('maintenanceDesc', {mandatory: false, label: 'Maintenance', placeholder: 'maintenance URL', desc: 'Webpage with information about planned maintenance windows for the Resource.'})
// Access and Order Information //
  .set('orderTypeDesc', {mandatory: true,  label: 'Order Type', placeholder: 'Select order type...', desc: 'Information on the ordering process type.'})
  .set('orderDesc', {mandatory: false, label: 'Order', placeholder: 'order URL', desc: 'Webpage through which an order for the Resource can be placed.'})
// Financial Information //
  .set('paymentModelDesc', {mandatory: false, label: 'Payment Model', placeholder: 'payment model URL', desc: 'Webpage with the supported payment models and restrictions that apply to the Resource.'})
  .set('pricingDesc', {mandatory: false, label: 'Pricing', placeholder: 'pricing URL', desc: 'Webpage with the information on the price scheme for the Resource in case the customer is charged for.'})
;

export const catalogueDescMap = new Map()
  // Basic Information //
  .set('fullNameDesc', {mandatory: true, label: 'Name', placeholder: 'Write full name...', desc: 'Full Name of the (Multi-Provider Regional or Thematic) Catalogue.'})
  .set('abbreviationDesc', {mandatory: true, label: 'Abbreviation', placeholder: 'Write abbreviation...', desc: 'An abbreviation of the (Multi-Provider Regional or Thematic) Catalogue Name.'})
  .set('websiteDesc', {mandatory: true, label: 'Website', placeholder: 'webpage URL', desc: 'Website with information about the (Multi-Provider Regional or Thematic) Catalogue.'})
  .set('legalEntityDesc', {mandatory: true, label: 'Legal Entity', desc: 'Is the Catalogue a Legal Entity?'})
  .set('legalStatusDesc', {mandatory: false, label: 'Legal Status', placeholder: 'Write legal status...', desc: 'Legal status of the (Multi-Provider Regional or Thematic ) Catalogue Owner. The legal status is usually noted in the registration act/statutes. For independent legal entities (1) - legal status of the Catalogue. For embedded Catalogues (2) - legal status of the hosting legal entity. It is also possible to select Not a legal entity.'})
  .set('hostingLegalEntityDesc', {mandatory: false, label: 'Hosting Legal Entity', placeholder: 'Write hosting legal entity...', desc: 'Name of the organisation legally hosting (housing) the Catalogue or its coordinating centre.'})
  // Marketing Information //
  .set('descriptionDesc', {mandatory: true, label: 'Description', placeholder: 'Write a description...', desc: 'A high-level description of the Catalogue in fairly non-technical terms, with the vision, mission, objectives, background, experience.'})
  .set('logoDesc', {mandatory: true, label: 'Logo', placeholder: 'logo URL', desc: 'Link to the logo/visual identity of the Catalogue. Go to the Catalogue\'s website --> Right Click on the Catalogue\'s logo on the website --> Select "Copy Image Link" --> Paste it in the field below.'})
  .set('multimediaURLDesc', {mandatory: false, label: 'Multimedia URL', placeholder: 'Write link to multimedia...', desc: 'Links to video, slideshow, photos, screenshots with details of the Catalogue.'})
  .set('multimediaNameDesc', {mandatory: false, label: 'Multimedia Name', placeholder: 'Write multimedia name...', desc: 'Short description of the Multimedia content.'})
  // Classification Information //
  .set('scientificDomainDesc', {mandatory: false, label: 'Scientific Domain', placeholder: 'Select scientific domain...', desc: 'A named group of Catalogues that offer access to the same type of resources or capabilities.'})
  .set('scientificSubdomainsDesc', {mandatory: false, label: 'Scientific Subdomain', placeholder: 'Select scientific subdomain after selecting scientific domain...', desc: 'A named group of Catalogues that offer access to the same type of resources or capabilities, within the defined domain.'})
  .set('tagsDesc', {mandatory: false, label: 'Tags', placeholder: 'Write tag...', desc: 'Keywords associated to the Catalogue to simplify search by relevant keywords.'})
  // Location Information //
  .set('streetNameAndNumberDesc', {mandatory: true, label: 'Street Name and Number', placeholder: 'Write street name and number...', desc: 'Street and Number of incorporation or Physical location of the Catalogue Coordinating Entity.'})
  .set('postalCodeDesc', {mandatory: true, label: 'Postal Code', placeholder: 'Write postal code...', desc: 'Postal code of incorporation or Physical location of the Catalogue Coordinating Entity.'})
  .set('cityDesc', {mandatory: true, label: 'City', placeholder: 'Write city...', desc: 'City of incorporation or Physical location of the Catalogue Coordinating Entity.'})
  .set('regionDesc', {mandatory: false, label: 'Region', placeholder: 'Write region...', desc: 'Region of incorporation or Physical location of the Catalogue Coordinating Entity.'})
  .set('countryDesc', {mandatory: true, label: 'Country', placeholder: 'Write country...', desc: 'Country of incorporation or Physical location of the Catalogue Coordinating Entity.'})
  // Contact Information --> //
  // Main Contact/Provider Manager
  .set('mainContactFirstNameDesc', {mandatory: true, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Catalogue\'s main contact person/Provider Manager.'})
  .set('mainContactLastNameDesc', {mandatory: true, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Catalogue\'s main contact person/Provider Manager.'})
  .set('mainContactEmailDesc', {mandatory: true, label: 'Email', placeholder: 'Write email...', desc: 'Email of the Catalogue\'s main contact person/Provider manager.'})
  .set('mainContactPhoneDesc', {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Phone of the Catalogue\'s main contact person/Provider manager.'})
  .set('mainContactPositionDesc', {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Catalogue\'s main contact person/Provider manager.'})
  // Public Contact
  .set('publicContactFirstNameDesc', {mandatory: false, label: 'First Name', placeholder: 'Write first name...', desc: 'First Name of the Catalogue\'s contact person to be displayed at the portal.'})
  .set('publicContactLastNameDesc', {mandatory: false, label: 'Last Name', placeholder: 'Write last name...', desc: 'Last Name of the Catalogue\'s contact person to be displayed at the portal.'})
  .set('publicContactEmailDesc', {mandatory: true, label: 'Email', placeholder: 'Write email...', desc: 'Email of the Catalogue\'s contact person to be displayed at the portal or general email to contact Catalogue.'})
  .set('publicContactPhoneDesc', {mandatory: false, label: 'Phone', placeholder: 'Write phone...', desc: 'Phone of the Catalogue\'s contact person to be displayed at the portal or general phone to contact Catalogue.'})
  .set('publicContactPositionDesc', {mandatory: false, label: 'Position', placeholder: 'Write position...', desc: 'Position of the Catalogue\'s contact person to be displayed at the portal.'})
  // <-- Contact Information //
  // Dependencies Information //
  .set('participatingCountriesDesc', {mandatory: false, label: 'Participating Countries', placeholder: 'Select participating countries...', desc: 'Catalogues that are funded/supported by several countries should list here all supporting countries (including the Coordinating country).'})
  .set('affiliationDesc', {mandatory: false, label: 'Affiliations', placeholder: 'Write affiliations...', desc: 'Catalogues that are members or affiliated or associated with other organisations should list those organisations here.'})
  .set('networksDesc', {mandatory: false, label: 'Networks', placeholder: 'Select network...', desc: 'Catalogues that are members of networks should list those networks here.'})
;

export const datasourceDescMap = new Map()
// Data Source Policies //
  .set('submissionPolicyURLDesc', {mandatory: false, label: 'Submission Policy URL', placeholder: '', desc: 'This policy provides a comprehensive framework for the contribution of research products. Criteria for submitting content to the repository as well as product preparation guidelines can be stated. Concepts for quality assurance may be provided.'})
  .set('preservationPolicyURLDesc', {mandatory: false, label: 'Preservation Policy URL', placeholder: '', desc: 'This policy provides a comprehensive framework for the long-term preservation of the research products. Principles aims and responsibilities must be clarified. An important aspect is the description of preservation concepts to ensure the technical and conceptual utility of the content.'})
  .set('versionControlDesc', {mandatory: false, label: 'Version Control', placeholder: '', desc: 'If data versioning is supported: the data source explicitly allows the deposition of different versions of the same object.'})
  .set('persistentIdentitySystemsDesc', {mandatory: false, label: 'Persistent Identity Systems', placeholder: '', desc: 'The persistent identifier systems that are used by the Data Source to identify the EntityType it supports.'})
  .set('persistentIdentityEntityTypeDesc', {mandatory: true, label: 'Persistent Identity EntityType', placeholder: '', desc: 'Specify the EntityType to which the persistent identifier is referring to.'})
  .set('persistentIdentityEntityTypeSchemeDesc', {mandatory: true, label: 'Persistent Identity EntityType Scheme', placeholder: '', desc: 'Specify the list of persistent identifier schemes used to refer to EntityTypes.'})
// Data Source Content //
  .set('jurisdictionDesc', {mandatory: true, label: 'Jurisdiction', placeholder: '', desc: 'The property defines the jurisdiction of the users of the data source, based on the vocabulary for this property.'})
  .set('dataSourceClassificationDesc', {mandatory: true, label: 'Data Source Classification', placeholder: '', desc: 'The specific type of the data source based on the vocabulary defined for this property.'})
  .set('researchEntityTypesDesc', {mandatory: true, label: 'Research Entity Types', placeholder: '', desc: 'The types of OpenAIRE entities managed by the data source, based on the vocabulary for this property.'})
  .set('thematicDesc', {mandatory: true, label: 'Thematic', placeholder: '', desc: 'Boolean value specifying if the data source is dedicated to a given discipline or is instead discipline agnostic.'})
// Research Product Policies //
  .set('researchProductLicensingDesc', {mandatory: false, label: 'Research Product Licensing', placeholder: '', desc: 'Licenses under which the research products contained within the data sources can be made available. Repositories can allow a license to be defined for each research product, while for scientific databases the database is typically provided under a single license.'})
  .set('researchProductLicenseNameDesc', {mandatory: true, label: 'Research Product License Name', placeholder: '', desc: ''})
  .set('researchProductLicenseURLDesc', {mandatory: true, label: 'Research Product License URL', placeholder: '', desc: ''})
  .set('researchProductAccessPolicyDesc', {mandatory: false, label: 'Research Product Access Policy', placeholder: '', desc: ''})
// Research Product Metadata //
  .set('researchProductMetadataLicensingDesc', {mandatory: false, label: 'Research Product Metadata Licensing', placeholder: '', desc: 'Metadata Policy for information describing items in the repository: Access and re-use of metadata'})
  .set('researchProductMetadataLicenseNameDesc', {mandatory: true, label: 'Research Product Metadata License Name', placeholder: '', desc: ''})
  .set('researchProductMetadataLicenseURLDesc', {mandatory: true, label: 'Research Product Metadata License URL', placeholder: '', desc: ''})
  .set('researchProductMetadataAccessPolicyDesc', {mandatory: false, label: 'Research Product Metadata Access Policy', placeholder: '', desc: ''})
;

export const monitoringDescMap = new Map()
  .set('monitoredByDesc', {mandatory: true, label: 'Monitored By', placeholder: '', desc: 'Who is responsible for the monitoring of this Service'})
  .set('serviceTypeDesc', {mandatory: true, label: 'Service Type', placeholder: '', desc: 'Service type is a unique identifier of technology used to provide a given service endpoint. For example, eu.eosc.generic.http represents generic service speaking HTTP protocol.'})
  .set('endpointDesc', {mandatory: true, label: 'Endpoint', placeholder: '', desc: 'URL of the service endpoint that can be used to verify service health.'})
  .set('probeDesc', {mandatory: false, label: 'Probe', placeholder: '', desc: 'The URL to the repository hosting the code'})
  .set('metricDesc', {mandatory: false, label: 'Metric', placeholder: '', desc: 'The metric URL'})
;

export const helpdeskDescMap = new Map()
  .set('servicesDesc', {mandatory: false, label: 'Service', placeholder: '', desc: 'Name of the resource or service to be shown in the helpdesk fields'})
  .set('supportGroupsDesc', {mandatory: true, label: 'Group', placeholder: '', desc: 'Support group to be created in the helpdesk for the provider'})
  .set('organisationDesc', {mandatory: false, label: 'Organisation', placeholder: '', desc: 'Name of organisation'})
  .set('emailsDesc', {mandatory: false, label: 'E-mail', placeholder: '', desc: 'E-mail associated with support group'})
  .set('emailForTicketDesc', {mandatory: true, label: 'E-mail', placeholder: '', desc: 'E-mail for direct assignment of the tickets, bypassing the L1 support'})
  .set('agentsDesc', {mandatory: true, label: 'Agent', placeholder: '', desc: 'Person involved in ticket management'})
  .set('signaturesDesc', {mandatory: false, label: 'Signature', placeholder: '', desc: 'Automatic signature to be used in the answers to the tickets'})
  .set('webformDesc', {mandatory: false, label: 'Webform', placeholder: '', desc: 'Webform required to generate ticket directly on webpage'})
  .set('ticketPreservationDesc', {mandatory: false, label: 'Ticket preservation', placeholder: '', desc: 'Should the tickets be stored in the helpdesk system in dedicated group'})
;
