const egg = document.querySelector(".egg");
const eggColor = document.querySelector(".egg-color");
const openEggColor = document.querySelector(".open-egg-color");
let lotteryList = ["抽中了: 宇文清越【11-19 21:08】<br><br>转发内容: 抽我抽我！我也想要！#swanqueen#<br>",
    "抽中了: 戒焦戒躁佛系侠【11-19 21:05】<br><br>转发内容: #swanqueen 可惜没在广州，不然去展位看看[awsl]<br>",
    "抽中了: 北风度远山【11-17 00:59】<br><br>转发内容:  转发微博<br>",
    "抽中了: 呼呼草莓酱【11-12 12:22】<br><br>转发内容: 好牛<br>",
    "抽中了: 潋亦iii【11-11 00:11】<br><br>转发内容: 呜呜老师我爱你..<br>",
    "抽中了: Im小朱【10-31 19:43】<br><br>转发内容: 转发微博<br>",
    "抽中了: -不知道叫什么那就随便吧【10-30 23:48】<br><br>转发内容: 好美的无料！[打call][打call]<br>",
    "抽中了: Victorian_Elegy【10-24 04:59】<br><br>转发内容: 狠狠支持[打call][打call]<br>",
    "抽中了: 栎磓誮砗【10-24 02:23】<br><br>转发内容: 好萌[打call][打call]<br>"];



egg.addEventListener("click", function (e) {
});


let currentColor = "#E5A0B9";

document.querySelector(".switch").addEventListener("click", function () {
    egg.classList.remove("active");
    // A:小球滚动
    const eggRoll = document.querySelectorAll('.roll-egg'); // 选择小球元素
    eggRoll.forEach(function (eggCircle) {
        // 生成随机的运动参数
        const translateY = (Math.random() * 15 - 0.5) + 'px'; // 随机Y方向移动，范围 -100px 到 100px
        const translateX = (Math.random() * 4 - 2) + 'px'; // 随机X方向移动，范围 -100px 到 100px
        const scale = (Math.random() * 0.3 + 0.75); // 随机缩放，范围 0.75 到 1.25
        // 设置 CSS 变量
        eggCircle.style.setProperty('--translateY', translateY);
        eggCircle.style.setProperty('--translateX', translateX);
        eggCircle.style.setProperty('--scale', scale);
        eggCircle.classList.add('animate-roll');
        // 动画结束后移除动画类
        setTimeout(() => {
            eggCircle.classList.remove('animate-roll');
        }, 2000); // 动画时长3秒
    });

    //B：小球消失 
    const eggItems = document.querySelectorAll('.roll-egg');
    const lastEgg = eggItems[eggItems.length - 1];
    currentColor =lastEgg.querySelector('path').getAttribute('fill');
    lastEgg.parentNode.removeChild(lastEgg);

    //C：掉落小球
    eggColor.style.fill = currentColor;
    openEggColor.style.fill = currentColor;
    this.classList.toggle("active");
    setTimeout(() => this.classList.remove("active"), 700);
    setTimeout(() =>  egg.classList.toggle("active"), 10);

    const luckyNum = Math.floor(Math.random() * lotteryList.length);
    const winner = lotteryList[luckyNum];
    lotteryList.splice(luckyNum, 1);
    document.querySelector(".winner").innerHTML = `<span>${winner}</span> <img src="sqq.png" alt="sq" />`;
});

egg.addEventListener("click", function () {
    this.classList.remove("active");
    document.querySelector(".mask").classList.toggle("active");
});

document.querySelector(".mask").addEventListener("click", function () {
    this.classList.toggle("active");
});
