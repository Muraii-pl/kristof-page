import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GenericBasePage } from '../../../../pages/generic-base-page/generic-base-page';
import { ITableHeader, IClient } from '../../../../core/interfaces/';
import { ClientsService } from '../../../../core/services/';


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

  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override pageService: ClientsService
  ) {
    super(cdr, pageService);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

}
