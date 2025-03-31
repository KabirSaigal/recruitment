import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  users: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error fetching users', err)
    });
  }
}
