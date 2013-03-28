/*
 * Ajax Cycle jQuery Plugin
 * https://github.com/tvidoz/Ajax-Cycle-jQuery
 *
 * Copyright 2013 Andrew Kulikov
 * Released under the MIT license
 */
(function($, undefined) {

  return cycledAjax = {

    object: {},

    settings: {},

    objectKeys: [],

    getCounter: 0,

    init: function(settings) {

      cycledAjax.settings = settings;
      cycledAjax.object = cycledAjax.settings.object;

      for (i in cycledAjax.object) cycledAjax.objectKeys.push(i);
      cycledAjax.get(cycledAjax.objectKeys[cycledAjax.getCounter]);

    },

    get: function(objectKey) {

      if (objectKey != undefined) {
        var URI = cycledAjax.settings.url.replace('{key}', objectKey).replace('{value}', cycledAjax.object[objectKey]);
        console.log(objectKey + ' : ' + cycledAjax.object[objectKey] + ' : ' + URI);
        $.ajax({
          dataType: cycledAjax.settings.dataType,
          url: URI,
          success: function(data) {
            cycledAjax.get(cycledAjax.objectKeys[++cycledAjax.getCounter]);
            if (cycledAjax.settings.success) {
              cycledAjax.settings.success(data);
            }
          },
          error: function() {
            cycledAjax.get(cycledAjax.objectKeys[++cycledAjax.getCounter]);
            if (cycledAjax.settings.error) {
              cycledAjax.settings.error();
            }
          }
        });
      }
    }

  }

}(jQuery));


/*
    var publics = {
      ibd: 44781847,
      borsch: 460389,
      mdk: 10639516
    };

    var publicKeys = [];
      
    for (i in publics) 
      publicKeys.push(i);

    getCounter = 0;

    function get(publicKey) {
      if (publicKey != undefined)
        $.ajax({
          dataType: "json",
          url: 'test' + publics[publicKey] + '.json',
          success: function(data) {
            console.log('success:' + publicKey + ':' + publics[publicKey] + ':' + 'test' + publics[publicKey] + '.json');
            console.log(data);
            get(publicKeys[++getCounter]);
          }
        });
    }

    get(publicKeys[getCounter]);
*/