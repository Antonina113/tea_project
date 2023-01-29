import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchElement = new FormControl('');
  constructor(private searchService: SearchService ) {

  }
  search(value: string | null){
    this.searchService.textSearch(value);
  }
  searchClea(){
    this.searchService.clearSearch()
  }

}
