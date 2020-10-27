import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ErrorComponent } from './sections/error-page/error/error.component'
import { AboutMeComponent } from './sections/about-me/about-me.component'

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                 component: ComponentsComponent },
    { path: 'sections/aboutme',     component: AboutMeComponent },
    { path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
