const students = [
  {
    name: 'Nam',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Mai',
    age: 22,
    gender: 'female',
  },
  {
    name: 'Trang',
    age: 23,
    gender: 'female',
  },
  {
    name: 'An',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Thien',
    age: 27,
    gender: 'male',
  },
];
var countb =0;
var countg = 0;
for (let i = 0; i < students.length; i++) {
  const sex = students[i].gender;
  if (sex=='male') {
    countb = countb+1;
  } else {
    countg = countg +1;
  }
};

console.log(`Tổng số lượng học sinh nam là ${countb}`);
console.log(`Tổng số lượng học sinh nữ là ${countg}`);
