# Angular-UI-Design

This repository contains the source code for an application built on the UI Design subject at the University of Singidunum, Computer Science department.

## Technology

The application has been developed using the Angular 18 front-end framework and the following libraries:

- [Angular Material](https://material.angular.io/)
- [Sweet Alert 2](https://sweetalert2.github.io/)

## Application Structure

The source code uses the standard Angular structure without the app.module.ts file. All modules are directly imported within the components that use them.
Directory Structure

- `app` - The main directory containing all the components of the application.
- `src/models` - This directory contains type and interface definitions required for efficient application development.
- `src/services` - This directory contains the definitions of the services necessary for the application's operation.

## Additional Info

The application uses Angular Router, which requires that when deploying the application to production, every route is redirected to the index.html file, as the routes are defined programmatically in JavaScript rather than physically.
