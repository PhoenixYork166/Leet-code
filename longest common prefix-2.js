const longestCommonPrefix = (input) => {
    // prefix = input[0] = ['flower']
    let prefix = input[0];
    
    for (let i=1; i < input.length; i++) {
                  
                while (input[i].indexOf(prefix) !== 0 ) {
                    console.log(`prefix: ${prefix}`);    
                    prefix = prefix.substring(0, prefix.length - 1);               
                } 
        } 
        console.log(`prefix: ${prefix}`); 
        return prefix;
    }    

const strs1 = ["flower","flow","flight"]
longestCommonPrefix(strs1)

const strs2 = ["dog","racecar","car"]
longestCommonPrefix(strs2)