import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-cour",
  templateUrl: "./add-cour.component.html",
  styleUrls: ["./add-cour.component.css"],
})
export class AddCourComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nom: ["", Validators.required],
      discription: ["", Validators.required],
      dure: ["", Validators.required],
    });
  }
  add() {
    console.log(this.addForm.value);
  }

  isFormValid(): boolean {
    return this.addForm.valid;
  }
}
