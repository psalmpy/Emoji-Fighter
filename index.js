let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightEl = document.getElementById("fight")

fightButton.addEventListener("click", function () {
    let fighterIndexOne = Math.floor(Math.random() * fighters.length)
    let fighterIndexTwo = Math.floor(Math.random() * fighters.length)

    let fighterOne = fighters[fighterIndexOne]
    let fighterTwo = fighters[fighterIndexOne]
})
})