import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ClassesComponent } from "./components/classes/classes.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TeachersComponent } from "./components/teachers/teachers.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourComponent } from "./components/add-cour/add-cour.component";
import { SearchTeacherComponent } from "./components/search-teacher/search-teacher.component";
import { DashboardStudentComponent } from "./components/dashboard-student/dashboard-student.component";
import { DashboardAdminComponent } from "./components/dashboard-admin/dashboard-admin.component";
import { TableTeachersComponent } from "./components/table-teachers/table-teachers.component";
import { TableStudentsComponent } from "./components/table-students/table-students.component";
import { TableCoursesComponent } from "./components/table-courses/table-courses.component";
import { StudentInfoComponent } from "./components/student-info/student-info.component";
import { TeacherInfoComponent } from "./components/teacher-info/teacher-info.component";
import { CourseInfoComponent } from "./components/course-info/course-info.component";
import { EditStudentComponent } from "./components/edit-student/edit-student.component";
import { EditTeacherComponent } from "./components/edit-teacher/edit-teacher.component";
import { EditCourseComponent } from "./components/edit-course/edit-course.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    ClassesComponent,
    CommentsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TeachersComponent,
    AddCourComponent,
    SearchTeacherComponent,
    DashboardStudentComponent,
    DashboardAdminComponent,
    TableTeachersComponent,
    TableStudentsComponent,
    TableCoursesComponent,
    StudentInfoComponent,
    TeacherInfoComponent,
    CourseInfoComponent,
    EditStudentComponent,
    EditTeacherComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
