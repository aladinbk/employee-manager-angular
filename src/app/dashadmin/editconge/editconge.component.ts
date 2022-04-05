import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from '../../conge.service';

@Component({
  selector: 'app-editconge',
  templateUrl: './editconge.component.html',
  styleUrls: ['./editconge.component.css']
})
export class EditcongeComponent implements OnInit {
  idC:number;

  conge:any;
  constructor(private congeservice:CongeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.idC= this.route.snapshot.params['idC'];
    this.congeservice.getCongeById(this.idC).subscribe(data=>{
      this.conge=data;
      console.log(this.conge);
    },err=>{
      console.log(err);
    })
  }
  onSubmit(){
    this.congeservice.updateConge(this.idC,this.conge).subscribe(data=>{
      this.gotoconges();
    })
  }

  gotoconges(){
    this.router.navigate(['/listconges']);
  }





}
