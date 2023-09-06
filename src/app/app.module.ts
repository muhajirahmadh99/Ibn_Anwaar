import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header&footer/header/header.component';
import { FooterComponent } from './header&footer/footer/footer.component';
import { MainComponent } from './content-pages/main/main.component';
import { RegisterComponent } from './content-pages/register/register.component';
import { LogComponent } from './content-pages/log/log.component';
import { MenComponent } from './content-pages/men/men.component';
import { WomenComponent } from './content-pages/women/women.component';
import { KidsComponent } from './content-pages/kids/kids.component';
import { ContactComponent } from './content-pages/contact/contact.component';
import { AboutComponent } from './content-pages/about/about.component';
import { CodComponent } from './payment-page/cod/cod.component';
import { PayComponent } from './payment-page/pay/pay.component';
import { RegardsComponent } from './content-pages/regards/regards.component';
import { TrackComponent } from './content-pages/track/track.component';
import { AddcartComponent } from './content-pages/addcart/addcart.component';
import { ViewpageComponent } from './content-pages/viewpage/viewpage.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModalComponent } from './content-pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    LogComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ContactComponent,
    AboutComponent,
    CodComponent,
    PayComponent,
    RegardsComponent,
    TrackComponent,
    AddcartComponent,
    ViewpageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
