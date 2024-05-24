import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  displaySignUpModal: boolean = false;
  visible: boolean = false;
  user: any = {};
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  ngOnInit(): void {

  }

  login(): void {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (response) => {
          this.router.navigate(['/products']);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Logado com sucesso',
          });
        },
        (error) => {
          console.error('Erro ao fazer login:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Usuário ou senha incorretos',
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Campos são obrigatórios',
      });
    }
  }

  openSignUpModal(event: Event) {
    event.preventDefault();
    this.visible = true;
  }

  closeSignUpModal() {
    this.displaySignUpModal = false;
  }

  showDialog() {
    this.visible = true;
  }

  saveUser() {
    const userData = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      name: {
        firstname: 'John',
        lastname: 'Doe',
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '1-570-236-7033',
    };

    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error('Erro ao criar usuário:', error));
  }
}
