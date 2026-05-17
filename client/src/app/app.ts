import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { AccountService } from '../core/services/account-service';
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private accountService = inject(AccountService)
  protected router = inject(Router)
  
  async ngOnInit() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    const  userString = localStorage.getItem('user')
    if (!userString) return

    try {
      const user = JSON.parse(userString)
      this.accountService.currentUser.set(user)
    } catch {
      localStorage.removeItem('user')
    }
  }
}
