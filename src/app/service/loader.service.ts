import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isPage: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
}
