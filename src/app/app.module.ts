import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailPageComponent } from './hero-detail-page.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroModule } from './hero/hero.module';
import { AppCommonModule } from './common/common.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppCommonModule,
    HeroModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroDetailPageComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
