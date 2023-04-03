// 插入排序

// 插入排序是一种简单直观的排序算法，它的基本思想是将待排序的元素插入到已排序的数组中，最终得到一个有序的数组。

async function insertionSort() {
    const len = arr.length
    let preIndex, current
    for (let i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            await swap(preIndex, preIndex + 1)
            preIndex--
        }
    }
}