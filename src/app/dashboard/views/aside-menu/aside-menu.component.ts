import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IMenuItem } from '../../core/interfaces';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideMenuComponent implements OnInit {

  public menuItemList:IMenuItem[] = [
    {
      name: 'Zamówienia',
      url: 'zamowienia'
    },
    {
      name: 'Klienci',
      url: 'klienci'
    },
    {
      name: 'Urządzenia',
      url: 'urzadzenia'
    },
    {
      name: 'Producenci',
      url: 'producenci'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
