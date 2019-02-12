import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boat-card',
  templateUrl: './boat-card.component.html',
  styleUrls: ['./boat-card.component.css'],
  inputs: ['boat']
})
export class BoatCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
