import { Component } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-img-car',
  standalone: true,
  imports: [NgbCarousel, NgbCarouselModule],
  templateUrl: './img-car.html',
  styleUrls: ['./img-car.css'],
})
export class ImgCar {
  images = [
    { src: 'DXNP5581.JPG', caption: 'Polly 1' },
    { src: 'EICI6296.JPG', caption: 'Polly 2' },
    { src: 'IMG_6073.JPG', caption: 'Polly 3' },
    { src: 'IMG_6291.JPG', caption: 'Polly 1' },
    { src: 'IMG_6067.JPG', caption: 'Polly 2' },
    { src: 'IMG_6300.JPG', caption: 'Polly 3' },
  ];

  activeImage = this.images[0].src;

  onSlide(event: NgbSlideEvent) {
    const index = parseInt(event.current ?? '0', 10);
    if (this.images[index]) {
      this.activeImage = this.images[index].src;
    }
  }
}
