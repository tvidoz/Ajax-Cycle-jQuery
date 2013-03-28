Ajax-Cycle-jQuery
=================

Plugin allows you to send regular asynchronous requests from array data.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

    <script src="path/to/cycled.ajax.jquery.js"></script>

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.


## Usage

Creating an object for the cycle requests

    items = {
      item1: 10,
      item2: 100,
      item3: 1000
    };

Creating Ajax request cycle

    cycledAjax.init({
      object: items, // data object
      dataType: 'json', // data type
      url: 'test{value}.json', // {value} - return object values, {key} - return onject keys
      // success callback
      success: function(data) { 
        console.log(data);
      },
      // error callback
      error: function() {
        console.log('error ');
      }
    });

*Note: when deleting a cookie, you must pass the exact same path, domain and secure options that were used to set the cookie, unless you're relying on the default options that is.*

## Configuration

### raw

By default the cookie value is encoded/decoded when writing/reading, using `encodeURIComponent`/`decodeURIComponent`. Bypass this by setting raw to true:

    $.cookie.raw = true;

### json

Turn on automatic storage of JSON objects passed as the cookie value. Assumes `JSON.stringify` and `JSON.parse`:

    $.cookie.json = true;

## Cookie Options

Cookie attributes can be set globally by setting properties of the `$.cookie.defaults` object or individually for each call to `$.cookie()` by passing a plain object to the options argument. Per-call options override the default options.

### expires

    expires: 365

Define lifetime of the cookie. Value can be a `Number` which will be interpreted as days from time of creation or a `Date` object. If omitted, the cookie becomes a session cookie.

### path

    path: '/'

Define the path where the cookie is valid. *By default the path of the cookie is the path of the page where the cookie was created (standard browser behavior).* If you want to make it available for instance across the entire domain use `path: '/'`. Default: path of page where the cookie was created.

**Note regarding Internet Explorer:**

> Due to an obscure bug in the underlying WinINET InternetGetCookie implementation, IE’s document.cookie will not return a cookie if it was set with a path attribute containing a filename.

(From [Internet Explorer Cookie Internals (FAQ)](http://blogs.msdn.com/b/ieinternals/archive/2009/08/20/wininet-ie-cookie-internals-faq.aspx))

This means one cannot set a path using `path: window.location.pathname` in case such pathname contains a filename like so: `/check.html` (or at least, such cookie cannot be read correctly).

### domain

    domain: 'example.com'

Define the domain where the cookie is valid. Default: domain of page where the cookie was created.

### secure

    secure: true

If true, the cookie transmission requires a secure protocol (https). Default: `false`.

## Tests

Requires Node. Startup server:

    $ node test/server.js

Open in browser:

    $ open http://0.0.0.0:8124/test/index.html

For quick *non cross-browser* testing use grunt, install grunt CLI and project dependencies as outlined in this guide: <http://gruntjs.com/getting-started>, then run:
    
    $ grunt

## Development

- Source hosted at [GitHub](https://github.com/carhartl/jquery-cookie)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/carhartl/jquery-cookie/issues)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

## Authors

[Klaus Hartl](https://github.com/carhartl)
