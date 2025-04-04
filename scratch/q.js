function unusualSort(arrayOfChars) {
    function score(c) {
      c = String(c).charCodeAt(0);
      return c >= 48 && c <= 57 ? c + 75 : c;
    }
    
    return arrayOfChars.sort(function(a, b) {
      var diff = score(a) - score(b);
      return diff ? diff : typeof a == 'number' ? -1 : 1;
    });
  }
