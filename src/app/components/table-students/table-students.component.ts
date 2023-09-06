import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-students",
  templateUrl: "./table-students.component.html",
  styleUrls: ["./table-students.component.css"],
})
export class TableStudentsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  display(x) {
    this.router.navigate([`studentinfo/${x}`]);
  }
}
