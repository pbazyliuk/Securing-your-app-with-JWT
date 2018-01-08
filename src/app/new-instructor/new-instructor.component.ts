import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from './../instructor/instructor.service';
import { Instructor } from './../instructor/instructor';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-instructor',
  templateUrl: './new-instructor.component.html',
  styleUrls: ['./new-instructor.component.css']
})
export class NewInstructorComponent implements OnInit {

  instructor: Instructor;
  errorMessage: string = '';

  constructor(private router: Router, private location: Location, private instructorService: InstructorService) {}

  ngOnInit() {}

  addInstructor(data) {
    this.instructorService.addInstructor(data)
    .map(res => res.json())
    .subscribe(
      response => {
        this.instructor = response;
        return this.goBack();
      },
      error => this.errorMessage = error.json().message
    )
    
    // call the InstructorService to add a new
    // instructor and redirect to the /instructor
    // route if successful
  }

  goBack() {
    this.location.back()
  }

}
