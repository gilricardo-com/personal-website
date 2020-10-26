import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  data : Date = new Date();
  date: {year: number, month: number};
  
  ngOnInit(): void {
  }

}
