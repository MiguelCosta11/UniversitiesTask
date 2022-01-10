import { Component, Input, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/internal/Observable';


import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-univs',
  templateUrl: './show-univs.component.html',
  styleUrls: ['./show-univs.component.css'] 
})
export class ShowUnivsComponent implements OnInit {

  constructor(private service:SharedService) { }

  UnivsList!: any;
  SingleUnivsList!: any;
  ClickedList!: any;

  @Input()
  country!: string;
  getfirstoflist!:string;
  name!: string;
  

  ngOnInit(): void {
    this.refreshUnivsList();
    this.getfirstoflist = "Afghanistan";
    this.getfirstcountry(this.getfirstoflist); 

  }

  refreshUnivsList(){
    this.service.getUnivsList()
    .subscribe(data=>{
      this.UnivsList=data;
      const removeDuplicates = (array: any[], key: string | number) => {
        return array.reduce((arr, item) => {
          const removed = arr.filter((i: { [x: string]: any; }) => i[key] !== item[key]);
          return [...removed, item];
        }, []);
      };
      //console.log(removeDuplicates(this.UnivsList, 'country'))
      this.UnivsList = removeDuplicates(this.UnivsList, 'country');
      this.UnivsList.sort((a: { country: string; }, b: { country: any; }) => a.country.localeCompare(b.country))
    });
  }

  SingleUnivs(country: string){
    this.service.getSingListUnivs(country)
    .subscribe(res=>{
        this.SingleUnivsList=res;
        //console.log(this.SingleUnivsList);
    })
  
  }

  getfirstcountry(getfirstoflist: string){
    this.service.getSingListUnivs(getfirstoflist)
    .subscribe(data=>{
      this.SingleUnivsList=data;
    })
  }

  getUnivClicked(name: string){
    this.service.getjustOneUnivList(name)
    .subscribe(res=>{
      this.ClickedList=res;
      //console.log(this.ClickedList);
    
    })
  }

  

}

