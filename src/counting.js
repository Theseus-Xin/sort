// 计数排序

// 计数排序是一种非比较型整数排序算法，它的基本思想是对于给定的输入序列中的每一个元素x，确定该序列中值小于x的元素个数，
// 然后将元素x直接放在输出序列的对应位置上。它的时间复杂度为 O(n+k)，其中k是计数数组的大小。

// 该算法首先计算出输入数组中的最大值和最小值，然后创建一个计数数组，用于记录每个元素在输入数组中的出现次数。
// 接着，计算每个元素在输出数组中的位置，最后将输入数组中的每个元素放到输出数组的对应位置上。

async function countingSort() {
    // 计算数组中的最大值和最小值
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // 计算计数数组中每个元素的出现次数
    const countArray = new Array(max - min + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i] - min]++;
    }

    // 计算每个元素在输出数组中的位置
    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
    }

    // 输出排序后的数组
    const outputArray = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(countArray, i, arr[i], countArray[arr[i] - min]);
        outputArray[countArray[arr[i] - min] - 1] = arr[i];
        countArray[arr[i] - min]--;
    }

    return outputArray;
}

