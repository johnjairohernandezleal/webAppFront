import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTiposComponent } from './crud-tipos.component';

describe('CrudTiposComponent', () => {
  let component: CrudTiposComponent;
  let fixture: ComponentFixture<CrudTiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
