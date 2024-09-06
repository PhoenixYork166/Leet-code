const longestCommonPrefix = (input) => {
    // prefix starts at 0
    let prefix = input[0];
    // 'flower'

    // loop starts with input[0+1]
    for (let i=1; i < input.length; i++) {
        // prefix = input[0] = "flower"
        // "flow" indexOf "flower" -> false -1
        // "flow" indexOf "flowe" -> false -1
        // "flow" indexOf "flow" -> true 0
        while (input[i].indexOf(prefix) != 0) {
            // i=1
            // input[1] 'flow'
            // 'flow' indexOf 'flower' -> false -1
            // input[1].indexOf('flower') = -1
            console.log('input[i]', input[i])
            console.log('input[i].indexOf(prefix)', input[i].indexOf(prefix))
            prefix = prefix.substring(0, prefix.length - 1);
            // prefix = flowe
            // prefix = flow
            // prefix = flo
            // if input[i] indexOf 'flower'
            // return prefix that gives MATCH value 0

            // input[1] = 'flow'
            // is 'flow' indexOf 'flower' -> -1
            // is 'flow' indexOf 'flowe' -> -1
            // is 'flow' indexOf 'flow' -> 0
            // return prefix = 'flow'

            // now prefix = 'flow' 
            // compare prefix 'flow' to input[2] 'flight'
            // is 'flow' indexOf 'flight' -> false -1
            // is 'flo' indexOf 'flight' -> false -1
            // is 'fl' indexOf 'flight' -> true 0
            // return prefix = 'fl'
        }
        console.log(`prefix: ${prefix}`);
    }
    console.log(`prefix: ${prefix}`);
    return prefix
}

const strs1 = ["flower","flow","flight"]
const strs2 = ["dog","racecar","car"]
longestCommonPrefix(strs1)
longestCommonPrefix(strs2)