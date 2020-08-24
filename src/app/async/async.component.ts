import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, AfterViewInit {

  bsMsg = '';
  promiseMsg = '';
  asyncMsg = '';

  checkAuth(cb) {
    this.bsMsg = "Auth....";
    setTimeout(() => {
      cb({ isAuth: true })
    }, 2000)
  }

  getUser(authInfo, cb) {
    this.bsMsg = "Get user Info...";
    if (!authInfo.isAuth) {
      cb(null)
      return
    }
    setTimeout(() => {
      cb({ name: 'David' })
    }, 2000)
  }

  constructor(private http: HttpClient) {

   }



  ngOnInit(): void {
  }

  cbClick(event): void {
    this.checkAuth(authInfo => {
      this.getUser(authInfo, user => {
        this.bsMsg = user.name;
      })
    })
  }

  checkAuthPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ isAuth: true })
      }, 2000)
    })
  }

  getUserPromise(auth) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (auth.isAuth) {
          resolve({ name: 'David' });
        } else {
          reject('Not logged in!');
        }
      }, 2000);
    });
  }

  promiseClick(event): void {
    this.promiseMsg = "Auth....";
    this.checkAuthPromise()
      .then(authStatus => {
        this.promiseMsg = "Get User Info..."
        return this.getUserPromise(authStatus);
      })
      .then((user: any) => {
        this.promiseMsg = user.name;
      })
  }

  async fetchUser() {
    this.asyncMsg = "Auth...";
    let authSatus = await this.checkAuthPromise();
    this.asyncMsg = "Get User Info...";
    let user: any = await this.getUserPromise(authSatus);
    this.asyncMsg = user.name;
    return user;
  }

  asyncClick(event): void {
    // wrong way to get user object
    // let user = this.fetchUser();
    // console.log(user);

    // correct way to get user:
    this.fetchUser().then(user => { console.log(user) });
  }

  checkAuthObs() {
    return Observable.create(obs => {
      setTimeout(() => {
        obs.next({ isAuth: true });
      }, 2000)
    })
  }

  fetchUserObs() {
    return Observable.create(obs => {
      setTimeout(() => {
        obs.next({ name: 'David' });
      }, 2000)
    })
  }

  obsMsg = '';
  @ViewChild('obsButton') obsButton: ElementRef;

  @ViewChild('input1') input1: ElementRef;
  @ViewChild('input2') input2: ElementRef;

  combine = "";

  ngAfterViewInit(): void {

    fromEvent(this.obsButton.nativeElement, 'click')
      .pipe(
        switchMap(event => {
          this.obsMsg = "Auth....";
          return this.checkAuthObs();
        }),
        switchMap((auth: any) => {
          this.obsMsg = "Get User Info..."
          if (auth.isAuth) {
            return this.fetchUserObs();
          }
        })
      )
      .subscribe((user: any) => {
        this.obsMsg = user.name;
      })

    let obs1 = fromEvent(this.input1.nativeElement, 'input');
    let obs2 = fromEvent(this.input2.nativeElement, 'input');

    obs1.pipe(
      mergeMap((event1: any) => {
        return obs2.pipe(
          map((event2: any) => {
            return event1.target.value + " " + event2.target.value;
          })
        )
      })
    ).subscribe(
      combinedValue => {
        this.combine = combinedValue;
      }
    );
  }

}
