import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoIssuesComponent } from './repo-issues.component';
import { SharedModule } from '@app/components/shared';
import { IssueCollectionComponent } from '@app/components/issue-collection';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/components/store/effects';
import {RouterTestingModule} from '@angular/router/testing';
import { SharedTestingModule, SharedTestingModuleWithProviders } from '@app/components/shared';
import * as repoActions from '@app/components/store/actions';

describe('RepoIssuesComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
    imports: [
        SharedTestingModuleWithProviders,
        BrowserAnimationsModule
  ],
  declarations: [RepoIssuesComponent, IssueCollectionComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the issues component', async(() => {
    const fixture = TestBed.createComponent(RepoIssuesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should call the load all issues', ((done: any) => {
    const fixture = TestBed.createComponent(RepoIssuesComponent);
    const comp = fixture.debugElement.componentInstance;

    comp.store.dispatch(new repoActions.LoadAllRepos({ searchName: 'angular' }));
    comp.store.dispatch(new repoActions.SetCurrentRepoId(24195339));
    fixture.detectChanges();
    comp.actionsSubject
    .asObservable()
    .subscribe((data: any) => {
        switch (data.type) {
            case '[Issue] LOAD ALL SUCCESS':
                fixture.detectChanges();
                expect(Object.keys(comp.repoIssueCollection).length).toEqual(100);
                done();
                break;
            default: console.log('default case hit');
        }
    });


  }));
});
