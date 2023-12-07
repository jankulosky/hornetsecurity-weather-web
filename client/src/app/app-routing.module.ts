import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WeatherComponent } from './components/weather/weather.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [{ path: 'weather', component: WeatherComponent }],
  },
  { path: '**', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
