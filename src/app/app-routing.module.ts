import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: 'menu',
    component: TitleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/header' }],
})
export class AppRoutingModule {}
