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

The plugin sends an asynchronous request to the values ​​specified in the plugin settings (keys and values ​​of an object can be added to the URI for each iteration). It works recursively and does not slow synchronous request.

## Authors

[Andrew Kulikov](https://github.com/tvidoz)
