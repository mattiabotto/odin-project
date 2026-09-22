function checkAge(age) {
  return (age >= 18) || confirm('Did parents allow you?')
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}