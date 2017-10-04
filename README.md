<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn how to create and use basic Angular components. We'll create three components in this project and use one of them with a service.

Live Example: <a href="https://devmountain.github.io/angular-3-mini/">Click Me!</a>

## Step 1

### Summary

In this step, we'll create the header component. This component will be designed to take in a `title` value and then display that value in its template file. We can use `bindings` to accomplish this.

### Instructions

* Open `app/header/header.component.js`.
* Create the skeleton of an Angular Component.
  * The Angular application has been created already for you with the name of `fourWheels`.
  * Call the component `header`.
* Link the `header.template.html` to component using `templateUrl`.
* Define the controller name as `headerCtrl` using `controllerAs`.
* Create a `one-way` binding for a `title` property.

### Solution

<details>

<summary> <code> app/header/header.component.js </code> </summary>

```js
angular.module('fourWheels').component('header', {
  templateUrl: 'app/header/header.template.html',
  controllerAs: 'headerCtrl',
  bindings: {
    title: '<'
  }
});
```

</details>

