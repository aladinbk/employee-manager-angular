import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  employees: Employee[];
  size:number=5;
  currentPage:number=0;
  data:Employee[];
  totalPages:number; 
  pages:Array<number>;
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
    this.getEmployeesbypage();
  }

  supprimer(id_employer:number){
    let conf=confirm("Etes Vous Sure ?")
    if(conf){
      this.employeeService.deleteEmployee(id_employer).subscribe(data=>{
      console.log(data);
      this.getEmployeesbypage();
    },err=>{
    console.log(err);
    })
    }
  }
  public getEmployeesbypage(): void {
    this.employeeService.getemployesbypageandsize(this.currentPage,this.size).subscribe(
      (response: Employee[]) =>{
        
        
        
        this.totalPages=response["totalPages"];
        this.pages= new Array<number>(this.totalPages);
        this.employees=response;
        
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  onPageEmp(i){
    this.currentPage=i;
    this.getEmployeesbypage();
  }

  updateemployer(id_employer:number){
    this.router.navigate(['updateemployee', id_employer]);
  }

}
