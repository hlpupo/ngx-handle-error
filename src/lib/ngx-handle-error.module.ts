import { NgModule, ErrorHandler } from "@angular/core";
import { NgxHandleErrorService } from "./ngx-handle-error.service";
import { IHandleErrorConfig } from "./ihandle-error-config";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ServerErrorInterceptor } from "./server-error.interceptor";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxHandleErrorComponent } from "./ngx-handle-error.component";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [NgxHandleErrorComponent],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule
  ],
  exports: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: NgxHandleErrorService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    }
  ]
})
export class NgxHandleErrorModule {
  static withConfig(
    userConfig: IHandleErrorConfig = { notification: false }
  ): ModuleWithProviders {
    return {
      ngModule: NgxHandleErrorModule,
      providers: [{ provide: "USER_CONFIG", useValue: userConfig }]
    };
  }
}
