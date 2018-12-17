import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() heading ="Staff for Starf";
@Input() img ="undraw_resume_folder_2_arse.svg";
@Input() link="/login";
  constructor() { }
  
  ngOnInit() {
  }

}
