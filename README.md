<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn how to create and use basic Angular components. We'll create three components in this project and use one of them with a service.

Live Example: <a href="https://devmountain.github.io/angular-3-mini/">Click Me!</a>

## Step 1

### Summary

In this step, we'll create the header component. This component will be designed to take in a `title` value and then display that value in its template file. We can use `bindings` to accomplish this.

### Instructions

* Open `app/header/header.component.js`.
* Create the skeleton of an Angular component.
  * The Angular application has been created already for you with the name of `fourWheels`.
  * Call the component `header`.
* Link the `header.template.html` to component using `templateUrl`.
  * Remember to use `absolute` paths.
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

## Step 2

### Summary

In this step, we'll modify the template for the header component to display the value of `title`. We'll then add our new component into `index.html` so we can see what the template will render.

### Instructions

* Open `app/header/header.template.html`.
* Add the value of `title` into the `<h1>` element.
* Open `index.html`.
* Add a new `script` tag for the `header` component.
* Just below the opening `body` tag, render the `header` component with a `title` of `Four Wheels`.

### Solution

<details>

<summary> <code> app/header/header.template.html </code> </summary>

```html
<div class="header__parent">
  <div class="header__child">
    <img class="header__wheel" src="assets/wheel.png" />
    <img class="header__wheel" src="assets/wheel.png" />

    <h1 class="alfa-slab-one">{{ headerCtrl.title }}</h1>
    
    <img class="header__wheel" src="assets/wheel.png" />
    <img class="header__wheel" src="assets/wheel.png" />
  </div>
</div>
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="fourWheels">
  <head>
    <title>Four Wheels</title>
    
    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="Four Wheels Car Store">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- Component Styles -->
    <link rel="stylesheet" href="app/header/header.css" />
    <link rel="stylesheet" href="app/cars/cars.css" />
    <link rel="stylesheet" href="app/footer/footer.css" />
  </head>

  <body>

    <header title="'Four Wheels'"></header>

    <!-- Including angular then our javascript files. ORDER MATTERS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.js"></script>
    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/services/cars.service.js"></script>
    <!-- Component Files -->
    <script src="app/header/header.component.js"></script>
  </body>
</html>
```

</details>

## Step 3

### Summary

In this step, we'll create a `cars` component that will use the `carsSrvc` service to display a list of cars available for sale.

### Instructions

* Open `app/cars/cars.component.js`.
* Create the skeleton of an Angular component.
  * Use `fourWheels` as the application name.
  * Use `cars` as the component name.
* Link the `cars.template.html` to the component using `templateUrl`.
* Define the controller name as `carsCtrl` using `controllerAs`.
* Create a controller function using `controller`:
  * This controller should have the `carsSrvc` service injected into it.


The template will need access to two things in order to function correctly. The first being the list of cars that's stored on `carsSrvc` service. The second being a custom method that calls the `buyCar` method on the `carsSrvc` and then updates the list of cars. Using `this` we can create variables on the controller that the `template` will have access to.

* In the controller in `app/cars/cars.component.js`:
  * Create a variable called `cars` that equals the `cars` array on the `carsSrvc` service.
  * Create a method called `buyCar` that takes in an `id`:
    * This method should call the `buyCar` method on `casSrvc` with the `id`.
    * This method should then update the value of `cars` to be the new value of the `cars` array on the `carsSrvc` service.

### Solution

<details>

<summary> <code> app/cars/cars.component.js </code> </summary>

```js
angular.module('fourWheels').component('cars', {
  templateUrl: 'app/cars/cars.template.html',
  controllerAs: 'carsCtrl',

  controller: function( carsSrvc ) {
    this.cars = carsSrvc.cars;

    this.buyCar = function( id ) {
      carsSrvc.buyCar( id );
      this.cars = carsSrvc.cars;
    };
  }
});
```

</details>

