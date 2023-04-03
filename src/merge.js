// 归并排序

// 归并排序是一种基于分治思想的排序算法，它将待排序数组分成两个子数组，
// 对每个子数组进行排序，最终将两个有序的子数组合并成一个有序数组。
const arr = [3, 5, 6, 2, 7, 11, 17, 13, 18, 1, 9, 14, 10, 4, 16, 20, 12, 8, 19, 15]; // 待排序的数组

function mergeSort(arr) {

    const len = arr.length

    if (len < 2) return arr

    const mid = Math.floor(len / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))


}

function merge(left, right) {
    const result = []
    // console.log(left, right);
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    while (i < left.length) {
        result.push(left[i++])
    }
    while (j < right.length) {
        result.push(right[j++])
    }
    console.log("result=>", result);
    return result
}

console.log(mergeSort(arr));