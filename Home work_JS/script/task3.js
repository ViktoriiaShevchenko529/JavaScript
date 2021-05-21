const noLog = 'Доступ запрещен, неверный логин!';
const noPass = 'Доступ запрещен, неверный пароль!';
const cancel = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
const login = 'adminLogin';
const password = 'adminPassword';
const log = prompt('Введите логин');
if ( log === null || log == '' ){
 alert(cancel);
}
else if ( log != login ) {
      alert(noLog);
     }
     else {
      const pass = prompt('ВВедите пароль');
      if ( pass === null || pass == '' ){
      alert(cancel);
      }
      else if ( pass != password ) {
           alert(noPass);
           }
           else {
           alert(welcome);
           }
     }
     <script type="module"></script>