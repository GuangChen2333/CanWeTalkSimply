import {Injectable} from '@angular/core';
import {IWordDetail} from '../interfaces/word-detail.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  url = 'https://raw.githubusercontent.com/GuangChen2333/CanWeTalkSimplyData/refs/heads/database/db.json';
  words: IWordDetail[] = []

  constructor(private http: HttpClient) {
  }

  private getWords(): Observable<IWordDetail[]> {
    return this.http.get<IWordDetail[]>(this.url)
  }


  fetchWords(): void {
    this.getWords().subscribe(words => {
      this.words = words;
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

  filterByName(name: string): IWordDetail[] {
    let distances: {
      [id: number]: number
    } = {}

    for (let word of this.words) {
      distances[word.id] = this.levenshteinDistance(name, word.name)
    }

    console.info(distances);

    return this.words
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
  }
}
