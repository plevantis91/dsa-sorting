/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, low, high){
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i < j){
        while(arr[i] <= pivot && i < high){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if(i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[low] = arr[j];
    arr[j] = pivot;
    return j;

}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr,left,right) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = quickSort;