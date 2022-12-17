import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteuwu2Component } from './componenteuwu2.component';

describe('Componenteuwu2Component', () => {
  let component: Componenteuwu2Component;
  let fixture: ComponentFixture<Componenteuwu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenteuwu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenteuwu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
