import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-courses",
  templateUrl: "./table-courses.component.html",
  styleUrls: ["./table-courses.component.css"],
})
export class TableCoursesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  display(x) {
    this.router.navigate([`courseinfo/${x}`]);
  }
  edit(x) {
    localStorage.setItem("idcourse", JSON.stringify(x));
    this.router.navigate(["editplayer"]);
  }
}
