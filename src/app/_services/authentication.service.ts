import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { ApplicationUser } from 'src/app/_model/application-user';
import { LoginUser } from '../_model/login-user-model'
import { Storage } from '@capacitor/storage';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends GenericHttpService<any>{
    protected baseUrl = `${environment.urlApi}`;
    protected baseSite = `${environment.urlApi}`;
    // private currentUserSubject: BehaviorSubject<any>;
    // public currentUser: BehaviorSubject<any>;

    constructor(private http: HttpClient) {
        super(http);
        // this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('petixco_user')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    registerPartner(user: LoginUser) {
        return this.postAll('account/registerPartner', user);
    }

    registerMaster(user: LoginUser) {
        return this.postAll('account/registerMaster', user);
    }

    registerClient(user: ApplicationUser) {
        return this.postAll('account/registerClient', user);
    }

getClientsStore() {
  return this.http.get<any>(`${this.getUrlApi()}account/getClients`);
}

    save(store: FormData) {
        return this.post('account/save', store);
    }

    login(user) {
        return this.postAll('account/login', user);
    }

    loginPartner(user) {
        return this.postAll('account/loginPartner', user);
    }

    getByFilter(filter: any) {
        return this.postAll('account/filter', filter);
      }

      register(user) {
        return this.postAll('account/register', user);
    }

    recoverPassword(user) {
        return this.postAll('account/recoverPassword', user);
    }

    deleteById(id) {
        return this.delete(`account/${id}`);
  }

  disableUser(user) {
    return this.postAll('account/disable', user);
}

enableUser(user) {
    return this.postAll('account/enable', user);
}

getClients() {
    return this.http.get<any>(`${this.getUrlApi()}account/getClients`);
}

changePassword(user) {
    return this.postAll('account/changePassword', user);
}

confirmUser(user) {
  return this.postAll('account/confirm', user);
}

async setObject(value: any) {
  await Storage.set({ key: 'oxidu_user', value: JSON.stringify(value) });
}

async getCurrentUser() {
  const ret = await Storage.get({ key: 'oxidu_user' });
  return JSON.parse(ret.value);
}

async clear() {
  await Storage.clear();
}

}
