import { Component } from '@angular/core';

import {Link} from './components/link/link.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[]
  constructor(){
    this.links = [
      new Link("angular","https://angular.io/",21),
      new Link("react","wwww",30),
      new Link("next","wwww",12)
    ]
    // console.log(this.links)
  }

  send(title:HTMLInputElement,link:HTMLInputElement){
    this.links.push(new Link(title.value,link.value,0))
    title.value = ''
    link.value = ''
    return false
  }
  title = 'angular-votes-app';
}
