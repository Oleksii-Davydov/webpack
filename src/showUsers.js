import {users} from "./data.js";
export const cardPublish = document.querySelector(".publish-container")

export function showUser(user) {
    const userName = document.createElement("h3");
    const userId = document.createElement("p");
    const userEmail = document.createElement("p")
    const userCompany = document.createElement("p")
    const userBirthday = document.createElement("p")

    userName.classList.add("userName");
    userId.classList.add("userId")
    userEmail.classList.add("userEmail")
    userCompany.classList.add("userCompany")
    userBirthday.classList.add("userBirthday")

    userName.innerText =`Username - ${users[user].name}`
    userId.innerText = `ID - ${users[user].id}`
    userEmail.innerText = `Email - ${users[user].email}`
    userCompany.innerText = `Company - ${users[user].company}`
    userBirthday.innerText = `Birthday - ${users[user].birthday}`

    cardPublish.append(userName)
    cardPublish.append(userId)
    cardPublish.append(userEmail)
    cardPublish.append(userCompany)
    cardPublish.append(userBirthday)

}