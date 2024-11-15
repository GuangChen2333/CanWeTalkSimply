import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {IWordDetail} from '../../interfaces/word-detail.interface';
import {WordService} from '../../services/word.service';
import {WordDetailComponent} from './components/word-detail/word-detail.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    ButtonDirective,
    InputGroupModule,
    InputTextModule,
    DividerModule,
    CardModule,
    WordDetailComponent,
    NgForOf
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements AfterViewInit, OnInit {
  @Input({required: true}) word!: string;
  @ViewChild('word') word_input!: ElementRef;

  word_detail: IWordDetail | undefined;
  results: IWordDetail[] | undefined;

  constructor(
    private wordService: WordService
  ) {
  }

  ngOnInit() {
    this.results = this.wordService.filterByName(this.word)
  }

  ngAfterViewInit(): void {
    (this.word_input.nativeElement as HTMLInputElement).value = this.word
  }
}
