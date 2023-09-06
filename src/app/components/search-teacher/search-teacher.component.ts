import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-search-teacher",
  templateUrl: "./search-teacher.component.html",
  styleUrls: ["./search-teacher.component.css"],
})
export class SearchTeacherComponent implements OnInit {
  formulaire: FormGroup;
  form = {};
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  add() {
    console.log(this.form);
  }
}
