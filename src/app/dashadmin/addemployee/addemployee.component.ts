import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
 employee = new Employee();  
 id_roles: number;
 id_departement: number;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.employee.roles = [{'id_roles': this.id_roles}];
    this.employee.departements = [{'id_departement': this.id_departement}];
    this.employeeService.addEmployee(this.employee)
    .subscribe(
      (response) => {
        console.log(response);
        
        alert('Employée Ajouté Avec Succées');
        this.router.navigateByUrl('gestionemployee');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        alert("error");
        
      }
    );
}
}