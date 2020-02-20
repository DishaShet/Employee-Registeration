import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeData = [];

  constructor(private empService: EmployeeService, private router:Router) { }

  ngOnInit() {
    this.empService.fetchData().subscribe((data: any) => {
      this.employeeData = data
    }, error => {
      console.log(error);
    });
  }

  updateEmployee(id){
    console.log(id)
    this.router.navigate(['updateEmployee',9]);
  }

  deleteEmployee(id){
    this.empService.deleteData(id).subscribe(); 
    location.reload();
  }








}
