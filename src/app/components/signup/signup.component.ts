import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  signupForm: FormGroup;
  mypath;
  imagePreview: any;
  x;
  ngOnInit() {
    this.mypath = this.router.url;
    if (this.mypath == "/signupteacher") {
      this.x = "Signup teacher";
      this.signupForm = this.formBuilder.group({
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, Validators.email]],
        pwd: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(12),
          ],
        ],
        tel: [
          "",
          [
            Validators.required,
            Validators.pattern(/^\+216 \d{3} \d{3} \d{3}$/),
          ],
        ],
        adresse: ["", [Validators.required, Validators.minLength(3)]],
        specialite: ["", Validators.required],
        pdf: [""],
      });
    } else if (this.mypath == "/signupstudent") {
      this.x = " Signup Student";
      this.signupForm = this.formBuilder.group({
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, Validators.email]],
        pwd: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(12),
          ],
        ],
        tel: [
          "",
          [
            Validators.required,
            Validators.pattern(/^\+216 \d{3} \d{3} \d{3}$/),
          ],
        ],
        adresse: ["", [Validators.required, Validators.minLength(3)]],
        img: ["", Validators.required],
      });
    } else if (this.mypath == "/signupparent") {
      this.x = " Signup Parent";
      this.signupForm = this.formBuilder.group({
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, Validators.email]],
        pwd: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(12),
          ],
        ],
        tel: [
          "",
          [
            Validators.required,
            Validators.pattern(/^\+216 \d{3} \d{3} \d{3}$/),
          ],
        ],
        adresse: ["", [Validators.required, Validators.minLength(3)]],
        telstudent: ["", Validators.required],
      });
    } else if (this.mypath == "/signupadmin") {
      this.x = "Signup Admin";
      this.signupForm = this.formBuilder.group({
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, Validators.email]],
        pwd: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(12),
          ],
        ],
        tel: [
          "",
          [
            Validators.required,
            Validators.pattern(/^\+216 \d{3} \d{3} \d{3}$/),
          ],
        ],
        adresse: ["", [Validators.required, Validators.minLength(3)]],
      });
    }
  }
  signup() {
    console.log(this.signupForm.value);
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ pdf: file, img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
