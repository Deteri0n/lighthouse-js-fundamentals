const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let highest = 0;
  vegetables.forEach(function(vegetable) {
    if (vegetable[metric] > highest){
      winner = vegetable.submitter;
      highest = vegetable[metric];
    }
  });
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));