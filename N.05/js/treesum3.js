var a = [5, 7, [4, [2], 8, [1, 3], 2], [9, [] ], 1, 8];
function treeSum(a) {
    var s = 0;
    for (var i=0; i < a.length; i++) {
      var v = a[i];
      if (typeof v == 'object') {
       s = s + treeSum(v)
      }
      else {
      s = s + v
      }
    }
    return s;
  }
console.log(treeSum(a));

 