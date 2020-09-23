import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';

const routes: Routes = [
  { path: 'home', component: DummyComponent},
  { path: 'allcars', component: DummyComponent},
  { path: 'signin', component: DummyComponent},
  { path: 'signup', component: DummyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
