import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';





@NgModule({
  declarations: [ BlogSidebarComponent, ShopSidebarComponent, UserSidebarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  exports: [ BlogSidebarComponent, ShopSidebarComponent, UserSidebarComponent]
})
export class SidebarModule { }
