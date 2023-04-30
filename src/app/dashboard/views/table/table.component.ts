import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ITableHeader,ITableAction } from '../../core/interfaces/';
import { ToPDFService } from '../../../common/core/services/toPDFService';
import { TableActionsEnum } from '../../core/enums';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @ViewChild('tableEl', { static: false }) tableElRef: ElementRef

  @Input() set tableHeader(tableHeader: ITableHeader[]) {
    this._tableHeader = tableHeader
  }

  @Input() set tableData(tableData: unknown[]) {
    this._tableData = tableData;
  }

  @Output() tableAction: EventEmitter<ITableAction> = new EventEmitter<ITableAction>()

  public tableActionOptions = TableActionsEnum

  private _tableHeader: ITableHeader[];
  private _tableData: any[];

  constructor(
    private readonly _toPDFService: ToPDFService,
    private readonly _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  public get tableHeader(): ITableHeader[] {
    return this._tableHeader;
  }

  public get tableDate(): any[] {
    return this._tableData;
  }

  public generatePDF(): void {
    this._toPDFService.downloadPDF(this.tableHeader, this.tableDate);
  }

  protected readonly TableActionsEnum = TableActionsEnum;
}
