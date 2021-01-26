import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private messageService: MessageService) { }

  // fetch data : 
  getCourses(): Observable<Course[]> {
    this.messageService.add('CourseService : fetched courses')
    return of (COURSES);
  }

  
}
