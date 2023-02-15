<p align="center">
  <img
    width="400"
    src="https://github.com/Synthx/ngx-kit/blob/main/assets/logo.png?raw=true"
    alt="Kit Design System" />
</p>

<p align="center">Components library for Angular 15+</p>

<p align="center">
  <a target='_blank' href="https://synthx.github.io/ngx-kit/">Showcase</a>
</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/@jetpinpin/kit" alt="">
    <img src="https://img.shields.io/github/checks-status/synthx/ngx-kit/main" alt="">
    <img src="https://img.shields.io/github/last-commit/synthx/ngx-kit" alt="">
    <img src="https://img.shields.io/github/license/synthx/ngx-kit" alt="">
</p>

## Introduction

Kit is a complete standalone components library for Angular 15+.

### Concepts

Kit is based on the following concepts:

-   **Components** are the building blocks of the library. They are the most basic elements of the library.
-   **Pipes** are used to transform data. They are used to format data, to convert data, to filter data, etc.

### Principles

Kit was also built with the following principles in mind:

-   🚀 **Modularity** Each component is independent and can be used on its own.
-   🖥️ **Responsiveness** Each component is responsive and adapts to the screen size.
-   🌐 **Internationalization** Each component is internationalized and can be used in any language.
-   💄 **Customization** Each component is customizable and can be adapted to your needs.

## Installation

Before installing the library, you need to install [npm](https://www.npmjs.com/), then you can install kit with the following command:

```shell
npm i @jetpinpin/kit
```

Kit use [Roboto](https://fonts.google.com/specimen/Roboto) fonts by default, and will not be installed automatically. You can install it by many ways, but the easiest way is to install it by load from a CDN :

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
```

You can also install it via CSS import:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
```

Otherwise, you can do so via npm with `typeface` package:

```shell
npm i typeface-roboto
```

then importing it in your `angular.json` file:

```json
{
    "styles": ["node_modules/typeface-roboto/index.css"]
}
```

### Usage

After installing the library, you can use it in your Angular application by only importing the components you need, here is an example with the `KtButton`:

```typescript
// x.module.ts
import { KtButtonComponent } from '@jetpinpin/kit';

@NgModule({
    imports: [
        KtButtonComponent,
    ],
})
```

Then in your template:

```html
<kt-button>Click me</kt-button>
```

## Contributing

ToDo

### Development

ToDo
