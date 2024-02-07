function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        let middle = ((left + right) / 2);
        if (arr[middle] === element) {
            return middle; }
        else if (arr[middle] < element) {
            left = middle + 1; }
        else if (arr[middle] > element) {
            right = middle - 1; }
    }
    return -1;
}
