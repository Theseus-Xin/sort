// 鸡尾酒排序

async function cocktailSort() {
    let left = 0, right = arr.length - 1
    while (left < right) {
        // 从左向右冒泡
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                await swap(i, i + 1)
            }
        }
        right--

        // 从右向左冒泡
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                await swap(i, i - 1)
            }
        }
    }
}
