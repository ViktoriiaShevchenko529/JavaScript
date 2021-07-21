// Получить массив только неактивных пользователей (поле isActive).
import users from "./users.js"

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
console.table(getInactiveUsers(users));