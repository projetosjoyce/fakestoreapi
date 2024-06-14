import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AtomIconComponent } from '../atom-icon/atom-icon.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'atom-button',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,

    AtomIconComponent
  ],
  template: `
    <button
      [type]="typeButton"
      [ngClass]="classObject"
      [ngStyle]="styleObject"
      class="store__button"
      [disabled]="disableButton"
      (click)="onClick.emit()"
    >
      @if (label) {
        {{ label }}
      }

      @if (icon) {
        <atom-icon [icon]="icon" />
      }
    </button>
  `,
})
export class AtomButtonComponent implements OnInit {
  @Input({ required: false }) label?: string;
  @Input({ required: false }) icon?: string;
  @Input({ required: false }) typeButton:  'submit' | 'button' | 'reset' = 'button';
  @Input({ required: false }) disableButton = false;
  @Input({ required: false }) color: 'primary' | 'secondary' = 'primary';
  @Input({ required: false }) styleObject?: { [X: string]: any };

  @Output() onClick = new EventEmitter<void>();

  public classObject: { [X: string]: boolean } = {};

  ngOnInit(): void {
    this.classObject = {
      'store__button--primary': this.color === 'primary',
      'store__button--secondary': this.color === 'secondary'
    }
  }
}
