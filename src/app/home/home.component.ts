import {Component} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    ButtonDirective,
    Ripple,
    InputGroupModule,
    InputTextModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
