import { Component } from '@angular/core';
import { OrganismHeaderComponent } from '../../../shared/components/organisms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomCardComponent, AtomIconComponent } from '../../../shared/components/atoms';
import { NgClass } from '@angular/common';
import { IButtonData, IInputData } from '../../../shared/interfaces';
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
      label: 'Senha',
      type: EInputType.Password,
      autocomplete: EInputAutoComplete.CurrentPassword,
      validators: {
        required: true,
      }
    },
  ]

  public buttons: IButtonData[] = [
    {
      label: 'Entrar',
      icon: 'pi-angle-right',
      color: 'primary',
      type: 'submit',
      disabled: false,
      styleObject: {
        width: '150px'
      }
    },
    {
      label: 'Criar Conta',
      icon: 'pi-user-plus',
      color: 'secondary',
      type: 'button',
      disabled: false,
      styleObject: {
        width: '150px'
      },
      click: () => location.href = '/auth/register'
    }
  ];

  public onSubmit(value: { username: string; password: string; }): void {
    alert(`Username: ${value.username}\n\nPassword: ${value.password}`);
  }

}
