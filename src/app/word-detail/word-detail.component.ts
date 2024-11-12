import {Component, Input} from '@angular/core';
import {WordDetails} from '../word-details';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-word-detail',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './word-detail.component.html',
  styleUrl: './word-detail.component.scss'
})
export class WordDetailComponent {
  @Input() wordDetail!: WordDetails;

}
