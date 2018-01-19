<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn how to create and use basic Angular components. We'll create three components in this project and use one of them with a service. The service has already been setup for this project and can be viewed at `app/services/cars.service.js`. Get familiar with what the service does before beginning the project. 

# Live Example

<a href="https://devmountain.github.io/angular-3-mini/">Click Me!</a>

## Step 1

### Summary

In this step, we'll create a `header` component. This component will be designed to take in a `title` value and then display that value in its template file. We can use `bindings` to accomplish this.

### Instructions

* Open `app/header/header.component.js`.
* Create the skeleton of an Angular component.
  * The Angular application has been created already for you with the name of `fourWheels`.
  * Call the component `header`.
* Link the `header.template.html` to component using `templateUrl`.
  * Remember to use `absolute` paths.
* Define the controller name as `headerCtrl` using `controllerAs`.
* Create a `@` binding for a `title` property.
  * `@` denotes a binding of a string that doesn't change.

### Solution

<details>

<summary> <code> app/header/header.component.js </code> </summary>

```js
angular.module('fourWheels').component('header', {
  templateUrl: 'app/header/header.template.html',
  controllerAs: 'headerCtrl',
  bindings: {
    title: '@'
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


The template will need access to two things in order to function correctly. The first being the list of cars that's stored on `carsSrvc` service. The second being a custom method that calls the `buyCar` method on the `carsSrvc` and then updates the list of cars. Using `this` we can assign values on the controller that the `template` will have access to.

* In the controller in `app/cars/cars.component.js`:
  * Assign an array called `cars` that equals the `cars` array on the `carsSrvc` service.
  * Assign a method called `buyCar` that takes in an `id`:
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

## Step 4

### Summary

In this step, we'll modify the template for the cars component to display the list of cars available for sale. We'll then add our new component into `index.html` so we can see what the template will render.

### Instructions

* Open `app/cars/cars.template.html`.
* Locate the empty `ng-repeat`:
  * Configure the `ng-repeat` to loop through the `cars` array on the `carsCtrl` controller.
* Update the commented sections to display the correct value for each `car`.
  * You can look in the service to see what properties make up a `car` object.
* Locate the empty `ng-click`:
  * Configure the `ng-click` to call the `buyCar` method on the `carsCtrl` controller with the `car`'s `id`.
* Open `index.html`.
* Add a new script tag for the cars component.
* Just below the header component, render the cars component.

### Solution

<details>

<summary> <code> app/cars/cars.template.html </code> </summary>

```html
<div class="cars__parent">
  <div class="cars__child">
    <h1 class="alfa-slab-one">Car Listings</h1>

    <div class="car__container" ng-repeat="car in carsCtrl.cars">
      <div class="car__container-left">

        <div class="car__attribute">
          <span class="car__attribute-header open-sans">Make:</span>
          <div class="car__attribute-value merri-sans">
            <!-- Car Make Here -->
            {{ car.make }}
          </div>
        </div>

        <br />

        <div class="car__attribute">
          <span class="car__attribute-header open-sans">Color:</span>
          <div class="car__attribute-value merri-sans">
            <!-- Car Color Here -->
            {{ car.color }}
          </div>
        </div>

      </div>

      <div class="car__container-middle">

        <div class="car__attribute">
          <span class="car__attribute-header open-sans">Model:</span>
          <div class="car__attribute-value merri-sans">
            <!-- Car Model Here -->
            {{ car.model }}
          </div>
        </div>

        <br />

        <div class="car__attribute">
          <span class="car__attribute-header open-sans mr">Year:</span>
          <div class="car__attribute-value merri-sans">
            <!-- Car Year Here -->
            {{ car.year }}
          </div>
        </div>
      </div>

      <div class="car__container-right">
        <button class="alfa-slab-one" ng-click="carsCtrl.buyCar( car.id )">BUY</button>
      </div>
    </div>

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

    <cars></cars>

    <!-- Including angular then our javascript files. ORDER MATTERS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.js"></script>
    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/services/cars.service.js"></script>
    <!-- Component Files -->
    <script src="app/header/header.component.js"></script>
    <script src="app/cars/cars.component.js"></script>
  </body>
</html>
```

</details>

## Step 5

### Summary

In this step, we'll create a `footer` component. This component will be designed to mimic a `Contact Us` section. This component will take a user's name and email and then when a user submits their information the component will clear out the input fields and display a confirmation message.

### Instructions

* Open `app/footer/footer.component.js`.
* Create the skeleton of an Angular component.
  * Use `fourWheels` as the application name.
  * Use `footer` as the component name.
* Link the `footer.template.html` to the component using `templateUrl`.
* Define the controller name as `footerCtrl` using `controllerAs`.
* Create a controller function using controller:
  * Assign an empty string called `name`.
  * Assign an empty string called `email`.
  * Assign a false boolean called `contacted.`
  * Assign a method called `contact`.
    * This method should set the value of `name` and `email` back to an empty string.
    * This method should set the value of `contacted` to true.

### Solution

<details>

<summary> <code> app/footer/footer.component.js </code> </summary>

```js
angular.module('fourWheels').component('footer', {
  templateUrl: 'app/footer/footer.template.html',
  controllerAs: 'footerCtrl',

  controller: function() {
    this.name = "";
    this.email = "";
    this.contacted = false;
    
    this.contact = function() {
      this.contacted = true;
      this.name = "";
      this.email = "";
    };
  },
});
```

</details>

## Step 6

### Summary

In this step, we'll modify the template for the footer component to use `ng-models` and to have a `ng-click` event to call the `contact` method on the `footerCtrl` controller. We'll then add our new component into `index.html` so we can see what the template will render.

### Instructions

* Locate the `Name Input` comment:
  * Add a new `input` element with:
    * The input should have a class of: `footer__input`.
    * The input should use an `ng-model` equal to the `name` on the `footerCtrl` controller.
* Locate the `Email Input` comment:
  * Add a new `input` element with:
    * The input should have a class of: `footer__input`.
    * The input should use an `ng-model` equal to the `email` on the `footerCtrl` controller.
* Locate the empty `ng-click`:
  * Call the `contact` method on the `footerCtrl` controller.
* Locate the empty `ng-if`:
  * The condition should be when `contacted` on the `footerCtrl` controller equals true.
* Open `index.html`.
* Add a new script tag for the footer component.
* Just below the cars component, render the footer component.

### Solution

<details>

<summary> <code> app/footer/footer.template.html </code> </summary>

```html
<div class="footer__parent">
  <div class="footer__child">
    <h1 class="alfa-slab-one"> Contact Us </h1>

    <div class="footer__inputs">
      <div class="footer__input-container">
        <div class="footer__input-header open-sans">Name: </div>
        <!-- Name Input Here -->
        <input class="footer__input" ng-model="footerCtrl.name" />
      </div>
  
      <div class="footer__input-container">
        <div class="footer__input-header open-sans">Email: </div>
        <!-- Email Input Here -->
        <input class="footer__input" ng-model="footerCtrl.email" />
      </div>
  
      <button class="footer__btn-contact open-sans" ng-click="footerCtrl.contact()">Contact!</button>
      <p class="footer__confirmation open-sans" ng-if="footerCtrl.contacted">We'll send you an email soon, thanks!</p>
    </div>
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

    <cars></cars>

    <footer></footer>

    <!-- Including angular then our javascript files. ORDER MATTERS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.js"></script>
    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/services/cars.service.js"></script>
    <!-- Component Files -->
    <script src="app/header/header.component.js"></script>
    <script src="app/cars/cars.component.js"></script>
    <script src="app/footer/footer.component.js"></script>
  </body>
</html>
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
