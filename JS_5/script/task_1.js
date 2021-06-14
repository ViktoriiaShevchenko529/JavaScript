function account({ login, email }) {
    this.login = login;
    this.email = email;
  
    account.prototype.getInfo = function () {
      return console.log(`Login: ${this.login}, Email: ${this.email}`);
    };
  }
  const mango = new account({
    login: "Mangozedog",
    email: "mango@dog.woof",
  });
  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  
  const poly = new account({
    login: "Poly",
    email: "poly@mail.com",
  });
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
  console.log(account.prototype.getInfo); // function
