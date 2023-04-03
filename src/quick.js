// 快速排序

// 快速排序（Quick Sort）是一种常用的排序算法，使用分治思想，将一个数组分成两个子数组，再对子数组进行排序，
// 以此类推，最后将整个数组排序。它是一个不稳定的排序算法，平均时间复杂度为O(nlogn)，最坏时间复杂度为O(n^2)。

function quickSort() {
    if (arr.length < 2) return arr

    // 以数组中间项为基准值
    const mid = Math.floor(arr.length / 2)
    const pivot = arr[mid]
    const left = []
    const right = []

    // 遍历数组，把小于基准值的项放在left，大于基准值的项放在right
    for (let i = 0; i < arr.length; i++) {
        if (i === mid) {
            continue
        }
        if (arr[i] < mid) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([pivot], quickSort(right))
}