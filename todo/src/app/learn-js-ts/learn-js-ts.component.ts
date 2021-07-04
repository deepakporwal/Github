import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-js-ts',
  templateUrl: './learn-js-ts.component.html',
  styleUrls: ['./learn-js-ts.component.css']
})
export class LearnJsTsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hello typescript');  
  }

}
