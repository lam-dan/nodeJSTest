

// Step 1
const input = 'store_one,orange,3\n'
    + 'store_one,kiwi,5\n'
    + 'store_one,orange,1\n'
    + 'store_two,orange,1\n';

transformData = (input) => {
    let array = input.split('\n')
    let results = []
    let dict = {}

    for (let i = 0; i < array.length - 1; i++) {
        results.push(array[i].split(','))
    }
    let newArray = [].concat(...results)
    let len = results.length
    let i = 0;

    while (len) {
        if (!dict[newArray[i]]) {
            dict[newArray[i]] = {}
            if (!dict[newArray[i]][newArray[i + 1]]) {
                dict[newArray[i]][newArray[i + 1]] = parseInt(newArray[i + 2])
            } else {
                dict[newArray[i]][newArray[i + 1]] += parseInt(newArray[i + 2])
            }
        } else {
            if (!dict[newArray[i]][newArray[i + 1]]) {
                dict[newArray[i]][newArray[i + 1]] = parseInt(newArray[i + 2])
            } else {
                dict[newArray[i]][newArray[i + 1]] += parseInt(newArray[i + 2])
            }
        }
        i += 3
        len--
    }
    return dict;
}

let inventory = transformData(input)
console.log(inventory)

// Step 2 Count number of fruits in data structure.
countFruit = (inventory) => {
    let dictValues = Object.values(inventory)
    // console.log(dictValues)
    let dict = {}

    dictValues.reduce((accumulator, currentValue) => {
        // console.log(currentValue)
        Object.keys(currentValue).reduce((sum, key) => {
            // console.log(key)
            if (dict[key]) {
                dict[key] += currentValue[key]
            } else {
                dict[key] = currentValue[key]
            }
        }, 0)
    }, 0)
    return dict
}

console.log(countFruit(inventory))

// Step 3 Some time has passed and you now receive a new count of fruits:
const input2 = 'store_one,orange,2\n'
    + 'store_one,kiwi,1\n';

// Step 3.1 Calculate how many fruits got sold in total:
let newInventory = transformData(input2)

calculateTotal = (inventory) => {
    // console.log(inventory)
    let dictValues = Object.values(inventory)
    // console.log(dictValues)
    let total = dictValues.reduce((accumulator, currentValue) => {
        // console.log(currentValue)
        return accumulator + Object.keys(currentValue).reduce((sum, key) => {
            // console.log((sum + currentValue[key]))
            return (sum + currentValue[key])
        }, 0)
    }, 0)
    return total
}

// console.log(calculateTotal(inventory))

fruitsSold = (inventory, newInventory) => {
    return calculateTotal(inventory) - calculateTotal(newInventory)
}

console.log(fruitsSold(inventory, newInventory))

// Step 3.2 
// Generate a list of all fruit names, sorted by these criteria: 1. If a fruit has a higher percentage sold, it should be earlier in the list. 
// - (for example, 60% of oranges were sold here, and 80% of oranges) 1. If the sold-percentages were the same, sort them alphabetically using 
// the JS built-in method .sort of arrays.
// To do this, use ‹a›.localeCompare(‹b›) which returns: - a negative value when ‹a› comes before ‹b› - zero when they’re the same - a positive 
//value when ‹a› comes after ‹b›

// console.log(countFruit(inventory))
// console.log(countFruit(newInventory))

sortFruits = (inventory, newInventory) => {
    let dict = {}

    for (let i in inventory) {
        // console.log(i)
        if (dict[i]) {
            dict[i] = dict[i] - inventory[i]
        } else {
            dict[i] = inventory[i]
        }
    }
    // // console.log(dict)
    for (let i in newInventory) {
        // console.log(i)
        if (dict[i]) {
            dict[i] = (dict[i] - newInventory[i]) / dict[i]
        } else {
            dict[i] = newInventory[i]
        }
    }
    // console.log(dict)

    keysSorted = Object.keys(dict).sort((a, b) => {
        // console.log('KEY FOR ORANGE', a, dict[a])
        // console.log('KEY FOR KIWI', b, dict[b])
        // Returning 1 or True gives you descending order based on value of dictionary
        // Returning -1 or False gives you ascending order based on value of dictionary
        if (dict[b] > dict[a]) {
            return 1
        }
        // If the key values are the same
        if (dict[b] === dict[a]) {
            // Local compare 
            // If a comes before b, we return -1, alphbaetical or ascending order
            // If b comes before a, returns 1, reverse alphabetical or descending order
            // If a and b are the same, returns 0, positions left unchanged
            return a.localeCompare(b)
        }
    })

    // console.log(keysSorted);
    return keysSorted
}

console.log(sortFruits(countFruit(inventory), countFruit(newInventory)))

