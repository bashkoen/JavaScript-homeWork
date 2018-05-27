//hello
//hello
var massif = [5, 7, [4, [2], 8, [1, 3], 2], [9, [] ], 1, 8];
  function treeSum(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      var v = a[i];
      if (typeof v = 'object') {
        s += treeSum(v)
      }
        else (s += v);
    }
    return s;
  }
  //  massif.forEach(function(item, i, massif) {
  //    Array.isArray(massif) ? treeSum(x) : sum += x;
//    });
//  return sum;
//  alert(treeSum());
//  }
//treeSum();
