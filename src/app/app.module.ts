import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PokedexService } from "app/pokedex.service";
import { CapatilizePipe } from './capatilize.pipe';
import { PokemonKeywordFilterPipe } from './pokemon-keyword-filter.pipe';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { AboutUsComponent } from "app/about-us/about-us.component";

const appRoutes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'about-us',      component: AboutUsComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CapatilizePipe,
    PokemonKeywordFilterPipe,
    PokemonsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
