import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public cours: string[] = ["OCA", "OCP", "Spring Boot", "Angular"]

  constructor(private http: HttpClient) { }

  getListeCours() {
    return this.cours;
  }

  getListUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
