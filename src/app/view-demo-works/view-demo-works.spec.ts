import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDemoWorks } from './view-demo-works';

describe('ViewDemoWorks', () => {
  let component: ViewDemoWorks;
  let fixture: ComponentFixture<ViewDemoWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDemoWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDemoWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
