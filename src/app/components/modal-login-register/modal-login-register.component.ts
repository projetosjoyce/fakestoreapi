import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-login-register',
  templateUrl: './modal-login-register.component.html',
  styleUrls: ['./modal-login-register.component.scss']
})
export class ModalLoginRegisterComponent {
  userForm: FormGroup;
  visible: boolean = true;

  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  closeModal(): void {
    this.visible = false;
    this.close.emit();
  }

  saveUser() {
    if (this.userForm.valid) {
      const userData = {
        name: {
          firstname: this.userForm.value.name.split(' ')[0],
          lastname: this.userForm.value.name.split(' ')[1] || ''
        },
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496'
          }
        },
        phone: '1-570-236-7033'
      };

      fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Cadastro salvo com sucesso' });
        this.closeModal();  // Fechar a modal após salvar com sucesso
      })
      .catch(error => console.error('Erro ao criar usuário:', error));
    } else {
      console.error('Formulário inválido');
    }
  }
}
