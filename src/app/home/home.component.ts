import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album/album.service';
import Utils from '../shared/helpers/Utils';

@Component({
  selector: 'tidal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albums: Array<any> = [];
  tracks: Array<any> = [];
  selectedAlbum: any;
  artistName: string;
  constructor(private _albumService: AlbumService) { }

  ngOnInit() {
  }
  /**
   * 
   * @param selectedArtist : Object (user clicked artist)
   * set albums details from rest api
   */
  getArtistAlbumDetail(selectedArtist) {
    this.tracks = [];
    this.artistName = selectedArtist.artist.name;
    this._albumService.getArtistsAlbumList(selectedArtist.artist.id).subscribe((result) => {
        this.albums = result['data'];
    }, error => Utils.handleHttpError)
  }

  /**
   * 
   * @param selectedAlbum : Object ( user clicked album)
   * get tracks list from selected album
   */
  getTracksDetailsFromAlbum(selectedAlbum: any) {
    this._albumService.getAlbumTrackList(selectedAlbum.tracklist).subscribe((result) => {
      this.tracks = result['data'];
    }, error => Utils.handleHttpError)
  }
  /**
   * 
   * @param album : users clicked album object
   * @param element : HTMLElement
   */
  displayTracksList(album, element) {
    this.selectedAlbum = album;
    this.getTracksDetailsFromAlbum(album);
    //scroll to end of the table
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
