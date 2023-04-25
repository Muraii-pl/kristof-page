import { ChangeDetectorRef, Directive, OnDestroy, OnInit } from '@angular/core';
import { ITableHeader } from '../../core/interfaces/';
import { DashboardPagesService } from '../../shared/interfaces';
import { Subscription } from 'rxjs';


@Directive()
export class GenericBasePage<T> implements OnInit, OnDestroy {

  public tableHeader: ITableHeader[];
  public tableData: T[];
  public subs: Subscription[] = [];

  constructor(
    protected readonly cdr: ChangeDetectorRef,
    protected readonly pageService: DashboardPagesService<T>
  ) {
  }

  public ngOnInit(): void {
    this.subs.push(
      this.pageService.getAll().subscribe((res: T[]) => {
        this.tableData = res;
        this.cdr.detectChanges();
      })
    )
  }

  public ngOnDestroy(): void {
    for (let i = 0; i < this.subs.length ; i++) {
      this.subs[i].unsubscribe()
    }
  }
}
