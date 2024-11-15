import {Component, Input} from '@angular/core';
import {IWordDetail} from '../../../../interfaces/word-detail.interface';
import {CardModule} from 'primeng/card';
import {TagModule} from 'primeng/tag';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-word-detail',
  standalone: true,
  imports: [
    CardModule,
    TagModule,
    DividerModule,
    FieldsetModule,
    NgForOf
  ],
  templateUrl: './word-detail.component.html',
  styleUrl: './word-detail.component.scss'
})
export class WordDetailComponent {
  @Input() word!: IWordDetail;



}
