import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import { ShowService } from '../show.service';
import { debounceTime } from 'rxjs/operators'; 

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('', Validators.minLength(2));
  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe(
      (searchValue: string) => {
      if (!this.search.invalid && searchValue){
        this.searchEvent.emit(searchValue)
        console.log("true")
      }
    })
  }

}
