const fruits = document.getElementById('fruits');

fruits.addEventListener('click', function (e) {
  const childItem = e.target.tagName;
  if (childItem === 'LI') {
    // console.log(e.target.tagName);
    console.log(e.target.textContent);
  }
});

const btn = document.getElementById('btn');
const outerElem = document.querySelector('.outer-elem');

outerElem.addEventListener('click', function (e) {
  alert('outer elem clicked');
  // document.body.style.backgroundColor = 'red';
});

btn.addEventListener('click', function (e) {
  e.stopPropagation();
  alert('change background color');
  // document.body.style.backgroundColor = 'green';
});

const apiBtn = document.getElementById('api-call');

apiBtn.addEventListener('click', async function () {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts';
  const comments = 'https://jsonplaceholder.typicode.com/comments';
  const p1 = await fetch(postUrl);
  const p2 = await fetch(comments);
  const data1 = await p1.json();
  const data2 = await p2.json();

  Promise.allSettled([data1, data2]).then((res) => {
    console.log(res);
  });
});
