import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServerErrorService {
  constructor(private _http: HttpClient) {}

  getServerError(error: HttpErrorResponse): string {
    return navigator.onLine ? error.message : "No Internet Connection";
  }

  postError(endpoint, objError) {
    return this._http.post(endpoint, objError);
  }
}
