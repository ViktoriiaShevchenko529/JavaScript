const getUsersWithEyeColor = (users, color) => {users.map(({ color }) => color);
  };
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]