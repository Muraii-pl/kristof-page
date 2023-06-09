import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { INameId, ITableHeader } from '../../../../core/interfaces';
import { ProducersService } from '../../../../core/services';
import { ModalService } from '../../../../../common/core/services/ModalService';

@Component({
  selector: 'app-producers-page',
  templateUrl: './producers-page.component.html',
  styleUrls: [ './producers-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProducersPageComponent extends GenericBasePage<INameId> implements OnInit {

  public override tableHeader: ITableHeader[] = [
    {
      name: 'Producent',
      value: 'name'
    }
  ];

  public override readonly editModalName: string = 'editClientModal';
  public override readonly newModalName: string = 'newClientModal';
  public override readonly confirmModalName: string = 'confirmationModal';

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly pageService: ProducersService,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, pageService, modalService);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

}
