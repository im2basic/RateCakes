import { Component, OnInit } from '@angular/core';

//--IMPORT--
import {HttpService } from './http.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate my Cakes';
  newCake;
  allCakes;
  cakeErrors = [];
  selectedCake;
  newRating;

  // tasks;
  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    this.getAllCakes();
    this.newCake = {
      baker: "",
      imgUrl: ""
    }
    this.newRating = {
      rating: 1,
      comment: ""
    }
  }

  getAllCakes(){
    let obs = this._httpService.getCakes();
    obs.subscribe(data => {
      this.allCakes = data['results'];
    })
  }

  createCake(){
    let obs = this._httpService.createCake(this.newCake);
    obs.subscribe(data => {
      if(data['results']){
        console.log("its works");
        this.newCake = {baker: "", imgUrl: ""}
        this.getAllCakes();
      }
      //---VALIDATIONSvvvvv---
      else{
        if(data['errors']['baker']){
          this.cakeErrors.push(data['errors']['baker']['message'])
        }
        if(data['errors']['imgUrl']){
          this.cakeErrors.push(data['errors']['imgUrl']['message'])
        }
      }
    })
  }

  getOne(id){
    let obs = this._httpService.getOnecake(id);
    obs.subscribe(data =>{
      this.selectedCake = data['result'];
    })
  }

closeShow(){
  this.selectedCake = null;
}

}
