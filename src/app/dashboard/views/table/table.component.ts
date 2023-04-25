import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ITableHeader } from '../../core/interfaces/ITableHeader';
import { ToPDFService } from '../../../common/core/services/toPDFService';

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
    this._tableData = tableData
  }

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
    this._toPDFService.downloadPDF(this.tableHeader, this.tableDate)
  }
}
