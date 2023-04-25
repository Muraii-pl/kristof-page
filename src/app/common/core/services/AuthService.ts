import { Injectable } from '@angular/core';
import { ApiService } from './ApiService';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _apiService: ApiService,
  ) { }
}
