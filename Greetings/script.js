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

  let timer = null;
  const card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    cardFront = $("card-front"),
    coverTitle = $("cover-title"),
    cardInside = $("card-inside"),
    message = $("message"),
    closingRemark = $("closing-remark"),
    from = $("from"),
    prev = $("prev"),
    next = $("next"),
    randomColor = Math.floor(Math.random() * 16777215).toString(16),
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
    remarks = [
      'Yours truly',
      'Sincerely',
      'Regards',
      'Best regards',
      'Warm regards',
      'Kind regards',
      'Best of luck'
    ],
    font = fontList[Math.floor(Math.random()*fontList.length)],
    remark = remarks[Math.floor(Math.random()*remarks.length)]
    froms = [{
      name: 'Mikki',
      alias: '선생님 / 오빠 Mikki',
      message: "I'll make it simple, wishing you all the best. Be strong through tough times stay optimistic, surround yourself with people that will care and love you, stay healthy, be successful in your career path and lastly enjoy life being 18 ( I did not include be beautiful because you already are hahaha). Happy Birthday"
    }, {
      name: 'Kysha',
      message: "Happy Birthday! &#127874;&#127881; today is your birthday and I think it's your first time to celebrate your birthday away from your family, my wish to you is to be more brave, indepedent and have a good health. Thank you for appreciating the love and giving fun to our fellow Filipinos, you are a down to earth person and a soft hearted person. Good luck for your studies and for your career that you want to pursue someday. HAPPY BIRTHDAY QUEEN D &#128147;&#127881;"
    }, {
      name: 'Godwin',
      message: "Annyeong, Happy Birthday Dana, I wish you more birthdays to come bes, pa burgir ka naman hahaha\n\n \
      Check out this latest video I created for your birthday. Click <a href=\"https://www.youtube.com/embed/wZou218BL4o\">here</a>"
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
      message: "Goodmorning Dana Happy birthday to you&#129395;&#129313; Wish you all the best, I know you like traveling and hopefully you'll reach those destinations, keep safe always more country is waiting to you that's all thankyou &#129392; wait i forgot *More Burgirr to comee* and i thankyou Keep safe always. \n\n <a href=\"#\">#Weloveyou</a>\n<a href=\"#\">#nagmamahalngtapatkaymin</a>\n<a href=\"#\">#SoonBayaw</a> &#129392;&#129392;&#129392;"
    }, {
      name: 'Flores.jayson',
      message: "Happy 18th birthday !! I wish you all the best and stay kind, always take care of yourself and be healthy. Goodluck on your journey there in korea and hope that you will be kind to Lamoks."
    }, {
      name: 'a.john_lng',
      message: "happy birthday dana, even though i am not as active as i was before because i am very busy with my studies, i want to greet you and hope you have a great birthday and a long life. keep safe always, stay healthy. we support you dana. happy birthday again"
    }, {
      name: 'Jiv',
      message: "Hi Dana! It’s Jiv here. Happy Happy Birthday to you!! My birthday is also coming up so greet me too okay? HAHAHAHA Anyways, stay safe always and please take good care of yourself, physically and mentally. Let’s meet when I go to Korea soon okay? Have a good one! &#10084;&#129346;"
    }, {
      name: 'Royandot',
      message: "stay young, stay pretty, stay humble focus to her study and happy happy birthday to Dana, enjoy your birthday"
    }, {
      name: 'Harris',
      message: "I just first wanna tell you to takecare of yourself. I hope your special day will bring you lots of happiness and bring every success. I wish nothing but good things on your birthday. Wishing you many more years of good health and prosperity and all the most amazing things on your birthday. May your birthday today(tomorrow) bring you a step closer to realizing every dream and desire of yours and may your future (dream) always shine like a candle on your birthday cake.\n\nHappy Birthday dana &#128522;&#10084;"
    }, {
      name: 'Roland',
      message: "Happy birthday Dana, I hope you're always safe and healthy, I hope your behavior doesn't change, you're cute, you're beautiful, and I hope I'll meet you soon I hope to find the one who will truly love you first, the one who will take care of you and be with you for life from"
    }, {
      name: 'Roman',
      message: "To my only ANGEL that rescued me from the fate of doomness:\n\n \
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before I met you here on the internet I was wondering if I would ever see a beaufitul Angel that can comfort me in every step of the way. \
      What I saw was nothing but loneliness not just personally but also deep inside of my HEART. There were many moments that I was totally sad because I can not even comfort my ownself, I think I need someone that can be my comforter. \
      There are also the moments that I was thinking to end my life negatively on every aspects. I thought to myself that I may not bare it at all. Every day, I sometimes think of ending it too soon but I waited patiently for the Angel to come.  \
      Even if I do not meet her but I know that she will exist in this chaotic world full of sins. I go deeper into the internet indulging with music that made me comfortable. \
      I did not think too much of a happy thoughts I was glad for the time being but it did not take much long enough and then it fades away like a leaf or dust where it dissolves easily and never to be seen again. \
      For every aspects of my life there was these thoughts that should not and must not materialized or else I will stay in that way. \n\n \
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For almost two (2) years I suffer a lot with my own health deteroriating in all aspects. I stayed mentally stress and physically stressed. \
      I need to enjoy a much longer lifespan with someone in my life whoever she is that can comfort me in every way. \
      For almost two (2) years I suffer a lot with my own health deteroriating in all aspects. I stayed mentally stress and physically stressed. \
      I need to enjoy a much longer lifespan with someone in my life whoever she is that can comfort me in every way. \
      For almost two (2) years I sometimes enjoy watching and reading but the happiness in it fades away so easily. \
      Then I found this guy Marcus whom you encounter in OmeTV but before you encountered him on the public platform his videos were comforting me for a period of a time and so again it simply fades away in the vast emptiness of space. \
      Until 1 Day I saw leaked from his 700K LIVESTREAM that brings me to your Instagram and then I followed you even if you do not follow me back I will still continue supporting you in every way I can. \
      Now that we can communicate with each other specially to the other Mates that has also been there for you and keep you safe from harm. We are always there in case you need a helping hand we can be the best that you want and need to be.\n\n \
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have never encountered me yet on OmeTV but when the time comes you will notice what I look like and what my voice is but not in a cartoonic voice and character and personality I am not like that. I am an introvert. \
      You have emboldened my heart in a softer ways. You have made me happy in every aspects of my life and I am very fond of you especially that you have charming personality and character that attracts my attention in every way. \
      Now that you are turning 18 we will celebrate it like non-stop. I always think of happy thoughts in the lightness of every elements. \
      You will have my utmost support in chasing your dreams. You will never know one (1) day you will encounter me and then I could be the one promoting your dreams since I have a futuristic spirit inside of me. \
      I wish you and bless you with your sister on your respective 15th Year of Existence and 18th Year of Existence. \n\n \
      <a href=\"#\">#MYHAPPYPILLDana</a> \n \
      <a href=\"#\">#TheAngelThatSavedME</a> \n \
      <a href=\"#\">#HAPPY18thBIRTHDAY</a> \n \
      <a href=\"#\">#WelcometotheClubofLegalAge</a> \n \
      <a href=\"#\">#ANewLIFE</a> \n \
      <a href=\"#\">#ABetterFuture</a> \n \
      <a href=\"#\">#TheAngelThatChangedMEfortheBest</a> \n \
      <a href=\"#\">#ForDANA</a>"
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
  from.innerHTML = user && (user.alias ? user.alias : user.name);
  closingRemark.innerHTML = remark + ','
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
