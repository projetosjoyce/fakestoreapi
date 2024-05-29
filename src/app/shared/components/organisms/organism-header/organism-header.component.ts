import { Component } from '@angular/core';
import { AtomIconComponent } from '../../atoms';

@Component({
  selector: 'app-organism-header',
  standalone: true,
  imports: [
    AtomIconComponent
  ],
  templateUrl: './organism-header.component.html',
  styleUrl: './organism-header.component.scss'
})
export class OrganismHeaderComponent {

}
