import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HelloWorldComponent} from './hello-world.component';
import {BoxHighlighterDirective} from './misc.directive';
import {MyUpperCasePipe} from './misc.pipe';
import {MiscelaneousService} from './misc.service';

@NgModule({
  declarations: [BoxHighlighterDirective, HelloWorldComponent, MyUpperCasePipe],
  imports: [CommonModule, FormsModule],
  providers: [MiscelaneousService]
})
export class MiscelaneousModule {
}
