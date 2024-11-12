import {Component, Input} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';
import {WordDetails} from '../word-details';
import {WordDetailComponent} from '../word-detail/word-detail.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    ButtonDirective,
    Ripple,
    InputGroupModule,
    InputTextModule,
    WordDetailComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {


  constructor(private router: Router) {
  }

  isLoading: boolean = false;

  word_detail: WordDetails = {
    id: 1,
    name: "妈咪",
    description: "一种第三人称称谓",
    author: "Guang_Chen_",
    examples: ["妈咪您好！"]
  }

  search(word: string) {
    this.isLoading = true;
    this.router.navigate([`/result`], {queryParams: {word: word}}).then(_ => this.isLoading = false);
  }
}
