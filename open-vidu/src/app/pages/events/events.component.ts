import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [];

  constructor(private _eventsService:EventsService, private _router:Router) { }

  ngOnInit(): void {
    this._eventsService.getEvents().subscribe(res=> this.events = res.splice(0, 6),err=> console.log(err))
  }


  onEnterEvent(id:number){
    this._router.navigate(['/events', id]);
  }
}
