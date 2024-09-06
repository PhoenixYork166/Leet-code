const nums = [1,1,1,3,3,4,3,2,4,2]

const dup = (nums) => {
    
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            

            if (nums[i] === nums[j]) {
                console.log(`${nums[i]} === ${nums[j] } is: true`);
                return true;
                // console.log('duplicate = true');
            } 

        

        }
        console.log(`${nums[i]} === ${nums[j] } is: false`);
    return false;
    }
    
}

dup(nums);