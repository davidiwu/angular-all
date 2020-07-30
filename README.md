# Angular All

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## In this repo

you can find demos for:

* how to use font-awesome in angular
* how to use angular material
* how to create an input component that supprt tags
* difference in promise/async/observable
* create a filter with auto-completion
* how to use form control
* how to use material icons
* more to be added...
* update to angular 10:

  ng update @angular/core @angular/cli

  ng update @angular/material

  to update other npm packages: npm update

* add server side rendering:(useful for SEO and social media site preview), the static homepage will be rendered in sever side and be placed in the <app-root></app-root> tag inside the index.html file. and soon will be replaced by the client app once the bundle has been loaded in the brownser.

  ng add @nguniversal/express-engine --clientProject angular-all
  then run command in the terminal for production:
  >> ng build --prod
  >> ng run angular-all:server:production
  or >> npm run build:ssr for both commands
  >> npm run serve:ssr
  then go to browser at http://localhost:4000

  for testing run:
  >> npm run dev:ssr
  then open browser on http://localhost:4200, check the network requst for localhost, it return the full html page.


  The transition from the server-rendered app to the client app happens quickly on a development machine, but you should always test your apps in real-world scenarios.
