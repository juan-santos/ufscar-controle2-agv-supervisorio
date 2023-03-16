import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [HomeComponent, HeaderComponent, SidebarComponent],
    imports: [CommonModule, HomeRoutingModule, HttpClientModule],
})
export class HomeModule {}
