const data = [
    { image: 'encourage/self love0.png', sentence: '勇敢的我，永远不会被生活打倒。' },
    { image: 'encourage/self love1.png', sentence: '美丽的不仅仅是外表，更是内心的力量。' },
    { image: 'encourage/self love2.png', sentence: '我，是生命的创造者，拥有无限的智慧和力量。' },
    { image: 'encourage/self love3.png', sentence: '女性如花，绽放自信与勇气。' },
    { image: 'encourage/self love4.png', sentence: '坚强的我，不畏惧风雨，我能穿越一切困难。' },
    { image: 'encourage/self love5.png', sentence: '拥有梦想的我，拥有无穷的可能性。' },
    { image: 'encourage/self love6.png', sentence: '勇敢追求，我创造奇迹。' },
    { image: 'encourage/self love7.png', sentence: '每个女人都是生活的骄傲，都值得被尊重和珍惜。' },
    { image: 'encourage/self love8.png', sentence: '女人的力量，能够改变世界，点亮未来。' },
    { image: 'encourage/self love0.png', sentence: '每位女性都是独一无二的，拥有特殊的魅力和智慧。' },
    { image: 'encourage/self love1.png', sentence: '自信的我，走到哪里都是风景。' },
    { image: 'encourage/self love2.png', sentence: '女人，你是生活的艺术家，创造出美丽的画卷。' },
    { image: 'encourage/self love3.png', sentence: '勇敢的心，创造奇迹的力量。' },
    { image: 'encourage/self love4.png', sentence: '女性，是爱与力量的象征，拥抱爱，释放力量。' },
    { image: 'encourage/self love5.png', sentence: '女人如花，绽放智慧和勇气。' },
    { image: 'encourage/self love6.png', sentence: '坚持和梦想，让我展翅高飞。' },
    { image: 'encourage/self love7.png', sentence: '我是生命的源泉，充满力量和智慧。' },
    { image: 'encourage/self love8.png', sentence: '勇往直前，我能创造历史。' },
    { image: 'encourage/self love0.png', sentence: '世界因女性而更美好，因为她们有爱、有力量。' },
    { image: 'encourage/self love1.png', sentence: '女人，你是生活的奇迹，无限可能在你手中。' },
    { image: 'encourage/self love2.png', sentence: '我是勇敢和智慧的化身，在逆境中绽放最美的芬芳。' },
    { image: 'encourage/self love3.png', sentence: '每个女人都有力量改变世界，只需相信自己。' },
    { image: 'encourage/self love4.png', sentence: '我的坚强不是偶然，是内心的火焰在燃烧。' },
    { image: 'encourage/self love5.png', sentence: '勇敢的女人不怕跌倒，因为她知道她总能重新站起来。' },
    { image: 'encourage/self love6.png', sentence: '每位女性都是独特的星辰，闪耀在宇宙的深处。' },
    { image: 'encourage/self love7.png', sentence: '女性的智慧如同清泉，滋润着世界的每一个角落。' },
    { image: 'encourage/self love8.png', sentence: '勇敢和坚持是女性最迷人的化妆品。' },
    { image: 'encourage/self love0.png', sentence: '女性是生命的守护者，用爱和智慧守护着世界的和平与温暖。' },
    { image: 'encourage/self love1.png', sentence: '我的美丽不仅仅在于外表，更在于内心的善良和坚强。' },
    { image: 'encourage/self love2.png', sentence: '女性，你们是生命的奇迹，是希望和爱的化身。' }
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
                       <button id="encourageButton" onclick="displayRandomData()">Charge 充电</button>`;
}


document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});


