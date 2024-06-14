import { ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { IButtonData, IInputData, IInputValidator } from '../../../interfaces';
import { AtomButtonComponent, AtomInputDefaultComponent, AtomLoadingComponent } from '../../atoms';
import { EInputErrorCode } from '../../../enums';

@Component({
  selector: 'molecule-form',
  standalone: true,
  imports: [
    AtomInputDefaultComponent,
    AtomButtonComponent,
    AtomLoadingComponent,

    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './molecule-form.component.html',
  styleUrl: './molecule-form.component.scss'
})
export class MoleculeFormComponent implements DoCheck, OnInit {
  @Input({ required: true }) inputs: IInputData[] = [];
  @Input({ required: false }) buttons: IButtonData[] = [];
  @Input({ required: false }) loading = false;

  @Output() formValue = new EventEmitter<any>();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.form = this.formBuilder.group({});
  }

  ngDoCheck(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
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

  public isInvalid(key: string): boolean {
    if (this.isTouched(key)) {
      return this.form.controls[key].invalid;
    }

    return false;
  }

  public invalidMessage(input: IInputData): string {
    if (!this.isTouched(input.key)) {
      return '';
    }

    const errors: any = this.form.controls[input.key].errors;

    if (errors?.[EInputErrorCode.Required]) {
      return `${input.label} é Obrigatório.`;
    } else if (errors?.[EInputErrorCode.Max]) {
      return `${input.label} Máx ${input.validators?.max}`;
    } else if (errors?.[EInputErrorCode.Min]) {
      return `${input.label} Min ${input.validators?.min}`;
    } else if (errors?.[EInputErrorCode.MaxLength]) {
      return `${input.label} Qtd. Máx de Caracteres é ${input.validators?.maxLength}`;
    } else if (errors?.[EInputErrorCode.MinLength]) {
      return `${input.label} Qtd. Min de Caracteres é ${input.validators?.minLength}`;
    } else if (errors?.[EInputErrorCode.Email]) {
      return `Formato de E-mail Inválido.`
    }

    return '';
  }

  private isTouched(key: string): boolean {
    return this.form.controls[key].touched;
  }

  public onSubmit(value: any): void {
    this.formValue.emit(value);
  }

}
