# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/ajatdarojat45/mongoloquent-nestjs/compare/v1.1.0...v1.2.0) (2025-08-15)

### Features

- add MONGOLOQUENT_TRANSACTIONAL_RETRIES constant for transaction retries ([db180be](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/db180be42fcc43a799bafebf4d6193a1af6a1943))
- add retries parameter to Transactional decorator for enhanced transaction handling ([5f8c4e7](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/5f8c4e75f0b9c99eef1629ae6a2ff2ed12c7689d))
- include transactionalRetries in TransactionalInterceptor for configurable transaction retries ([7479f15](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/7479f15b0cdba525fbfe6d39fdd0dfb4c4b2eee9))

## [1.1.0](https://github.com/ajatdarojat45/mongoloquent-nestjs/compare/v1.0.0...v1.1.0) (2025-08-13)

### Features

- add decorators for database injection, model injection, session retrieval, and transactional handling ([e3543f0](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/e3543f0cf94331cbdbbf72651da740c285def072))
- add mongoloquent constants and types for improved type definitions and module options ([e403222](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/e403222ae313920c3d022c22f2971d28bbc267fe))
- add mongoloquent options types and update index export ([d3ec674](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/d3ec6743033a4040b02704fb202403ba2315ef02))
- add MONGOLOQUENT_TRANSACTIONAL constant and fix formatting in getDynamicDB function ([e999ce7](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/e999ce71d8e83e6b2e39f4d2265aba3df4a92484))
- add TransactionalInterceptor for handling database transactions ([692ce52](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/692ce52294b9d688e5c2b23d6e629da6ded1f894))
- add TransactionInterceptor for handling database transactions ([ced7163](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/ced7163184200227b575bcd42178370e94302945))
- add TransactionInterceptor for managing database transactions ([c967b86](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/c967b86559a139252ddba6d7608dfa0d7c20e2d1))
- export async context service and interceptor in index file; enhance decorators with transactional metadata ([4dbbd23](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/4dbbd23d3eb5b17303dc39dae9c9d531e2c32e3e))
- implement AsyncContextService and MongoloquentService for improved async context handling ([49abdd3](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/49abdd3e1d07f52e6c477a099cc44c5899b783f1))
- implement AsyncContextService for managing asynchronous context ([539012f](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/539012f737d0b5d60246d1a208db1e00eceffbb7))
- reorganize exports in index file and update TransactionInterceptor import ([1fc9dfe](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/1fc9dfee542297a7a94e662b7649b2562ce113c0))
- update module imports and enhance transaction interceptor registration logic ([2f0a257](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/2f0a25732b21a2e8cdb8889e24e3c9203a4ad3da))

### Bug Fixes

- correct import path for IMongoloquentModelClass in decorators file ([e1eaade](https://github.com/ajatdarojat45/mongoloquent-nestjs/commit/e1eaadeb4142d3634807c3f05d7876ad7d2c26d9))

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
