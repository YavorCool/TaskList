import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
  <div class="col-md-9">
   <h1>{{title}}</h1>
   <router-outlet></router-outlet>
  </div>   
 `
})
export class AppComponent{
  title = 'Список задач'
}
