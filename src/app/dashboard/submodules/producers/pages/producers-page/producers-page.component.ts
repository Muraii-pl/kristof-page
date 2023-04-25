import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { INameId, ITableHeader } from '../../../../core/interfaces';
import { ProducersService } from '../../../../core/services';

@Component({
  selector: 'app-producers-page',
  templateUrl: './producers-page.component.html',
  styleUrls: ['./producers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProducersPageComponent extends GenericBasePage<INameId> implements OnInit {

  public override tableHeader: ITableHeader[] = [
    {
      name: 'Producent',
      value: 'name'
    }
  ]

  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override pageService: ProducersService
  ) {
    super(cdr, pageService);
  }
  public override ngOnInit(): void {
    super.ngOnInit();
  }

}
