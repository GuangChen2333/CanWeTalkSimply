import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PrimeNGConfig} from 'primeng/api';
import {WordService} from './services/word.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private wordService: WordService
  ) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true
    this.wordService.fetchWords()
  }
}
