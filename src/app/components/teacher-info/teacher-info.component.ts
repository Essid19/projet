import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-teacher-info",
  templateUrl: "./teacher-info.component.html",
  styleUrls: ["./teacher-info.component.css"],
})
export class TeacherInfoComponent implements OnInit {
  id;
  obj;
  constructor(private service: UserService, private x: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.x.snapshot.paramMap.get("id");
    this.service.getUserById(this.id).subscribe((res): void => {
      this.obj = res.user;
    });
  }
}
