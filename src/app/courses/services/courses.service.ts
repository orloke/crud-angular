import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpCliente: HttpClient) {}

  list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((course) => console.log(course))
    );
  }
}
