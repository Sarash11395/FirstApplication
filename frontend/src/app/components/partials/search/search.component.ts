import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm : string = '';

  constructor(activatedRoute:ActivatedRoute, private router : Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.seachTerm){
        this.searchTerm = params.seachTerm;
      }
    })
  }

  search(term:string):void{
    if(term){
      const url = '/search/' ;
      this.router.navigateByUrl(url+term);
    }
  }
}
