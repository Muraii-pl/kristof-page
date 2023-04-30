import { Injectable } from '@angular/core';
import { BaseModalComponent } from '../../ui/base-modal/base-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _modals: BaseModalComponent[] = [];
  constructor() { }

  public generateModal(modal: BaseModalComponent): void {
    console.log('test generete')
    this._modals.push(modal)
    console.log(this._modals)
  }

  public open(modalName: string): void {
   const modal: BaseModalComponent | undefined = this._modals
   .find((modal: BaseModalComponent): boolean => modal.modalName === modalName);

   console.log(modal);
    console.log(this._modals)

   modal?.isOpen$.next(true);
  }

  public close(): void {
    const modal: BaseModalComponent | undefined = this._modals.pop();
    modal?.isOpen$.next(false);
  }
}
