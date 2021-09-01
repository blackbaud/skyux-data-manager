import {
  Injectable
} from '@angular/core';

import type {
  SkyDataManagerColumnPickerComponent
} from './data-manager-column-picker.component';

@Injectable()
export abstract class SkyDataManagerColumnPickerService {
  public abstract getComponentType(): typeof SkyDataManagerColumnPickerComponent;
}
