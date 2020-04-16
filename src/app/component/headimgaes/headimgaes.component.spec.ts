import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadimgaesComponent } from './headimgaes.component';

describe('HeadimgaesComponent', () => {
  let component: HeadimgaesComponent;
  let fixture: ComponentFixture<HeadimgaesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadimgaesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadimgaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
