import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'atom-card',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  template: `
    <section class="store__card">
      @if (header) {
        <ng-container *ngTemplateOutlet="header"></ng-container>
      }

      @if (body) {
        <ng-container  *ngTemplateOutlet="body"></ng-container>
      }

      @if (footer) {
        <ng-container *ngTemplateOutlet="footer"></ng-container>
      }
    </section>
  `,
})
export class AtomCardComponent {
  @ContentChild('header') header?: TemplateRef<ElementRef>;
  @ContentChild('body') body?: TemplateRef<ElementRef>;
  @ContentChild('footer') footer?: TemplateRef<ElementRef>;
}
