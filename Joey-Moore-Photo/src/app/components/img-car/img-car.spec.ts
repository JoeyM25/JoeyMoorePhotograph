import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCar } from './img-car';

describe('ImgCar', () => {
  let component: ImgCar;
  let fixture: ComponentFixture<ImgCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
