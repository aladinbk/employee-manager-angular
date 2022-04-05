import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  id_employer:number;
  employee:any; 
  constructor(private empservice:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id_employer = this.route.snapshot.params['id_employer']; 
    this.empservice.getEmployeeById(this.id_employer).subscribe(data=>{
      this.employee=data;
      console.log(data);
      console.log(this.employee);
    },err=>{
      console.log(err);
    })
  }



  onSubmit(){
    this.empservice.updateEmployee(this.id_employer,this.employee).subscribe(data=>{
        this.gotoListemployes();
    })
  }
  gotoListemployes(){
    this.router.navigate(['/gestionemployee']);
  }

}
