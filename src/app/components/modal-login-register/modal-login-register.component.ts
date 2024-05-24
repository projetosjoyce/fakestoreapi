import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-login-register',
  templateUrl: './modal-login-register.component.html',
  styleUrl: './modal-login-register.component.scss'
})
export class ModalLoginRegisterComponent {

  visible: boolean = true;  username: string = '';
  password: string = '';
  displaySignUpModal: boolean = false;
  user: any = {};

  showDialog() {
      this.visible = true;
  }

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  saveUser() {
    const userData = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      name: {
        firstname: 'John',
        lastname:'Doe'
      },
      address: {
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation: {
          lat:'-37.3159',
          long:'81.1496'
        }
      },
      phone:'1-570-236-7033'
    };

    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error('Erro ao criar usuário:', error));
  }

}
