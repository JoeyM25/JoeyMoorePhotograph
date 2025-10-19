import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-car',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './img-car.html',
  styleUrl: './img-car.css'
})
export class ImgCar {
  images = [
    {name: 'IMG_6299.JPG', caption: ''},
    {name: 'IMG_6300.JPG', caption: ''},
    {name: 'IMG_6301.JPG', caption: ''}
  ];
}
