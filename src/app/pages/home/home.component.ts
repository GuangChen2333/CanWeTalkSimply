import {Component} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  isLoading: boolean = false;

  search(word: string) {
    this.isLoading = true;
    this.router.navigate([`/result`], {queryParams: {word: word}}).then(_ => this.isLoading = false);
  }
}
