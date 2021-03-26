document.getElementById("root").innerHTML = "<button onClick='getChapter()'>Click</button>";
document.getElementById('#root').style.alignContent = "center";
async function getChapter () {
    let response = await fetch("db/chapter1.json");
    let item = await response.json();
    console.log(item);
    for (i in item.div) {
        var chapter = document.createElement('div');
        var img = document.createElement('img');
        chapter.innerHTML = item.div[i].img.alt;
        img.src = item.div[i].img.src;
        document.body.appendChild(chapter);
        document.body.appendChild(img)
    }

}
