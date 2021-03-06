import { CategoryContainerComponent } from './category-container/category-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ { path: '', component: CategoryContainerComponent } ];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CategoryRoutingModule {}
