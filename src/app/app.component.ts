import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Hera';

  ngOnInit(): void {
    console.log(`Example application initialized with name: ${this.name}`);
  }

  getNameAfterTenMS(): Observable<string> {
    return timer(10).pipe(map(() => this.name));
  }
}
