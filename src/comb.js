// 梳排序

// 梳排序（Comb Sort）是一种改进版的冒泡排序。梳排序的基本思想是将相距较远的元素先比较一次，以加快排序的速度。梳排序通过动态调整元素之间的间隔，可以适应不同的输入序列，并在某些情况下比冒泡排序和快速排序更快。

 async function combSort() {
    const n = arr.length;
    let gap = n;
    let swapped = true
    while (gap > 1 || swapped) {
        // 根据当前间隔gap计算下一轮的间隔
        gap = Math.floor(gap / 1.3)
        if (gap < 1) gap = 1
        swapped = false
        for (let i = 0; i < n - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                await swap(i, i + gap)
                swapped = true
            }
        }
    }
}