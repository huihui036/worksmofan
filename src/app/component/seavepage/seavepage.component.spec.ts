import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeavepageComponent } from './seavepage.component';

describe('SeavepageComponent', () => {
  let component: SeavepageComponent;
  let fixture: ComponentFixture<SeavepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeavepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeavepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
