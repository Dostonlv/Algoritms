var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let lastIndex = map.get(nums[i]);
            if (i - lastIndex <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};