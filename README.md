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
* Just below the opening `body` tag, render the `header` component.

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

