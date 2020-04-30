[docs-url]: https://seancroach.github.io/roblox-api-raw/globals.html
[github-ci-badge]: https://img.shields.io/github/workflow/status/seancroach/roblox-api-raw/CI?logo=github&style=flat-square
[github-ci-url]: https://github.com/seancroach/roblox-api-raw/actions?query=workflow%3ACI
[release-badge]: https://img.shields.io/github/v/release/seancroach/roblox-api-raw?logo=npm&style=flat-square
[release-url]: https://www.npmjs.com/package/roblox-api-raw
[license-badge]: https://img.shields.io/github/license/seancroach/roblox-api-raw?style=flat-square
[license-url]: https://github.com/seancroach/roblox-api-raw/blob/master/license

# roblox-api-raw

[![Build Status][github-ci-badge]][github-ci-url]
[![Release][release-badge]][release-url]
[![License][license-badge]][license-url]

_Retrieve the raw JSON Roblox API Dump._

## Installation

Install `roblox-api-raw` through [npm][release-url]:

```sh
$ npm install roblox-api-raw
```

## Usage

Retrieve the latest version of the Roblox API dump through `getLatestVersion()`.

```ts
import * as RobloxApi from "roblox-api-raw";

const version = await RobloxApiDump.getLatestVersion();
console.log(version); // => version-7f176a3bbd5e424e

// Ensure we're a module for top-level await.
export {};
```

Retrieve the latest version of the Roblox API dump through `getApiDump()` or, similarly, retrieve the Roblox API dump for a certain version with `getApiDump(version)`.

```ts
import * as RobloxApi from "roblox-api-raw";

const apiDump = await RobloxApiDump.getApiDump();
console.log(apiDump.Version); // => 1

// Ensure we're a module for top-level await.
export {};
```

`roblox-api-raw` retrieves the Roblox API dump _as-is_.

## API

View the full documentation [here][docs-url].

## License

This package is available as open source under the terms of the [MIT License][license-url].
