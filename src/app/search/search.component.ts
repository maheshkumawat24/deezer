import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'
import { Subscription } from 'rxjs/Subscription';
import Utils from '../shared/helpers/Utils';

@Component({
  selector: 'tidal-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  isArtistSelected: boolean = false;
  artists: any = [];
  searchField: FormControl = new FormControl();
  searchFiledValueSubscription: Subscription;
  selectedAlbum: any;
  @Output('onArtistClick') onArtistClick = new EventEmitter();
  constructor(
    private _searchService: SearchService
  ) { }

  ngOnInit() {
    this.initComponentData();
  }

  ngOnDestroy() {
    this.searchFiledValueSubscription.unsubscribe();
  }
  //initialize component data
  //subscribing values emitted by the query field.
  initComponentData() {
    //calling rest api after 200ms ( when user stop typing)
    this.searchFiledValueSubscription = this.searchField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged() //discard an emission for duplicate predecessor
      //mapping observables in order
      .switchMap(searchValue => (this._searchService.search(searchValue))) 
      .subscribe(response => {
        this.isArtistSelected = false;
        this.artists = response['data']
      }, error => Utils.handleHttpError);
  }

  onArtistClicked(selectedArtist) {
    this.artists = []; // clear previous search results
    this.onArtistClick.emit(selectedArtist);
    this.isArtistSelected = true;
  }

}
