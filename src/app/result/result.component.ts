import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  result_word: string | undefined;

  @Input()
  set word(word: string) {

    this.result_word = word;
  }
}
