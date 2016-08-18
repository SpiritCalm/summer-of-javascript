# Describe Problem
*   keep a running sum of values to the left of every index
*   keep a running sum of all values to the right of every index

# Approach
*   Loop over each value in array and accumulate a sum
*   Use a second inner loop to sum all the leading values of each index
*   When the sums of left side and right side match, return the index

# Time Complexity
*   O(n^2) worst case runs through each element n times

# Optimize
*   Build two dictionaries: { index: trailingSum }, {index: leadingSum},
    accumulate sum for each index and store as property at key `index`
*   loop over keys and compare if both objects have the same value at the same
    index.



