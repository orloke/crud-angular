import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['name', 'category'];
  courses: Course[];

  constructor(private coursesSevice: CoursesService) {
    this.courses = this.coursesSevice.list();
  }

  ngOnInit(): void {}
}
