import { Injectable } from '@angular/core';
import { BaseModalComponent } from '../../ui/base-modal/base-modal.component';
import * as tty from 'tty';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _modals: BaseModalComponent[] = [];
  constructor() { }

  public generateModal(modal: BaseModalComponent): void {
    this._modals.push(modal)
    console.log(this._modals)
  }

  public destroyModal(modalName: string) {
    this._modals = this._modals.filter((modal: BaseModalComponent): boolean  => {
      const fModal: BaseModalComponent | undefined = this.getModal(modalName)
      return modal !== fModal
    })
  }

  public open(modalName: string): void {
   const modal: BaseModalComponent | undefined = this.getModal(modalName)

   modal?.isOpen$.next(true);
  }

  public close(modalName: string): void {
    const modal: BaseModalComponent | undefined = this.getModal(modalName)
    modal?.isOpen$.next(false);
  }

  private getModal(modalName): BaseModalComponent | undefined {
    return this._modals.find((modal): boolean => modal.modalName === modalName)
  }
}
