import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { ModalService } from '../../core/services/ModalService';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseModalComponent implements OnInit, OnDestroy {

  @Input() title: string = 'Testowy tytuł';
  @Input() set modalName(modalName: string) {
    if (modalName) {
      this._modalName = modalName;
      this._modalService.generateModal(this)
    }
  }

  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  public subs: Subscription[] = [];
  public isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private _modalName: string;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _modalService: ModalService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.isOpen$.subscribe((res) => {
      this.isOpen.emit(res)
    }))
  }

  public get modalName(): string {
    return this._modalName;
  }

  public close(): void {
    this._modalService.close(this.modalName);
  }

  public ngOnDestroy(): void {
    this._modalService.destroyModal(this.modalName)

    for (let i: number = 0; i < this.subs.length; i++) {
      this.subs[i].unsubscribe();
    }
  }

}
