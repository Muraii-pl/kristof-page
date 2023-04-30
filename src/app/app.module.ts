import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './common/ui/ui.module';
import { StaticDependenciesService } from './common/core/services/StaticDependenciesService';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
  ],
  providers: [
    StaticDependenciesService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private readonly _staticDependenciesService: StaticDependenciesService
  ) {
  }
}
