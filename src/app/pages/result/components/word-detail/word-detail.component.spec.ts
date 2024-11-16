import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailComponent } from './word-detail.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {IWordDetail} from '../../../../interfaces/word-detail.interface';

describe('WordDetailComponent', () => {
  let component: WordDetailComponent;
  let fixture: ComponentFixture<WordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordDetailComponent],
      providers: [provideAnimationsAsync()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordDetailComponent);
    const wordDetail: IWordDetail = {
      id: 0,
      name: "OnTest",
      pos: "test",
      description: "Test",
      examples: []
    }
    component = fixture.componentInstance;
    component.word = wordDetail
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
