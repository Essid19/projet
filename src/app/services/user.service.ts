import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userURL: string = "http://localhost:3003/users";

  constructor(private http: HttpClient) {}

  addUser(obj) {
    return this.http.post<{ msg: string; user: any }>(this.userURL, obj);
  }
  // REQUEST TO GET user BY ID
  getUserById(id) {
    // return this.http.get(this.userURL + "/" +id)
    return this.http.get<{ user: any; msg: string }>(this.userURL + "/" + id);
  }
  //REQUEST TO DELETE user BY ID
  deleteUser(id) {
    return this.http.delete<{ msg: string }>(this.userURL + "/" + id);
  }
  //REQUEST TO EDIT user
  updateUser(obj) {
    return this.http.put<{ msg: string }>(this.userURL, obj);
  }
  // REQUEST TO GET ALL useres
  getAllTeachers() {
    return this.http.get<{ teachers: any }>(this.userURL + "/teachers");
  }
  getAllStudents() {
    return this.http.get<{ students: any }>(this.userURL + "/students");
  }
}
