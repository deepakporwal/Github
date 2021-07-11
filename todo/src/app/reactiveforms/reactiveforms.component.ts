import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  
  constructor(formBuilder : FormBuilder) { }

  ngOnInit(): void {
    
  }

}
