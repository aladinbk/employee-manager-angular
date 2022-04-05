import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { CongeService } from '../../conge.service';
import { Conge } from '../../conge';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;
  data: any;
  nbemp: any;
  constructor(private employeeService: EmployeeService , private congservice: CongeService) { }
  ngOnInit(){
    this.getEmployees();
    this.getnumbConges();
    this.getnumbemp();
  }
  public getnumbConges(): void{
    this.congservice.getnbConges().subscribe(
      (resp: Conge[])=>{
        this.data=resp;
        console.log(this.data);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  public getnumbemp(): void{
    this.employeeService.getnbemp().subscribe(
      (response: Employee[])=>{
        this.nbemp=response;
        console.log(this.nbemp);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) =>{
        this.employees=response;
      }, 
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }



  public onDeleteEmloyee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 


}
