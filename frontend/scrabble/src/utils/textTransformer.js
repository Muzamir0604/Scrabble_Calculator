export default function capitalize(word) {
  if (word !== undefined) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else {
    return null;
  }
}
