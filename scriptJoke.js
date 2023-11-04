const data = [
    { image: 'jokes/smile1.png', sentence: '会说话的狗：一个人带着他的会说话的狗走进一家酒吧，说：“嘿，大家，这只狗能说话！” 受到怀疑，酒保问：“真的吗？证明一下。” 那人转向狗问：“房子的顶上是什么？” 狗回答：“屋顶！” 酒保不以为然地说：“来吧，这个太简单了。” 那人然后问：“光滑的反义词是什么？” 狗回答：“粗糙！” 酒保受挫，把他们赶出去。 在外面，狗转向那人问：“我是不是应该说‘天花板’呢？”' },
    { image: 'jokes/smile2.png', sentence: '魔法青蛙：一个人吻了一只青蛙，它变成了一个魔法精灵。 精灵说：“谢谢你解救我。我会实现你一个愿望。” 那人说：“我想要一座从这里通往夏威夷的桥，这样我随时都可以开车去那里。” 精灵回答：“那有点太过分了。你知道那需要多少材料和工程吗？选择其他的吧。” 那人想了一会儿说：“我希望能够理解女人。” 精灵回答：“那么，你希望在桥上有两条车道还是四条车道呢？”' },
    { image: 'jokes/smile3.png', sentence: '喜忘鬼：为什么幽灵去参加聚会？因为他们没有身体可以搭伴！' },
    { image: 'jokes/smile4.png', sentence: '隐形人：我告诉我的妻子她画眉毛画得太高了。她看上去很吃惊。' },
    { image: 'jokes/smile5.png', sentence: '快速的番茄：两个番茄在比赛的时候对话：一个番茄说：“你能赶快吗？”' },
    { image: 'jokes/smile6.png', sentence: '音乐蜗牛：一只蜗牛买了一辆新的跑车，然后问油漆工在车上画一个“S”。油漆工问：“为什么你要在你的车上画个‘S’？” 蜗牛回答：“当我开过去的时候，我希望人们说：‘看那只蜗牛开得多快！’”' },
    { image: 'jokes/smile7.png', sentence: '愤怒的辣椒：为什么辣椒很生气？因为它有点辣！' },
    { image: 'jokes/smile1.png', sentence: '会说话的时钟：我有一个会说话的时钟。但是它很讽刺。它说：“哦，看看现在是几点了”，然后就不告诉我了。' },
    { image: 'jokes/smile2.png', sentence: '茶包：为什么茶包去心理治疗？它有太多的潜在问题。' },
    { image: 'jokes/smile3.png', sentence: '洗发水瓶：我正在进行威士忌减肥。我已经少吃了三天了。希望这些笑话能让你开心！' },
    { image: 'jokes/smile4.png', sentence: '电灯泡：为什么电灯泡不玩扑克牌？因为它怕被抓住。' },
    { image: 'jokes/smile5.png', sentence: '猫和奶酪：为什么猫不喜欢奶酪？因为它怕发出“披萨”的声音。' },
    { image: 'jokes/smile6.png', sentence: '老板和员工：老板对员工说：“你为什么总是迟到？”员工回答：“因为你说我们是一家‘发展中的公司’。”' },
    { image: 'jokes/smile7.png', sentence: '猫和电视遥控器：为什么猫不喜欢看电视？因为它无法找到遥控器。' },
    { image: 'jokes/smile1.png', sentence: '鱼和海马：为什么鱼不喜欢和海马一起玩？因为海马总是太马虎。' },
    { image: 'jokes/smile2.png', sentence: '鸟和网球比赛：为什么鸟不喜欢参加网球比赛？因为它怕被球拍' },
    { image: 'jokes/smile3.png', sentence: '高山和书本：为什么高山总是那么聪明？因为它们总是堆满了知识（山=堆）。' },
    { image: 'jokes/smile4.png', sentence: '小狗和火车站：小狗为什么喜欢去火车站？因为它喜欢被人抱。' },
    { image: 'jokes/smile5.png', sentence: '笑话和冰淇淋：为什么笑话就像冰淇淋？因为大家都喜欢多吃点！' },
    { image: 'jokes/smile6.png', sentence: '猫和电话：为什么猫不喜欢接电话？因为它怕电话线会抓住它。' },
    { image: 'jokes/smile7.png', sentence: '医生和苹果：一个苹果对医生说：“每天一颗苹果，能让我远离你。”医生回答：“如果我是你，我会选苹果。”' },
    { image: 'jokes/smile1.png', sentence: '兔子和胡萝卜：为什么兔子永远不会说谎？因为他们怕胡萝卜断裂。' },
    { image: 'jokes/smile2.png', sentence: '猫和电脑：为什么猫喜欢上网？因为它们想变成老鼠的朋友。' },
    { image: 'jokes/smile3.png', sentence: '老板和时间旅行：老板对员工说：“你能告诉我为什么你迟到了吗？”员工回答：“我在时间旅行中遇到了交通堵塞。”' },
    { image: 'jokes/smile4.png', sentence: '鸭子和化妆品：为什么鸭子不用化妆品？因为它们已经“涂”了。' },
    { image: 'jokes/smile5.png', sentence: '老师和铅笔：老师问学生：“为什么你的作业写得这么淡？”学生回答：“因为我想让它看起来像一份草稿。”' },
    { image: 'jokes/smile6.png', sentence: '太阳和雨天：为什么太阳不喜欢下雨天？因为它怕会变成“淋”太阳。' },
    { image: 'jokes/smile7.png', sentence: '猫和音乐：为什么猫不喜欢音乐会？因为它们怕会有太多“爪子声”。' },
    { image: 'jokes/smile6.png', sentence: '鸡蛋和锅：为什么鸡蛋总是觉得冤枉？因为它们总被冤枉为煎锅。' },
    { image: 'jokes/smile7.png', sentence: '小狗和电影：为什么小狗喜欢看外星人的电影？因为它们觉得外星人的飞碟是大飞盘。。' },
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


