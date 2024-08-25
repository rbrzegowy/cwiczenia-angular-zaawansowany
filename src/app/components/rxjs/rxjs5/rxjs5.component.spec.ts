import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs5Component } from './rxjs5.component';

describe('Rxjs5Component', () => {
  let component: Rxjs5Component;
  let fixture: ComponentFixture<Rxjs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjs5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
