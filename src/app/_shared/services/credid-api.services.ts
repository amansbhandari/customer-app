import { Observable} from "rxjs";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { User } from "./interface/user.interface";

@Injectable()
export class CredidApiService {
  get endpoint(): string {
    return "http://localhost:3000";
  }

  private get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders().set("content-type", "application/json"),
    };
  }
  constructor(
    private http: HttpClient,
  ) {}

  createUser(user: User, did: string): Observable<any> {

    return this.http.post(`${this.endpoint}/user`, user, {
      ...this.options,
      params: {
        did,
      },
    });
  }
}
