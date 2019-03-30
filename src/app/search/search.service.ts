import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { URLS } from '../shared/constants/URLS';
@Injectable()
export class SearchService {

  baseUrl: string = environment.baseUrl;
  proxyUrl: string = environment.proxyUrl;
  artistSearchUrl: string = URLS.artistSearchUrl;
  artistAlbumsListUrl: string = '/artist'
  artistAlbumDetailUrl: string = URLS.artistAlbumDetailUrl;
  constructor(private _http: HttpClient) {
  }
  /**
   * 
   * @param queryString : artist Name which user types to search
   */
  search(artistName: string) {
    let _URL = this.proxyUrl +this.baseUrl + this.artistSearchUrl + artistName;
    return this._http.get(_URL);
  }

 

}
