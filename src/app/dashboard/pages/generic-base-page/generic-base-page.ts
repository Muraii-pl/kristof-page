import { ChangeDetectorRef, Directive, OnDestroy, OnInit } from '@angular/core';
import { ITableAction, ITableHeader } from '../../core/interfaces/';
import { DashboardPagesService } from '../../shared/interfaces';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../common/core/services/ModalService';
import { TableActionsEnum } from '../../core/enums';


@Directive()
export class GenericBasePage<T> implements OnInit, OnDestroy {

  public tableHeader: ITableHeader[];
  public tableData: T[];
  public subs: Subscription[] = [];
  public confirmModalName!: string;
  public editModalName!: string;
  public newModalName!: string;
  public itemId: number;


  constructor(
    protected readonly cdr: ChangeDetectorRef,
    protected readonly pageService: DashboardPagesService<T>,
    protected readonly modalService: ModalService
  ) {}

  public ngOnInit(): void {
    this.subs.push(
      this.pageService.getAll().subscribe((res: T[]) => {
        this.tableData = res;
        this.cdr.detectChanges();
      })
    )
  }

  public openModal(modalType: ITableAction) {
    switch (modalType.action) {
      case TableActionsEnum.New:
        this.modalService.open(this.newModalName);
        break
      case TableActionsEnum.Edit:
        this.itemId = modalType.id!;
        this.modalService.open(this.editModalName);
        break;
      case TableActionsEnum.Delete: {
        this.itemId = modalType.id!;
        this.modalService.open(this.confirmModalName);
      }
    }
  }

  public ngOnDestroy(): void {
    for (let i = 0; i < this.subs.length ; i++) {
      this.subs[i].unsubscribe()
    }
  }
}
