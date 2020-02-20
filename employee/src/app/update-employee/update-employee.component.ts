import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empObj:Object={}

  constructor(private formBuilder:FormBuilder, private empService:EmployeeService, private router:Router) { }

  ngOnInit(){

  }

  empForm:FormGroup=this.formBuilder.group({
    userName:this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required]
    }),
    gender:['',Validators.required],
    age:['',Validators.required],
    emailId:['',[Validators.required,Validators.email]],
    hobbies:[''],
    id:['']

})

OnSubmit(formValue){

  this.empService.updateData(formValue,this.empForm.value.id).subscribe();
  this.router.navigate(['employee-details']);
}
}
