import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  isChecked = true;

  selectedColor=2;

  colors = [
    {id:1, name:'red'},
    {id:2, name:'green'},
    {id:3, name:'blue'}
  ]

  onChange($event) {
    console.log($event);
  }
  
  passName = "all";

  onSubaccountChanged(event) {
    console.log(event);
    this.passName = event
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
