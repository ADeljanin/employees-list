import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Team } from 'src/app/shared/models/team.model';
import { User } from 'src/app/shared/models/user.model';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${API}/users/${id}`);
  }

}
