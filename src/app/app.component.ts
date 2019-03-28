import {Component, OnInit} from '@angular/core';
import {AppState} from '@app/store/app-store.module';
import {Store} from '@ngrx/store';
import {SetInitialUser} from '@app/store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new SetInitialUser());
  }

}
