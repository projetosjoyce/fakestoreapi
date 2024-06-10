import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-error',
  standalone: true,
  imports: [],
  template: `
    <span class="store__error">{{message}}</span>
  `
})
export class AtomErrorComponent {
  @Input({ required: true }) message!: string;
}
