import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInicioComponent } from './top-inicio.component';

describe('TopInicioComponent', () => {
  let component: TopInicioComponent;
  let fixture: ComponentFixture<TopInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
