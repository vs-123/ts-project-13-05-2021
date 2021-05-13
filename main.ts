/*
* PROJECT: ts-project-13-05-2021
* DESCRIPTION: Given a string, reverse the words which have 5 or more letters and return it.
* AUTHOR: Vahin Sharma
*/

function solution(words: string): string {
  return words.split(" ").map(word => (word.length > 4) ? word.split("").reverse().join("") : word).join(" ")
}

console.log(solution("My dentist tells me that chewing bricks is very bad for your teeth"))

const tests = {
  "The fifty mannequin heads floating in the pool kind of freaked them out": "The ytfif niuqennam sdaeh gnitaolf in the pool kind of dekaerf them out",
  "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt": "A elprup pig and a neerg yeknod flew a kite in the elddim of the thgin and dedne up tnrubnus",
  "My dentist tells me that chewing bricks is very bad for your teeth": "My tsitned sllet me that gniwehc skcirb is very bad for your hteet",
  
  "The group quickly understood that toxic waste was the most effective barrier to use against the zombies": "The puorg ylkciuq dootsrednu that cixot etsaw was the most evitceffe reirrab to use tsniaga the seibmoz",
  "The elephant didn't want to talk about the person in the room": "The tnahpele t'ndid want to talk tuoba the nosrep in the room",
  "There were three sphered rocks congregating in a cubed room": "erehT were eerht derehps skcor gnitagergnoc in a debuc room",
}

let marks: number = 0;

for (const question in tests) {
  const answer = solution(question);
  
  console.log(`Input: ${question}`)
  
  if (answer == tests[question]) {
    console.log("Passed");
    ++marks;
  } else {
    console.log(`Expected '${tests[question]}', instead got '${answer}'`);
  }
  
  console.log()
}

console.log(`Score: ${marks} out of ${Object.keys(tests).length}`);
