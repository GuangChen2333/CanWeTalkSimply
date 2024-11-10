import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true
  }
}
