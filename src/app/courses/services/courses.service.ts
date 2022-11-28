import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpCliente: HttpClient) {}

  list(): Course[] {
    return [
      { _id: 'primeiro', name: 'Angular', category: 'Front End' },
      { _id: '2', name: 'React', category: 'Front End' },
    ];
  }
}
