import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  data:any;
  constructor(private router: Router,private empservice :EmployeeService) { }

  ngOnInit() {

  }
 

onlogin() {
  this.empservice.login(this.employee)
  .subscribe(
    res => {
      console.log(res);
      if(res.roles[0].nom_roles === 'Admin'){
        alert("...Bienvenu Admin...");
        this.employee=res;
        localStorage.setItem('employee',JSON.stringify(this.employee))
        this.router.navigateByUrl('/home');
      }
      if(res.roles[0].nom_roles === 'Employee'){
       
        alert("...Bienvenu Employée...");
        this.employee=res;
        localStorage.setItem('employee',JSON.stringify(this.employee))
        this.router.navigateByUrl('/homeemployee');
        
      }
      if(res.roles[0].nom_roles ===''){
        alert("...ERROR...");
        this.router.navigateByUrl('/login');
      }

      
    },
    err => console.log(err)
  ) 
}
}

