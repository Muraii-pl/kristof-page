import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { INameId, ITableHeader } from '../../../../core/interfaces/';
import { DevicesService } from '../../../../core/services';

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesPageComponent extends GenericBasePage<INameId> implements OnInit {

  public override tableHeader: ITableHeader[] = [
    {
      name: 'Urządzenie',
      value: 'name'
    }
  ]

  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override pageService: DevicesService
  ) {
    super(cdr, pageService);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

}
