import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../environments/environment';

const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Joey-Moore-Photo';

  constructor() {
    const app = initializeApp(environment.firebase);
    getAnalytics(app);
  }
}
