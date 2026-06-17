import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDemo } from './movie-demo';

describe('MovieDemo', () => {
  let component: MovieDemo;
  let fixture: ComponentFixture<MovieDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
