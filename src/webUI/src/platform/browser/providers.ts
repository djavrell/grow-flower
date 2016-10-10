/*
 * These are globally available services in any component or any other service
 */

// Angular 2 core
import {
}                             from '@angular/core';

// Angular 2 common
import {
}                              from '@angular/common';

// Angular 2 Router
//import {
//		ROUTER_PROVIDERS
//}                             from '@angular/router';

// Other
const OTHER = [
];


/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
const APPLICATION_PROVIDERS = [
];

export const PROVIDERS = [
	...APPLICATION_PROVIDERS,
	OTHER
];
