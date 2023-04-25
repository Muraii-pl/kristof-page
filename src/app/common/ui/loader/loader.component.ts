import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../../core/services/LoaderService';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
    private readonly _loaderService: LoaderService,
    private readonly _cdr: ChangeDetectorRef
  ) {
    this._loaderService.getLoaderStatus().subscribe((res:boolean) => {
      this.isLoading = res;
      this._cdr.detectChanges();
    })
  }

  public ngOnInit(): void {
  }

}
