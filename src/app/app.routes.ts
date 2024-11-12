import {Routes} from '@angular/router';
import {ResultComponent} from './result/result.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: 'result', component: ResultComponent},
  {path: '', component: HomeComponent}
];
