import {Component, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('word') word_input!: ElementRef;

  constructor(private router: Router) {
  }

  isLoading: boolean = false;

  search(word: string) {
    this.isLoading = true;
    this.router.navigate([`/result`], {queryParams: {word: word}}).then(_ => this.isLoading = false);
  }

  onEnter() {
    if (document.activeElement === this.word_input.nativeElement) {
      const input = this.word_input.nativeElement as HTMLInputElement
      this.search(input.value ? input.value : input.placeholder);
    }
  }
}
