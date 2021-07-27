import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private _album = '../assets/album.json';
   
  constructor( private _http: Http) { }
  
  getAlbum(id: number){
    return this._http.get(this._album).map((response:any) =>response.json())
  }
}
