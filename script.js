

const searchBtnEl = document.getElementById('search-btn');
const searchInputEl = document.getElementById('search-input');
const resultEl = document.getElementById('result');


searchBtnEl.addEventListener('click', function() {
  // TODO: check if the input is valid
  const searchText = searchInputEl.value;
  const url = `https://www.loc.gov/search/?q=${searchText}&fo=json`;

  fetch(url)
  .then(function(res) { return res.json(); })
  .then(function(data) { 

    for (const x of data.results) {
      const p = document.createElement('p');
      p.textContent = x.title;
      resultEl.appendChild(p);
    }

  });

});