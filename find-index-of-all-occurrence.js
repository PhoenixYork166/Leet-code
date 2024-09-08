const haystack = "sadbutsad";
const needle = "sad";

/* Find all occurrenceIndex */
const findAllOccurenceIndex = (haystack, needle) => {
    const indices = []; // Prepart to store all occurrenceIndex
    if (needle === "") {
        return indices; // Edge case for "" string
    }

    const n = haystack.length;
    const m = needle.length;

    // Loop through the 'haystack' where there're enough characters left to match the needle
    for (let start = 0; start <= n - m; start++) {
        let match = true;
        for (let j = 0; j < m; j++) {
            if (haystack[start + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) indices.push(start); // Found 'needle' => return startIndex
    }
    return indices.length > 0 ? indices : -1; // // Return indices || -1 if no match is found
}
console.log(findAllOccurenceIndex(haystack, needle)); // Output: [0, 6]