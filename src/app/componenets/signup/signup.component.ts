import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import validator from './validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup;

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      firstName:['',[Validators.minLength(5),Validators.required]],
     lastName:['',[Validators.minLength(3),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pwd:['',[Validators.minLength(8),Validators.pattern('[a-z1-9]'),Validators.required]],
      confirmpwd:['',Validators.required]
    },{
      validators: [validator.match('pwd', 'confirmpwd')]
    })
  }
signup(x:any){
  console.log("btn clicked", x);
}

}
