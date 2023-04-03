const container = document.getElementById('container');
const arr = [3, 5, 6, 2, 7, 11, 17, 13, 18, 1, 9, 14, 10, 4, 16, 20, 12, 8, 19, 15]; // 待排序的数组
let bars = [];
let startTime = 0
let endTime = 0

// 生成初始状态的排序示意图
function render() {
    container.innerHTML = '';
    bars = [];
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = arr[i] * 10 + 'px';
        container.appendChild(bar);
        bars.push(bar);
    }
}

// 交换元素
async function swap(i, j) {
    await sleep(300); // 延时1秒，方便观察
    [arr[i], arr[j]] = [arr[j], arr[i]]
    bars[i].style.height = arr[i] * 10 + 'px';
    bars[j].style.height = arr[j] * 10 + 'px';
}

// 覆盖元素
async function insert(i, v) {
    await sleep(300); // 延时1秒，方便观察
    arr[i] = v
    bars[i].style.height = arr[i] * 10 + 'px';
}

// 延时函数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 开始排序
async function startSort(fn) {
    startTime = Date.now();
    await fn();
    endTime = Date.now()
    checkTime()
}

// 重置排序
function reset() {
    arr.sort(() => Math.random() - 0.5); // 打乱数组顺序
    render();
}

// 检查时间
function checkTime() {
    console.log((endTime - startTime) / 1000);
}

render()