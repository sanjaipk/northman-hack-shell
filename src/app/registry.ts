import { loadRemoteModule } from '@angular-architects/module-federation';

// export function getMFE (mfeName: string): any {
//   switch (mfeName) {
//     case 'mfe2':
//      loadRemoteModule({
//       type: 'module',
//       remoteEntry: 'http://localhost:4005/remoteEntry.js',
//       exposedModule: './web-components'
//       }).then((err: any) => console.debug(`element  loaded!`,mfeName))
//       .catch((err: any) => console.error(`error loading `, mfeName, err));
//       break;
//   }
// }

//https://www.sharooq.com/solved-element-implicitly-has-an-any-type-because-expression-of-type-x-cant-be-used-to-index-type


// {
//     mfe2: () => loadRemoteModule({
//         type: 'script',
//         remoteEntry: 'http://localhost:4005/remoteEntry.js',
//         remoteName: 'mfe2',
//         exposedModule: './web-components'
//     }),
//     mfe3: () => loadRemoteModule({
//       type: 'script',
//       remoteEntry: 'http://localhost:4202/remoteEntry.js',
//       remoteName: 'mfe2',
//       exposedModule: './web-components'
//   }),
// };

export const registry = {
  mfe2: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'https://mfe1.z20.web.core.windows.net/',
      exposedModule: './web-components',
      elementName: 'mf3-element'
  })
};



/*
The calls needed for this example have been placed in the registry object shown.
Please note that the first call is using type: 'module' while the others are going with type: 'script'.
The reason is that the first one uses Angular 13.1 or higher.
Beginning with Angular 13, the CLI emits EcmaScript modules instead of just "plain old" JavaScript files.
*/
