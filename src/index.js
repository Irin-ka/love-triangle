/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for(var i = 0; i < preferences.length; i++){
    if (check(i, preferences)) count++;
  }
  //console.log(count); 
  return count;
}
function check(i, arr) {
    if (arr[i] == -1) return 0;
    var j = arr[i]-1;  //i love j
    if (arr[j] == -1) return 0;
    var k = arr[j]-1;  // j love k  
    if (arr[k] == -1) return 0;
    // console.log(i+','+j+','+k+','+(arr[k]-1));
    if (i != k && (arr[k] -1) == i){ // k love i
      arr[i] = -1; // exclude from analyze
      arr[j] = -1; // exclude from 
      arr[k] = -1; // exclude from 
      return 1;
    }
  return 0;
}
      
  
