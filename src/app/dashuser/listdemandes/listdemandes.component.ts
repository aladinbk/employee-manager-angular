import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../conge.service';
import { Conge } from '../../conge';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listdemandes',
  templateUrl: './listdemandes.component.html',
  styleUrls: ['./listdemandes.component.css']
})
export class ListdemandesComponent implements OnInit {
  idemploye: any;
  conges: Conge[];
  constructor(private congservice:CongeService) { }
  
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('employee'));
    console.log(user);
    this.idemploye = user.id_employer;
    console.log(this.idemploye);
    this.getcongperidemp();
  }
  public getcongperidemp(): void {
    this.congservice.getCongesperidemp(this.idemploye).subscribe(
      (response: Conge[]) =>{
        this.conges=response;
        console.log(this.conges);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  supprimer(idC:number){
    let conf=confirm("Etes Vous Sure ?")
    if(conf){
      this.congservice.deleteConge(idC).subscribe(data=>{
      console.log(data);
      this.getcongperidemp();
    },err=>{
    console.log(err);
    })
    }
  }




}
