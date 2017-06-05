import { NgModule ,ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {ClientregisterComponent} from './registration/candidate/clientregister.component';

export const routes:Routes=[
    { path: '', redirectTo:'index', pathMatch:'full' },
    {path:'index', component:HomepageComponent},
    {path:'register/candidate', component:ClientregisterComponent},
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes)