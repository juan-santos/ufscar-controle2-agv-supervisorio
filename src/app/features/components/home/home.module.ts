import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [HomeComponent, HeaderComponent, SidebarComponent],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
