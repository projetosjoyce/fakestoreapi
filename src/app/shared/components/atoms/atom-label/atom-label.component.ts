import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-label',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <section class="store__label" [ngClass]="{ 'store__label--invalid': invalid }">
      <p>{{label}}{{required ? '*' : ''}}</p>
    </section>
  `
})
export class AtomLabelComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: false }) required = false;
  @Input({ required: false }) invalid = false;
}
