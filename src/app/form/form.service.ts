import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, reduce, scan } from 'rxjs/operators';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isManager: boolean;
  organization: string;
}

const FORM_API: string = 'http://localhost:3000/members';

// @Injectable()
// export class FormService {
//   constructor(private http: HttpClient) {}
//   getOrganizations(): Observable<User[]> {
//     return this.http
//       .get<any>(FORM_API)
//       .pipe(map((data) => data.map((val: User) => val.organization)));
//   }
// }

@Injectable()
export class FormService {
  constructor(private http: HttpClient) {}
  getOrganizations(): Observable<any> {
    return this.http.get<Observable<any>>(FORM_API).pipe(
      concatMap((data) =>
        from(data).pipe(
          reduce((acc: string[], val: User) => {
            acc.push(val.organization);
            return acc;
          }, [])
        )
      )
    );
  }
}
