function isPalindromeArray(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) { // Continue checking until pointers meet
        if (arr[left] !== arr[right]) { // If mismatch found, return false
            return false;
        }
        left++;  // Move left pointer forward
        right--; // Move right pointer backward
    }
    return true; // If no mismatches, it's a palindrome
}

// Example Usage
console.log(isPalindromeArray([1, 2, 3, 2, 1])); // Output: true
console.log(isPalindromeArray([1, 2, 3, 4, 5])); // Output: false