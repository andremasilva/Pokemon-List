import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    PokemonlistComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonlistComponent
  ]
})
export class PokemonModule { }
