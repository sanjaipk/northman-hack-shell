import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'flights',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe1.z20.web.core.windows.net/remoteEntry.js',
        exposedModule: './HomeModule'
      })
      .then(m => m.HomePageModule) }
  },
  {
    path: 'second',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe1.z20.web.core.windows.net/remoteEntry.js',
        exposedModule: './Tab2Module'
      })
      .then(m => m.TabsPageModule) }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
