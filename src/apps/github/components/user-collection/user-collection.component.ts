import { Component, Input } from '@angular/core';
import { User } from '@app/github/shared/models';
import { Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
@Component({
  selector: 'app-user-search-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.css']
})
export class UserSearchCollectionComponent {
  @Input() userCollection: User[];

  constructor(private store: Store<fromRoot.AppState>) {
    this.userCollection = new Array();
  }
  setUser(user: User) {
    this.store.dispatch(new userActions.SetCurrentUserId(user.login));
  }
}
