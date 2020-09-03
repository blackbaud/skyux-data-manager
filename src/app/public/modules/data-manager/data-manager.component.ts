import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
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

  @ViewChild('dataManager', {read: ElementRef})
  public dataManagerDiv: ElementRef;

  public get currentViewkeeperClasses(): string[] {
    const dataManagerClasses = ['.sky-data-manager-toolbar'];
    let allClasses = dataManagerClasses;

    if (this._currentViewkeeperClasses) {
      allClasses = dataManagerClasses.concat(this._currentViewkeeperClasses);
    }

    return allClasses;
  }

  public set currentViewkeeperClasses(value: string[]) {
    this._currentViewkeeperClasses = value;
    this.changeDetection.markForCheck();
  }

  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  public set isInitialized(value: boolean) {
    this._isInitialized = value;
    this.changeDetection.markForCheck();
  }

  private _isInitialized = false;
  private _currentViewkeeperClasses: string[];
  private activeViewId: string;
  private allViewkeeperClasses: {[viewId: string]: string[]} = {};
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

    this.dataManagerService.viewkeeperClasses
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(classes => {
        this.allViewkeeperClasses = classes;
        this.currentViewkeeperClasses = classes[this.activeViewId];
      });

    this.dataManagerService
      .getActiveViewIdUpdates()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(activeViewId => {
        this.activeViewId = activeViewId;
        console.log('hello');
        if (this.dataManagerDiv && this.dataManagerDiv.nativeElement) {
          // console.log(this.dataManagerDiv.nativeElement.scrollTop);
          // console.log(this.dataManagerDiv.nativeElement.offsetTop);
          // window.scrollTo(0, 0);
          // let test = this.findScrollableParent(this.dataManagerDiv.nativeElement);
          // console.log('THE PARENT');
          // console.log(test);
          // test.scrollTo(0, this.dataManagerDiv.nativeElement.offsetTop);

          setTimeout(() => {
            this.dataManagerDiv.nativeElement.scrollTo(0, 50);
          }, 1000);
        }
        this.currentViewkeeperClasses = this.allViewkeeperClasses[this.activeViewId];
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  // private findScrollableParent(element: HTMLElement): HTMLElement {
  //   if (getComputedStyle(element).overflowY === 'auto') {
  //       return element;
  //   } else {
  //       return this.findScrollableParent(element.parentElement);
  //   }
  // }
}
