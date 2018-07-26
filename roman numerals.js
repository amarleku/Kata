var RomanNumerals = {
    fromRoman: function(roman) {
      var map = {IV:4,IX:9,XL:40,XC:90,CD:400,CM:900,I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
      var value = 0;
      for (var i = 0; i < roman.length; i++) {
        var two = map[roman[i]+roman[i+1]], one = map[roman[i]];
        if (two != null) { value += two; i++; }
        else if (one != null) value += one;
      }
      return value;
    },
    toRoman: function(value) {
      var map = {M:1000,CM:900,D:500,CD:400,C:100,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
      var roman = '';
      while (value > 0) {
        for (var r in map) {
          if (map[r] <= value) {
            roman += r;
            value -= map[r];
            break;
          }
        }
      }
      return roman;
    }
  };