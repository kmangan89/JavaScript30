/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

 var oddNumbers = [];

 var countOdds = function(low, high) {
     for (i = low; i <= high; i++) {
         if (i % 2 != 0) {
             oddNumbers.push(i);
         } 
     }
     return oddNumbers.length;
 };
 
 console.log(countOdds(8,10));

