"use strict";


// 1. printIndices
function printIndices(items) {

  for (const i in items){
    console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const newArray = []

  for (const i in items){
    if (i % 2 === 0){
      newArray.push(items[i])
    }
  }
  console.log(newArray);
}


// 3. smallestNItems
function smallestNItems(items, n) {

  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0,n);
  const finalList = sortedNItems.reverse();
  console.log(finalList);
}
