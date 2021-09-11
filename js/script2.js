const adder = document.querySelector('.friends'),
      declined = document.querySelector('.denied'),
      ul = document.querySelector('.people'),
      url = "https://randomuser.me/api/?results=6",
      create = function(element) {
        return document.createElement(element)
      },
      append = function(parent, el) {
      return parent.appendChild(el)
      };



fetch(url)
.then(res => res.json())
.then(data => {
  let users = data.results;
  users.forEach((user) => {
      let li = create('li');
      li.setAttribute('class', 'person');
      let img = create('img');
      img.src = user.picture.medium;
      let info = create('div');
      info.setAttribute('class', 'info');
      let div = create('div');
      div.setAttribute('class', 'name');
      div.innerHTML = `${user.name.first} ${user.name.last} `;
      let span = create('span');
      span.setAttribute('class', 'msg');
      span.innerText = ' wants to compete!';
      let options = create('div');
      options.setAttribute('class', 'options')
      let accept = create('button');
      accept.setAttribute('class', 'accept');
      accept.innerText = "Accept";
      let decline = create('button');
      decline.setAttribute('class', 'decline');
      decline.innerText = "Decline";
      append(li, img);
      append(li, info);
      append(info, div);
      append(info, options);
      append(div, span);
      append(options, accept);
      append(options, decline);
      append(ul, li);
  })
})
.then(()=> {
  let addBtn = document.querySelectorAll('.accept');
  let declineBtn = document.querySelectorAll('.decline');
  addBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
      ul.removeChild(this.parentNode.parentNode.parentNode)
      adder.classList.add('active')
      let timer = setInterval(() => {
        adder.classList.remove('active')
      }, 3000)
    })
  });
  declineBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
      ul.removeChild(this.parentNode.parentNode.parentNode)
      declined.classList.add('active')
    })
  });
})
.catch((err) => {console.log(err)})




adder.addEventListener('click', function() {
  adder.classList.remove('active')
});
declined.addEventListener('click', function() {
  declined.classList.remove('active')
});
