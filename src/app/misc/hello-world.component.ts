import {Component} from '@angular/core';

import {MiscelaneousService} from './misc.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './misc.html',
  styleUrls: ['./misc.scss']
})
export class HelloWorldComponent {
  name: String = 'I am a property';
  color: String = 'red';
  jokerBirthday: Date = new Date();
  monaBirthday: Date = new Date();
  skullBirthday: Date = new Date();

  greeting: String = 'Audience';

  constructor(private miscService: MiscelaneousService) {}

  public helloWorld() {
    alert(this.miscService.generateHelloWorld());
  }
}
