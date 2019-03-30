import { Component, OnInit, Input } from '@angular/core';
import { TrackTableService } from './track-table.service';

@Component({
  selector: 'tidal-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.css'],
  providers: [TrackTableService]
})
export class TrackTableComponent implements OnInit {
  @Input('trackList') trackList: any;
  columns: string[];
  trackKeys: string[];
  constructor(private _trackTableService: TrackTableService) { }

  ngOnInit() {
    this.columns = this._trackTableService.getColumns();
    this.trackKeys = this._trackTableService.getTrackKeys();
    //['#', 'Title', 'Artist', 'Time', 'Released']
  }

}
