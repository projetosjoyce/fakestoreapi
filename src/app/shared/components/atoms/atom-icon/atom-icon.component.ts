import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atom-icon',
  standalone: true,
  imports: [
    NgClass
  ],
  template: '<i class="pi" [ngClass]="styleClass"></i>',
})
export class AtomIconComponent implements OnInit {
  @Input({ required: true }) icon = '';
  @Input({ required: false }) styleClass: string[] = [];

  ngOnInit(): void {
    this.styleClass.push(this.icon);
  }

}
