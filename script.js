function aclean(arr) {
    let anagrams = new Set()

    for(let word of arr) {
        let wordAnagram = (Array.from(word.toLowerCase())).sort().join('');
        anagrams.add(wordAnagram);
    }

    let wordOrganized = new Map();

    for (let anagram of anagrams) {
        let wordsArr = [];
        for(let word of arr) {
            if ( anagram === (Array.from(word.toLowerCase())).sort().join('') ) {
                wordsArr.push(word);
            }
        }

        wordOrganized.set(anagram, wordsArr);
    }

    let result = [];
    
    wordOrganized.forEach( value => {
        result.push(value[Math.floor(Math.random() * value.length)])
    });

    return result;
}

let arr = ['nap', 'teacher', 'cheater', 'PAN', 'ear', 'era', 'hectare'];

alert(aclean(arr));