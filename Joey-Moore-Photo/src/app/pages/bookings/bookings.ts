import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {
  auth = inject(AuthService);
  router = inject(Router)

  ngOnInit() { 
    if (!this.auth.isLoggedIn()) {
      alert('You must be logged in to view this page!');
      this.router.navigate(['/login']);
    }
  }

}
