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

-   [Introduction](#introduction)
    -   [Concepts](#concepts)
    -   [Principles](#principles)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Theming](#theming)
    -   [Internationalization](#internationalization)
-   [Contributing](#contributing)
    -   [Development](#development)

### Concepts

Kit is based on the following concepts:

-   **Components** are the building blocks of the library. They are the most basic elements of the library.
-   **Pipes** are used to transform data. They are used to format data, to convert data, to filter data, etc.

And that's it, Kit don't use standard modules concepts, it use standalone components and pipes. You'll not need to
import one big module to use the library, you'll only need to import the components you need.

Because this feature is only available and officially supported
in [Angular 15+](https://angular.io/guide/standalone-components), Kit is only compatible with Angular 15+ applications.

### Principles

Kit was also built with the following principles in mind:

-   📦 **Standalone** Kit is a standalone library, it does not depend on any other library.
-   🚀 **Modularity** Each component is independent and can be used on its own.
-   🖥️ **Responsiveness** Each component is responsive and adapts to the screen size.
-   🌐 **Internationalization** Each component is internationalized and can be used in any language.
-   💄 **Customization** Each component is customizable and can be adapted to your needs.

## Installation

Before installing the library, you need to install [npm](https://www.npmjs.com/), then you can install kit with the
following command:

```shell
npm i @jetpinpin/kit
```

### Stylesheets

Kit use a single stylesheet to provide the styles of the components. You can import it in your `angular.json` file:

```json
{
    "styles": ["node_modules/@jetpinpin/kit/assets/styles.css"]
}
```

### Assets

Kit use a single assets folder to provide the assets of the components. You can import it in your `angular.json` file:

```json
{
    "assets": [
        {
            "glob": "**/*",
            "input": "node_modules/@jetpinpin/kit/assets",
            "output": "assets"
        }
    ]
}
```

Kit use [Remix](https://remixicon.com/) icons by default, and use svg format, feel free to use any other icon library.

### Fonts

Kit use [Roboto](https://fonts.google.com/specimen/Roboto) fonts by default, and will not be installed automatically.
You can install it by many ways, but the easiest way is to install it by load from a CDN :

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
```

You can also install it via CSS import:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
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

After installing the library, you can use it in your Angular application by only importing the components you need, here
is an example with the `KtButton`:

```typescript
// any.module.ts
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

### Theming

Kit use variables to customize the look and feel of the components. You can override the default variables by changing
theses variables with your themes inside your styles.

Here is an example with the `KtButton`:

```css
.kt-button-alt {
    --kt-color-brand: #ff0000;
}
```

```html
<kt-button class="kt-button-alt">Click me</kt-button>
```

#### Colors

Here is the list of the variables used to customize the colors of the components:

| Variable name               | Default value | Description            |
| --------------------------- | ------------- | ---------------------- |
| `--kt-color-brand`          | `#5162ff`     | Primary color          |
| `--kt-color-brand-contrast` | `#ffffff`     | Primary color contrast |
| `--kt-color-card`           | `#9ca3af`     | Card background color  |
| `--kt-color-title`          | `#0e0e0e`     | Title color            |
| `--kt-color-text`           | `#191919`     | Text color             |
| `--kt-color-border`         | `#8c96a2`     | Border color           |
| `--kt-color-success`        | `#00c853`     | Success color          |
| `--kt-color-error`          | `#dc3545`     | Error color            |

### Internationalization

Kit is internationalized and can be used in any language via the concept of `ng-content` selectors and `@Input`
properties.

The only exception is the form fields components and especially the error messages, you'll need to provide
the `KT_FORM_CONFIG_TOKEN` in your root module to customize the error messages :

```typescript
// root.module.ts
import { KT_FORM_CONFIG_TOKEN } from '@jetpinpin/kit';

@NgModule({
    provide: [
        {
            provide: KT_FORM_CONFIG_TOKEN,
            useValue: {
                required: 'This field is required',
                email: 'This field must be a valid email',
            },
        },
    ],
})
```

Note that parameters in messages are not supported yet.

## Contributing

ToDo

### Development

ToDo
