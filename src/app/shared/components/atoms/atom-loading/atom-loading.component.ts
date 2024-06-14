import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'atom-loading',
  standalone: true,
  imports: [
    ProgressSpinnerModule
  ],
  template: `
    <p-progressSpinner class="atom-loading" />
  `,
  styles: `
    .atom-loading {
      left: 0;
      top: 0;
      position: fixed;
      display: flex;
      align-items: center;
      z-index: 999;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.4);
      height: 100vh;
    }
  `
})
export class AtomLoadingComponent { }
