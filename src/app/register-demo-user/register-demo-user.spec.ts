import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDemoUser } from './register-demo-user';

describe('RegisterDemoUser', () => {
  let component: RegisterDemoUser;
  let fixture: ComponentFixture<RegisterDemoUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDemoUser],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterDemoUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
