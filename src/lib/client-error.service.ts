import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ClientErrorService {
  constructor() {}

  getClientError(error: Error): any {
    const err = {
      message: error.message ? error.message : error.toString(),
      stack: error.stack ? error.stack : ""
    };
    return err;
  }
}
