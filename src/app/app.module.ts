import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SeriesListComponent } from './series/series-list.component';
import { SeriesInfoComponent } from './series/series-info.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FilmesListComponent } from './filmes/filmes-list.component';
import { FilmesInfoComponent } from './filmes/filmes-info.component';
import { SeriesAddComponent } from './series/series-add.component';

@NgModule({
  declarations: [AppComponent,
    SeriesListComponent,
    SeriesInfoComponent,
    SeriesAddComponent,
    AvaliacaoComponent,
    FilmesListComponent,
    FilmesInfoComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
