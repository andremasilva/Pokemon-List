import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from'rxjs/operators';
import { Observable } from 'rxjs';

import { FecthAllPokemonsResponse, Pokemon } from '../interfaces/pokemon.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2'

  constructor( private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<FecthAllPokemonsResponse>(`${ this.url}/pokemon?limit=1500`).pipe(
      map( this.SmallPokemonToPokemon )
    )
   }


   private SmallPokemonToPokemon ( resp: FecthAllPokemonsResponse): Pokemon[] {

    return resp.results.map( poke => {

      const ulrArr = poke.url.split('/');
      const id = ulrArr[6]
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`

      return{
       id,
       name: poke.name,
       pic,
     }
    })

   }

}
