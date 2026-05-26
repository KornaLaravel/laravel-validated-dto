# Installation

You can install Laravel Validated DTO using Composer:

```bash
composer require wendelladriel/laravel-validated-dto
```

Laravel discovers the package service provider automatically. The service provider registers the configuration file and Artisan commands used by the package.

You can publish the package resources with:

```bash
php artisan vendor:publish --tag="validated-dto"
```

This publishes the configuration file to `config/dto.php` and the generator stubs to the `stubs` directory.

If you only need one resource, you may publish the config file or stubs separately:

```bash
php artisan vendor:publish --tag="validated-dto-config"
php artisan vendor:publish --tag="validated-dto-stubs"
```
