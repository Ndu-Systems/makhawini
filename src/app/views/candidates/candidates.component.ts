import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
  animations: [routerTransition()]

})
export class CandidatesComponent implements OnInit {
  candidates$;
  constructor() { }

  ngOnInit() {
  }

}
