var searchInsert = function(nums, target) {
    const mid = Math.floor(nums.length/2)
    let left = nums[0],right = nums[nums.length-1]
    while(left<=right){
        if(nums[left] == target)return left;
        if(nums[mid]>target){
            right=mid
        }else{
            left = mid;
        }
    }
};