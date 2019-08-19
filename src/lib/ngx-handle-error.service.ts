import { Injectable, ErrorHandler, Injector, Inject } from "@angular/core";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { ClientErrorService } from "./client-error.service";
import { ServerErrorService } from "./server-error.service";
import { ErrorFormat } from "./error-format.class";
import * as moment_ from "moment";
import { IHandleErrorConfig } from "./ihandle-error-config";
@Injectable({
  providedIn: "root"
})
export class NgxHandleErrorService implements ErrorHandler {
  private _config: IHandleErrorConfig;
  constructor(
    private injector: Injector,
    @Inject("USER_CONFIG") config: IHandleErrorConfig = { notification: false }
  ) {
    this._config = config;
  }

  handleError(error: Error | HttpErrorResponse) {
    const moment = moment_;
    const clientErrorService = this.injector.get(ClientErrorService);
    const serverErrorService = this.injector.get(ServerErrorService);

    let objError: Partial<ErrorFormat> = new ErrorFormat({});
    Object.assign(
      objError,
      {
        time: moment().format("MM-DD-YYYY HH:mm:ss")
      },
      {
        enviroment: this._config.enviroment
      }
    );

    if (error instanceof HttpErrorResponse) {
      const e = serverErrorService.getServerError(error);
      Object.assign(objError, {
        message: e,
        tag: "Server"
      });
    } else if (error instanceof TypeError) {
      const e = clientErrorService.getClientError(error);
      Object.assign(objError, {
        message: e.message,
        stack: e.stack,
        tag: "TypeError"
      });
    } else if (error instanceof Error) {
      const e = clientErrorService.getClientError(error);
      Object.assign(objError, {
        message: e.message,
        stack: e.stack,
        tag: "Error"
      });
    } else {
      const e = clientErrorService.getClientError(error);
      Object.assign(objError, {
        message: e.message,
        stack: e.stack,
        tag: "UknowError"
      });
    }

    if (
      Array.isArray(this._config.allowEnviroment) &&
      this._config.allowEnviroment.includes(this._config.enviroment)
    ) {
      serverErrorService
        .postError(this._config.endpoint, objError)
        .subscribe(r => console.log(r));
    }
  }
}
