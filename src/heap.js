// 堆排序

// 堆排序是一种高效的排序算法，它的基本思想是通过将待排序的元素构建成一个堆，然后依次将堆顶元素取出并放到有序区间的末尾，最终得到一个有序的数组。

// 首先，我们需要构建一个最大堆，然后从堆顶开始，将堆顶元素与堆底元素交换位置，然后再将剩余的元素重新构建成最大堆，重复这个过程直到整个数组有序为止。
// 最大堆的构建可以使用 heapify() 函数来完成，而堆排序的主要实现是在 heapSort() 函数中。

// 构建最大堆
async function buildMaxHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        await heapify(arr, i, len);
    }
}

// 堆化
async function heapify(arr, i, len) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    console.log(i, left, right);
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        await swap(largest, i)
        await heapify(arr, largest, len);
    }
    console.log(...arr);
}

// 堆排序
async function heapSort() {
    const len = arr.length;
    await buildMaxHeap(arr);
    for (let i = len - 1; i > 0; i--) {
        await swap(0, i)
        await heapify(arr, 0, i);
    }
    return arr;
}

