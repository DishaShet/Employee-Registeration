import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    return this.httpClient.get('http://localhost:4000/employee');
  }

  fetchDataById(id) {
    return this.httpClient.get("http://localhost:4000/employee/"+stringify(id));
  }

  postData(employee) {
    console.log("inside postdata")
    return this.httpClient.post('http://localhost:4000/employee', employee, this.httpOptions)
  }

  deleteData(id){
    const url=`${"http://localhost:4000/employee"}/${id}`;
    return this.httpClient.delete(url,this.httpOptions)
  }

  updateData(employee,id){
    const url=`${"http://localhost:4000/employee"}/${id}`;
    return this.httpClient.put(url,employee,this.httpOptions);
  }

}



