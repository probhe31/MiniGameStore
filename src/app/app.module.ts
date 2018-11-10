import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameItemComponent } from './game-item/game-item.component';
import { GameItemListComponent } from './game-item-list/game-item-list.component';
import { FeaturedGameSectionComponent } from './featured-game-section/featured-game-section.component';
import { IndexSectionComponent } from './index-section/index-section.component';
import { IndexSidebarComponent } from './index-sidebar/index-sidebar.component';
import { GameSectionComponent } from './game-section/game-section.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { FreshGamesSectionComponent } from './fresh-games-section/fresh-games-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { CreatorDashboardComponent } from './creator-dashboard/creator-dashboard.component';
import { CreatorProjectsComponent } from './creator-projects/creator-projects.component';
import { CreatorPaymentsComponent } from './creator-payments/creator-payments.component';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameItemComponent,
    GameItemListComponent,
    FeaturedGameSectionComponent,
    IndexSectionComponent,    
    IndexSidebarComponent, GameSectionComponent, RegisterUserComponent, LoginUserComponent, FreshGamesSectionComponent, FooterSectionComponent, CreatorDashboardComponent, CreatorProjectsComponent, CreatorPaymentsComponent, ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
