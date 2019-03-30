import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TrackTableComponent } from './track-table/track-table.component';
import { TrackTableRowComponent } from './track-table-row/track-table-row.component';

//services
import { AlbumService } from './album/album.service';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    HomeComponent,
    SearchComponent,
    TrackTableComponent,
    TrackTableRowComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AlbumService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
