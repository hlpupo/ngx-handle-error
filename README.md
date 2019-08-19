# NgxHandleError

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

This library is for handle errors on Angular App

**_Features_**

- Save the errors logs

**_Dependencies_**

- @angular/common
- @angular/core
- rxjs

##Install

npm instal

## Configuration

First you need to configure the service in `app.module.ts`. You can pass optional configuration options with the static `withConfig()` function.

    @NgModule({
      imports: [
         NgxHandleErrorModule.withConfig({
      enviroment: "dev", //current enviroments
      endpoint: "https://localhost", //endpoints wher you save the error
      allowEnviroment: ["dev"],//enviroments that you want to save the logs

    })
      ],
    })

<!--
## Usage

## Output -->
