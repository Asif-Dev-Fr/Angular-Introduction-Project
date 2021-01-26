import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // fetch data : 
  getCourses(): Observable <Course[]> {
    return of (COURSES);
  }

  constructor() { }
}
