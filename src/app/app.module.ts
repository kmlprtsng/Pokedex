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

@NgModule({
  declarations: [
    AppComponent,
    CapatilizePipe,
    PokemonKeywordFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
