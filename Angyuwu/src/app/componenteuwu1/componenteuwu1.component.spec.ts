import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteuwu1Component } from './componenteuwu1.component';

describe('Componenteuwu1Component', () => {
  let component: Componenteuwu1Component;
  let fixture: ComponentFixture<Componenteuwu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenteuwu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenteuwu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
