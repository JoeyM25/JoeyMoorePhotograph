import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton, MatButtonModule} from '@angular/material/button';
import { MatMenu } from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatIcon, MatButton, MatIconButton, MatMenu, MatMenuModule, MatIconModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  auth = inject(AuthService);

  async logout(){
    await this.auth.logout();
    console.log('user logged out')
    
  }
}
