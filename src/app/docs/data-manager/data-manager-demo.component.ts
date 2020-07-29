import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import {
  SkyUIConfigService
} from '@skyux/core';

import {
  SkyDataManagerFiltersModalDemoComponent
} from './data-filter-modal.component';

import {
  SkyDataManagerService,
  SkyDataManagerState
} from '../../public/public_api';

@Component({
  selector: 'data-manager-demo',
  templateUrl: './data-manager-demo.component.html',
  providers: [SkyDataManagerService, {
    provide: SkyUIConfigService
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataManagerDemoComponent implements OnInit {

  public dataManagerConfig = {
    filterModalComponent: SkyDataManagerFiltersModalDemoComponent,
    sortOptions: [
      {
        id: 'az',
        label: 'Name (A - Z)',
        descending: false,
        propertyName: 'name'
      },
      {
        id: 'za',
        label: 'Name (Z - A)',
        descending: true,
        propertyName: 'name'
      }
    ]
  };

  public defaultDataState = new SkyDataManagerState({
    filterData: {
      filtersApplied: true,
      filters: {
        hideOrange: true
      }
    },
    views: [
      {
        viewId: 'gridView',
        displayedColumnIds: ['selected', 'name', 'description']
      }
    ]
  });

  public dataState: SkyDataManagerState;

  public get dataStateString(): string {
    const tab = `\u00A0\u00A0`;
    const doubleTab = `${tab}${tab}`;

    const activeSortOption = this.dataState.activeSortOption && `{
      ${doubleTab}descending: ${this.dataState.activeSortOption.descending},
      ${doubleTab}id: ${this.dataState.activeSortOption.id},
      ${doubleTab}label: ${this.dataState.activeSortOption.label},
      ${doubleTab}propertyName: ${this.dataState.activeSortOption.propertyName}
      ${tab}}`;

    const filterData = this.dataState.filterData && `{
      ${doubleTab}fruitType: ${this.dataState.filterData.filters.type},
      ${doubleTab}hideOrange: ${this.dataState.filterData.filters.hideOrange}
      ${tab}}`;

    return `
    {
      ${tab}activeSortOption: ${activeSortOption},
      ${tab}additionalData: ${this.dataState.additionalData},
      ${tab}filterData: ${filterData},
      ${tab}onlyShowSelected: ${this.dataState.onlyShowSelected},
      ${tab}searchText: ${this.dataState.searchText},
      ${tab}selectedIds: ${this.dataState.selectedIds && `[${this.dataState.selectedIds.join(', ')}]`}
    }
    `;
  }

  public items: any[] = [
    {
      id: '1',
      name: 'Orange',
      description: 'A round, orange fruit. A great source of vitamin C.',
      type: 'citrus',
      color: 'orange'
    },
    {
      id: '2',
      name: 'Mango',
      description: 'Very difficult to peel. Delicious in smoothies, but don\'t eat the skin.',
      type: 'other',
      color: 'orange'
    },
    {
      id: '3',
      name: 'Lime',
      description: 'A sour, green fruit used in many drinks. It grows on trees.',
      type: 'citrus',
      color: 'green'
    },
    {
      id: '4',
      name: 'Strawberry',
      description: 'A red fruit that goes well with shortcake. It is the name of both the fruit and the plant!',
      type: 'berry',
      color: 'red'
    },
    {
      id: '5',
      name: 'Blueberry',
      description: 'A small, blue fruit often found in muffins. When not ripe, they can be sour.',
      type: 'berry',
      color: 'blue'
    },
    {
      id: '6',
      name: 'Banana',
      description: 'A yellow fruit with a thick skin. Monkeys love them, and in some countries it is customary to eat the peel.',
      type: 'other',
      color: 'yellow'
    }
  ];

  public activeViewId = 'repeaterView';

  constructor(
    private dataManagerService: SkyDataManagerService
  ) {
    this.dataManagerService.getDataStateUpdates('dataManager').subscribe(state => this.dataState = state);
    this.dataManagerService.getActiveViewIdUpdates().subscribe(activeViewId => this.activeViewId = activeViewId);
  }

  public ngOnInit(): void {
    this.dataManagerService.initDataManager(
      {
        activeViewId: this.activeViewId,
        dataManagerConfig: this.dataManagerConfig,
        defaultDataState: this.defaultDataState
      }
    );
  }

  public searchSo() {
    this.dataState.searchText = 'so';
    this.dataManagerService.updateDataState(this.dataState, 'dataManager');
  }
}
