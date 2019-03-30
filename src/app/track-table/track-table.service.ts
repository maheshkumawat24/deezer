import { Injectable } from '@angular/core';

@Injectable()
export class TrackTableService {

  constructor() { }

  getColumns(): string[] {
    return ['#', 'Title', 'Artist', 'Time', 'Released'];
  }

  getTrackKeys(): string[] {
    return ['track_position', 'title', 'artist', 'duration','released']
  }
}
