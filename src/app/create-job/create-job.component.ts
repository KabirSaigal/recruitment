import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { job, allJobs } from '../models/jobs';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-job',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.scss'
})
export class CreateJobComponent {

  constructor(private router: Router){}

  jobCreated = false;

  localJob: job = {
    id: null,
    title: '',
    description: '',
    requirment: '',
    startDate: new Date(),
    endDate: new Date(),
  };

  goBack(): void {
    window.history.back();
  }

  createJob(){
    const localArray = localStorage.getItem('allJobs');
    if(localArray != undefined){
      const allJobs = JSON.parse(localArray);
      if (!allJobs.some((job: job) => job.id === this.localJob.id)) {
        allJobs.push(this.localJob);
        localStorage.setItem('allJobs', JSON.stringify(allJobs));
        this.jobCreated = true;
      } else {
        alert('A job with this ID already exists.');
      }
    }else{
      const allJobs = [this.localJob];
      localStorage.setItem('allJobs', JSON.stringify(allJobs));
    }
  }

  createAnotherJob() {
    this.localJob = {
      id: null,
      title: '',
      description: '',
      requirment: '',
      startDate: new Date(),
      endDate: new Date(),
    };
    this.jobCreated = false;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }


}
