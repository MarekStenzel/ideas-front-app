import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { errorReducer, ErrorState } from '@app/store/reducers/errors.reducer';
import { AuthEffects } from '@app/store/effects/auth.effect';
import { AuthState } from '@app/store/reducers/auth.reducer';

export interface AppState {
  error: ErrorState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<any> = {
  error: errorReducer
};

export const effects = [
  AuthEffects
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule { }