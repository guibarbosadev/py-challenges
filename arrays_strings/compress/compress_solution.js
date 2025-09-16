function compress(word) {
  let compressedWord = String(word);
  let match = compressedWord.match(/(\w)\1{2,}/);
  while (match != null) {
    const [repeatedChars, char] = match;
    const notation = `${char}${repeatedChars.length}`;
    const splittedWord = compressedWord.split("");

    splittedWord.splice(match.index, repeatedChars.length, notation);
    compressedWord = splittedWord.join("");
    match = compressedWord.match(/(\w)\1{2,}/);
  }

  console.log("dadsijajidjis");

  return compressedWord;
  // // matches.forEach((match) => console.log(match))
  // for (const match of matches) {
  //   console.log(match.index)
  // }
  // console.log(matches)
}
//     word.split(/(\w)\1{2,}/g).forEach((group) => {
//          if (group.match())…

console.log(compress("AAABCCDDDD"));
