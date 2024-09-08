const haystack = "sadbutsad";
const needle = "sad";

/* Using a Stack to track & compare characters from both Strings Last-in, First-out (LIFO) 
1. Push all characters of the 'needle' string onto a stack
2. Iterate over the 'haystack' string & check each character against the top of the stack
3. If a character matches the top of the stack, pop stack
4. If the stack [] is empty at the end of this process, it means all characters from 'needle' were found in sequence in 'haystack'
*/
const findFirstOccurenceIndex = (haystack, needle) => {
    if (needle === "") {
        return 0; // Edge case for "" string
    }
    const n = haystack.length;
    const m = needle.length;

    // Loop through the 'haystack' where there're enough characters left to match the needle
    for (let start=0; start <= n - m; start++) {
        let match = true;
        for (let j=0; j<m; j++) {
            if (haystack[start+j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return start; // Found 'needle' => return startIndex
    }
    return -1; // 'needle' NOT found
}
console.log(findFirstOccurenceIndex(haystack, needle)); // Output: 0
