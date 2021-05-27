import {
  SkyDataViewStateOptions
} from './data-view-state-options';

export class SkyDataViewState {
  public availableColumnIds: string[] = [];
  public displayedColumnIds: string[] = [];
  public viewId: string;
  public additionalData: any;

  constructor(data: SkyDataViewStateOptions) {
    this.viewId = data.viewId;
    this.availableColumnIds = data.availableColumnIds || [];
    this.displayedColumnIds = data.displayedColumnIds || [];
    this.additionalData = data.additionalData;
  }

  public getViewStateOptions(): SkyDataViewStateOptions {
    return {
      viewId: this.viewId,
      availableColumnIds: this.availableColumnIds,
      displayedColumnIds: this.displayedColumnIds,
      additionalData: this.additionalData
    };
  }
}
