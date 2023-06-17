let allpost = document.querySelector(".allpost")
let name = document.querySelector(".name")
let captionMy = document.querySelector(".captionMy")
let buttonPost = document.querySelector(".button")
let update = document.querySelector(".update")

let noPost = document.querySelector(".noPost")

let error1 = document.querySelector(".error1")

let player = document.querySelector(".player")
let playerTwoInput = document.querySelector(".playerTwoInput")
let check = document.querySelector(".check")
let home = document.querySelector(".home")



let interface = document.querySelector(".interface")
let chance = document.querySelector(".chance")
let game = document.querySelector(".game")
let error2 = document.querySelector(".error2")
let count = 5
player.innerHTML = "Player 1"

noPost.innerHTML = "No Post"

let arr = []
let updateIndex;
let playItem;
let disItem;


buttonPost.addEventListener("click", function () {




    if (!captionMy.value) {
        error1.innerHTML = "Please enter somthing"
    } else {
        if (!(captionMy.value - 12)) {
            error1.innerHTML = "Please enter a number"
        } else {
            if (captionMy.value > 10) {
                error1.innerHTML = "Please enter a number 0 to 10"
            } else {
                if (captionMy.value > 0 && captionMy.value < 10) {
                    error1.innerHTML = ""
                    arr.push({
                        name: name.value,
                        captionMy: captionMy.value
                    })

                }
            }
        }
    }
    if (arr.length == 0) {
        noPost.innerHTML = "No Post"
    } else {
        noPost.innerHTML = ""
    }
    name.value = ""
    captionMy.value = ""

    allpost.innerHTML = ""
    display()
})

update.addEventListener("click", function () {
    arr[updateIndex].name = name.value
    arr[updateIndex].captionMy = captionMy.value
    button.style.display = "inline-block"
    update.style.display = "none"


    name.value = ""
    captionMy.value = ""

    allpost.innerHTML = ""
    display()
})





function display() {

    arr.map(function (item) {
        allpost.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">✶</p>
                <button class="btn btn-primary playbtn">Play</button>
                <button class="btn btn-danger delete">Delete</button>
            </div>
        </div>`
    })

    let deletebtn = document.querySelectorAll(".delete")
    let dtlarr = Array.from(deletebtn)
    dtlarr.map(function (dltitem, index) {
        dltitem.addEventListener("click", function () {
            arr.splice(index, 1)
            allpost.innerHTML = ""

            if (arr.length == 0) {
                noPost.innerHTML = "No Post"
            } else {
                noPost.innerHTML = ""
            }
            display()
            disItem.classList.add("disabled")
        })
    })

    let playbtn = document.querySelectorAll(".playbtn")
    let playarr = Array.from(playbtn)

    playarr.map(function (item, index) {
        disItem = item
        item.addEventListener("click", function () {
            captionMy.value = arr[index].captionMy
            interface.style.display = "none"
            game.style.display = "inline-block"
            check.style.display = "inline-block"
            home.style.display = "none"
            chance.innerHTML = `chance: ${count}`
            player.innerHTML = "Player 2"

            check.addEventListener("click", function () {

                if (!playerTwoInput.value) {
                    error2.innerHTML = "Please enter somthing"
                } else {
                    if (!(playerTwoInput.value - 12)) {
                        error2.innerHTML = "Please enter a number"
                    } else {
                        if (playerTwoInput.value > 0 && playerTwoInput.value < 10) {
                            if (count > 1) {
                                count--
                                chance.innerHTML = `chance: ${count}`

                                if (captionMy.value == playerTwoInput.value) {
                                    player.innerHTML = "Player 2 Winner"
                                    error2.innerHTML = ""
                                    check.style.display = "none"
                                    home.style.display = "inline-block"
                                } else {
                                    error2.innerHTML = "Please try agian"
                                }
                            } else {
                                count = 0
                                chance.innerHTML = `chance: ${count}`
                                if (captionMy.value == playerTwoInput.value) {
                                    player.innerHTML = "Player 2 Winner"
                                    error2.innerHTML = ""
                                    check.style.display = "none"
                                    home.style.display = "inline-block"
                                } else {
                                    player.innerHTML = "Player 1 Winner"
                                    error2.innerHTML = ""
                                    check.style.display = "none"
                                    home.style.display = "inline-block"
                                }
                            }
                        } else {
                            error2.innerHTML = "Please enter a number '0' to '10'"
                        }
                    }
                }
                playerTwoInput.value = ""
                home.addEventListener("click", function () {
                    interface.style.display = "block"
                    game.style.display = "none"
                    item.classList.add("disabled")
                    count = 5
                })
                
            
            })

        })
        


    })




}








