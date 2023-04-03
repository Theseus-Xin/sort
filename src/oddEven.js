// 奇偶排序


// 奇偶排序（Odd-Even Sort），也称为奇偶转置排序（Odd-Even Transposition Sort），
// 是一种简单的排序算法，它是冒泡排序的一种变体。它通过比较奇数位和偶数位上的元素，进行排序。具体步骤如下：

//     将数组中下标为奇数的元素与其相邻的偶数下标的元素进行比较，如果顺序不对就交换它们的位置，直到没有需要交换的元素。
//     然后将数组中下标为偶数的元素与其相邻的奇数下标的元素进行比较，如果顺序不对就交换它们的位置，直到没有需要交换的元素。
//     重复执行上述两个步骤，直到数组完全有序。

async function oddEvenSort() {
    let sorted = false;
    while (!sorted) {
        sorted = true

        // 奇数位于偶数位比较
        for (let i = 1; i < arr.length; i += 2) {
            if (arr[i] > arr[i + 1]) {
                await swap(i, i + 1)
                sorted = false
            }
        }

        // 偶数位与技术为比较
        for (let i = 0; i < arr.length - 1; i += 2) {
            if (arr[i] > arr[i + 1]) {
                await swap(i, i + 1)
                sorted = false
            }
        }
    }
}