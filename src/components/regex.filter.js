(function() {

  /**
  * Regex filter module
  *
  * Filter match to specific
  * regex given
  */
  angular
    .module('regex.filter', [
    ])
    .filter('regex', [
      Regex
    ])
  ;

  // EXPORT ###PATTERN### IN
  // CONFIG FILE

  function Regex() {
    return function(input, params) {
      var output = input,
          regex = new RegExp(params.regex.replace('##PATTERN##', params.pattern), 'gi');

      if (params.pattern !== '') {
        output = [];
        input.forEach(function(file) {
          if (regex.test(file.filename)) {
            output.push(file);
          }
        });
      }

      return output;
    };
  }

}());