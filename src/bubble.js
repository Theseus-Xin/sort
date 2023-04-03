// 冒泡排序

// 冒泡排序是一种基本的排序算法，其原理是对待排序序列进行多轮扫描比较，每轮将相邻的两个元素进行比较并交换，每一轮扫描都会把当前未排序序列中最大的元素移动到序列末尾。
console.log(arr);

function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}

bubbleSort(arr)

console.log('new', arr);
