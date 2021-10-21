import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';

import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [BlogOneComponent, BlogTwoComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule,

    HeaderModule,
    FooterModule,
    SidebarModule
  ],
  exports: [BlogOneComponent, BlogTwoComponent, BlogSingleComponent]
})
export class BlogModule { }
