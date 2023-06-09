import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ModalService } from '../../../common/core/services/ModalService';
import { ConfirmModalActionEnum } from '../../../common/core/enums';

@Directive()
export abstract class AbstractModal implements OnInit, OnDestroy {

  @Input() set name(name: string) {
    this._name = name;
  }

  @Input() set title(title: string) {
    this._title = title;
  }

  public subs: Subscription[] = [];
  public modalAction: typeof ConfirmModalActionEnum = ConfirmModalActionEnum;


  private _name: string;
  private _title: string;

  protected constructor(
    protected readonly cdr: ChangeDetectorRef,
    protected readonly modalService: ModalService
  ) {}
  public ngOnInit(): void {
  }

  public get name(): string {
    return this._name;
  }

  public get title(): string {
    return this._title;
  }

  abstract close(closeOption: ConfirmModalActionEnum): void;
  abstract save(): void;

  public ngOnDestroy(): void {
    for (let i: number = 0; i < this.subs.length ; i++) {
      this.subs[i].unsubscribe();
    }
  }



}
