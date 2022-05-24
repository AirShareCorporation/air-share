import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Response} from "../../interfaces/response";
import {RESPONSES} from "../../mocks/mock-responses";
import {Topic} from "../../interfaces/topic";
import {TOPICS} from "../../mocks/mock-topics";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }

  getResponses(): Observable<Response[]> {
    return of(RESPONSES);
  }

  getTopic(id: number): Observable<Topic> {
    const topic = TOPICS.find(t => t.id === id)!;
    return of(topic);
  }

  getResponse(id: number): Observable<Response> {
    const response = RESPONSES.find(r => r.id === id)!;
    return of(response);
  }

  deleteTopic(id: number): Observable<Topic[]> {
    return of(TOPICS.filter(t => t.id !== id));
  }

  deleteResponse(id: number): Observable<Response[]> {
    return of(RESPONSES.filter(r => r.id !== id));
  }
}
