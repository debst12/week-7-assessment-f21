// Sum to Zero

const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            } 
        }
    }
    return false
}

// console.log(addToZero([1,1,-1]))
//Space complexity

const hasUniqueChars = str => {
    let arr1 = str.split('')
    let arr2 = [... new Set(arr1)]
    return arr1 === arr2
}

// console.log(hasUniqueChars('Moonday'))


const isPangram = str => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let regex = /\s/g
    let lowercase = str.toLowerCase().replace(regex,"")
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return false
        }
    }
    return true
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

const findLongestWord = arr => {
    let longest = 0
    arr.forEach((word) => {
        word.length > longest ? longest = word.length : longest
    })

    return longest
}

console.log(findLongestWord(['test','testing','testering','SpencerDeBrine']))