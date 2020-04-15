import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabnaveComponent } from './tabnave.component';

describe('TabnaveComponent', () => {
  let component: TabnaveComponent;
  let fixture: ComponentFixture<TabnaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabnaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabnaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
