import {
  SkyDataManagerColumnPickerOption
} from '../models/data-manager-column-picker-option';

import {
  SkyDataManagerColumnPickerSortStrategy
} from '../models/data-manager-column-picker-sort-strategy';

export class SkyDataManagerColumnPickerContext {
  public columnOptions: SkyDataManagerColumnPickerOption[];
  public columnPickerSortStrategy?: SkyDataManagerColumnPickerSortStrategy =
    SkyDataManagerColumnPickerSortStrategy.SelectedThenAlphabetical;
  public displayedColumnIds: string[];
}
