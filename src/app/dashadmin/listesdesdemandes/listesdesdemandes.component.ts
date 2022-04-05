import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../conge.service';
import { Conge } from '../../conge';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listesdesdemandes',
  templateUrl: './listesdesdemandes.component.html',
  styleUrls: ['./listesdesdemandes.component.css']
})
export class ListesdesdemandesComponent implements OnInit {
  conges: Conge[];
  totalPages:number; 
  pages:Array<number>;
  size:number=5;
  currentPage:number=0;
  constructor(private congservice:CongeService,private router:Router) { }

  ngOnInit() {
    this.getCongebypage();
  }

 
  supprimer(idC:number){
    let conf=confirm(" Vous voulez supprimer, ce congé...!")
    if(conf){
      this.congservice.deleteConge(idC).subscribe(data=>{
      console.log(data);
      this.getCongebypage();
    },err=>{
    console.log(err);
    })
    }
  }
  public getCongebypage(): void {
    this.congservice.getcongesbypageandsize(this.currentPage,this.size).subscribe(
      (response: Conge[]) =>{
        
        
        
        this.totalPages=response["totalPages"];
        this.pages= new Array<number>(this.totalPages);
        this.conges=response;
        
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  onPageCong(i){
    this.currentPage=i;
    this.getCongebypage();
  }
  updateconge(idC:number){
    this.router.navigate(['updateconge', idC]);
  }


}
