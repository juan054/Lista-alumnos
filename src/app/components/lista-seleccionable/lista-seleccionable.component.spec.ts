import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeleccionableComponent } from './lista-seleccionable.component';

describe('ListaSeleccionableComponent', () => {
  let component: ListaSeleccionableComponent;
  let fixture: ComponentFixture<ListaSeleccionableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSeleccionableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSeleccionableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
