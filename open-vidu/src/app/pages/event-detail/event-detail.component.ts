import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event:any={};

  constructor(private activatedRoute:ActivatedRoute,private _evnts:EventsService) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this._evnts.getEvent(id)
      .subscribe(res=>(this.event=res),err=>console.warn(err));
  }

}
