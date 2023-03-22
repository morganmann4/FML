// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB5IH-FtLIvgXFXOdXzuG1oojcna5Mbmxs",
    authDomain: "fmll-7ca84.firebaseapp.com",
    projectId: "fmll-7ca84",
    storageBucket: "fmll-7ca84.appspot.com",
    messagingSenderId: "54330204374",
    appId: "1:54330204374:web:a3b554b19c701d95f16977",
    measurementId: "G-RWQTELWCSR"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
