(function () {
  function $(id) {
    return document.getElementById(id);
  }
  function isLightColor(color) {
    const hex = color.replace("#", "");
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
    return brightness > 155;
  }

  const card = $("card"),
    openB = $("open"),
    closeB = $("close")
    cardFront = $("card-front"),
    coverTitle = $("cover-title"),
    cardInside = $("card-inside"),
    message = $("message")
    from = $("from"),
    prev = $("prev"),
    next = $("next"),
    randomColor = Math.floor(Math.random() * 16777215).toString(16),
    timer = null,
    fontList = [
      '\'Nobile\', sans-serif',
      '\'Dancing Script\', cursive',
      '\'Ephesis\', cursive',
      '\'Explora\', cursive',
      '\'Gemunu Libre\', sans-serif',
      '\'Pacifico\', cursive',
      '\'Architects Daughter\', cursive',
      '\'Kaushan Script\', cursive',
      '\'Itim\', cursive',
      '\'Rock Salt\', cursive'
    ],
    font = fontList[Math.floor(Math.random()*fontList.length)],
    froms = [{
      name: 'Petter',
      message: 'A sample message'
    }, {
      name: 'Mikki',
      message: 'Another message'
    }, {
      name: 'Kysha',
      message: 'Kakantahan nalang kita as gift ko sayo <3'
    }, {
      name: 'Aris',
      message: 'I am potato'
    }, {
      name: 'Godwin',
      message: 'Hehehehe'
    }, {
      name: 'Romano',
      message: 'What\s on your mind?'
    }];

  const urlParams = new URLSearchParams(window.location.search);
  const fromUser = urlParams.get('from');
  let userIndex = 0;
  let user = froms[userIndex];

  if (fromUser) {
    const findUser = function (user) {
      return user.name.toLowerCase() === fromUser.toLowerCase();
    }
    userIndex = froms.findIndex(findUser);
    if (userIndex === -1) {
      userIndex = 0;
    }
    user = froms[userIndex];
  }

  cardFront.style.backgroundColor = randomColor;
  openB.style.backgroundColor = randomColor;
  closeB.style.backgroundColor = randomColor;
  openB.style.color = '#fff';
  closeB.style.color = '#fff';
  coverTitle.style.color = '#fff';

  // apply random font
  coverTitle.style.fontFamily = font;
  cardInside.style.fontFamily = font;

  // apply message
  from.innerHTML = user && '- ' + user.name;
  message.innerHTML = user && user.message.replace(/\n/g, "<br />");

  // update prev url
  const prevUser = froms[userIndex - 1];
  if (prevUser) {
    prev.setAttribute('href', '?from=' + prevUser.name);
  } else {
    prev.style.display = 'none';
  }

  // update next url
  const nextUser = froms[userIndex + 1];
  if (nextUser) {
    next.setAttribute('href', '?from=' + nextUser.name);
  } else {
    next.style.display = 'none';
  }


  if (isLightColor(randomColor)) {
    openB.style.color = '#000';
    closeB.style.color = '#000';
    coverTitle.style.color = '#000';
  }
  const confettiSettings = { target: 'confetti' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  openB.addEventListener("click", function () {
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "open-fully");
      timer = null;
    }, 500);
  });

  closeB.addEventListener("click", function () {
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
    }, 500);
  });
})();
