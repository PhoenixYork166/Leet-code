let s = 'fabcef'

let arr = s.split('')

console.log(arr)

// {} => key-value pairs

// [a, b, c, d, e, f] => {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6}
const hashMap = {
    'a':1,
    'b':2,
    'c':3,
    'd':4,
    'e':5,
    'f':6
}
console.log("hashMap['a']", hashMap['a'])

for (let i=0; i < arr.length; i++) { // arr[a,v,c,d,a,a,f]
    // mapping elements in 's' to corresponding values
    console.log("hashMap[arr[i]]", hashMap[arr[i]])
    //6
    //1
    //2
    //3
    //5
    //6

    if(!hashMap[arr[i]]) { // i=0 arr[0]='a' hashMap['a'] = undefined
                           // if any element NOT in hashMap (undefined)
                           // i.e. hashMap[g] = undefined
                           // make it hashMap[g] = 1
        hashMap[arr[i]] = 1;
    } else {
        hashMap[arr[i]] += 1;
    }
}