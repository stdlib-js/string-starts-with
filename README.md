<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# startsWith

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a string starts with the characters of another string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-starts-with
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var startsWith = require( '@stdlib/string-starts-with' );
```

#### startsWith( str, search\[, position] )

Tests if a string starts with the characters of another string.

```javascript
var str = 'To be, or not to be, that is the question.';

var bool = startsWith( str, 'To be' );
// returns true

bool = startsWith( str, 'to be' );
// returns false
```

By default, the function searches from the beginning of the input string. To search from a different character index, provide a `position` value (zero-based). If provided a negative `position`, the start index is determined relative to the string end (i.e., `pos = str.length + position`).

```javascript
var str = 'Remember the story I used to tell you when you were a boy?';

var bool = startsWith( str, 'the story' );
// returns false

bool = startsWith( str, 'the story', 9 );
// returns true

bool = startsWith( str, 'you', -15 );
// returns true
```

If provided an empty `search` string, the function **always** returns `true`.

```javascript
var str = 'beep boop';

var bool = startsWith( str, '' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from [`String.prototype.startsWith`][mdn-string-startswith] in the following ways:

    -   The function requires string values for the first and second arguments and requires that the `position` argument be an integer value.
    -   The function does **not** clamp negative `position` values. Instead, when provided a negative `position`, the function resolves the starting search position relative to the end of the string.
    -   Except when provided an empty `search` string, the function **always** returns `false` if a `position` resolves to a starting search position which exceeds the bounds of the input string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var startsWith = require( '@stdlib/string-starts-with' );

var str = 'Fair is foul, and foul is fair, hover through fog and filthy air';

var bool = startsWith( str, 'Fair' );
// returns true

bool = startsWith( str, 'fair' );
// returns false

bool = startsWith( str, 'foul', 8 );
// returns true

bool = startsWith( str, 'filthy', -10 );
// returns true
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-starts-with-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: starts-with [options] --search=<string> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
         --pos int             Search position.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'Hello, World!\nBeep Boop Baz' | starts-with --search=Beep --split /\r?\n/

    # Escaped...
    $ echo -n $'Hello, World!\nBeep Boop Baz' | starts-with --search=Beep --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ starts-with --search=be beep
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | starts-with --search=bo
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'Hello, World!\tBeep Boop' | starts-with --search=Beep --split '\t'
false
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-ends-with`][@stdlib/string/ends-with]</span><span class="delimiter">: </span><span class="description">test if a string ends with the characters of another string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-starts-with.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-starts-with

[test-image]: https://github.com/stdlib-js/string-starts-with/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-starts-with/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-starts-with/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-starts-with?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-starts-with.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-starts-with/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-starts-with#cli
[cli-url]: https://github.com/stdlib-js/string-starts-with/tree/cli
[@stdlib/string-starts-with]: https://github.com/stdlib-js/string-starts-with/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-starts-with/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-starts-with/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-starts-with/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-starts-with/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-starts-with/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-starts-with/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-starts-with/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-starts-with/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-string-startswith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

<!-- <related-links> -->

[@stdlib/string/ends-with]: https://github.com/stdlib-js/string-ends-with

<!-- </related-links> -->

</section>

<!-- /.links -->
