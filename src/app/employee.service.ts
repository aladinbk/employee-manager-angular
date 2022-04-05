import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import { environment } from '../environments/environment';
import "rxjs/add/operator/map";
const httpOptions={
  headers: new HttpHeaders({'content-type': 'application/json'})
}
@Injectable()
export class EmployeeService {
  private apiServerUrl= environment.BaseUrl;
  private _urllogin= "http://localhost:8584/login";
  private _urlpost= "http://localhost:8584/employee";
  private host:string="http://localhost:8584";
  constructor(private http: HttpClient) { }

  public getnbemp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}nbempl`);
  }


  public getemployesbypageandsize(page:number,size:number){
    return this.http.get(this.host+"/chercherEmp?page="+page+"&size="+size);
  }
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}employees`);
  }

  public getEmployeeById(id_employer:number){
    return this.http.get<Employee[]>(`${this.apiServerUrl}employees/${id_employer}`);
  }
  login(employee:Employee): Observable<any>{
    return this.http.post<any>(this._urllogin,employee);
  }
  public addEmployee(employee:Employee){
    return this.http.post<any>(this._urlpost,employee);
  }
  public updateEmployee(id_employer:number,employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}modemployeer/${id_employer}`, employee);
  }
  public deleteEmployee(id_employer: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}suppemployee/${id_employer}`);
  }

  


  
}
