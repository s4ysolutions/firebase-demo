import {initializeApp} from 'firebase/app';
import firebaseConfig from './config';

import {ReCaptchaV3Provider, initializeAppCheck} from 'firebase/app-check';

import appCheckJSON from './appCheck.json';
import {FirebaseApp} from 'firebase/app';

(<any>self).FIREBASE_APPCHECK_DEBUG_TOKEN = appCheckJSON.debug;

let app:FirebaseApp;

console.log(appCheckJSON);
try {
  app = initializeApp(firebaseConfig);

  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(appCheckJSON.key),

    isTokenAutoRefreshEnabled: true,
  });
} catch (e) {
  console.error(e);
}

export default app;
