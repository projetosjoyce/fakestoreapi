import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  displaySignUpModal: boolean = false;
  visible: boolean = false;
  user: any = {};

  constructor(
    private authService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Se a resposta for bem-sucedida, redirecione para products
        this.router.navigate(['/products']);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logado com sucesso',
        });
      },
      (error) => {
        // Se o login falhar, exiba uma mensagem de erro para o usuário
        console.error('Erro ao fazer login:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Usuário ou senha incorretos',
        });
      }
    );
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
