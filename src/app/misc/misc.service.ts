import {Injectable} from '@angular/core';

@Injectable()
export class MiscelaneousService {

  generateHelloWorld(): String {
    return 'Enhaced with SRP hello world!';
  }
}
