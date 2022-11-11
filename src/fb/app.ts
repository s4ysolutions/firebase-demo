import {initializeApp} from 'firebase/app';
import firebaseConfig from './config';

import {ReCaptchaV3Provider, initializeAppCheck} from 'firebase/app-check';

import appCheckJSON from './appCheck.json';

const app = initializeApp(firebaseConfig);
(<any>self).FIREBASE_APPCHECK_DEBUG_TOKEN = appCheckJSON.debug;
export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(appCheckJSON.key),

  isTokenAutoRefreshEnabled: true,
});

export default app;
