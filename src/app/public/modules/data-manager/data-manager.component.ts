import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

import {
  SkyDataManagerService
} from './data-manager.service';

/**
 * The top-level data manager component. Provide `SkyDataManagerService` at this level.
 */
@Component({
  selector: 'sky-data-manager',
  templateUrl: './data-manager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDataManagerComponent implements OnDestroy, OnInit {

  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  public set isInitialized(value: boolean) {
    this._isInitialized = value;
    this.changeDetection.markForCheck();
  }

  private _isInitialized = false;
  private ngUnsubscribe = new Subject();
  private sourceId = 'dataManagerComponent';

  constructor(
    private changeDetection: ChangeDetectorRef,
    private dataManagerService: SkyDataManagerService
  ) { }

  public ngOnInit(): void {
    this.dataManagerService
      .getDataStateUpdates(this.sourceId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.isInitialized = true);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
