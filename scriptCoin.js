
const data = [
    { image: 'coins/Ace of Coins.jpg', sentence: '金币1 ：一只手伸出来，托着一个金币。代表全新的开始，会有不错的丰收。如果逆位就是钱掉了，代表不好。。' },
    { image: 'coins/Two of Coins.jpg', sentence: '金币2 ：一个小丑在右移着两个金币。代表同时做两件事，或者是要付出努力，来维持两边的平衡。可以算是钱比较少。' },
    { image: 'coins/Three of Coins.jpg', sentence: '金币3 ：3个人在盖教堂，他们在讨论如何盖这间教堂。（要加套餐组合，要讨论更多，做改进，或加更多，才有机会赚钱。' },
    { image: 'coins/Four of Coins.jpg', sentence: '金币4 ：是一个守财奴，他很注重金钱，他是不让自己钱流失的。可是他家里是很有钱的，他后面都是他的房子。' },
    { image: 'coins/Five of Coins.jpg', sentence: '金币5 ：有两个乞丐，他们经过这个教堂，教堂里面的人在吃东西，外面在下着雪。代表看得到，可是吃不到的感觉。代表不好。' },
    { image: 'coins/Six of Coins.jpg', sentence: '金币6 ：有帮助别人的感觉。他在施舍。有帮助人的含义。' },
    { image: 'coins/Seven of Coins.jpg', sentence: '金币7 ：他在想着要不要再耕耘更多。他其实知道里面还有很多宝物。他在思考要不要深耕下去。' },
    { image: 'coins/Eight of Coins.jpg', sentence: '金币8 ：工匠牌。他是很认真的。图里都是他的作品。有一份耕耘，一份收获的意思。' },
    { image: 'coins/Nine of Coins.jpg', sentence: '金币9 ：贵妇牌。代表赚很多。她在自己花园里面，赚了盆满钵满的感觉。' },
    { image: 'coins/Ten of Coins.jpg', sentence: '金币10 ：代表超有钱。赚到了钱，全家人都很何乐，都可以享受。里面的男人和女人在跳舞，还有爷爷，小孩，宠物，都是欢乐的感觉。' },
    { image: 'coins/Page of Coins.jpg', sentence: '金币侍者 ：金币只是轻轻的碰到他的手。代表不太会赚钱。只碰到一点点而已。' },
    { image: 'coins/Knight of Coins.jpg', sentence: '金币骑士 ：手是稍微碰到金币比较多。他是捧着金币，再朝着自己的远方，有目标前进。还算不错。' },
    { image: 'coins/Queen of Coins.jpg', sentence: '金币皇后 ：她很认真看着她的金币。这个金币也变大了（比骑士的大）。代表会赚钱。也感觉很稳固。' },
    { image: 'coins/King of Coins.jpg', sentence: '金币国王 ：代表他赚很多。后面都是他的房屋，他还占领了新的领土，脚也踩着神兽。代表他赚到钱意外，还能够征服新领土或征服人。' },
    { image: 'coins/Ace of Coins-RV.jpg', sentence: '逆位金币1 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Two of Coins-RV.jpg', sentence: '逆位金币2 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Three of Coins-RV.jpg', sentence: '逆位金币3 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Four of Coins-RV.jpg', sentence: '逆位金币4 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Five of Coins-RV.jpg', sentence: '逆位金币5 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Six of Coins-RV.jpg', sentence: '逆位金币6 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Seven of Coins-RV.jpg', sentence: '逆位金币7 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Eight of Coins-RV.jpg', sentence: '逆位金币8 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Nine of Coins-RV.jpg', sentence: '逆位金币9 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Ten of Coins-RV.jpg', sentence: '逆位金币10 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Page of Coins-RV.jpg', sentence: '逆位金币侍者 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Knight of Coins-RV.jpg', sentence: '逆位金币骑士 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/Queen of Coins-RV.jpg', sentence: '逆位金币皇后 : 抽到逆位，代表金币掉了(不好）。' },
    { image: 'coins/King of Coins-RV.jpg', sentence: '逆位金币国王 : 抽到逆位，代表金币掉了(不好）。' }

    // ... add more data items here
    // { image: 'image100.jpg', sentence: 'Sample sentence 100' }
];

function displayRandomData() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<div class="image-container">
                           <img src="${randomItem.image}" alt="Random Image" id="displayedImage">
                        </div>
                       <p>${randomItem.sentence}</p>
                       <button id="coinButton" onclick="displayRandomData()">Check 查看</button>`;
}


document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});


