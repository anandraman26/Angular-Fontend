import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeservice: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();  
  
   }
 
   private getEmployees(){
     this.employeeservice.getEmployeeList().subscribe(data=>{
       this.employees=data;
     });
   }

   updateEmployee(id:string){
      this.router.navigate(['update-employee',id]);
   }

   deleteEmployee(id:string){
    this.employeeservice.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
    }

    employeeDetails(id:string){
    this.router.navigate(['employee-details',id]);
  }

}
