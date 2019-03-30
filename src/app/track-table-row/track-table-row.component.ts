import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[tidal-track-table-row]',
  templateUrl: './track-table-row.component.html',
  styleUrls: ['./track-table-row.component.css']
})
export class TrackTableRowComponent implements OnInit {
  @Input('track') track: any;
  @Input('keys') keys: string[];
  constructor() { }

  ngOnInit() {
  }

}
