import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-booking-card',
  imports: [MatCardModule],
  templateUrl: './booking-card.html',
  styleUrl: './booking-card.css',
})
export class BookingCard {
  auth = inject(AuthService)
  book_date = '';

  

}
