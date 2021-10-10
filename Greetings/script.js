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
      name: 'Mikki',
      message: "I'll make it simple, wishing you all the best. Be strong through tough times stay optimistic, surround yourself with people that will care and love you, stay healthy, be successful in your career path and lastly enjoy life being 18 ( I did not include be beautiful because you already are hahaha). Happy Birthday"
    }, {
      name: 'Kysha',
      message: "Happy Birthday! &#127874;&#127881; today is your birthday and I think it's your first time to celebrate your birthday away from your family, my wish to you is to be more brave, indepedent and have a good health. Thank you for appreciating the love and giving fun to our fellow Filipinos, you are a down to earth person and a soft hearted person. Good luck for your studies and for your career that you want to pursue someday. HAPPY BIRTHDAY QUEEN D &#128147;&#127881;"
    }, {
      name: 'Aris',
      message: "May all your dreams come true in this new stage that you are beginning, now you're 18 you should always remember, Greater age, greater freedom, but also greater responsibility! don’t let adulthood take away the joy of being young. Happy 18th Birthday Dana &#129392;"
    }, {
      name: 'Petter',
      message: "I'll just keep my keep my greetings short &mdash; HBD. &#128514; \n\n May all your birthday wishes come true &mdash; except for the illegal ones!\n\nYou think you are special JUST because it's your birthday? NO WAY! you're special EVERY DAY!!! &#128293;\n\n Age is just a number, maturity is a choice &mdash; Happy 18th Birthday Dana &#127874;&#127881;"
    }, {
      name: 'Joshuagrey4',
      message: "Our age is merely the number of years the world has been enjoying us, and i hope your celebration gives you many happy memories! Happy birthday Dana! &#127874;"
    }, {
      name: 'Elvin',
      message: "Hello. First of all I am grateful to those who helped us get to know you. Happy birthday Dana wish you all the best good health and have fun today. Do everything you want as if the world were yours. So I can be your number 1 fan/ boyfriend jk. HAHAHAHAHA Just don't forget us like this ha and I hope we have many more birthdays to celebrate with you"
    }, {
      name: 'Nio',
      message: "Happy birthday Dana. I hope your day are filled with happiness and blessing, make your day special as you are and thank you for making us happy and inspired"
    }, {
      name: 'RimuruSenpai',
      message: "Good day, Dana. I'm not sure if you remember me, but I was the one who said something like \"Dana is sad because the food tastes bad\" on one of your live. Uhmm... I'm sad that I won't be able to watch your live or assist you for the time being due of school obligations, but that won't stop me from honoring your far-flung influence on my life today. I just wanted to say Happy Birthday to someone who has been a big source of inspiration in my life.Happy Birthday to the most wonderful and possibly slightly crazy person I've ever met. I wish you a very happy birthday. Words are insufficient to describe your impact on the lives of those around you. My crush/idol, We've gathered today to express our gratitude. I hope many years of blessings follow you wherever you go. God bless. May all of your wishes come true in the coming year"
    }, {
      name: 'Jed',
      message: "Goodmorning Dana Happy birthday to you&#129395;&#129313; Wish you all the best, I know you like traveling and hopefully you'll reach those destinations, keep safe always more country is waiting to you that's all thankyou &#129392; wait i forgot *More Burgirr to comee* and i thankyou Keep safe always <a href=\"#\">#Weloveyou</a> <a href=\"#\">#nagmamahalngtapatkaymin</a> <a href=\"#\">#SoonBayaw</a> &#129392;&#129392;&#129392;"
    }, {
      name: 'Flores.jayson',
      message: "Happy 18th birthday !! I wish you all the best and stay kind, always take care of yourself and be healthy. Goodluck on your journey there in korea and hope that you will be kind to Lamoks."
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
