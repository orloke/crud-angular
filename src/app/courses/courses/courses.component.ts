import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  displayedColumns = ['name', 'category'];
  courses: Course[] = [
    { _id: 'primeiro', name: 'Angular', category: 'Front End' },
    { _id: 'primeiro', name: 'Angular', category: 'Front End' },
  ];
}
