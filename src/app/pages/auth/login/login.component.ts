import { Component } from '@angular/core';
import { OrganismHeaderComponent } from '../../../shared/components/organisms';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtomIconComponent } from '../../../shared/components/atoms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AtomIconComponent,
    OrganismHeaderComponent,

    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

}
