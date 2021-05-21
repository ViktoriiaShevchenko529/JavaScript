// let china = 150;
// let chile = 250;
// let australia = 165;
// let india = 90;
// let jamaica = 130;

let a = prompt("Введите страну");
if (a !== null){
  a = a.toLowerCase();
}
switch (a) {
    case 'china':
      alert( '150 кредитов' );
      break;
    case 'chile':
      alert( '250 кредитов' );
      break;
    case 'australia':
      alert( '165 кредитов' );
      break; 
    case 'india':
      alert( '90 кредитов' );
      break; 
    case 'jamaika':
      alert( '130 кредитов' );
      break; 
    default:
      alert( "В вашей стране доставка не доступна." );

  }