import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractModal } from '../../shared/abstract/AbstractModal';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent extends AbstractModal implements OnInit {

  constructor(
    protected override readonly cdr: ChangeDetectorRef,
  ) {
    super(cdr);
  }

  public override ngOnInit(): void {
  }

  public save(): void {
  }

}
