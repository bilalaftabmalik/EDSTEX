import { MatGridListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabBase } from '@angular/material/tabs/typings/tab';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderModule,
		FooterModule,
		RouterModule.forRoot(routes),
		MatGridListModule,
		MatTabsModule,
		BrowserAnimationsModule
	],

	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
