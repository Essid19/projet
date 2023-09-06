import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-teachers",
  templateUrl: "./table-teachers.component.html",
  styleUrls: ["./table-teachers.component.css"],
})
export class TableTeachersComponent implements OnInit {
  teacherstab;
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.service.getAllTeachers().subscribe((e) => {
      this.teacherstab = e.teachers;
    });
  }
  display(x) {
    this.router.navigate([`teacherinfo/${x}`]);
  }
}
