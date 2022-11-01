import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Billie } from './billie/billie.component';
import { Camila } from './camila/camila.component';
import { Katy } from './katy/katy.component';

const routes: Routes = [
  { path: 'artist/Billie', component: Billie },
  { path: 'artist/Camila', component: Camila },
  { path: 'artist/Katy', component: Katy },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
