/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)

const playerImg = document.querySelector(".player img")
const playerName = document.querySelector(".player h2")
const playerNick = document.querySelector(".player em")

playerImg.src = player.photo
playerImg.alt = `${player.name} photo`
playerName.innerText = player.name
playerNick.innerText = player.nickname

/***** Deliverable 4 *****/

function appendGoals(goal) {
	const goalsUl = document.querySelector("#goals")

	const goalsLi = document.createElement("li")
  goalsLi.dataset.id = goal.id
  goalsLi.innerHTML = `
    <p>${goal.description}</p>
		<a href="${goal.link}" target="_blank">${goal.link}</a>
	`

	goalsUl.append(goalsLi)
}

player.goals.forEach(appendGoals)


/***** Deliverable 5 *****/

document.querySelector('[data-id="3"]').remove()