import {Injectable} from '@angular/core';
import {IWordDetail} from '../interfaces/word-detail.interface';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private url = 'https://raw.githubusercontent.com/GuangChen2333/CanWeTalkSimplyData/refs/heads/database/db.json';
  private wordsSubject: BehaviorSubject<IWordDetail[]> = new BehaviorSubject<IWordDetail[]>([]);
  private words: Observable<IWordDetail[]> = this.wordsSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  private getWords(): Observable<IWordDetail[]> {
    return this.http.get<IWordDetail[]>(this.url)
  }

  fetchWords(): void {
    this.getWords().subscribe(words => {
      this.wordsSubject.next(words);
    })
  }

  levenshteinDistance(a: string, b: string): number {
    let [rows, cols] = [a.length + 1, b.length + 1];
    let d = Array.from({length: rows}, () => Array(cols).fill(0));

    for (let i = 0; i <= a.length; i++) d[i][0] = i;
    for (let j = 0; j <= b.length; j++) d[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        let cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1, // deletion
          d[i][j - 1] + 1, // insertion
          d[i - 1][j - 1] + cost // substitution
        );
      }
    }

    return d[a.length][b.length];
  }

  filterByName(name: string): Observable<IWordDetail[]> {
    return this.words.pipe(
      map(
        (words: IWordDetail[]) => {
          let distances: {
            [id: number]: number
          } = {}

          for (let word of this.wordsSubject.value) {
            distances[word.id] = this.levenshteinDistance(name, word.name)
          }

          return words
            .filter(
              word => name.split("").some(char => word.name.includes(char))
            )
            .map(
              (word) => (
                {...word, distance: distances[word.id]}
              )
            )
            .sort(
              (a, b) => {
                if (a.name === name) return -1;
                if (b.name === name) return 1;
                if (a.distance !== b.distance) return a.distance - b.distance;
                return a.id - b.id
              }
            )
        })
    )
  }
}
