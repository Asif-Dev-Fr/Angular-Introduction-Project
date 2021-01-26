import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent} from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// équivalent à react router dom : 
const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}, 
  {path: 'dashboard', component: DashboardComponent  },
  {path: 'courses', component: CoursesComponent  },
  {path: 'detail/:id', component: CourseDetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
