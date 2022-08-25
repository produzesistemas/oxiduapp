import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BoardModel } from '../_model/board-model-model';

@Injectable({ providedIn: 'root' })
export class BoardModelService extends GenericHttpService<BoardModel> {
    constructor(private http: HttpClient) {
        super(http);
    }

    filterAnonymous(filter: any) {
      return this.postAll('boardModel/filterAnonymous', filter);
    }
}
