import {
  NgModule
} from '@angular/core';

import {
  AgGridModule
} from 'ag-grid-angular';

import {
  SkyAgGridModule
} from '@skyux/ag-grid';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyAlertModule,
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyBackToTopModule,
  SkyCardModule,
  SkyFluidGridModule,
  SkyInlineDeleteModule
} from '@skyux/layout';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyFilterModule,
  SkyInfiniteScrollModule,
  SkyPagingModule,
  SkyRepeaterModule,
  SkySortModule
} from '@skyux/lists';

import {
  SkyDataManagerFiltersModalDemoComponent
} from './docs/data-manager/data-filter-modal.component';

import {
  SkyDataManagerForRootCompatModule
} from './public/modules/shared/data-manager-for-root-compat.module';

import {
  SkyDataManagerModule
} from './public/public_api';

import {
  SkyDataManagerFiltersModalVisualComponent
} from './visual/data-manager/data-filter-modal.component';

@NgModule({
  imports: [
    SkyDataManagerForRootCompatModule
  ],
  exports: [
    AgGridModule,
    SkyAgGridModule,
    SkyAlertModule,
    SkyAppLinkModule,
    SkyCardModule,
    SkyCheckboxModule,
    SkyDataManagerModule,
    SkyBackToTopModule,
    SkyDocsToolsModule,
    SkyDropdownModule,
    SkyFilterModule,
    SkyFluidGridModule,
    SkyIconModule,
    SkyInfiniteScrollModule,
    SkyInlineDeleteModule,
    SkyModalModule,
    SkyPagingModule,
    SkyRepeaterModule,
    SkySortModule,
    SkyToolbarModule
  ],
  entryComponents: [
    SkyDataManagerFiltersModalDemoComponent,
    SkyDataManagerFiltersModalVisualComponent
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-data-manager',
        packageName: '@skyux/data-manager'
      }
    }
  ]
})
export class AppExtrasModule { }
