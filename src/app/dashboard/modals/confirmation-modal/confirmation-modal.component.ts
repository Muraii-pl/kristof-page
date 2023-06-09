import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { AbstractModal } from '../../shared/abstract/AbstractModal';
import { ConfirmModalActionEnum } from '../../../common/core/enums';
import { ModalService } from '../../../common/core/services/ModalService';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent extends AbstractModal implements OnInit {

  @Input() mainText: string;

  @Output() actionResult: EventEmitter<ConfirmModalActionEnum> = new EventEmitter<ConfirmModalActionEnum>();

  private _itemId: number;

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
    protected override readonly modalService: ModalService
  ) {
    super(cdr, modalService);
  }

  public override ngOnInit(): void {
  }

  public get itemId(): number {
    return this._itemId;
  }

  public close(closeOptions: ConfirmModalActionEnum): void {
    console.log(closeOptions)
    this.modalService.close(this.name)
    if(closeOptions === ConfirmModalActionEnum.DISCARD_CHANGES) {
      this.actionResult.emit(closeOptions)
    }
  }
  public save(): void {
  }
}
