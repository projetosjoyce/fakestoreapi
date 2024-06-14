import { Component } from '@angular/core';
import { AtomCardComponent } from '../../../shared/components/atoms';
import { OrganismHeaderComponent } from '../../../shared/components/organisms';
import { MoleculeFormComponent } from '../../../shared/components/molecules';
import { IButtonData, IInputData } from '../../../shared/interfaces';
import { EInputAutoComplete, EInputType } from '../../../shared/enums';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AtomCardComponent,
    MoleculeFormComponent,
    OrganismHeaderComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public inputs: IInputData[] = [
    {
      key: 'name',
      label: 'Nome Completo',
      type: EInputType.Text,
      autocomplete: EInputAutoComplete.Name,
      validators: {
        required: true
      }
    },
    {
      key: 'username',
      label: 'Usuário',
      type: EInputType.Text,
      autocomplete: EInputAutoComplete.Username,
      validators: {
        required: true,
      }
    },
    {
      key: 'email',
      label: 'E-mail',
      type: EInputType.Text,
      autocomplete: EInputAutoComplete.Email,
      validators: {
        required: true,
        email: true
      }
    },
    {
      key: 'password',
      label: 'Senha',
      type: EInputType.Password,
      autocomplete: EInputAutoComplete.NewPassword,
      validators: {
        required: true,
      }
    },
  ]

  public buttons: IButtonData[] = [
    {
      label: 'Cadastrar',
      icon: 'pi-user-plus',
      color: 'primary',
      type: 'submit',
      disabled: false,
      styleObject: {
        width: '150px'
      }
    },
    {
      label: 'Conectar-se',
      icon: 'pi-angle-right',
      color: 'secondary',
      type: 'button',
      disabled: false,
      styleObject: {
        width: '150px'
      },
      click: () => location.href = '/auth/login'
    }
  ];

  public loading = false;

  public onSubmit(value: { name: string, username: string; email: string; password: string; }): void {
    this.loading = true;
    alert(`
        Nome Completo: ${value.name}\n
        Username: ${value.username}\n
        E-mail: ${value.email}\n
        Password: ${value.password}`
    );
  }
}
