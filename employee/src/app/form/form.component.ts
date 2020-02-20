import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  empList=[];
  constructor(private formBuilder:FormBuilder, private empService:EmployeeService, private router:Router) { 

  }

     empForm:FormGroup=this.formBuilder.group({
     userName:this.formBuilder.group({
       firstName:['',Validators.required],
       lastName:['',Validators.required]
     }),
     gender:['',Validators.required],
     age:['',Validators.required],
     emailId:['',[Validators.required,Validators.email]],
     hobbies:['']

 })
  ngOnInit() {
    
  }

  OnSubmit(){
    this.empList.push(this.empForm.value);
    this.empService.postData(this.empForm.value).subscribe(data=>console.log(data))
    // console.log(this.empList);
    this.router.navigate(['employee-details']);
  }



  
}
