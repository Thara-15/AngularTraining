import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { providePrimeNG} from 'primeng/config';
import  Lara from '@primeng/themes/lara';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      theme:{
        preset : Lara,
        options:{
          colorScheme:'dark-blue'
        }
 
      }
    })
  ]
};
