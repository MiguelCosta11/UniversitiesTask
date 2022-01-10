import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService 
{
  readonly UrlUnivs ="http://universities.hipolabs.com/search";

  constructor(private http:HttpClient) { }

  getUnivsList(){
    return this.http.get<any>(this.UrlUnivs);
  }

  getSingListUnivs(country: string)
  {
    return this.http.get<any>(this.UrlUnivs + '?country=' + country)
    .pipe(map((res:any)=>
    {
    //console.log(country);
    return res;
    }))
  }

  getjustOneUnivList(name: string){
    return this.http.get<any>(this.UrlUnivs + '?name=' + name)
  .pipe(map((res:any)=>{
    //console.log(name);
    return res;
    
}))
}
}