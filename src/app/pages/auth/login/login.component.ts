import { Component } from '@angular/core';
import { OrganismHeaderComponent } from '../../../shared/components/organisms';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtomCardComponent, AtomIconComponent } from '../../../shared/components/atoms';
import { NgClass } from '@angular/common';
import { IInputData } from '../../../shared/interfaces';
import { EInputAutoComplete, EInputType } from '../../../shared/enums';
import { MoleculeFormComponent } from '../../../shared/components/molecules';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AtomIconComponent,
    AtomCardComponent,
    MoleculeFormComponent,
    OrganismHeaderComponent,

    NgClass,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public form: FormGroup;

  public inputs: IInputData[] = [
    {
      key: 'username',
      label: 'Usuário',
      type: EInputType.Text,
      autocomplete: EInputAutoComplete.Username,
      validators: {
        required: true
      }
    },
    {
      key: 'password',
      label: 'senha',
      type: EInputType.Password,
      autocomplete: EInputAutoComplete.CurrentPassword,
      validators: {
        required: true
      }
    },
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  private isTouched(key: string): boolean {
    return this.form.controls[key].touched;
  }

  public getError(key: string, errorCode: string): boolean {
    if (this.isTouched(key)) {
      return this.form.controls[key].getError(errorCode) ? true : false;
    }

    return false;
  }

  public isInvalid(key: string): boolean {
    if (this.isTouched(key)) {
      return this.form.controls[key].invalid;
    }

    return false;
  }

  public onSubmit(value: { username: string; password: string; }): void {
    alert(`Username: ${value.username}\n\nPassword: ${value.password}`);
  }

}
