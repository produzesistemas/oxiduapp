import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment } from '../_model/establishment-model';

@Injectable({ providedIn: 'root' })

export class EstablishmentService extends GenericHttpService<Establishment> {
    protected baseUrl = `${environment.urlApi}`;
    constructor(private http: HttpClient) {
        super(http);
    }

    getById(id: any) {
      return this.http.get<Establishment>(`${this.getUrlApi()}establishment/${id}`);
  }

    save(entity) {
        return this.post('establishment/save', entity);
     }

     getByFilter(filter: any) {
      return this.postAll('establishment/filter', filter);
    }

    // filterAnonymous(filter: any) {
    //   return this.postAll('establishment/filterAnonymous', filter);
    // }

  deleteById(entity) {
          return this.post('establishment/delete', entity);
    }


  active(entity) {
    return this.post('establishment/active', entity);
 }

 getByState(filter: any) {
  return this.postAll('establishment/filterByState', filter);
}

getByDescription(filter: any) {
  return this.postAll('establishment/filterByDescription', filter);
}

}
