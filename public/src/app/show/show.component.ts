import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnChanges {
@Input() cakeToShow;
avgRating;
  constructor() { }
ngOnChanges(){
  this.getAvg();
}

  ngOnInit() {
    this.getAvg();
  }

  getAvg(){
    let sum = 0;
    for(let r of this.cakeToShow.ratings){
      sum += r.rating;
    }
    this.avgRating = sum / this.cakeToShow.ratings.length;
  }

}
