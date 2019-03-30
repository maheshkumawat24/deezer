import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tidal-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input('album') album: any;
  @Output('onAlbumClick') onAlbumClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAlbumClicked() {
    this.onAlbumClick.emit(this.album);
  }

}
