import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SkyCheckboxModule } from '@skyux/forms';
import { SkyDocsToolsModule } from '@skyux/docs-tools';
import { SkyGridModule } from '@skyux/grids';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyModalModule } from '@skyux/modals';

import { VisualComponent } from './visual.component';
import { SkyDataManagerModule } from 'projects/data-manager/src/public-api';
import { SkyDataManagerFiltersModalVisualComponent } from './data-manager/data-filter-modal.component';
import { DataManagerVisualComponent } from './data-manager/data-manager-visual.component';
import { DataViewCardsComponent } from './data-manager/data-view-cards.component';
import { DataViewLegacyGridComponent } from './data-manager/data-view-legacy-grid.component';
import { DataViewRepeaterComponent } from './data-manager/data-view-repeater.component';

@NgModule({
  declarations: [
    SkyDataManagerFiltersModalVisualComponent,
    DataManagerVisualComponent,
    DataViewCardsComponent,
    DataViewLegacyGridComponent,
    DataViewRepeaterComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyCheckboxModule,
    SkyDataManagerModule,
    SkyDocsToolsModule,
    SkyGridModule,
    SkyModalModule,
    SkyRepeaterModule,
    RouterModule
  ]
})
export class VisualModule { }
