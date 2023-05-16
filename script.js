function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = Array.from(word.toLowerCase()).sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ['nap', 'teacher', 'cheater', 'PAN', 'ear', 'era', 'hectare'];

console.log(aclean(arr));