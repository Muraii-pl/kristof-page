import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { font } from '../helpers/fontHelper';
import { ITableHeader } from '../../../dashboard/core/interfaces/ITableHeader';

@Injectable({
  providedIn: 'root'
})
export class ToPDFService {

  constructor() {
  }

  public downloadPDF(tableHeader: ITableHeader[], tableData: any[]): void {
    const doc = new jsPDF('l', 'px', 'a4');

    doc.addFileToVFS("Roboto.ttf", font);
    doc.addFont("Roboto.ttf", "MyFont", "normal");
    doc.setFont('MyFont', 'normal', 'normal')

    doc.text('Nowy Tekst zł', 20, 20)

    autoTable(doc, {
      head: [this.getTableHeaders(tableHeader)],
      body: this.getTableData(tableData, tableHeader),
      theme: 'plain',
      headStyles: {
        fillColor: [240, 240, 240]
      },
      alternateRowStyles: {
        fillColor: [255, 255, 255],
      },
      styles: {
        font: 'MyFont',
        fontStyle: 'normal',
        fontSize: 14,
        fillColor: [240, 240, 240]
      },
    })

    let finalY = (doc as any).lastAutoTable.finalY
    let width = doc.internal.pageSize.getWidth()


    if (tableData.length && tableData[0].hasOwnProperty('price')) {
      let count: number = this.countPrice(tableData)
      doc.text(`Podsumowanie: ${ count } zł`, width - 175, finalY + 20, {
        align: 'center',
        maxWidth: 200
      });
    }

    doc.save('test.pdf')
  }

  private getTableHeaders(tableHeaderObject: ITableHeader[]): string[] {
    return tableHeaderObject.map(header => header.name);
  }

  private getTableData(tableDataObject: any[], tableHeaders: ITableHeader[]): string[][] {
    return tableDataObject.map(data => {

      return tableHeaders.map(headers => data[headers.value])
    })
  }

  private countPrice(tableDataObject: any[]): number {
    return tableDataObject.map(item => item['price']).reduce((previousValue, currentValue) => {
      return previousValue + currentValue
    }, 0)
  }

}
