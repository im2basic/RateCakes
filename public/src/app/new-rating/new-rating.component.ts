import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-rating',
  templateUrl: './new-rating.component.html',
  styleUrls: ['./new-rating.component.css']
})
export class NewRatingComponent implements OnInit {
  @Input() cakeId;
  newRating;
  cakeErrors= [];

  constructor(private _HttpService: HttpService) { }

  ngOnInit() {
    this.newRating = {
      rating: 1,
      comment: ""
    }
  }

  createRating(){
    let obs = this._HttpService.addRating(this.cakeId, this.newRating);
    obs.subscribe(data => {
      if(data => ['results']){
        this.newRating = {
          rating: 1,
          comment: ""
        }
      }
      else{
        if(data['errors']['rating']){
          this.cakeErrors.push(data['errors']['rating']['message'])
        }
        if(data['errors']['comment']){
          this.cakeErrors.push(data['errors']['comment']['message'])
        }
      }
    })
  }

}
