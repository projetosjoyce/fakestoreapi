import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-login-register',
  templateUrl: './modal-login-register.component.html',
  styleUrl: './modal-login-register.component.scss'
})
export class ModalLoginRegisterComponent {

  visible: boolean = true;

  showDialog() {
      this.visible = true;
  }

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }



}
