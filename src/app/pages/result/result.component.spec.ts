import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import {WordService} from '../../services/word.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {of} from 'rxjs';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent],
      providers: [WordService, Router, HttpClient, HttpHandler, {
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({ name: 'OnTest' })
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
