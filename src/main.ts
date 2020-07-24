import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Greeter } from '@pixelmatic/dce-common';

if (environment.production) {
  enableProdMode();
  let greeter = Greeter("hello");
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
