<div align="center">
    <img src="/laravel-validated-dto-banner.png" alt="Validated DTO for Laravel" style="width: 520px; max-width: 100%; height: auto; margin-bottom: 2rem;">
</div>

# Validated DTO for Laravel

- [Introduction](#introduction)
- [Why use this package](#why-use-this-package)
- [Features](#features)
- [Documentation](#documentation)

## Introduction

Validated DTO provides Data Transfer Objects with validation for Laravel applications. It lets you define typed objects that validate incoming data using the same validation rules you already use for requests.

DTOs are useful when data needs to move between layers of an application without coupling validation to a single transport, such as an HTTP request.

## Why use this package

Request validation works well at the edge of a Laravel application, but the same operation may also run from a queued job, console command, model action, or service class. Keeping validation in the DTO lets those entry points share one validated data contract.

With this package, you define validation once and reuse it wherever the application needs that data shape.

## Features

- Integrate DTOs into existing Laravel applications.
- Validate data with Laravel validation rules.
- Type DTO properties with public PHP properties.
- Cast scalar, object, collection, model, enum, and nested DTO data.
- Define custom validation messages and attribute names.
- Map incoming and outgoing property names.
- Build API response objects with resource DTOs.
- Use DTOs with Laravel Livewire.
- Generate TypeScript definitions from DTO classes.

## Documentation

Read the docs in this order if you are adding Validated DTO to an application for the first time:

- [Installation](getting-started/installation.md)
- [Configuration](getting-started/configuration.md)
- [Generating DTOs](basics/generating-dtos.md)
- [Defining DTO properties](basics/defining-dto-properties.md)
- [Defining validation rules](basics/defining-validation-rules.md)
- [Creating DTO instances](basics/creating-dto-instances.md)
- [Accessing DTO data](basics/accessing-dto-data.md)
- [Type casting](type-casting/introduction.md)
