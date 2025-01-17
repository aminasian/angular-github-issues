import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'github',
    pathMatch: 'full',
  },
  {
    path: 'github',
    loadChildren: '@app/github/+github.module#GithubModule'
  },
  {
    path: 'jobs',
    loadChildren: '@app/jobs/+jobs.module#JobModule'
  },
  { path: '**', redirectTo: 'NotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
