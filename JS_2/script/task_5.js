const checkForSpam = function(message) {
    var str = 'spam , sale';
    console.log(str.includes('spam, sale'));       
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  console.log(checkForSpam('Get best sale offers now!')); // true
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true