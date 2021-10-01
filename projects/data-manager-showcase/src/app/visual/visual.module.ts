import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyDataManagerModule } from '@skyux/data-manager';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyModalModule } from '@skyux/modals';

import { SkyDataManagerFiltersModalVisualComponent } from './data-manager/data-filter-modal.component';
import { DataManagerVisualComponent } from './data-manager/data-manager-visual.component';
import { DataViewCardsComponent } from './data-manager/data-view-cards.component';
import { DataViewLegacyGridComponent } from './data-manager/data-view-legacy-grid.component';
import { DataViewRepeaterComponent } from './data-manager/data-view-repeater.component';
import { VisualComponent } from './visual.component';

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
    SkyE2eThemeSelectorModule,
    SkyModalModule,
    SkyRepeaterModule,
    RouterModule
  ]
})
export class VisualModule { }
