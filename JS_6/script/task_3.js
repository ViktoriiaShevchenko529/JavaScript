// Получить массив имен пользователей по полу (поле gender).
import users from "./users.js"

const getUsersWithGender = (users, genders) =>
    users.filter(({ gender }) => gender === genders).map(({ name }) => name);


console.table(getUsersWithGender(users, 'male'));