import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { IInputData, IInputValidator } from '../../../interfaces';
import { AtomInputDefaultComponent } from '../../atoms';

@Component({
  selector: 'molecule-form',
  standalone: true,
  imports: [
    AtomInputDefaultComponent,

    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './molecule-form.component.html',
  styleUrl: './molecule-form.component.scss'
})
export class MoleculeFormComponent implements DoCheck, AfterViewInit, OnInit {
  @Input({ required: true }) inputs: IInputData[] = [];

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.form = this.formBuilder.group({});
  }

  ngDoCheck(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let controls: any = {};

    this.inputs.forEach((input) => {
      controls[input.key] = new FormControl(input.defaultValue ?? '', this.getValidators(input.validators));
    });

    this.form = this.formBuilder.group(controls);
  }

  private getValidators(validatorsInput?: IInputValidator): ValidatorFn[] {
    const validator: ValidatorFn[] = [];

    if (validatorsInput?.required) {
      validator.push(Validators.required);
    }

    if (validatorsInput?.email) {
      validator.push(Validators.email);
    }

    if (validatorsInput?.min) {
      validator.push(Validators.min(validatorsInput?.min));
    }

    if (validatorsInput?.max) {
      validator.push(Validators.max(validatorsInput?.max));
    }

    if (validatorsInput?.minLength) {
      validator.push(Validators.minLength(validatorsInput?.minLength));
    }

    if (validatorsInput?.maxLength) {
      validator.push(Validators.maxLength(validatorsInput?.maxLength));
    }

    return validator;
  }

}
