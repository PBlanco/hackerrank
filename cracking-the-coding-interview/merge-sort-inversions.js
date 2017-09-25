function mergeSort(arr, tmp, leftStart, rightEnd) {
    var count = 0;
    if (leftStart >= rightEnd) {
        return count;
    }
    
    var middle = parseInt((leftStart + rightEnd) / 2);
    count += mergeSort(arr, tmp, leftStart, middle);
    count += mergeSort(arr, tmp, middle + 1, rightEnd);
    count += countAndMergeHalves(arr, tmp, leftStart, rightEnd);
    return count;
}

function countAndMergeHalves(arr, tmp, leftStart, rightEnd){
    var leftEnd = parseInt((leftStart + rightEnd) / 2);
    var rightStart = leftEnd + 1;
    
    var left = leftStart;
    var right = rightStart;
    var index = leftStart;
    
    var swapCount = 0;
        
    while(left <= leftEnd && right <= rightEnd) {
        if (arr[left] <= arr[right]){
            tmp[index] = arr[left]
            left++;
        } else {
            tmp[index] = arr[right];
            swapCount +=  leftEnd + 1 - left;
            right++;
        }
        
        index++;
    }
    
    while (left <= leftEnd) {
        tmp[index] = arr[left]
        left++;
        index++;
    }
    
    while (right <= rightEnd) {
        tmp[index] = arr[right];
        right++;
        index++;
    }
    
    for (var i = leftStart; i <= rightEnd; i++) {
        arr[i] = tmp[i];
    }
        
    return swapCount;
}

function countInversions(arr) {
    return mergeSort(arr, [], 0, arr.length - 1);
}
