// Roman to Integer

// Examples
// 1
// Input: s= "III"
// Output: 3

// 2
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3

// 3
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4

// III = 1 + 1 + 1 = OK
// IV = 1 + 5 = 6 = NOT OK (correct = 4)
// IX = 1 + 10 = 11 NOT OK (correct = 9)
// Logic ->
// IV; I < V, thus output = V - I = 4
// IX; I < X, thus output = X - I = 9

// LVIII; L > V & V > I, thus output = L + V + (I+I+I) = 58

// MCMXCIV; output = 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4
// M = 1000
// CM; C < M, output = M(1000) - C(100) = 900
// XC; X < C, output = C(100) - X(10) = 90
// IV; I < V, output = V(5) - I(1) = 4

// Need to create Hashmap to include all Scenaios
var romanToInt = function(romanText) {
    const hashMap = { 
        I: 1, 
        V: 5, 
        X: 10, 
        L: 50, 
        C: 100, 
        D: 500, 
        M: 1000
    }

    let res = 0;
    // s = "IX" 
    // s.split('') 
    // output = ['I', 'X']
    /* Looping through each romanText character */
    romanText.split('').forEach( (num, index) => {
        /* num = each character; index = elementIndex */
        if(hashMap[num] < hashMap[romanText[index+1]]) {
            console.log('hashMap[num]:', hashMap[num]);
            console.log('hashMap[romanText[index+1]]:', hashMap[romanText[index+1]]);
            res -= hashMap[num];
            console.log('res: ', res);
            console.log(`\n`);
        } else {
            console.log('hashMap[num]:', hashMap[num])
            res += hashMap[num];
            console.log('res: ', res);
            console.log(`\n`);
        }
    });
    return res;
};

romanToInt('XCMIV');
