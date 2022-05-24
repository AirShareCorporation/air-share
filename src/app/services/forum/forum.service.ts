import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Response} from "../../interfaces/response";
import {RESPONSES} from "../../mocks/mock-responses";
import {Topic} from "../../interfaces/topic";
import {TOPICS} from "../../mocks/mock-topics";
import {Category} from "../../interfaces/category";
import {CATEGORIES} from "../../mocks/mock-categories";
import {Status} from "../../interfaces/status";
import {STATUS} from "../../mocks/mock-status";
import {Unit} from "../../interfaces/unit";
import {UNITS} from "../../mocks/mock-units";
import {Role} from "../../interfaces/role";
import {ROLES} from "../../mocks/mock-roles";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  /*-------------------------- TOPICS --------------------------*/

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }

  getTopic(id: number): Observable<Topic> {
    const topic = TOPICS.find(t => t.id === id)!;
    return of(topic);
  }

  deleteTopic(id: number): Observable<Topic[]> {
    return of(TOPICS.filter(t => t.id !== id));
  }

  /*-------------------------- RESPONSES --------------------------*/

  getResponses(): Observable<Response[]> {
    return of(RESPONSES);
  }

  getResponse(id: number): Observable<Response> {
    const response = RESPONSES.find(r => r.id === id)!;
    return of(response);
  }

  deleteResponse(id: number): Observable<Response[]> {
    return of(RESPONSES.filter(r => r.id !== id));
  }

  /*-------------------------- CATEGORIES --------------------------*/

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(id: number): Observable<Category> {
    const category = CATEGORIES.find(c => c.id === id)!;
    return of(category);
  }

  deleteCategory(id: number): Observable<Category[]> {
    return of(CATEGORIES.filter(c => c.id !== id));
  }

  /*-------------------------- STATUS --------------------------*/

  getAllStatus(): Observable<Status[]> {
    return of(STATUS);
  }

  getStatus(id: number): Observable<Status> {
    const status = STATUS.find(s => s.id === id)!;
    return of(status);
  }

  deleteStatus(id: number): Observable<Status[]> {
    return of(STATUS.filter(s => s.id !== id));
  }

  /*-------------------------- UNITS --------------------------*/

  getUnits(): Observable<Unit[]> {
    return of(UNITS);
  }

  getUnit(id: number): Observable<Unit> {
    const unit = UNITS.find(u => u.id === id)!;
    return of(unit);
  }

  deleteUnit(id: number): Observable<Unit[]> {
    return of(UNITS.filter(u => u.id !== id));
  }

  /*-------------------------- ROLES --------------------------*/

  getRoles(): Observable<Role[]> {
    return of(ROLES);
  }

  getRole(id: number): Observable<Role> {
    const role = ROLES.find(r => r.id === id)!;
    return of(role);
  }

  deleteRole(id: number): Observable<Role[]> {
    return of(ROLES.filter(r => r.id !== id));
  }
}
