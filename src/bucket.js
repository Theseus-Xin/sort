// 桶排序

// 桶排序是一种基于计数的排序算法，它的基本思想是将数据分到有限数量的桶中，然后对每个桶中的数据进行排序，最后将各个桶中的数据有序合并成一个序列。

// 这个实现中，首先计算数组中的最小值和最大值，然后根据桶的大小计算桶的数量和每个桶的范围。将元素分配到桶中后，对每个桶中的元素使用插入排序或其他排序算法进行排序，最后将各个桶中的元素有序合并成一个序列。

function bucketSort(arr, bucketSize) {
    if (arr.length === 0) return arr


    // 计算最小值和最大值
    let minVal = arr[0]
    let maxVal = arr[0]
    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        if (el < minVal) minVal = el
        else if (el > maxVal) maxVal = el
    }

    // 计算捅的数量和每个桶的范围
    bucketSize = bucketSize || 5
    const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1
    const buckets = new Array(bucketCount)
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    // 将元素分配到桶中
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minVal) / bucketSize)
        buckets[bucketIndex].push(arr[i])
    }

    console.log('buckets', buckets);

    // 对每个桶中的元素进行排序并合并
    let sortedArray = []
    for (let i = 0; i < buckets.length; i++) {
        const bucket = buckets[i];
        insertionSort(bucket)
        sortedArray = sortedArray.concat(bucket)
        console.log(sortedArray);
    }

    return sortedArray
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
}
