import {Routes} from '@angular/router';
import {ResultComponent} from './pages/result/result.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {path: 'result', component: ResultComponent},
  {path: '', component: HomeComponent}
];
