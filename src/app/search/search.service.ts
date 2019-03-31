import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { URLS } from '../shared/constants/URLS';
@Injectable()
export class SearchService {

  constructor(private _http: HttpClient) {
  }
  /**
   * 
   * @param queryString : artist Name which user types to search
   */
  search(artistName: string) {
    let _URL = environment.proxyUrl + environment.baseUrl + URLS.artistSearchUrl +artistName;
    return this._http.get(_URL);
  }

}
