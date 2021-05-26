import { Component, OnInit,Input ,HostBinding} from '@angular/core';

import {Link} from './link.models'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
//no me salio
  @HostBinding('class.active') cssClass = "row"
  @Input() link: Link;

  constructor() { }

  ngOnInit(): void {
  }

}
