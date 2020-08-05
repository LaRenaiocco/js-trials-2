"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code
}


function getMelonsAtPrice(price) {

    const melonPrices = {
      2.50: ['Cantaloupe', 'Honeydew'],
      2.95: ['Watermelon'],
      3.25: ['Musk', 'Crenshaw'],
      14.25: ['Christmas']
    }
    if (!(price in melonPrices)) {
      return 
    } 
    return melonPrices[price].sort()
}

