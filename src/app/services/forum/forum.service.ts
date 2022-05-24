import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Response} from "../../interfaces/response";
import {RESPONSES} from "../../mocks/mock-responses";
import {Topic} from "../../interfaces/topic";
import {TOPICS} from "../../mocks/mock-topics";
import {Category} from "../../interfaces/category";
import {CATEGORIES} from "../../mocks/mock-categories";

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
}
