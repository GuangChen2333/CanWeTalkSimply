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
import {ActivatedRoute, Params, Router} from '@angular/router';

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

  results: IWordDetail[] | undefined;
  isLoading: boolean = false;

  constructor(
    private wordService: WordService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const word = params['word'];
      console.info(`Word: ${word}`);
      this.wordService.filterByName(word).subscribe(
        words => this.results = words
      );
      this.word = word;
    });
  }

  ngAfterViewInit(): void {
    (this.word_input.nativeElement as HTMLInputElement).value = this.word
  }

  search(word: string) {
    this.isLoading = true;
    this.router.navigate(
      [`/result`], {queryParams: {word: word}, onSameUrlNavigation: "reload"}
    ).then(_ => this.isLoading = false);
  }

  onEnter() {
    if (document.activeElement === this.word_input.nativeElement) {
      const input = this.word_input.nativeElement as HTMLInputElement
      this.search(input.value ? input.value : this.word);
    }
  }

  backToHome() {
    this.router.navigate(
      ['']
    ).then(r => console.info(`Back to home: ${r}`))
  }
}
