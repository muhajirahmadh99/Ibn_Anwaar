import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './content-pages/log/log.component';
import { HeaderComponent } from './header&footer/header/header.component';
import { FooterComponent } from './header&footer/footer/footer.component';
import { MainComponent } from './content-pages/main/main.component';
import { RegisterComponent } from './content-pages/register/register.component';
import { MenComponent } from './content-pages/men/men.component';
import { WomenComponent } from './content-pages/women/women.component';
import { KidsComponent } from './content-pages/kids/kids.component';
import { ContactComponent } from './content-pages/contact/contact.component';
import { AboutComponent } from './content-pages/about/about.component';
import { PayComponent } from './payment-page/pay/pay.component';
import { CodComponent } from './payment-page/cod/cod.component';
import { RegardsComponent } from './content-pages/regards/regards.component';
import { TrackComponent } from './content-pages/track/track.component';
import { AddcartComponent } from './content-pages/addcart/addcart.component';
import { ViewpageComponent } from './content-pages/viewpage/viewpage.component';

const routes: Routes = [
   {
    path :'', redirectTo : 'home', pathMatch : 'full'
   },
   {
    path:'home',component:MainComponent
   },
  //  {
  // path:'header',component : HeaderComponent
  //  },
  //  {
  //   path:'footer',component : FooterComponent
  //    },
  {
    path :'log',component:LogComponent
  },
  {
    path :'view',component:ViewpageComponent
  },
  {
    path :'register',component:RegisterComponent
  },
  {
    path :'addcart',component:AddcartComponent
  },
  {
    path :'men',component:MenComponent
  },
  {
    path :'women',component:WomenComponent
  },
  {
    path :'kids',component:KidsComponent
  },
  {
    path :'contact',component:ContactComponent
  },
  {
    path :'about',component:AboutComponent
  },
  {
    path :'pay',component:PayComponent
  },
  {
    path :'cod',component:CodComponent
  },
  {
    path :'regards',component:RegardsComponent
  },
  {
    path :'track',component:TrackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
