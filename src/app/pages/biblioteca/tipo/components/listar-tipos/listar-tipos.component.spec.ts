import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiposComponent } from './listar-tipos.component';

describe('ListarTiposComponent', () => {
  let component: ListarTiposComponent;
  let fixture: ComponentFixture<ListarTiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
