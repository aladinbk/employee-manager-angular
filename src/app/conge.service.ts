import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Conge } from './conge';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CongeService {
  private apiServerUrl= environment.BaseUrl;
  private _urlpost= "http://localhost:8584/conge";
  public host = 'http://localhost:8584';
  constructor(private http: HttpClient) { }
  

  public getCongeById(idC:number){
    return this.http.get<Conge[]>(`${this.apiServerUrl}conge/${idC}`);
  }
  public getcongesbypageandsize(page:number,size:number){
    return this.http.get(this.host+"/chercherconge?page="+page+"&size="+size);
  }
  public getnbConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiServerUrl}nbconges`);
  }

  public getConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiServerUrl}congietes`);
  }
  public getCongesperidemp(id_employer:number): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiServerUrl}conger/${id_employer}`);
  }

  public AddConge(cong:Conge){
    return this.http.post<Conge>(this._urlpost,cong).subscribe(value => {
    console.log(value);
  });
  }
  public deleteConge(idC:number){
    return this.http.delete(`${this.apiServerUrl}suppconge/${idC}`);
  }

  public updateConge(idC:number,conge: Conge): Observable<Conge> {
    return this.http.put<Conge>(`${this.apiServerUrl}modconge/${idC}`, conge);
  }

}
