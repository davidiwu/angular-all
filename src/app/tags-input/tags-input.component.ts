import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent implements OnInit {

  tags = [];
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  remove(tag) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1)
  }

  onEnter(tag) {
    this.tags.push(tag);
  }

}
