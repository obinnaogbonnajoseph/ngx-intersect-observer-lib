# Angular library that implements the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Description

You can asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.With this, you can easily implement:

- Lazy-loading of images or other content as a page is scrolled.

- Implementing "infinite scrolling" web sites, when more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.

- Reporting of visibility of advertisements in order to calculate ad revenues.

- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

## DEMO

@see [DEMO HERE](https://h2qutc.github.io/angular-material-components/)

## Getting started

```
  npm install --save ngx-intersect-observer
```

## Setup

```
import { NgxIntersectObserverModule } from 'ngx-intersect-observer';
@NgModule({
  ...
  imports: [
    ...
    NgxIntersectObserverModule
  ]
})
export class AppModule {}
```

## Using the component

```
  <ngx-intersect-observer [actionOnIntersection]="actionOnIntersection" [intersectionObserverInit]="intersectionObserInit" [intersectionCondition]="intersectionCondition"></ngx-intersect-observer>
```

| @Input                       | Type                                                                                              | Default value    | Description                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| **actionOnIntersection**     | function                                                                                          | void             | function to be called when target element is visible and intersection conditions are met       |
| **intersectionCondition**    | boolean                                                                                           | true             | Extra condition(s) to be met for actionOnIntersection to be called                             |
| **intersectionObserverInit** | [IntersectionObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) | {threshold: 0.5} | [Properties](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#properties) |

## Licence

MIT
