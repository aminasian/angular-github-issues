import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/github/shared';
import { IssueCollectionComponent } from '@app/github/issue-collection';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/github/store/effects';
import { SharedTestingModuleWithProviders } from '@app/github/shared';
import * as core from '@core/shared';

describe('IssueCollectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedTestingModuleWithProviders,
        core.SharedModule
  ],
  declarations: [IssueCollectionComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the issue collection component', async(() => {
    const fixture = TestBed.createComponent(IssueCollectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});