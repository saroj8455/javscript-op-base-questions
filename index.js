const input = [
  { key: 'sample 1', data: 'Data1' },
  { key: 'sample 1', data: 'Data1' },
  { key: 'sample 2', data: 'Data2' },
  { key: 'sample 1', data: 'Data1' },
  { key: 'sample 3', data: 'Data1' },
  { key: 'sample 4', data: 'Data1' },
];

const output = {
  'sample 1': [
    { key: 'sample 1', data: 'Data1' },
    { key: 'sample 1', data: 'Data1' },
    { key: 'sample 1', data: 'Data1' },
  ],
  'sample 2': [{ key: 'sample 2', data: 'Data2' }],
  'sample 3': [{ key: 'sample 3', data: 'Data1' }],
  'sample 4': [{ key: 'sample 4', data: 'Data1' }],
};

function groupByKey(data) {
  let outputData = {};
  data.forEach((item) => {
    if (!outputData[item.key]) {
      outputData[item.key] = [{ key: item.key, data: item.data }];
    } else {
      outputData[item.key].push({ key: item.key, data: item.data });
    }
  });
  return outputData;
}

// higher order method reduce
const result = input.reduce((acc, curr, index) => {
  // console.log(curr);
  if (!acc[curr.key]) {
    acc[curr.key] = [{ key: curr.key, data: curr.data }];
  } else {
    acc[curr.key].push({ key: curr.key, data: curr.data });
  }
  return acc;
}, {});

// console.log(result);

// console.log(groupByKey(input));

const profile1 = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer',
  details: function (location = 'USA') {
    console.log('Hi, ', this.name, this.occupation, location);
  },
};

const profile2 = {
  name: 'Brad Traversy',
  age: 31,
  occupation: 'Software Engineer',
};

// profile1.details('CA');
// call, directly execute  the function
// profile1.details.call(profile2);
const jhonNative = 'San Joshe';
// profile1.details.call(profile2, 'Singapore');
// profile1.details.apply(profile2, ['San Jose']);

// bind return a copies of orginal function
const showDetails = profile1.details.bind(profile2, 'Newboston');

// showDetails();

const firstnames = ['Jhon', 'Brad', 'Tom', 'Michale'];
const lastnames = ['Deo', 'Brad Traversy', 'Dech'];

const names = firstnames.map((name) => ({
  fullname: name,
}));

// console.log(firstnames.slice(0, lastnames.length));
const op = firstnames
  .slice(0, lastnames.length)
  .map((fname, index) => ({ fullname: `${fname} - ${lastnames[index]}` }));

// console.log(op);

function checkInput(params) {
  if (params) {
    console.log('Hi! - Block');
  } else {
    console.log('Bye - Block');
  }
}
checkInput(0); // false block
checkInput(1); // true block
checkInput(-100); // true block
checkInput(null); // false block
checkInput(undefined); // false block
checkInput([]); // true block
checkInput({}); // false block
console.log(5 > 4 > 3);
