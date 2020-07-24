import {
  NgModule
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  SkyAgGridModule
} from '@skyux/ag-grid';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyDataManagerModule
} from '@skyux/data-manager';

import {
  SkyCardModule,
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyRepeaterModule
} from '@skyux/lists';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  AgGridModule
} from 'ag-grid-angular';

import {
  DataManagerDemoComponent
} from './data-manager-demo.component';

import {
  DataManagerFiltersModalDemoComponent
} from './data-filter-modal.component';
import { DataViewCardsDemoComponent } from './data-view-cards.component';
import { DataViewGridDemoComponent } from './data-view-grid.component';
import { DataViewRepeaterDemoComponent } from './data-view-repeater.component';

@NgModule({
  declarations: [
    DataManagerDemoComponent,
    DataManagerFiltersModalDemoComponent,
    DataViewCardsDemoComponent,
    DataViewGridDemoComponent,
    DataViewRepeaterDemoComponent
  ],
  imports: [
    FormsModule,
    AgGridModule,
    SkyAgGridModule,
    SkyCardModule,
    SkyCheckboxModule,
    SkyDataManagerModule,
    SkyModalModule,
    SkyRepeaterModule,
    SkyToolbarModule
  ],
  exports: [
    DataManagerDemoComponent
  ],
  entryComponents: [
    DataManagerDemoComponent,
    DataManagerFiltersModalDemoComponent
  ]
})
export class DataManagerDemoModule { }
