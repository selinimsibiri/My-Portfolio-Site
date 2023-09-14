import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbComponent } from './headerb.component';

describe('HeaderbComponent', () => {
  let component: HeaderbComponent;
  let fixture: ComponentFixture<HeaderbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderbComponent]
    });
    fixture = TestBed.createComponent(HeaderbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
