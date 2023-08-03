console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
const maxItems = 5

function addItem(item) {
    if (isFull(basket) === false) {
        basket.push(item)
        return true;
    } else {
        return false;
    }
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

function listItems(basket) {
    for (let i of basket) {
        console.log(i);
    }
}

console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding strawberries (expect true)', addItem('strawberries'));
console.log('Adding pears (expect true)', addItem('pears'));
console.log(listItems(basket));
console.log(`Basket is now ${basket}`);


function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

console.log("The basket is full (expect false)", isFull(basket));

function removeItem(item) {
   let itemRemoved = basket.indexOf(item)
   if (itemRemoved !== -1) {
    basket.splice(itemRemoved, 1);
    return item
   } else {
    return null
   }
}

console.log("The item that was removed was",removeItem("apples"));
console.log(`Basket is now ${basket}`);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
