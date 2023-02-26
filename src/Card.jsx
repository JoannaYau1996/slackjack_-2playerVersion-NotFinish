const poker = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13,
];
let newPoker = [];

export function newCard() {
  let index = Math.floor(Math.random() * poker.length);
  let curr = poker[index];
  while (poker.length > 0) {
    newPoker.push(curr);
    poker.splice(poker.indexOf(curr), 1);
    index = Math.floor(Math.random() * poker.length);
    curr = poker[index];
  }
}
newCard();


export let allCards = {
  1: "\uD83C\uDCB1",
  2: "\uD83C\uDCB2",
  3: "\uD83C\uDCB3",
  4: "\uD83C\uDCB4",
  5: "\uD83C\uDCB5",
  6: "\uD83C\uDCB6",
  7: "\uD83C\uDCB7",
  8: "\uD83C\uDCB8",
  9: "\uD83C\uDCB9",
  10: "\uD83C\uDCBA",
  11: "\uD83C\uDCBB",
  12: "\uD83C\uDCBD",
  13: "\uD83C\uDCBE",
};

export { newPoker};