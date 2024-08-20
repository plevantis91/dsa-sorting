function merge() {
    let arr = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }
    while(i < left.length) {
        arr.push(left[i]);
        i++;
    }
    while(j < right.length) {
        arr.push(right[j]);
        j++;
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};