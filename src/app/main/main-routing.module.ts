import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {PostersComponent} from "./posters/posters.component";
import {AuthComponent} from "./auth/auth.component";
import {PosterComponent} from "./poster/poster.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posters',
    component: PostersComponent
  },
  {
    path: 'poster',
    component: PosterComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
