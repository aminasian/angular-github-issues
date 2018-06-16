import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search.component';
import { UserSearchCollectionComponent } from '@app/github';
import { SharedModule } from '@app/github/shared';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '@core/';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// todo: put this in a config file
export const firebaseConfig = {
    apiKey: 'AIzaSyB_oLOM5CglXXkH3A1a3oauOUxysPcjmzY',
    authDomain: 'chris-house.firebaseapp.com',
    databaseURL: 'https://chris-house.firebaseio.com',
    projectId: 'chris-house',
    storageBucket: 'chris-house.appspot.com',
    messagingSenderId: '524971702368'
};

describe('JobSearchComponent', () => {
    beforeEach((() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule,
                CoreModule.forRoot(),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFirestoreModule, // imports firebase/firestore, only needed for database features
                AngularFireAuthModule, // imports firebase/auth, only needed for auth features
            ],
            declarations: [SearchComponent],
            providers: [
            ]
        }).compileComponents();
    }));

    it('should create the job search component', ((done: any) => {
        const fixture = TestBed.createComponent(SearchComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        done();
    }));

});
