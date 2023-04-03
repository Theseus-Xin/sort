// 鸽巢排序

// 鸽巢排序（Pigeonhole Sort）是一种简单的排序算法，其基本思想是对于给定的输入序列，将元素分别放到对应的鸽巢中，
// 然后对每个鸽巢中的元素进行排序，最终按照鸽巢的顺序将所有元素输出。

function pigeonholeSort() {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let size = max - min + 1
    let holes = new Array(size)

    for (let i = 0; i < arr.length; i++) {
        const index = arr[i] - min;
        if (holes[index] === undefined) {
            holes[index] = [arr[i]]
        } else {
            holes[index].push(arr[i])
        }
    }

    let result = []
    for (let i = 0; i < holes.length; i++) {
        if (holes[i] != undefined) {
            result.push(...holes[i])
        }
    }
}