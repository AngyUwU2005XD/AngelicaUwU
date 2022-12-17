import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteuwu3Component } from './componenteuwu3.component';

describe('Componenteuwu3Component', () => {
  let component: Componenteuwu3Component;
  let fixture: ComponentFixture<Componenteuwu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenteuwu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenteuwu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
