import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { employee } from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /* login form elements*/

   /* loginForm=new FormGroup({
     userId:new FormControl(''),
     password:new FormControl('')
   })  

   OnLogin(){
    if(this.loginForm.value.userId=="admin" && this.loginForm.value.password=="admin")
    {
      localStorage.setItem('isLoggedin','true')
      console.log("Login success");
      this.router.navigate(['form'])
    }
    else
    {
      localStorage.setItem('isLoggedin','false')
      console.log("Login failed");
    }
  } */

employeeData:employee={
  userId:'',
  password:''
};

OnLogin(){
  if(this.employeeData.userId =="admin" && this.employeeData.password=="admin")
  {
    localStorage.setItem('isLoggedin','true')
    console.log("Login success");
    this.router.navigate(['form'])
  }
  else
  {
    localStorage.setItem('isLoggedin','false')
    console.log("Login failed");
  }
}

}

