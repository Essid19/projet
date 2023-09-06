import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      tel: ["", Validators.required], // Ajoutez les validateurs appropriés si nécessaire
      pwd: ["", Validators.required], // Ajoutez les validateurs appropriés si nécessaire
    });
  }

  ngOnInit() {}
  login() {
    console.log(this.loginForm.value);
  }
  isFormValid(): boolean {
    return this.loginForm.valid;
  }
}
