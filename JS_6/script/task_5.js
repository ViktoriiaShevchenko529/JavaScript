// Получить пользователя (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => {users.getUserWithEmail(({ isUnique }) => !isUnique)};
'Email' => array('unique:driver_details'); 
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}