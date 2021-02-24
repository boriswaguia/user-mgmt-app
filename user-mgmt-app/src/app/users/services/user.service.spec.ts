import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from '../domain/user.domain';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('UserService', () => {
  let service: UserService;

  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get data', () => {
    const expected: User[] = [
      {
        firstName: 'firstName',
        lastName: 'lastName',
        login: 'login',
        password: 'password'
      }
    ];

    const spy = spyOn(httpClient, 'get').and.returnValue(of([...expected]));
    service.get().subscribe(results => {
      expect(results).toEqual(expected);
    })
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
