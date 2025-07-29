# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/ajatdarojat45/mongoloquent-nestjs/compare/v0.1.2...v1.0.0) (2025-07-29)

### ✨ Added

- `forRoot()` for basic synchronous module registration
- `forRootAsync()` for asynchronous configuration support
- `forFeature()` for registering models in feature modules
- `@InjectModel()` decorator for injecting Mongoloquent models
- `@InjectDB()` decorator for injecting Mongoloquent DB instance

### 🔗 Features

- Query builder support from `Mongoloquent`
- Relationship support with `.with()` eager loading
- Support for **multiple MongoDB connections**
- **Full MongoDB transaction support**

### 🧱 Notes

This is the **first stable release** of `@mongoloquent/nestjs`.
It provides seamless integration between Mongoloquent ORM and NestJS.

### [0.1.2](https://github.com/ajatdarojat45/mongoloquent-nestjs/compare/v0.1.1...v0.1.2) (2025-07-28)

### Features

- add DB provider in forRoot and forRootAsync ([4a24c81](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/4a24c81cdd3cb3ab2e7f625317af7ae07e9db25c))
- add getMongoloquentDBToken function and add & update constants ([e0e0d0e](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/e0e0d0eeb471d960b39daf4cc3a1e44492f49317))
- add InjectDB decorator ([52fead5](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/52fead5431aa3796abe737a71421b0f9d0e0ee79))
- create MongoloquentError class ([9127279](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/91272797dddf30c68bda9e4b7675fc997df4f002))

### 0.1.0 (2025-07-27)

### Features

- add decorators and ulits ([ac4de00](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/ac4de0076b0f3e086abde07dfa07fd9338a21431))
- add forRoot, forRootAsync and forFeature ([019f8ef](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/019f8efee3b92e705751a94cbb8864feff80364e))

### [0.1.1](https://github.com/ajatdarojat45/mongoloquent-nestjs/compare/v0.1.0...v0.1.1) (2025-07-27)
