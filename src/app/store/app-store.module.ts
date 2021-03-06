import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {routerReducer, RouterReducerState, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';

import { errorReducer, ErrorState } from '@app/store/reducers/errors.reducer';
import { AuthEffects } from '@app/store/effects/auth.effect';
import { authReducer, AuthState } from '@app/store/reducers/auth.reducer';
import {CustomSerializer, RouterStateUrl} from '@app/store/reducers/router.reducer';

export interface AppState {
  error: ErrorState;
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<any> = {
  error: errorReducer,
  auth: authReducer,
  router: routerReducer
};

export const effects = [
  AuthEffects
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class AppStoreModule { }
