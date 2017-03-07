import './polyfills.ts';
import './app';
import "./services";
import "./filters";
import "./components";
import './app.routes';


import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';


import {CardComponent} from "./components/card.component";
import {SpinnerComponent} from "./components/spinner.component"
import {Contact} from "./services/contact.resource";
import {
    toasterServiceProvider,
    uiRouterStateParamsProvider,
    uiRouterStateProvider
} from "./ajs-upgraded-providers"
import {ContactService} from "./services/contact.service";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {LaddaModule} from "angular2-ladda/module/module";
import {PersonListComponent} from "./components/person-list.component";
import {PersonEditComponent} from "./components/person-edit.component";
import {SearchComponent} from "./components/search.component";


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    LaddaModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    DefaultImagePipe,
    PersonEditComponent,
    SearchComponent
  ],
  entryComponents: [
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonEditComponent,
    SearchComponent
  ],
  providers: [
    Contact,
    ContactService,
    toasterServiceProvider,
    uiRouterStateParamsProvider,
    uiRouterStateProvider
  ],

})
export class AppModule {
  // Override Angular 2 bootstrap so it doesn't do anything
  ngDoBootstrap() {
  }
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['codecraft']);
});

