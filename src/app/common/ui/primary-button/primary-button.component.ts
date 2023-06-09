import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent implements OnInit {

  @Input() label: string;
  @Input() type: 'button' | 'submit' = 'button' ;
  @Input() size: 'sm' | 'lg' = 'lg'
  @Input() theme: 'primary' | 'secondary' = 'primary'

  constructor() { }

  public ngOnInit(): void {
  }

}
