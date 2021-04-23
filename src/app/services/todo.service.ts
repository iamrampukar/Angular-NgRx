import { Injectable } from '@angular/core';
import { RestApiService } from './../shared/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _restApi: RestApiService) { }

  get username() {
    return 'This good nepal';
  }
}
