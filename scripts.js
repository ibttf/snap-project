/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const movieData = [
  {
    backdrop_path: "/1IPEh9U51W0ygb0U7XotU64JDAh.jpg",
    poster_path: "/ckbnMAgX8PxShIYmK1LFByKNhEL.jpg",
    original_title: "Året jag slutade prestera och började onanera",
    overview:
      "Ambitious overachiever Hanna just needs one more kid before her life is perfect. Instead, her baby daddy unexpectedly dumps her. Suddenly, she finds herself without a place to live, job or family. With every fiber of her being set for victory, Hanna refuses to give up and decides to win him back. But to get there means having to win something much more important, love and desire for herself and who she is.",
    genres: ["Comedy", "Drama", "Romance"],
    id: 983105,
    spoken_languages: ["Dansk", "svenska"],
  },
  {
    backdrop_path: "/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
    poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    original_title: "Star Wars",
    overview:
      "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 11,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/2kvl6lcgoyAaf8cSRkzxE611u6T.jpg",
    poster_path: "/yD9RhgIVydQNBK7OLEbCWYcWMUd.jpg",
    original_title:
      "劇場版 ソードアート・オンライン-プログレッシブ- 星なき夜のアリア",
    overview:
      "One month after Kayaba Akihiko's game of death began, the death toll continues to rise, two thousand players having already lost their lives to the ultra-difficult VRMMO world of Sword Art Online. On the day of the strategy meeting to plan out the first-floor boss battle, Kirito, a solo player who vows to fight alone to get stronger, runs into a rare, high-level female player. She gracefully dispatches powerful monsters with a single rapier that flashes like a shooting star in the night...",
    genres: ["Animation", "Action", "Fantasy", "Science Fiction"],
    id: 761898,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/eHKRUk1QENXXzrgKg3nLHJCQn4m.jpg",
    poster_path: "/tknSJyInVeBZhaIUHlzPpqA45Ej.jpg",
    original_title: "大雪海のカイナ ほしのけんじゃ",
    overview:
      "Kaina returns to the icy Canopy, unsure of what he should do next. He and Ririha have brought peace to Atland and Valghia through an alliance. Now supplies run low, and the people need answers. Kaina, Ririha, and their small party set out to cross the snow in search of the great orbital spire tree. This is the first step to saving their people. Join Kaina on an expedition to save mankind!",
    genres: ["Animation", "Fantasy"],
    id: 1071101,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/5dF4FNwM2qZIuF0WCUs5zvDGU2H.jpg",
    poster_path: "/fwXhw9bERqKrJfJK6WGakPIh3FS.jpg",
    original_title: "तारे ज़मीन पर",
    overview:
      "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate. Colours, fish, dogs, and kites don't seem important to the adults, who are much more interested in things like homework, marks, and neatness. Ishaan cannot seem to get anything right in class; he is then sent to boarding school, where his life changes forever.",
    genres: ["Drama"],
    id: 7508,
    spoken_languages: ["English", "हिन्दी"],
  },
  {
    backdrop_path: "/eEMbx4fMsE4mOnncJW70CumI1TQ.jpg",
    poster_path: "/iUttStQFPGp8rCXn7JYfC5IIlQF.jpg",
    original_title: "劇場版 魔法科高校の劣等生 星を呼ぶ少女",
    overview:
      "In the story, the seasons have changed and it will soon be the second spring. Tatsuya and Miyuki have finished their first year at First Magic High School and are on their spring break. The two go to their villa on the Ogasawara Island archipelago. After only a small moment of peace a lone young woman named Kokoa appears before them. She has abandoned the Naval base and she tells Tatsuya her one wish.",
    genres: ["Science Fiction", "Action", "Animation", "Fantasy"],
    id: 431821,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/tXPDZQZqoxYNTNohXVgFSHNWoio.jpg",
    poster_path: "/ojeCl4Qw4CmMP7jjpiJU4ZlbsV.jpg",
    original_title: "夏日福星",
    overview:
      "The third installment in the Lucky Stars series, following Winners and Sinners and My Lucky Stars. The team are released from prison to play detective in order to stop a ruthless gang from ruining their reputations, taking their lives, and that of a key witness in an upcoming trial. They must battle their way through and with the help of Muscles, take down the bad guys.",
    genres: ["Action", "Comedy"],
    id: 18707,
    spoken_languages: ["日本語", "广州话 / 廣州話", "English"],
  },
  {
    backdrop_path: "/tRv3AamyYSQgM0aDv1TdCyLmsRU.jpg",
    poster_path: "/sBdCiTg4qd5pysb1tZcyQhWQUkZ.jpg",
    original_title: "劇場版 天元突破グレンラガン 螺巌篇",
    overview:
      "Seven years after the defeat of the spiral king, Simon and the Dai-Gurren brigade must set out to the vastness of space to defeat a new threat and save the universe.",
    genres: ["Action", "Science Fiction", "Animation", "Adventure"],
    id: 23452,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/qtr8bm14X04mcq8chjSJmNX5TJm.jpg",
    poster_path: "/kghwkWiK99pPscP61Tm771Vu5lm.jpg",
    original_title: "真救世主伝説 北斗の拳 ラオウ伝 激闘の章",
    overview:
      "A film adaptation of the Last Nanto General story arc from the manga, depicting the final battle between Kenshiro and Raoh that led to Kenshiro becoming the successor of Hokuto Shinken. Some events from the manga / anime have been excluded from the story (such as Raoh's fight with Juza) whereas others have been altered or expanded. New content featuring the final battle from Raoh's perspective have been added. This film serves as the follow-up to the first film in the series, which introduced Raoh and Reina's relationship, this time bringing it to a conclusion.",
    genres: ["Action", "Animation"],
    id: 114372,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/9K1zhrS8jZ3NFZwzc5RgtwxskLT.jpg",
    poster_path: "/maF1pZONLuFu8bRaEvuxVgF14Ml.jpg",
    original_title: "Re:ゼロから始める異世界生活 氷結の絆",
    overview:
      "Covered in ice and snow, Elior Forest is the home to dangerous magical beasts and 50 elves frozen in ice. One day, the great spirit Puck helps a young girl break out of her ice prison. Her name is Emilia, a half-elf born with silver hair, long ears, and amethyst eyes—features that resemble the evil Witch who destroyed half the world long ago.  Shunned by society because of her appearance, Emilia dwells in the forest with Puck as her sole companion and family. Burdened with a sin of destruction she does not remember committing, she spends her days trying to find a way to help her frozen kin. But when the great spirit Melakuera, the Arbitrator of the world, finds Emilia, her right to stay alive is brought into question. Will the bonds of ice she formed with Puck prove to be the warm thread that defies fate?",
    genres: ["Animation", "Drama", "Thriller", "Fantasy"],
    id: 566451,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/iwGWyIElci1evw2Qa64Op1brxwx.jpg",
    poster_path: "/udwsBqWEVlDSkXQUNDfLP4r0aUi.jpg",
    original_title: "映画 ハイ☆スピード！-Free! Starting Days-",
    overview:
      "A prequel to the 2013 Kyoto Animation series Free! which is an adaptation of light novel High☆Speed!",
    genres: ["Animation", "Drama", "Comedy"],
    id: 357416,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/x8yA4dKJyctamyiM6jF8Zgqrlkh.jpg",
    poster_path: "/dZzHBIcJsld2XMvwR75OZGf4NM2.jpg",
    original_title: "福星高照",
    overview:
      'Two Hong Kong cops are sent to Tokyo to catch an ex-cop who stole a large amount of money in diamonds. After one is captured by the Ninja-gang protecting the rogue cop, the other one gets his old Orphanage gang, dubbed the "Five Lucky Stars," to help him. They don\'t like this much, but they do it.',
    genres: ["Action", "Comedy"],
    id: 10044,
    spoken_languages: ["广州话 / 廣州話", "日本語"],
  },
  {
    backdrop_path: "/427l6SvKGY3JLKnwOpG5fnCAfV7.jpg",
    poster_path: "/mvRqW2z4iBws3CDkCNmojksyr4V.jpg",
    original_title: "ほしのこえ",
    overview:
      "It is 2046 when a mysterious alien force begins their annihilation of the human race. Leaving behind the one person she loves, Mikako joins the interstellar battle as a pilot. And so - while Mikako risks her life to save mankind - Noboru waits. The two lovers, worlds apart, desperately strive to remain connected as the gap between them widens at a frightening pace.",
    genres: ["Animation", "Science Fiction", "Romance"],
    id: 37910,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
    poster_path: "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    original_title: "Star Wars: The Rise of Skywalker",
    overview:
      "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 181812,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
    poster_path: "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    original_title: "Star Wars: The Force Awakens",
    overview:
      "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 140607,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
    poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    original_title: "Star Wars: The Last Jedi",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 181808,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/zojlWX59bx5lgJCfJxMtKIVgNSI.jpg",
    poster_path: "/zNaweWLkwIAsrdeBq4Hu6j6EO5a.jpg",
    original_title:
      "グリザイア：ファントムトリガー THE ANIMATION スターゲイザー",
    overview:
      "While Rena and Maki recover from their injuries, the other SORD members jet off overseas for a school trip. Within moments of their arrival, though, the Mihama gang are pulled into a manhunt for a SORD deserter, assisted by student Sylvia and Velvet of St. Aile's International School. Tohka's the star of the show this time round, but she's wrestling with her own issues - old memories of her parents, and a promise to a friend that she wasn't able to keep...",
    genres: ["Animation", "Action"],
    id: 779019,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/4FyFYX9B4EW2iKqdaOaDuiMk5UN.jpg",
    poster_path: "/cQx04qrOqktvCsFJCNakMSSOZTL.jpg",
    original_title: "シドニアの騎士 あいつむぐほし",
    overview:
      "After the Earth was destroyed by mysterious alien lifeforms known as the Gauna, surviving remnants of the human race escaped to space in the enormous generation ship Sidonia. Having drifted through space for millennia, the Sidonia found itself once more under attack from Gauna for the first time in a century.  Once again facing the threat of extinction, a temporary victory against the Gauna was eked out thanks to the human-Gauna hybrid Tsumugi Shiraui and ace Guardian mech pilot Nagate Tanikaze.  10 years later... The people of Sidonia enjoy a brief respite. Peaceful days pass, during which Tsumugi begins to realize her feelings for Nagate, who is now celebrated as a hero of Sidonia. However, as Captain Kobayashi has always known, as long as the Gauna remain, peace cannot last.  The decision is made: a final battle, upon which rests the fate of humanity's last survivors. As the end approaches, will the crew be able to protect those they love?",
    genres: ["Animation", "Romance", "Science Fiction"],
    id: 725986,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/rFkiZNiub7Q7eGPYdM4JGRVLcCn.jpg",
    poster_path: "/7RvBQOTZGhCoPvLiF3Ugp2Q94Ux.jpg",
    original_title: "鋼の錬金術師 嘆きの丘（ミロス）の聖なる星",
    overview:
      "After a mysterious prisoner with only a few weeks left on his sentence breaks out of prison in Central City, the Elric brothers attempt to track him down. The search leads them to Table City in the southwestern country of Creta, where Alphonse rescues a young alchemist named Julia from the very man they are trying to capture. In the thick of the fight, they literally tumble into Julia's home turf, the slums of Milos Valley, and are embroiled in the grassroots rebellion of her people.",
    genres: ["Adventure", "Fantasy", "Animation", "Action", "Science Fiction"],
    id: 80518,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/iflKt34Ck2JpY2PY9wW1zwdJgJi.jpg",
    poster_path: "/48gKZioIDeUOI0afbYv3kh9u9RQ.jpg",
    original_title: "映画ドラえもん のび太の宇宙小戦争 2021",
    overview:
      "One day during summer vacation, a palm-sized alien named Papi appears from a small rocket that Nobita picks up. He is the president of Pirika, a small planet in outer space, and has come to Earth to escape the rebels. Doraemon and his friends are puzzled by Papi’s small size, but as they play together using the secret tool “Small Light”, they gradually become friends. However, a whale-shaped space battleship comes to earth and attacks Doraemon, Nobita and the others in order to capture Papi. Feeling responsible for getting everyone involved, Papi tries to stand up to the rebels. Doraemon and his friends leave for the planet Pirika to protect their dear friend and his home.",
    genres: ["Animation", "Science Fiction", "Adventure", "Family"],
    id: 782054,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/NqfXN0oFYlb31HizrSGSld8LPw.jpg",
    poster_path: "/2YCNdrSstrYovSYyKMCDxkkDUsC.jpg",
    original_title: "北斗の拳",
    overview:
      "After a nuclear holocaust tears the world apart, mankind is forced to the harshness of not only the oppression of others who are much more powerful, but the dead earth which seems to be getting worse with every passing moment. But a savior has risen from the ashes, a man who will defeat those who would torment the weak and make the world a livable place once more. A man named Kenshiro...",
    genres: ["Animation", "Action", "Science Fiction"],
    id: 19877,
    spoken_languages: ["English", "Deutsch", "日本語"],
  },
  {
    backdrop_path: "/t9ifVuOtSZBvtieF9L83pnHnOcC.jpg",
    poster_path: "/y7XwmyE5ue9hjk65fEWpO2hGU2B.jpg",
    original_title: "Re:ゼロから始める異世界生活 Memory Snow",
    overview:
      'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?',
    genres: ["Animation", "Adventure", "Fantasy"],
    id: 532321,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/q7M0JpPixbEYT8EhnI7wTEMONxz.jpg",
    poster_path: "/lV5OpzAss1z06YNagOVap1I35mH.jpg",
    original_title: "Star Trek",
    overview:
      "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
    genres: ["Science Fiction", "Action", "Adventure"],
    id: 13475,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/T6MfrCWpEyDOpbNqILFT6MHxb3.jpg",
    poster_path: "/oJ0X8ULclI1fQUXj14VcUFCjvXo.jpg",
    original_title: "消失的她",
    overview:
      "He Fei's wife, Li Muzi, disappears during their anniversary trip. When she reappears, he insists that she is not his wife. As Chen Mai, a top lawyer gets involved in this bizarre case, more mysteries start to emerge.",
    genres: ["Mystery", "Crime", "Thriller"],
    id: 1108211,
    spoken_languages: ["English", "普通话"],
  },
  {
    backdrop_path: "/abwxHfymXGAbbH3lo9PDEJEfvtW.jpg",
    poster_path: "/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
    original_title: "Star Wars: Episode II - Attack of the Clones",
    overview:
      "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 1894,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/m4F1KRK5jAoQHi2mKDFE2jFKEIb.jpg",
    poster_path: "/yOnd3XQIg7JBmu0UuBjZyLdsxQD.jpg",
    original_title: "Star Trek Beyond",
    overview:
      "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
    genres: ["Action", "Adventure", "Science Fiction"],
    id: 188927,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/1TecFmK3v6VJzsaGQgvrBiaypxW.jpg",
    poster_path: "/ysgnrkXwfFCxaBwviG2yNvzpfw5.jpg",
    original_title: "The Starling Girl",
    overview:
      "17-year-old Jem Starling struggles with her place within her Christian fundamentalist community. But everything changes when her magnetic youth pastor Owen returns to their church.",
    genres: ["Drama"],
    id: 1001500,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/ngzOH1Sjk3Ax5cY1ivqU9OIsMRF.jpg",
    poster_path: "/l4pTmfKWYCyZIVgNV158JyWlhzW.jpg",
    original_title: "시동",
    overview:
      "Two boys are becoming real adults during a turbulent time as they experience a world that doesn't go their way.",
    genres: ["Drama", "Action", "Comedy"],
    id: 581530,
    spoken_languages: ["한국어/조선말"],
  },
  {
    backdrop_path: "/eHlx6z6xlNUiF4eWbJGORstvJKw.jpg",
    poster_path: "/q9fp9guKgImiJPhkeZL6cBRLH5z.jpg",
    original_title: "Les Étoiles vagabondes",
    overview:
      "This film follows the making of Nekfeu's 3rd album, between Paris, Japan, Greece and the United States.",
    genres: ["Documentary", "Music"],
    id: 609797,
    spoken_languages: ["Français"],
  },
  {
    backdrop_path: "/wqtaHWOEZ3rXDJ8c6ZZShulbo18.jpg",
    poster_path: "/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    original_title: "A Star Is Born",
    overview:
      "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    genres: ["Music", "Drama", "Romance"],
    id: 332562,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/7ro9Y7Wyti93UFQ4FsmLc8yfWlP.jpg",
    poster_path: "/7sy4uOMuDOZ2we7JOzN7OmygWvm.jpg",
    original_title: "銀河英雄伝説: わが征くは星の大海",
    overview:
      "For the past 150 years, humanity’s two greatest nations have been deadlocked in a meaningless war. In what is hoped to be a miraculous victory, the Alliance embarks on a battle to break through the Empire’s frontline. Like many other “decisive” battles, this can only end in disaster; a sentiment shared by Imperial nobleman Reinhard von Lohengramm and Alliance Commodore Yang Wen Li, both of whom realize how to turn the fight in their favor. And while the tides of war may never change, these two men must rise to the occasion, solidifying their place in history as heroes.",
    genres: ["Animation", "Science Fiction", "War"],
    id: 154738,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/mzIMCqi7erjyFmQJ0ITq9QntDUN.jpg",
    poster_path: "/nGH4UVgexqBJDaNb2rUZyt9HPwD.jpg",
    original_title: "À la belle étoile",
    overview:
      "Since he was a kid, Yazid has one big passion, pastry making. Raised between foster homes and group homes, the young man will try to make his dream come true: to work with the greatest pastry chefs and become the best.",
    genres: ["Drama"],
    id: 975762,
    spoken_languages: ["Français"],
  },
  {
    backdrop_path: "/ur8uFUIS1hRCZjn5ykDf7iDIiDV.jpg",
    poster_path: "/yZfAVFIlzA61dsHZx5cyUX9PzYX.jpg",
    original_title: "真救世主伝説 北斗の拳 ラオウ伝 殉愛の章",
    overview:
      "A film adaptation of the Holy Emperor story arc, which primarily depicted the conflict between Kenshiro and Souther. New characters Reina, one of Raoh's army officers who falls in love with him, and her brother Soga, Raoh's advisor, play an important part with much of the plot involving Raoh's relationship with Reina as he conquers the land; most of this portion is new content exclusive to this film. The other side of the story is the retelling of Ken's attempt to save and protect the villagers from Souther's army with the help of Shū. There is also a small subplot of Bart returning to his home.",
    genres: ["Animation", "Action"],
    id: 109080,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/5vDuLrjJXFS9PTF7Q1xzobmYKR9.jpg",
    poster_path: "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
    original_title: "Star Wars: Episode III - Revenge of the Sith",
    overview:
      "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 1895,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/s2bqHApZlliCuwgyHod0qucrYqZ.jpg",
    poster_path: "/fyTqTETiXncfESLyKfkgEs7qg7d.jpg",
    original_title: "Stargate",
    overview:
      "An interstellar teleportation device, found in Egypt, leads to a planet with humans resembling ancient Egyptians who worship the god Ra.",
    genres: ["Action", "Adventure", "Science Fiction"],
    id: 2164,
    spoken_languages: ["English", "Norsk", "svenska"],
  },
  {
    backdrop_path: "/9qokUngA9fAgBy7skSyZj2irOfR.jpg",
    poster_path: "/cxCmv23O7p3hyHwqoktHYkZcGsY.jpg",
    original_title: "Starship Troopers",
    overview:
      'Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico\'s military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as "the Bugs".',
    genres: ["Adventure", "Action", "Thriller", "Science Fiction"],
    id: 563,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/sQUiouw94zhoG6LDEj9h8cPb61N.jpg",
    poster_path: "/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
    original_title: "Star Wars: Episode I - The Phantom Menace",
    overview:
      "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
    genres: ["Adventure", "Action", "Science Fiction"],
    id: 1893,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/npDrIM6ZbuD7nUxI7ZzNBxs4IRF.jpg",
    poster_path: "/7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg",
    original_title: "Star Trek Into Darkness",
    overview:
      "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
    genres: ["Action", "Adventure", "Science Fiction"],
    id: 54138,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/sZRR4sTJrXszqW6gGqg846FzuP.jpg",
    poster_path: "/b0jmVC1a4LghH9BtzTPn1DELvBP.jpg",
    original_title: "Auch Zwerge haben klein angefangen",
    overview:
      "The inhabitants of an institution in a remote country rebel against their keepers. Their acts of rebellion are by turns humorous, boring and alarming. An allegory on the problematic nature of fully liberating the human spirit, as both commendable and disturbing elements of our nature come forward. The film shows how justifiable revolt may be empowering, but may also turn to chaos and depravity. The allegory is developed in part by the fact that the film is cast entirely with dwarfs",
    genres: ["Comedy", "Drama"],
    id: 11900,
    spoken_languages: ["Deutsch"],
  },
  {
    backdrop_path: "/hDvk6O2vehwsZBdNsMSGmAVdiUn.jpg",
    poster_path: "/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
    original_title: "Solo: A Star Wars Story",
    overview:
      "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
    genres: ["Science Fiction", "Adventure", "Action"],
    id: 348350,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/7MF3H1U29MV63wwSUTGkSFAinO2.jpg",
    poster_path: "/p3yMsjclMFIAHsGQIbhpF2LsvAk.jpg",
    original_title: "噴火女郎",
    overview:
      "Chingmy Yau stars in She Starts The Fire, a fish-out-of-water comedy where the fish can set people on fire! Wendy (Chingmy Yau) arrives in Hong Kong to stay with her aunt Big Beer (Deannie Ip), who shares a space with her landlord Charles (Lawrence Cheng, who also directed). There’s just one problem: Wendy can set things on fire with her mind. Her pyrokinetic powers are applied simultaneously with some bad luck, so the victim usually gets a double whammy of misfortune and charred flesh.",
    genres: ["Comedy", "Romance", "Science Fiction"],
    id: 306750,
    spoken_languages: ["广州话 / 廣州話"],
  },
  {
    backdrop_path: "/qlLeTVyqdM1s7EWKEgYJ9jB455E.jpg",
    poster_path: "/eh7igoV9Hf4KgH6Z1TfPeIX7FK4.jpg",
    original_title: "Viaggio sola",
    overview:
      'Single and middle-aged, beautiful Irene (Margarita Buy) is wholly devoted to her job as an inspector of luxury hotels. Constantly on the road, she indulges in expensive pleasures at impeccable resorts, but always incognito and alone, soon escaping to the next exotic destination with her checklist and laptop in tow. When her best friend and ex, Andrea (Stefano Accorsi), who has always been a source of emotional support, suddenly becomes unavailable, Irene is thrown into a deep existential crisis. "Luxury is a form of deceit," she is told by a fellow traveller in the fog of a steam room, and thus begins Irene\'s quest to bring more meaning into her life.',
    genres: ["Romance", "Drama"],
    id: 184992,
    spoken_languages: ["English", "Français", "Italiano"],
  },
  {
    backdrop_path: "/orpnKsu7t1CLDNYgzevgsz67xRq.jpg",
    poster_path: "/xJgtHL8Iecp5Ot1oBkMdBl32yPh.jpg",
    original_title: "The Star",
    overview:
      "A small but brave donkey and his animal friends become the unsung heroes of the greatest story ever told: the first Christmas.",
    genres: ["Comedy", "Adventure", "Family", "Fantasy", "Animation"],
    id: 355547,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/oQaVV7p916HO5MDI820zzs1pin9.jpg",
    poster_path: "/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
    original_title: "The Fault in Our Stars",
    overview:
      "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    genres: ["Romance", "Drama"],
    id: 222935,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
    poster_path: "/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
    original_title: "Rogue One: A Star Wars Story",
    overview:
      "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
    genres: ["Action", "Adventure", "Science Fiction"],
    id: 330459,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/24ZHWJlVU1DDueF6oOxK6Y4q3Qw.jpg",
    poster_path: "/laijmNN64UKXnOdtM45cTsm3Bo8.jpg",
    original_title: "ひるなかの流星",
    overview:
      "Fifteen-year-old country girl Suzume Yosano has to move to Tokyo to live with her uncle due to her father's transfer. She bumps into a mysterious man who ends up taking her to her uncle's place after she gets lost. Turns out, Suzume will be seeing him a lot more often once she starts school because... he's her homeroom teacher?!",
    genres: ["Romance"],
    id: 433950,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/4TXzyinNJ4JWNerEHbwUIm4Mf5z.jpg",
    poster_path: "/dZuMhxGQgBTrBnNCSlezg2fWsCX.jpg",
    original_title: "Five Star Day",
    overview:
      "One man's journey to disprove the theory of astrology leads him to answer some bigger question about life, love, fate and destiny.",
    genres: ["Drama", "Romance"],
    id: 82938,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/wBBONMlfnrU2GxxN7X2pFDdZuRB.jpg",
    poster_path: "/n4IPqrfXEEtMC8hzV5PaCElkdNP.jpg",
    original_title: "ドラえもん のび太の宇宙小戦争",
    overview:
      "Nobita helps Doraemon to create a space movie. After Dekisugi fails to help them, the duo rope in Shizuka, who prefers to make a film about dolls.",
    genres: ["Animation", "Adventure", "Family", "Fantasy", "Science Fiction"],
    id: 161704,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/wygUDDRNpeKUnkekRGeLCZM93tA.jpg",
    poster_path: "/vrC1lkTktFQ4AqBfqf4PXoDDLcw.jpg",
    original_title: "Star Trek: First Contact",
    overview:
      "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 199,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/cfTA2aepBesa1QgL1G3g6ytuFLR.jpg",
    poster_path: "/nJ5TxNLkIA3iOf8tzVHGkgBzjhq.jpg",
    original_title:
      "映画 HUGっと！プリキュア♡ふたりはプリキュア オールスターズメモリーズ",
    overview:
      "A vengeful teru teru bozu-like monster called Miden is stealing all of the Cures' magical powers and memories, turning them into helpless infants, barring Nagisa Misumi and Hana Nono. They must help the affected Cures to regain their abilities and fight off this new menance.",
    genres: ["Animation", "Fantasy", "Action", "Comedy"],
    id: 551591,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/bKrSGdpBDDL3rlvmwOsoNQwYeoU.jpg",
    poster_path: "/eAvcw6isE3GcV7tiGUqdAWTtmy.jpg",
    original_title: "機動戦士Ζガンダム A New Translation I:  星を継ぐ者",
    overview:
      "Universal Century 0087. The Titans, a bellicose faction among the Earth Federation Forces, grows powerful and tyrannical, even using poison gas to suppress a civil unrest. Dissident soldiers from the same military stand against them, forming a resistance group called the AEUG. Kamille Bidan, a civilian student, gets entangled in this conflict when he impulsively steals the Gundam Mark II and joins the AEUG, running away from his home space colony. Then he begins to fight along with Char Aznable, a former Zeon ace pilot who has infiltrated the Earth Sphere for reasons of his own.  This is the first part of the feature trilogy derived from the anime series Mobile Suit Zeta Gundam, and features enhanced animation and theme songs by GACKT.",
    genres: ["Action", "Animation", "Science Fiction", "War"],
    id: 19256,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/omlvf7JEJ5bOdbTodlLK184J4mH.jpg",
    poster_path: "/oLbJECxr8bHKe00hBVgf96KGnhq.jpg",
    original_title: "มนต์รักนักพากย์",
    overview:
      "Join the crew of a traveling pharma-cinema troupe as they go on the road to spread the joy of live-dubbed movies, all while overcoming difficulties, deceits, and reaching for their dreams.",
    genres: ["Drama"],
    id: 1034336,
    spoken_languages: ["ภาษาไทย"],
  },
  {
    backdrop_path: "/vlGeXF9206jCk2iN7DYN20bl8Bm.jpg",
    poster_path: "/fmBYVkBjhVspPv3GGus84qhBo1a.jpg",
    original_title: "Starsky & Hutch",
    overview:
      'Join uptight David Starsky and laid-back Ken "Hutch" Hutchinson as they\'re paired for the first time as undercover cops. The new partners must overcome their differences to solve an important case with help from street informant Huggy Bear and persuasive criminal Reese Feldman.',
    genres: ["Comedy", "Crime"],
    id: 9384,
    spoken_languages: ["English", "한국어/조선말"],
  },
  {
    backdrop_path: "/uBDZLFiUD1woKhX6WfqSQ8JTrCX.jpg",
    poster_path: "/3n029M1rCF51hG24sq18D3lMtTw.jpg",
    original_title: "堕靡泥の星\u3000美少女狩り",
    overview:
      "The film portrays the life of Tatsuya, a young man of proper descent whose outward respectability hides his urges for rape and torture. This handsome rapist seduces women, then brings them to the basement of the mansion he inherited from his well-to-do parents, where he indulges in lengthy sessions of sado-sexual violence. Based on manga by Masaaki Sato.",
    genres: ["Horror", "Thriller"],
    id: 39863,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/wN3dgwkiWSLrMVukPQIeccv5EJ6.jpg",
    poster_path: "/xY5TzGXJOB3L9rhZ1MbbPyVlW5J.jpg",
    original_title: "Star Trek IV: The Voyage Home",
    overview:
      "It's the 23rd century, and a mysterious alien power is threatening Earth by evaporating the oceans and destroying the atmosphere. In a frantic attempt to save mankind, Kirk and his crew must time travel back to 1986 San Francisco where they find a world of punk, pizza and exact-change buses that are as alien as anything they've ever encountered in the far reaches of the galaxy. A thrilling, action-packed Star Trek adventure!",
    genres: ["Science Fiction", "Adventure"],
    id: 168,
    spoken_languages: ["English", "suomi"],
  },
  {
    backdrop_path: "/qRyLhmmArd1Dem6txP8yLm09EU8.jpg",
    poster_path: "/f711gAu09asNCzHR2OcOtyYhhOM.jpg",
    original_title: "最佳福星",
    overview:
      "Lucky Stars Go Places, also known as The Luckiest Stars, is a 1986 Hong Kong action comedy film directed by Eric Tsang. It is the fourth film in the Lucky Stars series. It was an attempt to combine the original Lucky Stars troupe with the similar action comedy ensemble from the Aces Go Places series.",
    genres: ["Comedy", "Action"],
    id: 63030,
    spoken_languages: ["广州话 / 廣州話"],
  },
  {
    backdrop_path: "/tdEsBRophyizObx5ABwJkOUQHOA.jpg",
    poster_path: "/wfiAfNwH6CMKxz4vRaW8CPTabtk.jpg",
    original_title: "Star Trek: The Motion Picture",
    overview:
      "When a destructive space entity is spotted approaching Earth, Admiral Kirk resumes command of the Starship Enterprise in order to intercept, examine, and hopefully stop it.",
    genres: ["Science Fiction", "Adventure", "Mystery"],
    id: 152,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/6aYZjRsRCDGuzWbNo43Jsi2thh.jpg",
    poster_path: "/7zbFmxy3DqKYL2M8Hop6uylp2Uy.jpg",
    original_title: "Stardust",
    overview:
      "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm. His journey takes him into a world beyond his wildest dreams and reveals his true identity.",
    genres: ["Adventure", "Fantasy", "Romance", "Family"],
    id: 2270,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/7tRAKT5IF8uXqUoveJtbffYSnal.jpg",
    poster_path: "/5TAnQOAZLq7c95LLh7zgPLUML4t.jpg",
    original_title: "真救世主伝説 北斗の拳 トキ伝",
    overview:
      "Fourth part of the new Fist of the North Star movie pentalogy presenting the story from Toki's perspective, leading up to Toki's imprisonment in Cassandra and eventually his duel with Raoh.",
    genres: ["Animation", "Action"],
    id: 114371,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/9Ksfudv6hUWLEVMnXIqlgD4kXW7.jpg",
    poster_path: "/9vj8Td4OYEAyWi96TpLqLAjqg0b.jpg",
    original_title: "真救世主伝説 北斗の拳 ユリア伝",
    overview:
      "Second part of the new Fist of the North Star movie pentalogy presenting the story from Yuria's perspective, spanning from her childhood, including the day she first met Kenshiro.",
    genres: ["Action", "Animation"],
    id: 114370,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/oWtUJSIfN4umPrwiHwawhMuDZlL.jpg",
    poster_path: "/u9QgkfHj90rr33KhjLlk5tr7bVg.jpg",
    original_title: "La notte di San Lorenzo",
    overview:
      "The Night of San Lorenzo, the night of the shooting stars, is the night when dreams come true in Italian folklore. In 1944, a group of Italians flee their town after hearing rumours that the Nazis plan to blow it up and that the Americans are about to arrive to liberate them.",
    genres: ["War", "Drama"],
    id: 42130,
    spoken_languages: ["Deutsch", "Italiano"],
  },
  {
    backdrop_path: "/A2owp1CjaOzAxnPwzQoovtJFBcT.jpg",
    poster_path: "/ysqFnW2TrlD6W9H9dn1FLgVhpsq.jpg",
    original_title: "Reisen til julestjernen",
    overview:
      "13 year old kind-hearted Sonja arrives at a tiny village together with a company of bandits. But there is a curse on the village. A long time ago, the King’s only daughter Goldhair disappeared while searching for the Christmas Star. The Queen died of a broken heart, leaving the shattered King all on his own. From that day on, the King cursed the Christmas Star, thereby causing darkness and grief to descend upon the land. However, an old sage has revealed that Goldhair is still alive, and will return only if the King finds the way back to the Christmas Star. Ever since, the King has been searching for the Christmas Star every Christmas, but all in vain.",
    genres: ["Fantasy", "Adventure", "Family"],
    id: 149427,
    spoken_languages: ["Norsk"],
  },
  {
    backdrop_path: "/jDJ8iCLMBLhoznsXh9SEjpnQCdx.jpg",
    poster_path: "/xHTGLYpZKfwGJ0lM2NEAmb6DdYi.jpg",
    original_title: "人生大事",
    overview:
      "Having been released after serving his sentence, a funeral director accidentally crosses paths with a girl which brings about an unexpected change in his attitude towards life.",
    genres: ["Drama"],
    id: 945664,
    spoken_languages: ["普通话"],
  },
  {
    backdrop_path: "/hvmuMRJ3cg1Xqz4AL6Jq4Fj51ue.jpg",
    poster_path: "/qjDheLQWks2xXpZz0eLsBHafIfM.jpg",
    original_title: "3 zéros",
    overview:
      "A Fleury-Mérogis, un match de foot a lieu dans la cour de prison. Tibor Kovacs, un jeune Hongrois, fait des prodiges avec le ballon. Véritable virtuose du football, il rêve de jouer en équipe de France. Pour Manu, son compagnon de cellule, Tibor est un cadeau du ciel. A la veille de leur sortie de prison, les deux compères décident d'unir leurs destins : Tibor deviendra le plus grand joueur du mon",
    genres: ["Comedy"],
    id: 18419,
    spoken_languages: ["Français"],
  },
  {
    backdrop_path: "/wpvN3EEwy1K5OkNjvnBoOGdgyIB.jpg",
    poster_path: "/lS0X9KScgkUbhiu6lOHBya8z9R2.jpg",
    original_title: "Ricomincio da tre",
    overview:
      "Gaetano, a young Neapolitan, decides to leave home, work and friends, to look for other moments of life and meet other people.",
    genres: ["Comedy"],
    id: 13386,
    spoken_languages: ["Italiano"],
  },
  {
    backdrop_path: "/lLBWEIFaRyPP0thtw9utB8MIzod.jpg",
    poster_path: "/5gUdY8J8bNGTSIE5tW9aVhAFgjT.jpg",
    original_title: "精裝追女仔",
    overview:
      "Ah Fat, foul-mouthed, along with his two close buddies, Traffic Light and Ugly, are working in a garage. Their boss, Ken, is harsh and stingy. However, a warm and close friendship has been established amongh the four. In order for Ah Fat to get over his heartbreak at getting dumped by his girlfriend, Ken suggests a tour to Penang to cheer him up. They come across two beautiful girls, Tung Tung and Man Chi, strolling leisurely on the beach as if they were very wealthy. Since then they decide who's whose. And Ah Fat, the winner, chooses Tung Tung to be his sole target. By the rules of the game, Ken, Traffic Light and Ugly have to compete to see who in the end will win the heart of Man Chi.",
    genres: ["Comedy", "Romance"],
    id: 147950,
    spoken_languages: ["广州话 / 廣州話"],
  },
  {
    backdrop_path: "/iVidvZXMiCNsieTD3ud1sQbKUIo.jpg",
    poster_path: "/mRR2eR5V75jVUXVs65v8BYNswkp.jpg",
    original_title: "Starship: Rising",
    overview:
      "A corrupt planetary federation…  The ultimate weapon of destruction....  One starship captain stands between them….and intergalactic armageddon.  STARSHIP: RISING - RISE UP OR DIE  In the distant future, an immortal bionic leader, the product of genetic engineering, has ruled over the universe for 200 years. An uprising is being staged by those preserving natural birth.",
    genres: ["Action", "Science Fiction"],
    id: 277778,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/6z9w8eidKWDDXwZNSVNaRolAYEP.jpg",
    poster_path: "/cldAwhvBmOv9jrd3bXWuqRHoXyq.jpg",
    original_title: "Star Trek: Nemesis",
    overview:
      "En route to the honeymoon of William Riker to Deanna Troi on her home planet of Betazed, Captain Jean-Luc Picard and the crew of the U.S.S. Enterprise receives word from Starfleet that a coup has resulted in the installation of a new Romulan political leader, Shinzon, who claims to seek peace with the human-backed United Federation of Planets. Once in enemy territory, the captain and his crew make a startling discovery: Shinzon is human, a slave from the Romulan sister planet of Remus, and has a secret, shocking relationship to Picard himself.",
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 201,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/vsjuHP9RQZJgYUvvSlO3mjJpXkq.jpg",
    poster_path: "/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg",
    original_title: "Star Trek: Insurrection",
    overview:
      'When an alien race and factions within Starfleet attempt to take over a planet that has "regenerative" properties, it falls upon Captain Picard and the crew of the Enterprise to defend the planet\'s people as well as the very ideals upon which the Federation itself was founded.',
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 200,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/nUOhm94Qz9SPJozytJgF8iZyArs.jpg",
    poster_path: "/obziP53V5cVNTQpi9JffGiIfggn.jpg",
    original_title: "Sous les étoiles de Paris",
    overview:
      "Christine’s life has not been easy lately. Her lonely routine is divided between free food banks distributions and wandering the streets. On a cold winter night she founds Suli, an 8-year-old Eritrean boy, sobbing in front of her shelter. Christine understands that he is lost and has been separated from his mother. Bounded by their marginal condition, they embark together on an emotional journey to find Suli’s mother in the underground world of Paris...",
    genres: ["Drama", "Comedy"],
    id: 575293,
    spoken_languages: ["Français"],
  },
  {
    backdrop_path: "/5FAJb0pHIHHEhWofyKtj5OqKoYg.jpg",
    poster_path: "/7BfDHiVU6bxyv5MAmme8g3d0q8I.jpg",
    original_title: "Natale a 5 stelle",
    overview:
      "When the Italian Premier and his companion find a dead body in his hotel suite, while on a trip to Hungary, they find themselves embroiled in a series of comedic situations as they try to avoid a scandal.",
    genres: ["Comedy"],
    id: 563766,
    spoken_languages: ["Italiano"],
  },
  {
    backdrop_path: "/y0klN15XPVyYtd4P7HYecgJXSsZ.jpg",
    poster_path: "/uiXr41VLYsuug3CZbFrKLSNahuZ.jpg",
    original_title: "Star Trek V: The Final Frontier",
    overview:
      "The crew of the Federation starship Enterprise is called to Nimbus III, the Planet of Intergalactic Peace. They are to negotiate in a case of kidnapping only to find out that the kidnapper is a relative of Spock. This man is possessed by his life long search for the planet Sha Ka Ree which is supposed to be the source of all life. Together they begin to search for this mysterious planet.",
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 172,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/oVgDwh4boCH0jCko9RF3U5WlwpP.jpg",
    poster_path: "/wJg8uma4IPUZCoJcsczhr2iS8Z9.jpg",
    original_title: "真救世主伝説 北斗の拳 ZERO ケンシロウ伝",
    overview:
      "The film's story is a prequel to the Fist of the North Star depicting the one year interval between Kenshiro's defeat at the hands of Shin and their later battle. Unlike the others in the series this film has a completely original storyline in which Kenshiro, near death after his battle with Shin and having used his remaining energy to kill a pack of wolves, was captured by slavers. Due to his strength, Kenshiro could escape whenever he wanted, but chose to stay and protect the other slaves.",
    genres: ["Animation", "Action"],
    id: 105231,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/sufienRbPlkcFx6hQPFlnTGqGvo.jpg",
    poster_path: "/4iMoYO4Zit9wyZXIdqGskLeoT6V.jpg",
    original_title: "機動戦士Ζガンダム A New Translation III:  星の鼓動は愛",
    overview:
      "Universal Century 0087, Char Aznable has now become the leader of the AEUG. Scirocco, the man from Jupiter, schemes to seize control of the Titans. Haman, the Axis leader, is attempting to restore the Zabi family. Through politics and strategy, these three powers struggle for dominion over the Earth Sphere. The war builds to a deadly endgame around the space colony Gryps 2, which has been converted into a giant laser cannon. What destiny awaits Kamille at the end of the conflict?  This is the final part of the Mobile Suit Zeta Gundam feature trilogy, which features enhanced animation and theme songs by GACKT.",
    genres: ["Action", "Animation", "Science Fiction", "War"],
    id: 30606,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/cfxs03SLYYFlIJsF0Sjgl7DXVMn.jpg",
    poster_path: "/68xgjMSyt2wzyF54bExOuMEvCvw.jpg",
    original_title: "新・北斗の拳 - 禁じられた拳",
    overview:
      "The Last Land has crumbled at the hands of Kenshiro, but in order to save the young Lord Doha, the powerful hero must travel through a land haunted by murderous demons in this sequel to the hit anime Fist of the North Star. Lord Doha has fallen ill, and if he doesn't receive a rare serum within a few short days he will certainly die. Though the serum is a two-day trip in both directions, Sara reveals that there is a shorter path running through Cliffland but it is haunted by vicious demons. As Kenshiro bravely makes way for the dreaded Cliffland, a new fighter named Seiji arrives in Last Land pursued by evil Clifflanders and vowing to reclaim Sanga's legacy.",
    genres: ["Animation", "Action"],
    id: 247541,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/8eMbILwpFiro24LSmREjI4MGwEB.jpg",
    poster_path: "/8pRMweo9WA1MvYOLsD2hWyFpZ1V.jpg",
    original_title: "Rock Star",
    overview:
      "A wannabe rock star who fronts a Pennsylvania-based tribute band is devastated when his kick him out of the group he founded. Things begin to look up for Izzy when he is asked to join Steel Dragon, the heavy metal rockers he had been imitating for so long. This film is loosely based on the true story of the band Judas Priest.",
    genres: ["Music", "Drama", "Comedy"],
    id: 12508,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/nE6wcpYWaGXhJD07tkd3Fq5N8B8.jpg",
    poster_path: "/c8wy9HNWtztjItW1vMGGK2Na756.jpg",
    original_title: "All-Stars",
    overview:
      '"All-Stars" is a hilarious commentary on the state of all youth sports today, fueled by the outrageous behavior of the desperate sports parent living vicariously through his or her child. In the vein of "Best in Show", where it\'s more about the dog owners than the dogs - "All-Stars" is about the adults involved in youth sports (parents, coaches, umpires, volunteers, board members, etc.) more than the kids. The end result is a funny, yet compelling spin on fast pitch softball as well as a unique state of affairs on the outlandish antics of a few crazed parents.',
    genres: ["Comedy"],
    id: 336775,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/7SSpqETdnPK49WWPqUATfyciQMI.jpg",
    poster_path: "/rOLyOzCe8x27EgAiOSVvuHDcmN0.jpg",
    original_title: "それいけ!アンパンマン キラキラ星の涙",
    overview:
      "Anpanman helps the princess Nandananda to find the The Shining Star's Tear.",
    genres: ["Animation", "Family", "Fantasy"],
    id: 437947,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/sFfD1TvTUzmzWFpSm7GnYrKcWJH.jpg",
    poster_path: "/xJJY16XSazUgDvbWEXQ1ulLiz8q.jpg",
    original_title: "Starship Troopers: Invasion",
    overview:
      "The troopers of two starships have joined forces to terminate a massive bug attack at a Federation outpost. Before the mission can be completed and the survivors evacuated, one ship abruptly departs and goes inexplicably dark. The remaining battle-hardened troopers race to the rescue only to discover that the threat from the bugs is about to hit home.",
    genres: ["Animation", "Action", "Science Fiction"],
    id: 114478,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/i7vn2g5bGPosRBS8A4Y6kaz2FZL.jpg",
    poster_path: "/zk4qKzkBnbQW8QLRbsDjTxijEzS.jpg",
    original_title: "ひそひそ星",
    overview:
      "A humanoid robot deliverywoman muses on the mystery of human nature as she drops off parcels around the galaxy.",
    genres: ["Drama", "Science Fiction"],
    id: 355993,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/qlYkuUWxrp1vlqcjk00hA1nTZM3.jpg",
    poster_path: "/dFkqOHrzmyIlqBxpR07rL7NjsXk.jpg",
    original_title: "それいけ!アンパンマン だだんだんとふたごの星",
    overview:
      'A story about twin star fairies - Kirara and Kirari. Kirara is a sweet girl who loves to shoot shooting stars, and Kirari is a kind girl who watches the stars. After fighting each other, they fell to the ground. Kirara is helped by Anpanman where she fell on the banks of the lake.  At a nearby castle, Dr. Hiyari was doing mind experiments to increase power. There, a mysterious light falls, it is a giant mysterious black fairy with special abilities - it is Kirari.  Meanwhile, in the starry sky where Kirara and Kirari had been, the "Devil Star" with the power to destroy everything in the world has became powerful.',
    genres: ["Animation"],
    id: 361497,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/erRB9F2uV20WJPMnKAY3Khm5jYZ.jpg",
    poster_path: "/kS5zHIW82tUrk8SmiSzYYfiTPN0.jpg",
    original_title: "映画 プリキュアオールスターズNewStage2 こころのともだち",
    overview:
      "One day, the Pretty Cures receive an invitation to a party in their honor. Everyone is heading to the party venue, the school of fairies, but awaits a mysterious shadow. The shadow steals transformation objects! What can they do? If the Cures can not be converted are in big trouble! If this continues, the school, our world and everything else will deborado by that shadow! The 32 Pretty Cures will fight to protect everyone!",
    genres: ["Animation", "Action", "Fantasy", "Comedy"],
    id: 214722,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/nGJTamFPZ9V4JX5YpiOS0UDuwmx.jpg",
    poster_path: "/tvTOJD7Gz668GLy2nNdLRQvpPsv.jpg",
    original_title: "Star Trek VI: The Undiscovered Country",
    overview:
      "After years of war, the Federation and the Klingon empire find themselves on the brink of a peace summit when a Klingon ship is nearly destroyed by an apparent attack from the Enterprise. Both worlds brace for what may be their deadliest encounter.",
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 174,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/1tDelhmpG8KzFdU3QvOhBScm4sS.jpg",
    poster_path: "/gPkaPGNbjZCeRurSYGi0JD63DBa.jpg",
    original_title: "The Starling",
    overview:
      "A woman adjusting to life after a loss contends with a feisty bird that's taken over her garden — and a husband who's struggling to find a way forward.",
    genres: ["Drama"],
    id: 468225,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/d7NuuuuyK0eHRXijI2496DQ1fLM.jpg",
    poster_path: "/aknSPmgEVMg2b2JAfSBwMn8D7Ma.jpg",
    original_title: "울산의 별",
    overview:
      "Yunhwa, who works at a shipyard to manage their livelihood after her husband′s accident, receives a notice of unfair dismissal. To make matters worse, their relatives suddenly come and try to take away the family land. Her son loses a large sum of money with Bitcoin, and her daughter dreams of escaping to Seoul while giving up her studies.",
    genres: ["Drama"],
    id: 1017174,
    spoken_languages: ["한국어/조선말"],
  },
  {
    backdrop_path: "/iU5H89E7iT31meNccVuLbY0qzSd.jpg",
    poster_path: "/sKIhKlW7o4PSDUhTxN0uPuNh4aI.jpg",
    original_title: "劇場版 少女☆歌劇 レヴュースタァライト",
    overview:
      "The stage emulates life and compresses it, setting free skills learned over lifetimes in brief but dazzling displays for the amusement and judgment of others. For the performers, it is the ultimate risk, and some will rise while others must fall. Nowhere is this truer than at the Seisho Music Academy, where music, dance and real weapons all come into play in the creation of the next great Star. Karen and Hikari’s destinies have been linked since a childhood promise, but their journeys here have taken very different paths. Now, after Hikari leaves, Karen must discover who she is without her opposite, while Hikari must rediscover her own course. Nor are they the only girls who must reassess and change if they want to achieve their dreams, as the dance, magic, and swordplay continue!",
    genres: ["Animation", "Drama", "Fantasy", "Action", "Music"],
    id: 645440,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/dvd330SU63LGyLf7WMKTMgJIl53.jpg",
    poster_path: "/d42eVP0SdHEKUoUnaFpF2eMz4hZ.jpg",
    original_title: "The Princess Switch 3: Romancing the Star",
    overview:
      "A priceless relic is stolen from identical royals Queen Margaret and Princess Stacy, who enlist the help of their sketchy look-alike cousin Fiona Pembroke to retrieve it.",
    genres: ["Romance", "Comedy"],
    id: 785533,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/cVWSNDSC8pY7KBUq0CZbKXlmOLv.jpg",
    poster_path: "/eAphHhkP3NtseCsJ36tUMyT1xrk.jpg",
    original_title: "Звезда",
    overview:
      'In the summer of 1944, the Nazi Armies prepare a massive Tank Division named \'Viking" for the offensive on occupied Russian land. The Russian Army\'s special group of seven snipers named "Zvezda" is sent for a reconnaissance operation behind the enemy lines in the back of the Nazi Tank Division. Two previous Russian groups never came back. The seven Russians know that they are going to an almost certain Death for the sake of Victory.',
    genres: ["War", "Drama"],
    id: 54474,
    spoken_languages: ["Pусский"],
  },
  {
    backdrop_path: "/oXs8kp1oX5N0Mte6U8UUAwmLwt6.jpg",
    poster_path: "/uPyLsKl8Z0LOoxeaFXsY5MxhR5s.jpg",
    original_title: "Star Trek II: The Wrath of Khan",
    overview:
      "It is the 23rd century. The Federation Starship U.S.S. Enterprise is on routine training maneuvers and Admiral James T. Kirk seems resigned to the fact that this inspection may well be the last space mission of his career. But Khan is back. Aided by his exiled band of genetic supermen, Khan - brilliant renegade of 20th century Earth - has raided Space Station Regula One, stolen a top secret device called Project Genesis, wrested control of another Federation Starship and sets out in pursuit of the Enterprise, determined to let nothing stand in the way of his mission: kill Admiral Kirk... even if it means universal Armageddon.",
    genres: ["Action", "Adventure", "Science Fiction", "Thriller"],
    id: 154,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/cXBWShG3jPpKWJEgadsb1795KXm.jpg",
    poster_path: "/aP22JTw7or68WwqwFu1Bwrg66Ev.jpg",
    original_title: "Stargate: Continuum",
    overview:
      "Ba'al travels back in time and prevents the Stargate program from being started. SG-1 must somehow restore history.",
    genres: ["Action", "Adventure", "Science Fiction", "TV Movie"],
    id: 12914,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/a7CWuif2PyWtnXLj9CwXeqs31wH.jpg",
    poster_path: "/vh5nospDpMOxZhyhRiXWWMmSFQe.jpg",
    original_title: "Starship Troopers 3: Marauder",
    overview:
      "The war against the Bugs continues! A Federation Starship crash-lands on the distant Alien planet OM-1, stranding beloved leader Sky Marshal Anoke and several others, including comely but tough pilot Lola Beck. It's up to Colonel/General Johnny Rico, reluctant hero of the original Bug Invasion on Planet P, to lead a team of Troopers on a daring rescue mission.",
    genres: ["Adventure", "Science Fiction", "Action"],
    id: 11127,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/5lUpy6OrDhzdeAGBaM1mIsQvfOl.jpg",
    poster_path: "/yqEj0oPfKBMCz7YcCARHDgH7VFm.jpg",
    original_title: "Star Trek III: The Search for Spock",
    overview:
      "Admiral Kirk and his bridge crew risk their careers stealing the decommissioned Enterprise to return to the restricted Genesis planet to recover Spock's body.",
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 157,
    spoken_languages: ["English", "Pусский"],
  },
  {
    backdrop_path: "/mHmGzDvUwSbffqPc2bzfNxL9OnV.jpg",
    poster_path: "/87oy4bxwkhmb4Jb3MRvosvd9NOX.jpg",
    original_title: "Film Stars Don't Die in Liverpool",
    overview:
      "Liverpool, 1978: What starts as a vibrant affair between a legendary femme-fatale, the eccentric Academy Award-winning actress Gloria Grahame, and her young lover, British actor Peter Turner, quickly grows into a deeper relationship, with Turner being the person Gloria turns to for comfort.",
    genres: ["Romance", "Drama"],
    id: 398174,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/lAJpYAepH7bic2TmE7ZP8q404P4.jpg",
    poster_path: "/5boJKypPQmgABssbKOk2RvsCnSv.jpg",
    original_title: "The Men Who Stare at Goats",
    overview:
      "A reporter in Iraq might just have the story of a lifetime when he meets Lyn Cassady, a guy who claims to be a former member of the U.S. Army's New Earth Army, a unit that employs paranormal powers in their missions.",
    genres: ["Comedy", "War"],
    id: 10313,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/d1UsMBrnd6YSQkrStmkAN0HzCdm.jpg",
    poster_path: "/mMrEsirD9fPt72BadkQOfU9SCNg.jpg",
    original_title: "大三元",
    overview:
      "A new Year's comedy about a romance between priest Leslie Cheung and prostitute Anita Yeun.",
    genres: ["Comedy", "Crime", "Romance"],
    id: 112438,
    spoken_languages: ["广州话 / 廣州話"],
  },
  {
    backdrop_path: "/3AL7KUakcmhFsI3lHRDegnteupE.jpg",
    poster_path: "/YOr0qlKhlsGZzYnGj3EUxBdyFh.jpg",
    original_title: "映画プリキュアドリームスターズ！",
    overview: "",
    genres: ["Comedy", "Animation", "Fantasy", "Action"],
    id: 432128,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/1XynEtRvStyuM73qes4SEcc3PFA.jpg",
    poster_path: "/bYbdoDoJJuMX1onDdpfzKH8ZvJ.jpg",
    original_title:
      "映画 プリキュアオールスターズDX3 未来にとどけ！世界をつなぐ☆虹色の花",
    overview:
      "Precure All Stars Movie DX3: Deliver The Future! The Rainbow-Colored Flower That Connects The World is the third movie in the series, released on March 19, 2011, starring all the Cures from the previous series, including those introduced in Suite PreCure, as well as various villains featured in previous Pretty Cure movies. The theatrical release was edited in parts as a result of the 2011 Sendai earthquake and tsunami which occurred before the movie was due to be released.",
    genres: ["Animation", "Action", "Fantasy", "Comedy"],
    id: 84155,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/nqOxPXfCR8hyPyYtfESOQsZULSy.jpg",
    poster_path: "/aM0Ksnnuc7NtRibMUhXGmAYAMrx.jpg",
    original_title: "StarDog and TurboCat",
    overview:
      "When vigilante cat, Felix, and loyal canine, Buddy, set out to find Buddy’s lost owner, they discover not only the power of friendship, but their inner superpowers along the way.",
    genres: ["Animation", "Comedy", "Family"],
    id: 515789,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/kSEc72AYeZEgwPBHle8bGjmRnAC.jpg",
    poster_path: "/9iqrqOjLaFcGNnSQlJxYLfgrhqn.jpg",
    original_title: "Starship Troopers 2: Hero of the Federation",
    overview:
      "In the sequel to Paul Verhoeven's loved/reviled sci-fi film, a group of troopers taking refuge in an abandoned outpost after fighting alien bugs, failing to realize that more danger lays in wait.",
    genres: ["Adventure", "Horror", "Action", "Science Fiction"],
    id: 10304,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/zlk687f7QSiy7udDvr9Sk7pNFnR.jpg",
    poster_path: "/xeyq5AYyGRXozcKrZzsjcXKsMhQ.jpg",
    original_title: "映画スター☆トゥインクルプリキュア 星のうたに想いをこめて",
    overview: "",
    genres: ["Animation", "Fantasy", "Science Fiction", "Comedy", "Action"],
    id: 636963,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/tOfJuyfEbUMSSyBK24CAehphKwD.jpg",
    poster_path: "/viR50oQCs8ObciADFGWHUyChexZ.jpg",
    original_title: "Stars at Noon",
    overview:
      "In present-day Nicaragua, a headstrong American journalist and a mysterious English businessman strike up a romance as they become embroiled in a dangerous labyrinth of lies and conspiracies and are forced to try and escape the country.",
    genres: ["Drama", "Romance", "Thriller"],
    id: 603204,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/mNdsbVuRdsyo8eitW2IBW2BWRkU.jpg",
    poster_path: "/rHsCYDGHFUarGh5k987b0EFU6kC.jpg",
    original_title: "Star Trek: Generations",
    overview:
      "Captain Jean-Luc Picard and the crew of the Enterprise-D find themselves at odds with the renegade scientist Soran who is destroying entire star systems. Only one man can help Picard stop Soran's scheme...and he's been dead for seventy-eight years.",
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    id: 193,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/hPHahVM3JDlE0Zexu6avavypk0g.jpg",
    poster_path: "/kIqsCdZBmKYuPwaDnrFYzK1gqlM.jpg",
    original_title: "Stargate: The Ark of Truth",
    overview:
      "SG-1 searches for an ancient weapon which could help them defeat the Ori, and discover it may be in the Ori's own home galaxy. As the Ori prepare to send ships through to the Milky Way to attack Earth, SG-1 travels to the Ori galaxy aboard the Odyssey. The International Oversight committee have their own plans and SG-1 finds themselves in a distant galaxy fighting two powerful enemies.",
    genres: ["Action", "Adventure", "Science Fiction", "TV Movie"],
    id: 13001,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/hcfUBdQct6UKPIJNN5hiRHbFTXr.jpg",
    poster_path: "/lAZ9WRAQQHMdUjkGc1KuxBPZl9I.jpg",
    original_title: "星をかった日",
    overview:
      "The short film is about a boy who lives and works on a farm. One day when going to sell vegetables at a market, his cart breaks down. Two strangers, a frog and a mole, offer him a strange seed in exchange for the vegetables. The boy accepts and finds that the seed grows into a miniature planet. It continues growing as he tends to it, forming an atmosphere, weather systems and life. After being taken back to the city, he meets the stranger who sold the seed to him, and they release the planet into a galaxy of similar planets, where it will grow for years until becoming a real planet.",
    genres: ["Animation", "Fantasy"],
    id: 222661,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/jCEM9uoMRmz73iNcubAhpWIuH7l.jpg",
    poster_path: "/ldgcd4OyXQfIhLsVwY1nngFki9k.jpg",
    original_title: "スタードライバー THE MOVIE",
    overview:
      "In the remote Southern Cross Island, a secret organization named The Glittering Crux plans to reactivate giant machines that have been sealed for ages. Known as Cybodies, they can only be controlled by pilots identified as Star Drivers. To unleash their full power, the mysterious group must break the seals of the four shrine maidens that reside in the isle. Recently arrived outsider Takuto Tsunashi vows to stop the Glittering Crux in order to protect Wako Agemaki, the girl who saved his life and is one of the four maidens. Wako is a lively young lady who has already been betrothed to Sugata Shindou, a rich and talented childhood friend. Despite being very close to Agemaki, Sugata quietly disapproves of this engagement since it was forced on them due to a family tradition. The melancholic couple becomes a radiant trio as Takuto becomes not only their friend but protector of the seals since he is none other than the Galactic Pretty Boy, gifted Star Driver of Tauburn, the 22nd Cybody.",
    genres: ["Animation", "Action", "Adventure", "Romance", "Drama"],
    id: 271948,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/incoi5mYkP2i6jZARasniuGHV1D.jpg",
    poster_path: "/7LH7DlJeIykHQVfog6IUWQ1fXVP.jpg",
    original_title: "Les Affamés",
    overview:
      "At 21, Zoe is sick and tired of everyone taking her for granted, just because she’s young. She dreams of a day when all millennials go on strike, so that people finally recognize their true value.",
    genres: ["Comedy"],
    id: 522531,
    spoken_languages: ["Français"],
  },
  {
    backdrop_path: "/qzcBGn3twthOiW8TZoTN5lkArlN.jpg",
    poster_path: "/q1RdBkQ4qaup8b0hi08yUS7stX7.jpg",
    original_title: "映画 プリキュアオールスターズ 春のカーニバル♪",
    overview:
      "Eiga Precure All Stars: Haru no Carnival is the franchise's upcoming seventh crossover film in the series, stated to be released on March 14, 2015. The movie is in 3D. It is the first feature length Pretty Cure film to feature extended dance scenes, similar to the 2011 short film Pretty Cure All Stars DX: 3D Theatre. Like the six previous films, the film will feature the characters from all Pretty Cure television series. In the story, the Pretty Cure visit Harmonia, the country of songs and dance. But when the unknown, sinister creatures invade and interrupt its tranquility, the Cures reunite to protect against the destruction.",
    genres: ["Animation", "Comedy", "Music", "Fantasy", "Action"],
    id: 315022,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/Ad604TQ5rqXShdjY92BpHpSmLy9.jpg",
    poster_path: "/jGXdE7Qe2Sgth64GVgnhnMF79NJ.jpg",
    original_title: "डॉली किट्टी और वो चमकते सितारे",
    overview:
      "A disillusioned Delhi wife (Dolly), and her new-in-town cousin (Kitty), navigate damning secrets, dreams and their thorny dynamic on their respective roads to freedom.",
    genres: ["Comedy", "Drama"],
    id: 639414,
    spoken_languages: ["हिन्दी"],
  },
  {
    backdrop_path: "/8P7zLwu9AxizU9DijWtoPL6ik3m.jpg",
    poster_path: "/nqNfB63gfhyuJA82pDZhGcYARYy.jpg",
    original_title:
      "仮面ライダー×仮面ライダー×仮面ライダー THE MOVIE 超・電王トリロジー EPISODE RED ゼロのスタートウィンクル",
    overview:
      "With the older Sakurai having sacrificed himself to ensure Airi’s future, Yuuto struggles with his own role in their story. Despite being told that he is no longer bound to his future, Yuuto finds himself continually drawn to Airi, and when another man contracts with an Imagin to woo her, Ryotaro and the Imgain are pulled into the situation, all while the DenLiner runs out of control through time!",
    genres: ["Action", "Adventure", "Science Fiction"],
    id: 210286,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/3aMSkCAYjUt42ufxiU0ZR6tPgsi.jpg",
    poster_path: "/pyZKpQm9SDEmvXgF0netdyQZfB.jpg",
    original_title: "チルソクの夏",
    overview:
      "Chirusoku Summer, the film set in the sister cities of Pusan, South Korea and the city of Shimonoseki-shi, Yamaguchi. During the Summer of 2003, four girls from Shimonoseki-shi, Yamaguchi travels to Pusan, South Korea for a sports festival and one of them fall in love...",
    genres: ["Drama"],
    id: 142048,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/dJToQELvOROvyS24ppR7Mf9H14R.jpg",
    poster_path: "/lIw2vkZJllnKvp9xuqZI1BaSVqK.jpg",
    original_title: "映画プリキュアオールスターズ F",
    overview:
      "Pretty Cure All Stars F is a Japanese magical girl anime film and a part of the Pretty Cure franchise, celebrating its 20th anniversary.",
    genres: ["Action", "Animation", "Comedy", "Fantasy"],
    id: 1094448,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/9yPFwNFnBvshLutDPx5QilxeTh8.jpg",
    poster_path: "/7CuEcRuqNlEcgnvrAFxFG56tvWz.jpg",
    original_title: "복면달호",
    overview:
      "Stuck in a small town, aspiring rocker Dal Ho makes a living reluctantly playing trot at local clubs. When small-time recording company head Jang offers Dal Ho a contract, he eagerly grabs the opportunity, believing that his time has finally come. After he signs, however, Dal Ho discovers that he won't be rocking after all. Instead, he will be singing trot. Unable to back out of his contract, Dal Ho takes to the stage behind a mask to hide his embarrassment, and ends up an overnight sensation. The wannabe rocker seems to have found his true calling, but doing music he dislikes. With the help of Jang and a certain cute trot singer, maybe he'll actually learn the passion of trot.",
    genres: ["Music", "Comedy"],
    id: 131922,
    spoken_languages: ["한국어/조선말"],
  },
  {
    backdrop_path: "/fny1B9hmVilFtU3RRjkMZffBjUi.jpg",
    poster_path: "/cgDeFWkYi6e9FT5RiQPCbQ9HlXZ.jpg",
    original_title: "Starman",
    overview:
      "When an alien takes the form of a young widow's husband and asks her to drive him from Wisconsin to Arizona, the government tries to stop them.",
    genres: ["Science Fiction", "Romance", "Drama", "Fantasy"],
    id: 9663,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/AlvKqnxlkWWYE6ngRLOWfYY3QuI.jpg",
    poster_path: "/zpg2SzpYhZk1D1seDfIIlwaqAxT.jpg",
    original_title: "A Star Is Born",
    overview:
      "A movie star helps a young singer-actress find fame, even as age and alcoholism send his own career into a downward spiral.",
    genres: ["Drama", "Music", "Romance"],
    id: 3111,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/f53Jujiap580mgfefID0T0g2e17.jpg",
    poster_path: "/fYiaBZDjyXjvlY6EDZMAxIhBO1I.jpg",
    original_title: "LEGO Star Wars Terrifying Tales",
    overview:
      "Poe Dameron and BB-8 must face the greedy crime boss Graballa the Hutt, who has purchased Darth Vader’s castle and is renovating it into the galaxy’s first all-inclusive Sith-inspired luxury hotel.",
    genres: ["Animation", "Family", "Science Fiction", "Comedy", "TV Movie"],
    id: 857702,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/nsWgxQrDcTVhSGzAu5kVlw64XB1.jpg",
    poster_path: "/kuyJuNiiZvu5iNr8Dgv5y75v1uc.jpg",
    original_title: "Starstruck",
    overview:
      "Pop star Christopher Wilde has fame, fortune and a big-budget Hollywood movie awaiting him. But after meeting Jessica Olson, a down-to-earth girl from the Midwest, he is faced with following his heart or doing what's best for his career.",
    genres: ["Romance", "Comedy", "TV Movie", "Music"],
    id: 35558,
    spoken_languages: ["English"],
  },
  {
    backdrop_path: "/m4kgCzeCM41By2Bv1N0clT4zQ1O.jpg",
    poster_path: "/3VOY4rmhHICI1tysgENoqDFqd6D.jpg",
    original_title: "のぞきめ",
    overview:
      "Ayano Mishima works as an AD at a TV broadcasting station. She covers the mysterious death case of a young man. Before he died, he said that somebody was watching him. Covering the case, Ayano Mishima realizes that the mysterious eye is also coming after her.",
    genres: ["Horror"],
    id: 382384,
    spoken_languages: ["日本語"],
  },
  {
    backdrop_path: "/7nHXstkbnX8t7fKICraMJkuPhK5.jpg",
    poster_path: "/2X17DnEtlI6ULf95wXC6sA4GrlL.jpg",
    original_title: "The Star Wars Holiday Special",
    overview:
      "Luke Skywalker and Han Solo battle evil Imperial forces to help Chewbacca reach his imperiled family on the Wookiee planet - in time for Life Day, their most important day of the year!",
    genres: ["Fantasy", "Science Fiction", "Family", "TV Movie"],
    id: 74849,
    spoken_languages: ["English"],
  },
];
const itemsPerPage = 12;
let currentMovies = movieData;
function showPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = currentMovies.slice(start, end);
  showCards(pageItems);
}

function showCards(pageItems) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  pageItems.forEach((movie, index) => {
    let title = movie.original_title;
    let imageURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    let overview = movie.overview;
    let genres = movie.genres.join(", ");
    let languages = movie.spoken_languages.join(", ");
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, overview, genres, languages); // Edit card content

    // Add the "X" button
    const closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");
    closeButton.onclick = function () {
      pageItems.splice(index, 1);
      showCards(pageItems);
    };
    nextCard.appendChild(closeButton);

    cardContainer.appendChild(nextCard); // Add new card to the container
  });
}

// initialize current page
let currentPage = 1;

//LOADING THE PAGINATION STUFF AT THE BOTTOM AND SHOWING THE CURRENT PAGE
function createPagination(movies) {
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.onclick = function () {
      // Remove the active class from the current active button
      const currentActiveButton = document.querySelector("#pagination .active");
      if (currentActiveButton) currentActiveButton.classList.remove("active");

      // Set the clicked button as the new active button
      button.classList.add("active");

      currentPage = i;
      showPage(currentPage);
    };
    pagination.appendChild(button);

    // Set the first button as the active button
    if (i === 1) {
      button.classList.add("active");
    }
  }
}

function editCardContent(
  card,
  newTitle,
  newImageURL,
  newOverview,
  newGenres,
  newLanguages
) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent =
    newTitle.length > 40 ? newTitle.slice(0, 10) + "..." : newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;

  const cardOverview = card.querySelector(".overview");
  cardOverview.textContent =
    newOverview.length > 100 ? newOverview.slice(0, 100) + "..." : newOverview;
  const cardGenres = card.querySelector(".genres");
  newGenres = newGenres.split(", "); // Convert newGenres to an array
  cardGenres.innerHTML = ""; // Clear existing genres
  newGenres.forEach((genre) => {
    const genreDiv = document.createElement("div");
    genreDiv.textContent = genre;
    genreDiv.classList.add("genre");
    const color = getColorForGenre(genre);
    console.log("color for", genre, ":", color); // Check getColorForGenre
    genreDiv.style.backgroundColor = color;
    genreDiv.addEventListener("click", () => {
      // Handle genre click
    });
    cardGenres.appendChild(genreDiv);
  });

  const cardLanguages = card.querySelector(".languages");
  cardLanguages.textContent =
    "Other translations: (" + newLanguages + ", Korean)";
}

function getColorForGenre(genre) {
  // Return a pastel color based on the genre
  switch (genre) {
    case "Action":
      return "#FFB6C1"; // Pastel pink
    case "Adventure":
      return "#FFD700"; // Pastel yellow
    case "Animation":
      return "#7FFFD4"; // Pastel aqua
    case "Comedy":
      return "#D8BFD8"; // Pastel purple
    case "Crime":
      return "#DDA0DD"; // Pastel plum
    case "Documentary":
      return "#87CEFA"; // Pastel sky blue
    case "Drama":
      return "#FFDEAD"; // Pastel navajo white
    case "Family":
      return "#98FB98"; // Pastel green
    case "Fantasy":
      return "#AFEEEE"; // Pastel turquoise
    case "History":
      return "#FAFAD2"; // Pastel goldenrod
    case "Horror":
      return "#FFC0CB"; // Pastel pink
    case "Music":
      return "#F0E68C"; // Pastel khaki
    case "Mystery":
      return "#E6E6FA"; // Pastel lavender
    case "Romance":
      return "#FFDAB9"; // Pastel peach
    case "Science Fiction":
      return "#B0E0E6"; // Pastel powder blue
    case "Thriller":
      return "#FFB347"; // Pastel orange
    case "TV Movie":
      return "#C1CDCD"; // Pastel azure
    case "War":
      return "#FFE4E1"; // Pastel misty rose
    case "Western":
      return "#DEB887"; // Pastel burlywood
    default:
      return "#F5F5F5"; // Pastel white smoke
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createPagination(currentMovies);
  showPage(currentPage);

  document
    .getElementById("modal-close-button")
    .addEventListener("click", function () {
      document.getElementById("modal").style.display = "none";
      document.getElementById("main-content").classList.remove("modal-blur");
    });
  // OPEN INFO MODAL
  document.getElementById("info-icon").addEventListener("click", function () {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("main-content").classList.add("modal-blur");
  });

  document
    .getElementById("genre-select")
    .addEventListener("change", function () {
      const selectedGenre = this.value;
      currentMovies = movieData.filter((movie) =>
        movie.genres.includes(selectedGenre)
      );
      createPagination(currentMovies);
      showPage(1);
    });
  // Assuming each genre under a card has a class 'card-genre'
  document.querySelectorAll(".genre").forEach((genreElement) => {
    genreElement.addEventListener("click", function () {
      const selectedGenre = this.textContent;
      currentMovies = movieData.filter((movie) =>
        movie.genres.includes(selectedGenre)
      );
      // Update the value of the genre select dropdown
      document.getElementById("genre-select").value = selectedGenre;
      createPagination(currentMovies);
      showPage(1);
    });
  });
});

//SEARCHING FOR MOVIES

function searchMovies(searchText) {
  // Filter the movies
  const filteredMovies = movieData.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Update currentMovies
  currentMovies = filteredMovies;

  // Recreate the pagination with the new data
  createPagination(currentMovies);

  // Show the first page of the new data
  showPage(1);
}
