import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { URLS } from '../shared/constants/URLS';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import Utils from '../shared/helpers/Utils';

@Injectable()
export class AlbumService {

  constructor(private _http: HttpClient) { }

  /**
   * Fetches artist's albums list using artist id
   * @param artistId 
   */
  getArtistsAlbumList(artistId: number): Observable<any> {
    let _URL = environment.proxyUrl + environment.baseUrl + URLS.artistAlbumsListUrl + '\\' + artistId + '\\albums&limit=4';
    return this._http.get(_URL);
  }

  getArtistAlbumsDetails(albumId: number) {
    let _URL = environment.proxyUrl + environment.baseUrl + URLS.artistAlbumDetailUrl + albumId;
    return this._http.get(_URL);
  }

  getAlbumTrackList(trackLink: string) {
    return this._http.get(environment.proxyUrl + trackLink+'&limit=6').pipe(
      tap((data) => {
        data['data'] = data['data'].map((item) => {
          return {
            duration: Utils.convertSecondsToMinutes(item.duration),
            artist: item.artist.name,
            title: item.title,
            track_position: item.track_position,
            released: 2011
          };
        })
      }),
      catchError(Utils.handleHttpError.bind(this))
    );
  }

}
