import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { ITableHeader, IClient } from '../../../../core/interfaces/';
import { ClientsService } from '../../../../core/services/';
import { ModalService } from '../../../../../common/core/services/ModalService';


@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsPageComponent extends GenericBasePage<IClient> implements OnInit {

  public override tableHeader: ITableHeader[] = [
    {
      name: 'Nazwa',
      value: 'name'
    },
    {
      name: 'Imię',
      value: 'firstName'
    },
    {
      name: 'Nazwisko',
      value: 'lastName'
    },
    {
      name: 'E-mail',
      value: 'email'
    },
    {
      name: 'Nr. Telefonu',
      value: 'phoneNumber'
    },
  ]


  public override readonly editModalName: string = 'editClientModal'
  public override readonly newModalName: string = 'newClientModal'
  public override readonly confirmModalName: string = 'confirmationModal'

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly pageService: ClientsService,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, pageService, modalService)
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

}
