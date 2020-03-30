import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JavaMavenSharedModule } from 'app/shared/shared.module';
import { JavaMavenCoreModule } from 'app/core/core.module';
import { JavaMavenAppRoutingModule } from './app-routing.module';
import { JavaMavenHomeModule } from './home/home.module';
import { JavaMavenEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JavaMavenSharedModule,
    JavaMavenCoreModule,
    JavaMavenHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JavaMavenEntityModule,
    JavaMavenAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JavaMavenAppModule {}
