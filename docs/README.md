# Galaxy

[![Build Status](https://travis-ci.com/loyep/galaxy.svg?token=YhCvPgf5uspm18kxdLkJ&branch=master)](https://travis-ci.com/loyep/galaxy)
[![License](https://poser.pugx.org/loyep/galaxy/license)](LICENSE)

> A Laravel-Vue Website.

## Features

- Laravel 5.8 
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register and password reset
- Socialite integration

## Installation

- `composer create-project --prefer-dist loyep/galaxy`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan galaxy:install`)
- `php artisan migrate --seed`
- `npm install`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.


## License

Galaxy is released under an MIT license. See [License](https://github.com/loyep/galaxy/blob/master/LICENSE) for more information.