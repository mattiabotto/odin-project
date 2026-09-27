/**
 * Camelize a dash-separated string
 * Ex: my-short-string => myShortString
 */

function camelize(str) {
  return str
    .split('-') // split words into an array
    .map(// capitalize first letters of the words, exclude the first one
      (word, i) => (i === 0) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // Join words back into a string without any separator
}