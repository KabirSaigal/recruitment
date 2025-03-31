import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { job, allJobs } from '../models/jobs';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router){}

  allActiveJobs: job[] = [];
  jobsExist = false;
  isRecruit = false;
  jobCount = 0;
  candidateCount = 0;
  recruitCount=0;

  ngOnInit() {
    const localArray = localStorage.getItem('allJobs');
    const localUser = localStorage.getItem('currentUser');
    if(localUser != undefined){
      const currentUser = JSON.parse(localUser);
      if(currentUser.role === "recruiter" || currentUser.role === "admin"){
        this.isRecruit = true;
      }
    }
    const localAllUser = localStorage.getItem('allUsers');
    if(localAllUser != undefined){
      const allUsers = JSON.parse(localAllUser);
      this.candidateCount = allUsers.filter((candidate: { role: string; }) => candidate.role === 'candidate').length;
      this.recruitCount = allUsers.filter((candidate: { role: string; }) => candidate.role === 'recruiter').length;
    }
    if (localArray != undefined){
      this.allActiveJobs = JSON.parse(localArray);
      this.jobCount = this.allActiveJobs.length;
      this.jobsExist = true;
    }else{
      this.jobsExist = false;
    }
  }

logout() {
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login']);
}

goCreateJob(){
  this.router.navigate(['/createJob']);
}

goToContact(){
  this.router.navigate(['/contact']);
}

}
