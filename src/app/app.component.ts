import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Hera';

  ngOnInit(): void {
    console.log(`Example application initialized with name: ${name}`);
  }
}
