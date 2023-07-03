import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DisplayPage } from '../display/display.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'display',
    component: DisplayPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
