import { Component, Input } from '@angular/core';
import { IInputData } from '../../../../interfaces';
import { AtomLabelComponent } from '../../atom-label/atom-label.component';
import { AtomErrorComponent } from '../../atom-error/atom-error.component';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'atom-input-default',
  standalone: true,
  imports: [
    AtomLabelComponent,
    AtomErrorComponent,

    FormsModule,
    ReactiveFormsModule,

    NgClass
  ],
  templateUrl: './atom-input-default.component.html',
  styleUrl: './atom-input-default.component.scss'
})
export class AtomInputDefaultComponent {
  @Input({ required: true }) inputData!: IInputData;
  @Input({ required: false }) invalid = false;
  @Input({ required: false }) invalidMessage?: string;
  @Input({ required: true }) form!: FormGroup;

  public get formControl(): FormControl {
    if (this.form.contains(this.inputData.key)) {
      return this.form.controls[this.inputData.key] as FormControl;
    }

    return new FormControl();
  }
}
