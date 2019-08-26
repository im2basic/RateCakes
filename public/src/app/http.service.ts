import { Injectable } from '@angular/core';

//---IMPORT---
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//--WHERE WE CREATE A OBJECT---
export class HttpService {

  constructor( private _http: HttpClient ) {

  }
  getCakes(){
    return this._http.get('index');
  }

  getOnecake(id){
    return this._http.get(`/${id}`);
  }

  createCake(newCake){
    return this._http.post('/create', newCake);
  }

  updateCake(updateCake){
    return this._http.post(`/update/${updateCake._id}`,updateCake);
  }

  addRating(id,rating){
    return this._http.post(`/create/rating/${id}`, rating);
  }

  getRating(id){
    return this._http.get(`/create/rating/${id}`)
  }

  destroyCake(id){
    return this._http.delete(`/destroy/${id}`);
  }

}
