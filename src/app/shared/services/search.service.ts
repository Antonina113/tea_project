import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public subject : Subject<string | null >  = new Subject<string | null >;
  private searchText: string = '';

  constructor() {}
  textSearch(params:string|null){
    if (params){
      this.searchText = params;
    }
    this.subject.next(this.searchText);
  }
getSearchText(){
    return this.searchText;
}

  clearSearch() {
    this.subject.next('');
  }
}
