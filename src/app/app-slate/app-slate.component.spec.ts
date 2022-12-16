import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSlateComponent } from './app-slate.component';

describe('AppSlateComponent', () => {
  let component: AppSlateComponent;
  let fixture: ComponentFixture<AppSlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
