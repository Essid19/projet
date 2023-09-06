import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { AddCourComponent } from "./components/add-cour/add-cour.component";
import { SearchTeacherComponent } from "./components/search-teacher/search-teacher.component";
import { DashboardStudentComponent } from "./components/dashboard-student/dashboard-student.component";
import { DashboardAdminComponent } from "./components/dashboard-admin/dashboard-admin.component";
import { CourseInfoComponent } from "./components/course-info/course-info.component";
import { TeacherInfoComponent } from "./components/teacher-info/teacher-info.component";
import { StudentInfoComponent } from "./components/student-info/student-info.component";
import { EditCourseComponent } from "./components/edit-course/edit-course.component";
import { EditStudentComponent } from "./components/edit-student/edit-student.component";
import { EditTeacherComponent } from "./components/edit-teacher/edit-teacher.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signupteacher", component: SignupComponent },
  { path: "signupstudent", component: SignupComponent },
  { path: "signupparent", component: SignupComponent },
  { path: "signupadmin", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "addcour", component: AddCourComponent },
  { path: "searchteacher", component: SearchTeacherComponent },
  { path: "dashboardstudent", component: DashboardStudentComponent },
  { path: "dashboardadmin", component: DashboardAdminComponent },
  { path: "courseinfo/:id", component: CourseInfoComponent },
  { path: "teacherinfo/:id", component: TeacherInfoComponent },
  { path: "studentinfo/:id", component: StudentInfoComponent },
  { path: "editcourse", component: EditCourseComponent },
  { path: "editstudent", component: EditStudentComponent },
  { path: "editteacher", component: EditTeacherComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
