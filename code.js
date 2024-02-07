function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (list[middle] === element) {
            return middle; }
        else if (list[middle] < element) {
            left = middle + 1; }
        else if (list[middle] > element) {
            right = middle - 1; }
    }
    return -1;
}
