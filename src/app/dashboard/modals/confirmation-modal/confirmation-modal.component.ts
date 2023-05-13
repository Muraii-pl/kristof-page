import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { AbstractModal } from '../../shared/abstract/AbstractModal';
import { FormBuilder } from '@angular/forms';
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

  public modalAction: typeof ConfirmModalActionEnum = ConfirmModalActionEnum;

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

  public close(): void {
    this.modalService.close(this.name)
  }
  public save(): void {
  }
}
