
'use strict';

/*
var shikonaCells = document.getElementsByClassName("shikona");
var theRikishi = [], rikishiID = [];
for (var i = 0; i < 100; i++) {
  theRikishi[i] = shikonaCells[i].previousSibling.innerHTML + ' ' + shikonaCells[i].children[0].innerHTML + ' ' + shikonaCells[i].nextSibling.children[0].innerHTML;
  rikishiID[i]  = shikonaCells[i].children[0].href.split('=')[1];
} 
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */ 
var theSekitori = [
  "Y1e Terunofuji 1-3-11",
  "O1e Takakeisho 0-0-15",
  "O1w Kirishima 6-5-2",
  "S1e Hoshoryu 10-3",
  "S1w Daieisho 8-5",
  "S2w Wakamotoharu 9-4",
  "K1e Kotonowaka 9-4",
  "K1w Abi 4-9",
  "M1e Nishikigi 10-3",
  "M1w Tobizaru 7-6",
  "M2e Shodai 5-8",
  "M2w Mitakeumi 2-11",
  "M3e Midorifuji 3-10",
  "M3w Meisei 6-7",
  "M4e Asanoyama 6-4-3",
  "M4w Ura 6-7",
  "M5e Hiradoumi 5-8",
  "M5w Onosho 6-7",
  "M6e Hokuseiho 5-8",
  "M6w Oho 5-8",
  "M7e Takayasu 6-7",
  "M7w Tamawashi 8-5",
  "M8e Sadanoumi 4-9",
  "M8w Nishikifuji 5-8",
  "M9e Takanosho 7-6",
  "M9w Hokutofuji 11-2",
  "M10e Kinbozan 6-7",
  "M10w Myogiryu 6-7",
  "M11e Kotoeko 7-6",
  "M11w Tsurugisho 4-9",
  "M12e Chiyoshoma 6-7",
  "M12w Wakatakakage 0-0-15",
  "M13e Gonoyama 8-5",
  "M13w Kotoshoho 5-8",
  "M14e Daishoho 4-9",
  "M14w Shonannoumi 9-4",
  "M15e Ryuden 9-4",
  "M15w Takarafuji 8-5",
  "M16e Endo 9-4",
  "M16w Bushozan 3-10",
  "M17e Aoiyama 7-6",
  "M17w Hakuoho 10-3",
  "J1e Kagayaki 8-5",
  "J1w Atamifuji 10-3",
  "J2e Roga 8-5",
  "J2w Mitoryu 6-7",
  "J3e Ichiyamamoto 4-7-2",
  "J3w Shimazuumi 5-8",
  "J4e Oshoma 6-7",
  "J4w Tohakuryu 6-7",
  "J5e Tamashoho 8-5",
  "J5w Kitanowaka 8-5",
  "J6e Fujiseiun 0-0-15",
  "J6w Azumaryu 6-7",
  "J7e Hakuyozan 5-8",
  "J7w Churanoumi 6-7",
  "J8e Takakento 5-8",
  "J8w Akua 6-7",
  "J9e Daiamami 9-4",
  "J9w Tomokaze 10-3",
  "J10e Chiyosakae 7-6",
  "J10w Shimanoumi 5-8",
  "J11e Chiyomaru 7-6",
  "J11w Tsushimanada 2-11",
  "J12e Shishi 8-5",
  "J12w Hidenoumi 5-8",
  "J13e Kiho 8-5",
  "J13w Shiden 7-6",
  "J14e Yuma 4-9",
  "J14w Chiyonoumi 4-9",
  "Ms1e Tokihayate 7-0",
  "Ms1w Enho 0-0-7",
  "Ms2e Tochimusashi 1-5",
  "Ms2w Kiryuko 3-4",
  "Ms3e Onosato 3-3",
  "Ms3w Mukainakano 3-3",
  "Ms4e Kotokuzan 2-5",
  "Ms4w Takahashi 4-2",
  "Ms5e Ishizaki 5-2",
  "Ms5w Chiyonokuni 0-0-7",
  "Ms6e Kazekeno 3-3",
  "Ms6w Kaisho 3-3",
  "Ms7e Hayatefuji 3-2-2",
  "Ms7w Tsukahara 6-1",
  "Ms8e Chiyonoo 2-4",
  "Ms8w Mineyaiba 2-4",
  "Ms9e Otsuji 2-4",
  "Ms9w Hitoshi 4-2",
  "Ms10e Kotoozutsu 2-4",
  "Ms10w Kamito 4-2",
  "Ms11e Kanzaki 2-4",
  "Ms11w Nabatame 4-2",
  "Ms12e Terutsuyoshi 4-2",
  "Ms12w Fukai 3-3",
  "Ms13e Yago 3-4",
  "Ms13w Fujinoyama 3-3",
  "Ms14e Nishinoryu 2-4",
  "Ms14w Tsurubayashi 1-5",
  "Ms15e Tokushoryu 1-5",
  "Ms15w Dewanoryu 3-3",
  "Ms16e Akiseyama 5-2",
  "Ms16w Oshoumi 4-3",
  "Ms17e Takerufuji 5-1",
  "Ms17w Hokaho 1-5",
  "Ms18e Kototebakari 5-2",
  "Ms18w Daishomaru 2-5",
  "Ms19e Wakatakamoto 4-3",
  "Ms19w Hatsuyama 5-1",
  "Ms20e Ryuo 4-3",
  "Ms20w Miyagi 3-3",
];

/* Add here the shikona of retired sekitori, who will not appear in the 
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [];

/* Enable "No Rank Colouring" and "One Column" options and then open the 
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node. 
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an 
 * array (add the empty spots as 0). This array should have the same length as 
 * theSekitori array.
 */
var sekitoriID = [
  11927,
  12191,
  12231,
  12451,
  11985,
  11980,
  12270,
  12370,
  12130,
  12094,
  12352,
  6480,
  12055,
  12203,
  12351,
  12226,
  6596,
  12721,
  12449,
  11946,
  12210,
  12239,
  5944,
  2879,
  11855,
  12043,
  12314,
  6594,
  11728,
  12646,
  12040,
  11786,
  7153,
  11785,
  12107,
  12291,
  11784,
  12362,
  12113,
  12406,
  12453,
  11845,
  12688,
  12162,
  11723,
  12575,
  12117,
  12412,
  12717,
  12516,
  6599,
  11918,
  11943,
  12013,
  12114,
  12320,
  12664,
  12796,
  12273,
  6642,
  7240,
  12548,
  12026,
  11976,
  12427,
  11736,
  12702,
  12024,
  12542,
  12342,
  12141,
  12779,
  11809,
  12599,
  11988,
  12255,
  12674,
  12596,
  12165,
  11868,
  12709,
  11726,
  12592,
  8900,
  12416,
  12733,
  12597,
  12075,
  12523,
  12448,
  12836,
  12710,
  12713,
  12536,
  12557,
  12773,
  12767,
  12316,
  11840,
  12531,
  12771
];

var hoshitori = [
{
  "record": [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
  ],
  "aite": [
    "Takakeisho", "Kiribayama", "Hoshoryu", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Endo", "Tobizaru", "Ura", "Nishikigi", "Kinbozan", "Kotoshoho", "Meisei", "Asanoyama"
  ]
}, {
  "record": [
    0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1
  ],
  "aite": [
    "Terunofuji", "Kiribayama", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Midorifuji", "Endo", "Tobizaru", "Nishikifuji", "Ura", "Nishikigi", "Kinbozan", "Meisei"
  ]
}, {
  "record": [
    0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Hoshoryu", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Midorifuji", "Endo", "Tobizaru", "Nishikifuji", "Ura", "Hiradoumi", "Hokuseiho"
  ]
}, {
  "record": [
    0, 1, 0, 0, 1, 1, 1, 1, 3, 3, 0, 1, 1, 1, 1
  ],
  "aite": [
    "Terunofuji", "Kiribayama", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Midorifuji", "Takayasu", "Endo", "Tobizaru", "Nishikifuji", "Hiradoumi", "Hokuseiho", "Tsurugisho"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 3, 1, 0, 1
  ],
  "aite": [
    "Takakeisho", "Kiribayama", "Hoshoryu", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Midorifuji", "Nishikifuji", "Ura", "Nishikigi", "Kotoshoho", "Meisei", "Mitakeumi", "Asanoyama"
  ]
}, {
  "record": [
    0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Hoshoryu", "Daieisho", "Kotonowaka", "Shodai", "Abi", "Midorifuji", "Endo", "Tobizaru", "Nishikifuji", "Nishikigi", "Hokuseiho", "Tsurugisho"
  ]
}, {
  "record": [
    0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Hoshoryu", "Daieisho", "Wakamotoharu", "Shodai", "Abi", "Midorifuji", "Tobizaru", "Nishikifuji", "Ura", "Nishikigi", "Kinbozan", "Meisei"
  ]
}, {
  "record": [],
  "aite": []
}, {
  "record": [
    0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Hoshoryu", "Daieisho", "Wakamotoharu", "Kotonowaka", "Abi", "Midorifuji", "Tobizaru", "Nishikifuji", "Nishikigi", "Kinbozan", "Mitakeumi", "Asanoyama"
  ]
}, {
  "record": [
    0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Hoshoryu", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Midorifuji", "Takayasu", "Tobizaru", "Nishikifuji", "Ura", "Nishikigi", "Meisei"
  ]
}, {
  "record": [
    0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0
  ],
  "aite": [
    "Takakeisho", "Kiribayama", "Hoshoryu", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Takayasu", "Endo", "Tobizaru", "Ura", "Kinbozan", "Hokutofuji", "Oho"
  ]
}, {
  "record": [
    2, 1, 0, 1, 1, 0
  ],
  "aite": [
    "Hoshoryu", "Abi", "Midorifuji", "Nishikifuji", "Kotoshoho", "Tamawashi"
  ]
}, {
  "record": [
    0, 0, 0, 2, 0, 0, 0
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Hoshoryu", "Wakamotoharu", "Midorifuji", "Nishikifuji"
  ]
}, {
  "record": [
    0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Hoshoryu", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Midorifuji", "Nishikifuji", "Ura", "Nishikigi", "Mitakeumi", "Tamawashi", "Kotoeko"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1
  ],
  "aite": [
    "Takakeisho", "Kiribayama", "Hoshoryu", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Takayasu", "Endo", "Tobizaru", "Ura", "Kinbozan", "Sadanoumi", "Takanosho"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kiribayama", "Daieisho", "Kotonowaka", "Abi", "Midorifuji", "Tobizaru", "Nishikifuji", "Nishikigi", "Kotoshoho", "Meisei", "Mitakeumi", "Hokutofuji", "Daishoho"
  ]
}, {
  "record": [
    0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Daieisho", "Wakamotoharu", "Kotonowaka", "Shodai", "Abi", "Tobizaru", "Ura", "Kinbozan", "Kotoshoho", "Meisei", "Mitakeumi", "Hokutofuji", "Onosho"
  ]
}, {
  "record": [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Kotonowaka", "Shodai", "Midorifuji", "Nishikifuji", "Nishikigi", "Kotoshoho", "Meisei", "Mitakeumi", "Hokutofuji", "Tamawashi", "Sadanoumi", "Daishoho", "Kotoeko"
  ]
}, {
  "record": [
    0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1
  ],
  "aite": [
    "Terunofuji", "Daieisho", "Takayasu", "Ura", "Nishikigi", "Kinbozan", "Meisei", "Mitakeumi", "Hokutofuji", "Tamawashi", "Takanosho", "Takarafuji"
  ]
}, {
  "record": [
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0
  ],
  "aite": [
    "Terunofuji", "Takakeisho", "Daieisho", "Kotonowaka", "Abi", "Ura", "Nishikigi", "Kinbozan", "Kotoshoho", "Mitakeumi", "Hokutofuji", "Sadanoumi", "Hiradoumi", "Hokuseiho", "Asanoyama"
  ]
}, {
  "record": [
    1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1
  ],
  "aite": [
    "Daieisho", "Shodai", "Tobizaru", "Ura", "Nishikigi", "Kinbozan", "Kotoshoho", "Meisei", "Hokutofuji", "Tamawashi", "Sadanoumi", "Takanosho", "Onosho", "Tsurugisho", "Kagayaki"
  ]
}, {
  "record": [
    0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1
  ],
  "aite": [
    "Midorifuji", "Ura", "Nishikigi", "Kinbozan", "Kotoshoho", "Meisei", "Mitakeumi", "Tamawashi", "Sadanoumi", "Takanosho", "Onosho", "Hiradoumi", "Ryuden", "Aoiyama", "Mitoryu"
  ]
}, {
  "record": [
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1
  ],
  "aite": [
    "Takayasu", "Tobizaru", "Kinbozan", "Kotoshoho", "Mitakeumi", "Hokutofuji", "Sadanoumi", "Takanosho", "Onosho", "Ryuden", "Takarafuji", "Aoiyama", "Chiyoshoma", "Myogiryu", "Ichiyamamoto"
  ]
}, {
  "record": [
    1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0
  ],
  "aite": [
    "Nishikifuji", "Kinbozan", "Meisei", "Mitakeumi", "Hokutofuji", "Tamawashi", "Takanosho", "Onosho", "Ryuden", "Takarafuji", "Aoiyama", "Kotoeko", "Chiyoshoma", "Tsurugisho", "Oho"
  ]
}, {
  "record": [
    0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1
  ],
  "aite": [
    "Nishikifuji", "Kotoshoho", "Mitakeumi", "Hokutofuji", "Tamawashi", "Sadanoumi", "Onosho", "Hiradoumi", "Ryuden", "Takarafuji", "Daishoho", "Chiyoshoma", "Myogiryu", "Ichiyamamoto", "Mitoryu"
  ]
}, {
  "record": [
    0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1
  ],
  "aite": [
    "Nishikigi", "Mitakeumi", "Hokutofuji", "Tamawashi", "Sadanoumi", "Takanosho", "Hiradoumi", "Ryuden", "Takarafuji", "Hokuseiho", "Daishoho", "Chiyoshoma", "Myogiryu", "Oho", "Kagayaki"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0
  ],
  "aite": [
    "Kiribayama", "Hoshoryu", "Meisei", "Hokutofuji", "Takanosho", "Onosho", "Ryuden", "Takarafuji", "Hokuseiho", "Daishoho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Asanoyama", "Tsurugisho"
  ]
}, {
  "record": [
    0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0
  ],
  "aite": [
    "Hokutofuji", "Tamawashi", "Sadanoumi", "Takanosho", "Onosho", "Hiradoumi", "Takarafuji", "Hokuseiho", "Daishoho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Asanoyama", "Ichiyamamoto", "Oho"
  ]
}, {
  "record": [
    0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0
  ],
  "aite": [
    "Kotoshoho", "Tamawashi", "Sadanoumi", "Takanosho", "Onosho", "Hiradoumi", "Ryuden", "Hokuseiho", "Daishoho", "Myogiryu", "Ichiyamamoto", "Tsurugisho", "Mitoryu", "Oho", "Kagayaki"
  ]
}, {
  "record": [
    0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0
  ],
  "aite": [
    "Kiribayama", "Hoshoryu", "Wakamotoharu", "Meisei", "Onosho", "Hiradoumi", "Ryuden", "Takarafuji", "Daishoho", "Aoiyama", "Kotoeko", "Asanoyama", "Tsurugisho", "Oho", "Kagayaki"
  ]
}, {
  "record": [
    0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0
  ],
  "aite": [
    "Ura", "Kinbozan", "Takanosho", "Onosho", "Hiradoumi", "Ryuden", "Takarafuji", "Hokuseiho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Myogiryu", "Ichiyamamoto", "Mitoryu", "Kagayaki"
  ]
}, {
  "record": [
    1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1
  ],
  "aite": [
    "Hokutofuji", "Tamawashi", "Sadanoumi", "Hiradoumi", "Ryuden", "Hokuseiho", "Daishoho", "Kotoeko", "Chiyoshoma", "Asanoyama", "Myogiryu", "Ichiyamamoto", "Mitoryu", "Oho", "Kagayaki"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0
  ],
  "aite": [
    "Tobizaru", "Kinbozan", "Sadanoumi", "Hiradoumi", "Ryuden", "Hokuseiho", "Daishoho", "Aoiyama", "Chiyoshoma", "Asanoyama", "Myogiryu", "Ichiyamamoto", "Mitoryu", "Oho", "Kagayaki"
  ]
}, {
  "record": [
    1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1
  ],
  "aite": [
    "Tamawashi", "Sadanoumi", "Takanosho", "Onosho", "Hiradoumi", "Ryuden", "Daishoho", "Aoiyama", "Kotoeko", "Asanoyama", "Myogiryu", "Ichiyamamoto", "Tsurugisho", "Mitoryu", "Kagayaki"
  ]
}, {
  "record": [],
  "aite": []
}, {
  "record": [
    0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1
  ],
  "aite": [
    "Terunofuji", "Daieisho", "Shodai", "Meisei", "Hiradoumi", "Ryuden", "Hokuseiho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Myogiryu", "Ichiyamamoto", "Tsurugisho", "Mitoryu", "Oho"
  ]
}, {
  "record": [
    1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1
  ],
  "aite": [
    "Tamawashi", "Takanosho", "Onosho", "Takarafuji", "Daishoho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Asanoyama", "Ichiyamamoto", "Tsurugisho", "Mitoryu", "Oho", "Kagayaki", "Enho"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0
  ],
  "aite": [
    "Tamawashi", "Takanosho", "Ryuden", "Takarafuji", "Daishoho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Asanoyama", "Myogiryu", "Tsurugisho", "Mitoryu", "Oho", "Kagayaki", "Bushozan"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1
  ],
  "aite": [
    "Hoshoryu", "Wakamotoharu", "Mitakeumi", "Sadanoumi", "Hiradoumi", "Takarafuji", "Hokuseiho", "Chiyoshoma", "Asanoyama", "Myogiryu", "Ichiyamamoto", "Mitoryu", "Oho", "Kagayaki", "Tohakuryu"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1
  ],
  "aite": [
    "Hokutofuji", "Takanosho", "Takarafuji", "Daishoho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Asanoyama", "Myogiryu", "Ichiyamamoto", "Tsurugisho", "Oho", "Kagayaki", "Azumaryu", "Tohakuryu"
  ]
}, {
  "record": [
    1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0
  ],
  "aite": [
    "Midorifuji", "Sadanoumi", "Onosho", "Ryuden", "Takarafuji", "Hokuseiho", "Aoiyama", "Kotoeko", "Asanoyama", "Myogiryu", "Ichiyamamoto", "Tsurugisho", "Mitoryu", "Kagayaki", "Shonannoumi"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1
  ],
  "aite": [
    "Mitakeumi", "Onosho", "Takarafuji", "Hokuseiho", "Daishoho", "Aoiyama", "Kotoeko", "Chiyoshoma", "Myogiryu", "Ichiyamamoto", "Tsurugisho", "Mitoryu", "Oho", "Gonoyama", "Oshoma"
  ]
}, {
  "record": [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1
  ],
  "aite": [
    "Kagayaki", "Shonannoumi", "Azumaryu", "Tohakuryu", "Bushozan", "Enho", "Oshoma", "Roga", "Akua", "Hakuyozan", "Shimazuumi", "Atamifuji", "Ochiai", "Kitanowaka", "Tamashoho"
  ]
}, {
  "record": [
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1
  ],
  "aite": [
    "Oho", "Gonoyama", "Azumaryu", "Tohakuryu", "Bushozan", "Enho", "Oshoma", "Roga", "Shimazuumi", "Takakento", "Churanoumi", "Atamifuji", "Ochiai", "Tamashoho", "Chiyosakae"
  ]
}, {
  "record": [
    0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0
  ],
  "aite": [
    "Mitoryu", "Gonoyama", "Shonannoumi", "Bushozan", "Enho", "Oshoma", "Roga", "Akua", "Hakuyozan", "Shimazuumi", "Takakento", "Churanoumi", "Chiyomaru", "Kitanowaka", "Tomokaze"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0
  ],
  "aite": [
    "Tsurugisho", "Mitoryu", "Gonoyama", "Shonannoumi", "Bushozan", "Enho", "Oshoma", "Roga", "Akua", "Hakuyozan", "Shimazuumi", "Takakento", "Daiamami", "Chiyomaru", "Hidenoumi"
  ]
}, {
  "record": [
    1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0
  ],
  "aite": [
    "Ichiyamamoto", "Gonoyama", "Shonannoumi", "Azumaryu", "Tohakuryu", "Enho", "Oshoma", "Roga", "Hakuyozan", "Shimazuumi", "Takakento", "Churanoumi", "Ochiai", "Hidenoumi", "Tamashoho"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 0, 0, 0, 2, 0
  ],
  "aite": [
    "Myogiryu", "Gonoyama", "Shonannoumi", "Azumaryu", "Tohakuryu", "Bushozan", "Oshoma", "Roga", "Akua", "Takakento"
  ]
}, {
  "record": [
    0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0
  ],
  "aite": [
    "Kagayaki", "Gonoyama", "Shonannoumi", "Azumaryu", "Tohakuryu", "Bushozan", "Enho", "Roga", "Tochinoshin", "Akua", "Hakuyozan", "Atamifuji", "Ochiai", "Chiyosakae", "Shimanoumi"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1
  ],
  "aite": [
    "Gonoyama", "Shonannoumi", "Azumaryu", "Tohakuryu", "Bushozan", "Enho", "Oshoma", "Tochinoshin", "Akua", "Hakuyozan", "Ochiai", "Kitanowaka", "Tamashoho", "Fujiseiun", "Shimanoumi"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 2
  ],
  "aite": [
    "Oshoma", "Roga", "Akua", "Hakuyozan", "Shimazuumi", "Takakento"
  ]
}, {
  "record": [
    0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1
  ],
  "aite": [
    "Gonoyama", "Azumaryu", "Tohakuryu", "Enho", "Oshoma", "Roga", "Tochinoshin", "Hakuyozan", "Shimazuumi", "Takakento", "Churanoumi", "Chiyomaru", "Hidenoumi", "Fujiseiun", "Tokihayate"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0
  ],
  "aite": [
    "Gonoyama", "Azumaryu", "Tohakuryu", "Bushozan", "Oshoma", "Roga", "Tochinoshin", "Akua", "Shimazuumi", "Takakento", "Churanoumi", "Atamifuji", "Tamashoho", "Fujiseiun"
  ]
}, {
  "record": [
    0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0
  ],
  "aite": [
    "Gonoyama", "Shonannoumi", "Azumaryu", "Tohakuryu", "Bushozan", "Tochinoshin", "Akua", "Hakuyozan", "Takakento", "Churanoumi", "Atamifuji", "Ochiai", "Chiyomaru", "Hidenoumi", "Chiyosakae"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0
  ],
  "aite": [
    "Shonannoumi", "Azumaryu", "Tohakuryu", "Bushozan", "Enho", "Tochinoshin", "Akua", "Hakuyozan", "Shimazuumi", "Churanoumi", "Atamifuji", "Ochiai", "Daiamami", "Chiyosakae", "Shimanoumi"
  ]
}, {
  "record": [
    0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0
  ],
  "aite": [
    "Shonannoumi", "Azumaryu", "Bushozan", "Akua", "Hakuyozan", "Shimazuumi", "Takakento", "Atamifuji", "Ochiai", "Daiamami", "Chiyonokuni", "Chiyomaru", "Tomokaze", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1
  ],
  "aite": [
    "Gonoyama", "Shonannoumi", "Oshoma", "Hakuyozan", "Shimazuumi", "Takakento", "Churanoumi", "Ochiai", "Daiamami", "Chiyonokuni", "Chiyomaru", "Tamashoho", "Tomokaze", "Chiyosakae", "Shimanoumi"
  ]
}, {
  "record": [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ],
  "aite": [
    "Gonoyama", "Shonannoumi", "Bushozan", "Oshoma", "Roga", "Shimazuumi", "Takakento", "Churanoumi", "Atamifuji", "Daiamami", "Chiyonokuni", "Chiyomaru", "Kitanowaka", "Hidenoumi", "Tamashoho"
  ]
}, {
  "record": [
    1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0
  ],
  "aite": [
    "Ryuo", "Tohakuryu", "Takakento", "Churanoumi", "Atamifuji", "Ochiai", "Chiyonokuni", "Chiyomaru", "Kitanowaka", "Hidenoumi", "Chiyosakae", "Fujiseiun", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 0, 0, 2, 0, 0
  ],
  "aite": [
    "Churanoumi", "Atamifuji", "Ochiai", "Daiamami", "Kitanowaka", "Hidenoumi", "Tamashoho", "Tomokaze", "Fujiseiun", "Tsushimanada"
  ]
}, {
  "record": [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1
  ],
  "aite": [
    "Azumaryu", "Tohakuryu", "Akua", "Shimazuumi", "Churanoumi", "Atamifuji", "Ochiai", "Daiamami", "Kitanowaka", "Hidenoumi", "Tomokaze", "Fujiseiun", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1
  ],
  "aite": [
    "Gonoyama", "Azumaryu", "Roga", "Ochiai", "Daiamami", "Chiyonokuni", "Chiyomaru", "Hidenoumi", "Tamashoho", "Tomokaze", "Chiyosakae", "Fujiseiun", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0
  ],
  "aite": [
    "Tohakuryu", "Bushozan", "Akua", "Shimazuumi", "Ochiai", "Daiamami", "Chiyonokuni", "Chiyomaru", "Kitanowaka", "Tamashoho", "Tomokaze", "Chiyosakae", "Fujiseiun", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1
  ],
  "aite": [
    "Gonoyama", "Shonannoumi", "Bushozan", "Roga", "Hakuyozan", "Atamifuji", "Ochiai", "Chiyonokuni", "Kitanowaka", "Hidenoumi", "Tomokaze", "Chiyosakae", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    0, 0, 1, 1, 1, 3, 0, 1, 1, 0, 0, 0, 1, 1, 0
  ],
  "aite": [
    "Chiyonoumi", "Kawazoe", "Azumaryu", "Churanoumi", "Atamifuji", "Chiyonokuni", "Chiyomaru", "Kitanowaka", "Hidenoumi", "Tamashoho", "Chiyosakae", "Fujiseiun", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0
  ],
  "aite": [
    "Ryuo", "Shonannoumi", "Oshoma", "Shimazuumi", "Takakento", "Atamifuji", "Daiamami", "Kitanowaka", "Hidenoumi", "Tamashoho", "Tomokaze", "Fujiseiun", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1
  ],
  "aite": [
    "Shishi", "Shiden", "Roga", "Akua", "Hakuyozan", "Daiamami", "Chiyonokuni", "Chiyomaru", "Kitanowaka", "Hidenoumi", "Tomokaze", "Chiyosakae", "Shimanoumi", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1
  ],
  "aite": [
    "Yuma", "Kotokuzan", "Oshoma", "Roga", "Takakento", "Atamifuji", "Daiamami", "Chiyomaru", "Kitanowaka", "Tamashoho", "Tomokaze", "Chiyosakae", "Fujiseiun", "Tokihayate", "Tsushimanada"
  ]
}, {
  "record": [
    1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1
  ],
  "aite": [
    "Hayatefuji", "Shishi", "Kawazoe", "Akua", "Churanoumi", "Daiamami", "Chiyomaru", "Kitanowaka", "Hidenoumi", "Tamashoho", "Tomokaze", "Chiyosakae", "Fujiseiun", "Shimanoumi", "Tsushimanada"
  ]
}, {
  "record": [
    1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0
  ],
  "aite": [
    "Yuma", "Tochimusashi", "Shiden", "Churanoumi", "Daiamami", "Chiyonokuni", "Chiyomaru", "Kitanowaka", "Hidenoumi", "Tamashoho", "Tomokaze", "Chiyosakae", "Fujiseiun", "Shimanoumi", "Tokihayate"
  ]
}, 
// Juryo rikishi's torikumi
{
  "record": [
    1, 1, 0, 1, 1, 0, 0
  ],
  "aite": [
    "Kawazoe", "Tsushimanada", "Yuma", "Tochimusashi", "Mukainakano", "Onosato", "Fujiseiun"
  ]
}, {
  "record": [
    0, 1, 1, 1, 0, 1, 1
  ],
  "aite": [
    "Shiden", "Tokihayate", "Ryuo", "Tokushoryu", "Yuma", "Kamito", "Tomokaze"
  ]
}, {
  "record": [
    0, 0, 0, 1, 1, 0, 1
  ],
  "aite": [
    "Shishi", "Chiyonoumi", "Shimanoumi", "Dewanoryu", "Ryuo", "Tochimusashi", "Terutsuyoshi"
  ]
}, {
  "record": [
    1, 1, 1, 1, 1, 0, 1
  ],
  "aite": [
    "Kotokuzan", "Ryuo", "Fujiseiun", "Yuma", "Takahashi", "Kiryuko", "Tokihayate"
  ]
}, {
  "record": [
    1, 0, 0, 0, 0, 0, 0, 0
  ],
  "aite": [
    "Chiyonoumi", "Shishi", "Kawazoe", "Chiyosakae", "Kotokuzan", "Kanzaki", "Dewanoryu", "Daiamami"
  ]
}, {
  "record": [
    0, 1, 0, 0, 1, 1, 1
  ],
  "aite": [
    "Ryuo", "Kotokuzan", "Tochimusashi", "Hayatefuji", "Tomokaze", "Terutsuyoshi", "Kamito"
  ]
}, {
  "record": [
    0, 1, 1, 0, 0, 1, 1
  ],
  "aite": [
    "Hayatefuji", "Terutsuyoshi", "Chiyonoumi", "Shiden", "Tsushimanada", "Kotokuzan", "Nabatame"
  ]
}, {
  "record": [
    1, 0, 0, 1, 1, 0, 0
  ],
  "aite": [
    "Tochimusashi", "Yuma", "Mukainakano", "Chiyonoumi", "Tokushoryu", "Tokihayate", "Kaisho"
  ]
}, {
  "record": [
    1, 1, 1, 0, 1, 1, 0
  ],
  "aite": [
    "Terutsuyoshi", "Hayatefuji", "Shiden", "Shishi", "Kawazoe", "Shimanoumi", "Tsushimanada"
  ]
}, {
  "record": [
    0, 0, 1, 0, 1, 0, 0
  ],
  "aite": [
    "Yuma", "Tochimusashi", "Dewanoryu", "Kamito", "Kanzaki", "Chiyonoumi", "Kotokuzan"
  ]
}, {
  "record": [
    0, 1, 1, 1, 0, 1, 0
  ],
  "aite": [
    "Tokushoryu", "Dewanoryu", "Hayatefuji", "Akiseyama", "Shiden", "Nabatame", "Ishizaki"
  ]
}, {
  "record": [
    1, 1, 0, 0, 0, 0, 0
  ],
  "aite": [
    "Mukainakano", "Kamito", "Nabatame", "Kawazoe", "Hayatefuji", "Nishinoryu", "Kanzaki"
  ]
}, {
  "record": [
    0, 0, 0, 0, 0, 1, 1
  ],
  "aite": [
    "Akiseyama", "Mukainakano", "Terutsuyoshi", "Kotokuzan", "Miyagi", "Daiseiryu", "Ryuo"
  ]
}, {
  "record": [
    1, 0, 1, 0, 0, 0, 0
  ],
  "aite": [
    "Dewanoryu", "Nabatame", "Kamito", "Mukainakano", "Kaisho", "Tsukahara", "Miyagi"
  ]
}, {
  "record": [
    1, 0, 0, 1, 1, 0, 0
  ],
  "aite": [
    "Kanzaki", "Tokushoryu", "Akiseyama", "Terutsuyoshi", "Yoshii", "Kawazoe", "Chiyonoumi"
  ]
}, {
  "record": [
    0, 0, 0, 1, 0, 1, 1
  ],
  "aite": [
    "Kamito", "Kaisho", "Tsukahara", "Miyagi", "Terutsuyoshi", "Ryuo", "Tokushoryu"
  ]
}, {
  "record": [
    1, 1, 1, 0, 0, 0, 0
  ],
  "aite": [
    "Kaisho", "Akiseyama", "Tokushoryu", "Takahashi", "Onosato", "Mukainakano", "Tochimusashi"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 0, 1
  ],
  "aite": [
    "Nabatame", "Kanzaki", "Nishinoryu", "Onosato", "Akiseyama", "Ishizaki", "Hayatefuji"
  ]
}, {
  "record": [
    1, 0, 0, 0, 1, 1, 0
  ],
  "aite": [
    "Tsukahara", "Ishizaki", "Kaisho", "Yoshii", "Tochikamiyama", "Tokushoryu", "Kotoozutsu"
  ]
}, {
  "record": [
    0, 0, 1, 0, 1, 1, 1
  ],
  "aite": [
    "Nishinoryu", "Onosato", "Kanzaki", "Kotoozutsu", "Kayo", "Akiseyama", "Tokunomusashi"
  ]
}, {
  "record": [
    0, 1, 1, 1, 1, 1, 1
  ],
  "aite": [
    "Ishizaki", "Tsukahara", "Yoshii", "Kaisho", "Nabatame", "Shiden", "Otsuji"
  ]
}, {
  "record": [
    1, 1, 0, 1, 0, 1, 1
  ],
  "aite": [
    "Onosato", "Nishinoryu", "Takahashi", "Mineyaiba", "Kazekeno", "Kaisho", "Mukainakano"
  ]
}, {
  "record": [
    0, 0, 0, 0, 1, 1, 1
  ],
  "aite": [
    "Yoshii", "Mineyaiba", "Tochikamiyama", "Kanzaki", "Dewanoryu", "Kotoyusho", "Akiseyama"
  ]
}, {
  "record": [
    1, 0, 0, 1, 0, 0, 0
  ],
  "aite": [
    "Miyagi", "Takahashi", "Onosato", "Nishinoryu", "Kamito", "Kotoozutsu", "Toshunryu"
  ]
}, {
  "record": [
    0, 1, 1, 0, 1, 1, 0
  ],
  "aite": [
    "Takahashi", "Miyagi", "Kotoozutsu", "Ishizaki", "Toshunryu", "Tokunomusashi", "Kazekeno"
  ]
}, {
  "record": [
    1, 1, 1, 1, 0, 1, 1
  ],
  "aite": [
    "Mineyaiba", "Yoshii", "Ishizaki", "Nabatame", "Shishi", "Kazekeno", "Tsurubayashi"
  ]
}, {
  "record": [
    1, 1, 1, 0, 1, 0, 1
  ],
  "aite": [
    "Kotoozutsu", "Chiyonoo", "Tokunomusashi", "Hitoshi", "Ishizaki", "Takahashi", "Mineyaiba"
  ]
}, {
  "record": [
    0, 1, 0, 1, 0, 1, 1
  ],
  "aite": [
    "Kazekeno", "Tochikamiyama", "Mineyaiba", "Tsukahara", "Tokunomusashi", "Yoshii", "Nishinoryu"
  ]
}, {
  "record": [
    1, 0, 1, 1, 1, 0, 1
  ],
  "aite": [
    "Tochikamiyama", "Kazekeno", "Tochimaru", "Tokunomusashi", "Yago", "Otsuji", "Fukai"
  ]
}, {
  "record": [
    0, 0, 1, 0, 0, 0, 1
  ],
  "aite": [
    "Chiyonoo", "Kotoozutsu", "Miyagi", "Toshunryu", "Nishinoryu", "Kayo", "Kotoyusho"
  ]
}, {
  "record": [
    0, 0, 1, 1, 0, 0, 1
  ],
  "aite": [
    "Tokunomusashi", "Tochimaru", "Kayo", "Tochikamiyama", "Mineyaiba", "Tochinobori", "Yoshii"
  ]
}];

//***** Just update the "basho" variable and you're all done. *****

let redips = {}, 
    rd     = REDIPS.drag;

//let time = 0;

// On change paste keyup.
function saveNote() {
  // Reset the timer
  clearTimeout(time);
  time = setTimeout(function() {
    window.localStorage.setItem("picks", document.getElementById("tableLiner").innerHTML);
    console.log("hi");
  }, 1000);
}

function exportTableToCSV($table, filename) {
  var $rows = $table.find('tr:has(td),tr:has(th)'),

  // Temporary delimiter characters unlikely to be typed by keyboard
  // This is to avoid accidentally splitting the actual contents
  tmpColDelim = String.fromCharCode(11), // vertical tab character
  tmpRowDelim = String.fromCharCode(0), // null character

  // actual delimiter characters for CSV format
  colDelim = '","',
  rowDelim = '"\r\n"',

  // Grab text from table into CSV formatted string
  csv = '"' + $rows.map(function (i, row) {
    var $row = $(row), $cols = $row.find('td,th');

    return $cols.map(function (j, col) {
      var $col = $(col), text = $col.text(), html = $col.html(), arr = [];

      if ($col.prop("tagName") == "TH" || $col.hasClass("cur")) {
        $col.contents().each(function() {
          if (this.nodeType == 3) 
            arr.push(this.nodeValue);
          else if (this.tagName == "SPAN")
            arr.push(this.innerText);
        });
        if ($col.hasClass("cur") && $col.prop("tagName") != "TH") 
          text = arr.join('\n');
        else 
          text = arr.join(' ');
      }
      else if ($col.hasClass("b2") || $col.hasClass("rs2") || $col.hasClass("ch2")) {
        $col.children().each(function() {
          if (this.tagName != "BR")
            arr.push(this.innerText);
        });
        text = arr.join('\n');
      }
      else if ($col.hasClass("nte")) {
        var temp;
        $col.children("div").children().each(function() {
          temp = this.innerText.replace('\n', "");
          arr.push(temp);
        });
        text = arr.join('\n');
      }

      text = text.replace(/ /g, "");
      return text.replace(/"/g, '""'); // escape double quotes

    }).get().join(tmpColDelim);

  }).get().join(tmpRowDelim)
    .split(tmpRowDelim).join(rowDelim)
    .split(tmpColDelim).join(colDelim) + '"',


  // Data URI
  csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
  
  console.log(csv);
      
  if (window.navigator.msSaveBlob) { // IE 10+
    //alert('IE' + csv);
    window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), "csvname.csv")
  } 
  else {
    $(this).attr({ 'download': filename, 'href': csvData, 'target': '_blank' }); 
  }
}

window.onload = function() {

  var basho = "202307"; // The date of the basho just ended
  //****************************************************************************
    
    // This must be a hyperlink
  $("#exportToCsv1").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke1"), "banzuke1.csv"]);
  });
  $("#exportToCsv2").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke2"), "banzuke2.csv"]);
  });

  if (window.localStorage.getItem("banzuke1") !== null) {
    window.localStorage.removeItem("banzuke1");
    window.localStorage.removeItem("banzuke2");
  }
  if (window.localStorage.getItem("banzuke") !== null) {
    //document.getElementById("tableLiner").innerHTML = window.localStorage.getItem("banzuke");
    window.localStorage.removeItem("banzuke");
    //writeTableTitles(basho);
    //populateSlots();
  }
  if (window.localStorage.getItem("picks") !== null) {
    document.getElementById("tableLiner").innerHTML = window.localStorage.getItem("picks");
    
    var banzuke1 = document.getElementById("banzuke1");
    var b1Cell = banzuke1.getElementsByClassName("redips-only");

    for (var i = 0; i < b1Cell.length; i++) {
      if (b1Cell[i].children.length > 1) 
        b1Cell[i].children[0].remove();
    }

    window.localStorage.setItem("picks", document.getElementById("tableLiner").innerHTML);
  }
  else {
    writeTableTitles(basho);
    populateSlots();
  }
  if (window.localStorage.getItem("colCheck1") === null) {
    var columnCheckbox = document.querySelectorAll(".checkedByDefault");

    for (var i = 0; i < columnCheckbox.length; i++) 
      columnCheckbox[i].checked = true;
  }
  else {
    for (var i = 1; i < 8; i++) {
      var columnCheck = document.querySelectorAll(".columnCheckbox")[i-1];
      var check = JSON.parse(window.localStorage.getItem("colCheck" + String(i)));

      columnCheck.checked = check;
    }
  }

  var radioButton = document.getElementsByClassName("checkbox"), 
      radioLocal  = window.localStorage.getItem("radioButton"), 
      radioLocalDrop  = window.localStorage.getItem("radioDrop");

  if (radioLocal === null || radioLocal == "openRikishiPage")
    radioButton[0].checked = true;
  else if (radioLocal == "returnToOld") 
    radioButton[1].checked = true;
  else 
    radioButton[2].checked = true;

  if (radioLocalDrop === null || radioLocalDrop == "multiple")
    radioButton[3].checked = true;
  else if (radioLocalDrop == "shift")
    radioButton[4].checked = true;
  else 
    radioButton[5].checked = true;

  var noteCells = document.querySelectorAll(".nte");

  for (var i = 2; i < noteCells.length; i++) {
    let time = 0;
    noteCells[i].children[0].contentEditable = "true";
    noteCells[i].children[0].addEventListener("input", function() {
      // Reset the timer
      clearTimeout(time);

      time = setTimeout(function() {
        window.localStorage.setItem("picks", document.getElementById("tableLiner").innerHTML);
        showSaving();
      }, 1000);
    });
  }

  var cards = document.querySelectorAll(".redips-drag");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", showHoshitori.bind(this));
    cards[i].addEventListener("mouseout", function() {
      this.style.border = "";
      if (document.getElementById("hoshiCheckbox").checked) {
        var rikishiCard = document.querySelectorAll(".redips-drag");
        
        for (var j = 0; j < rikishiCard.length; j++) {
          if (rikishiCard[j].style.border != "") {
            rikishiCard[j].style.border = "";
          }
          if (rikishiCard[j].style.outline != "") 
            rikishiCard[j].style.outline = "";
        }
      }
    });
  }
    
  function writeTableTitles(endedBashoDate) {
    var bashoYear  = parseInt(endedBashoDate.substring(0, 4)), 
        bashoMonth = parseInt(endedBashoDate.slice(-2)), 
        tableTitle = document.getElementsByClassName("tableTitle");

    const bashoMonthLookup = {
            1: "Hatsu", 
            3: "Haru", 
            5: "Natsu", 
            7: "Nagoya", 
            9: "Aki",
            11: "Kyushu"
          }, 
          getBashoName = (bMonth) => bashoMonthLookup[bMonth];

    tableTitle[0].innerHTML = getBashoName(bashoMonth) + ' ' + bashoYear + 
                              tableTitle[0].innerHTML + " Result";
    if (bashoMonth > 9) {
      bashoYear++;
      bashoMonth = -1;
    }
    tableTitle[1].innerHTML = getBashoName(bashoMonth+2) + ' ' + bashoYear + 
                              " Makuuchi Guess - " + tableTitle[1].innerHTML;
  }

  function populateSlots() {
    var table1 = document.getElementById("banzuke1"), 
        cell = table1.querySelectorAll(".redips-only");
    

    for (var i = 0; i < cell.length; i++) {
      for (var j = 0; j < theSekitori.length; j++) {
        if (cell[i].classList.contains(theSekitori[j].split(' ')[0])) {
          var card     = document.createElement("div"), 
              rikiData = theSekitori[j].split(' '), 
              wins = rikiData[2].split('-')[0];

          if (rikiData.length > 3) 
            rikiData[2] += ' ' + rikiData[3];

          card.id = rikiData[0];
          card.className = "redips-drag se";
          if (rikiData[0].startsWith("Ms")) 
            card.setAttribute("data-w", wins*2);
          else 
            card.setAttribute("data-w", wins);

          /*
          var holder = document.createElement('a');

          holder.innerHTML = rikiData[1];
          holder.href = "https://sumodb.sumogames.de/Rikishi.aspx?r=" + sekitoriID[j];
          holder.target = "_blank";
          if (rikiData[0].startsWith("Ms")) 
            holder.className = "msLink";
          //holder.setAttribute("onmouseover", 'showNextRank("' + rikiData[0] + '")');
          //holder.setAttribute("onmouseout", "hideNextRank()");
          holder.style.display = "none";
          */

          rikiData[1] = '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' + 
                        sekitoriID[j] + '" target="_blank">' + rikiData[1] + "</a>";
          rikiData[2] = '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' + 
                        sekitoriID[j] + "&b=" + basho + '" target="_blank">' + rikiData[2] + "</a>";

          card.innerHTML = rikiData[1];

          if (retiredRikishi.includes(theSekitori[j].split(' ')[1])) {
            //card.innerHTML = rikiData.join(' ');
            card.style.backgroundColor = "rgb(203, 203, 203)";
            card.className = "redips-drag intai";
            card.setAttribute("title", "Retired");
            card.removeAttribute("data-ko");
          }

          //card.setAttribute("onmouseout", "hideHoshitori()");

          //cell[i].appendChild(holder);
          cell[i].appendChild(card);

          var resCell, newRankCell;

          if (i % 2 == 0) 
            resCell = cell[i].previousSibling;
          else 
            resCell = cell[i].nextSibling;
          
          resCell.innerHTML = rikiData[2];

          //cell[i].style.borderInline = "1px solid #929292";
        }
      }
    }
  }
}

function showHoshitori() {
  var thisRikishi = theSekitori.find(text => text.startsWith(event.target.id));
  var rikishiNum = theSekitori.indexOf(thisRikishi);
  
  event.target.style.border = "2px solid blue";

  if (document.getElementById("hoshiCheckbox").checked && hoshitori[rikishiNum].record.length > 0) {
    for (var i = 0; i < hoshitori[rikishiNum].record.length; i++) {
      var aite = theSekitori.find(text => text.split(' ')[1] == hoshitori[rikishiNum].aite[i]);
      
      if (aite) {
        var aiteCard = document.getElementById(aite.split(' ')[0]);
        var honwariBoutColor = "", ketteisenBoutColor = "";

        switch (hoshitori[rikishiNum].record[i]) {
          case 0: 
            honwariBoutColor = "2px solid red"; break;
          case 1: 
            honwariBoutColor = "2px solid black"; break;
          case 2:
            honwariBoutColor = "2px dashed red"; break;
          case 3: 
            honwariBoutColor = "2px dashed black"; break;
          case 4: 
            ketteisenBoutColor = "2px solid red"; break;
          default: 
            ketteisenBoutColor = "2px solid black";
        }
        if (honwariBoutColor != "") 
          aiteCard.style.border = honwariBoutColor;
        else 
          aiteCard.style.outline = ketteisenBoutColor;
      }
    }
  }
}

/*
function showNextRank(thisRank) {
  if (event.target.className == "hold") {
    var cards = document.querySelectorAll(".se");

    event.target.parentNode.style.boxShadow = "0 0 0 2px inset blue";
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id == thisRank) {
        var cardCurrentRank = cards[i].parentNode.id;
        var table1Cell = document.querySelectorAll('.' + cardCurrentRank);
        table1Cell[0].style.boxShadow = "0 0 0 2px inset black";
        break;
      }
    }
  }
}

function hideNextRank() {
  var cell = document.getElementsByTagName("td");
    
  for (var j = 0; j < cell.length; j++) {
    if (cell[j].style.boxShadow != "rgba(0, 0, 0, 0.16) 0px 0px 0px 2px inset") {
      cell[j].style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 0px 0px 2px inset";
    }
  }
}
*/

function hideHoshitori() {
  event.target.style.border = "";
  if (document.getElementById("hoshiCheckbox").checked) {
    var rikishiCard = document.querySelectorAll(".redips-drag");
    
    for (var j = 0; j < rikishiCard.length; j++) {
      if (rikishiCard[j].style.border != "") {
        rikishiCard[j].style.border = "";
      }
      if (rikishiCard[j].style.outline != "") 
        rikishiCard[j].style.outline = "";
    }
  }
}

function saveRadio(radioButton) {
  window.localStorage.setItem("radioButton", radioButton.value);
}

function saveDropRadio(button) {
  if (button.value == "disable") 
    rd.dropMode = "single";
  else 
    rd.dropMode = "multiple";

  window.localStorage.setItem("radioDrop", button.value);
}

// *****************************************************************************

rd.animation = "off";

redips.init = function () {
  rd.init();
  rd.hover.colorTd = "chartreuse";
  //rd.hover.borderTd = "2px solid blue";
  //rd.dropMode = "multiple";
  rd.only.divClass.se = "b2";

  rd.enableDrag(false, ".intai");

  var radioDrop = document.getElementsByName("dropMode");

  if (radioDrop[2].checked) 
    rd.dropMode = "single";
  else 
    rd.dropMode = "multiple";

  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i] !== "") {
      var rank = theSekitori[i].split(' ')[0];
      rd.only.div[rank] = rank;
    }
  }

  rd.event.changed = function(currentCell) {
    var tip =  document.getElementById("tip");
    
    if (typeof(tip) != "undefined" && tip != null)
      tip.remove();

    if (currentCell.children.length > 0 && currentCell != rd.obj.parentNode && 
        window.localStorage.getItem("radioDrop") == "shift" && 
        currentCell.classList.contains("b2")) {
      rd.hover.colorTd = "yellow";
      var tooltip = document.createElement("span");
      tooltip.id = "tip";
      tooltip.innerHTML = "shift→";
      currentCell.prepend(tooltip);
    }
    else 
      rd.hover.colorTd = "chartreuse";
  }

  rd.event.dblClicked = function() {

    var radioButton = document.getElementsByTagName("input");
    var rikishiURL  = rd.obj.children[0].href;
    var thisRank    = rd.obj.id, 
        originCell  = document.querySelectorAll('.' + thisRank)[0], 
        currentCell = rd.findParent('TD', rd.obj), 
        currentChgCell;
    
    if (radioButton[0].checked) 
      window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj, 
        target: originCell, 
        callback: function () {
          if (currentCell.dataset.r.charAt(0) == 'J') 
            document.getElementById("juRik").innerHTML--;
          else 
            document.getElementById("makRik").innerHTML--;
          originCell.children[0].remove();
          //b1Cell[i].style.removeProperty("border");
          hideHoshitori();
          updateInfoCells();
          window.localStorage.setItem("picks", 
            document.getElementById("tableLiner").innerHTML);
        }
      });
      showSaving();
    }

  };

  rd.event.clicked = function(currentCell) {
    //currentCell.style.boxShadow = "0 0 0 4px #0000003d inset";
    hideHoshitori();
  };

  /*
  rd.event.notMoved = function() {
    var currentCell = rd.findParent('TD', rd.obj); 
    currentCell.style.removeProperty("box-shadow");
  };
  */

  rd.event.droppedBefore = function(targetCell) {

    var makuCounter = document.getElementById("makRik"), 
        juCounter   = document.getElementById("juRik"),
        msCounter   = document.getElementById("msRik"),
        thisCard    = rd.obj, 
        currentCell = rd.findParent('TD', thisCard), 
        currentChgCell, 
        dropRadio = document.getElementsByName("dropMode");
    var currentCellRank, targetCellRank, 
        curCellIsOfBanzuke2 = currentCell.classList.contains("b2"), 
        tarCellIsOfBanzuke2 = targetCell.classList.contains("b2");

    //currentCell.style.removeProperty("box-shadow");

    if (curCellIsOfBanzuke2) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank == 'J') 
        juCounter.innerHTML--;
      else if (currentCell.dataset.r.charAt(1) == 's')
        msCounter.innerHTML--;
      else
        makuCounter.innerHTML--;
    }
    else if (tarCellIsOfBanzuke2) {
      var holder = document.createElement('a');

      holder.innerHTML = thisCard.innerText;
      holder.href = thisCard.children[0].href;
      holder.target = "_blank";
      if (thisCard.id.startsWith("Ms")) 
        holder.className = "msLink";
      currentCell.appendChild(holder)
    }

    if (tarCellIsOfBanzuke2) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank == 'J') 
        juCounter.innerHTML++;
      else if (targetCell.dataset.r.charAt(1) == 's')
        msCounter.innerHTML++;
      else
        makuCounter.innerHTML++;
    }
    else 
      targetCell.children[0].remove();

    if (dropRadio[1].checked && targetCell !== currentCell && 
        tarCellIsOfBanzuke2 && targetCell.children.length > 0) {
      var tip =  document.getElementById("tip");
      
      if (typeof(tip) != "undefined" && tip != null)
        tip.remove();

      var b2Cell = document.querySelectorAll(".b2"), 
          targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);

      for (var i = targetIndex+1; i < b2Cell.length; i++) {
        if (b2Cell[i].children.length == 0 || 
            (b2Cell[i].children.length == 1 && b2Cell[i] === thisCard.parentNode) || 
            ((i == b2Cell.length-1 || i == 53) && b2Cell[i].children.length > 0)) {
          //b2Cell[i].style.border = "none";
          for (var j = i-1; j >= targetIndex; i--, j--) 
            rd.relocate(b2Cell[j], b2Cell[i], "instant");
          redips.init();
          break;
        }
      }
    }

  };
  rd.event.dropped = function(targetCell) {
    updateInfoCells();
    showSaving();
  };

  rd.event.finish = function() {
    hideHoshitori();
    window.localStorage.setItem("picks", document.getElementById("tableLiner").innerHTML);
  };

};

function toggleColumns(button) {
  var column = button.value;
  var colCell = document.getElementsByClassName(column);
  var colCheck = document.querySelectorAll(".columnCheckbox");
  var tableTitle = document.querySelectorAll(".tableTitle");

  if (button.checked) {
    if (button.classList.contains("forB1")) 
      tableTitle[0].colSpan += 2;
    else {
      tableTitle[1].colSpan += 2;
      tableTitle[2].colSpan += 2;
    }
    for (var i = 0; i < colCell.length; i++) 
      colCell[i].classList.remove("hid");
  }
  else {
    if (button.classList.contains("forB1")) 
      tableTitle[0].colSpan -= 2;
    else {
      tableTitle[1].colSpan -= 2;
      tableTitle[2].colSpan -= 2;
    }
    for (var i = 0; i < colCell.length; i++) 
      colCell[i].classList.add("hid");
  }
  for (var i = 1; i < 8; i++) {
    window.localStorage.setItem("colCheck" + String(i), colCheck[i-1].checked);
  }
  window.localStorage.setItem("picks", document.getElementById("tableLiner").innerHTML);
}

function updateInfoCells() {
  var b2Cell = document.querySelectorAll(".b2"), 
      b1Cell = document.getElementById("banzuke1").querySelectorAll(".redips-only"), 
      originCell, newRankCell, b1Chg, resultLink, resultCell, currRankCell, targetChgCell;

  for (var i = 0; i < b1Cell.length; i++) {
    if (b1Cell[i].children.length > 0 && b1Cell[i].children[0].tagName == "DIV") {
      newRankCell = b1Cell[i].nextSibling;
      if (i % 2 != 0) {
        newRankCell = newRankCell.nextSibling;
      }
      if (newRankCell.innerHTML != "") {
        newRankCell.innerHTML = "";
        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = "";
      }
    }
  }

  for (var i = 0; i < b2Cell.length; i++) {
    resultCell = b2Cell[i].nextSibling;
    currRankCell = b2Cell[i].previousSibling;
    targetChgCell = resultCell.nextSibling;

    if (b2Cell[i].children.length > 0) {
      for (var j = 0; j < b2Cell[i].children.length; j++) {
        var thisRank = b2Cell[i].children[j].id, 
            rikishiWins = b2Cell[i].children[j].dataset.w, 
            thisChg, targetCellRank, chg;

        originCell = document.querySelectorAll('.' + thisRank)[0];
        newRankCell = originCell.nextSibling;
        if (thisRank.endsWith('w')) {
          newRankCell = newRankCell.nextSibling;
          resultLink = originCell.nextSibling.innerHTML;
        }
        else 
          resultLink = originCell.previousSibling.innerHTML;

        targetCellRank = b2Cell[i].dataset.r;

        thisChg = getChange(thisRank, targetCellRank);

        if (thisRank.startsWith("Ms")) {
          if (thisRank.endsWith("TD")) 
            thisRank = thisRank.slice(0, -2);
          thisChg = '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' + 
                     thisRank + "&form1_wins=" + rikishiWins/2 + 
                     "&form1_year=196007-now&form2_highlight=on&form2_rank=" + 
                     targetCellRank + '" target="_blank" title="Click to run a SumoDB query">' + thisChg + "</a>";
        }
        else {
          thisChg = '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' + 
                     thisRank + "&form1_wins=" + rikishiWins + 
                     "&form1_year=193905-194401,194905-now&form2_highlight=on&form2_rank=" + 
                     targetCellRank + '" target="_blank" title="Click to run a SumoDB query">' + thisChg + "</a>";
        }

        newRankCell.innerHTML = b2Cell[i].dataset.r;

        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = thisChg;

        if (j == 0) {
          targetChgCell.innerHTML = thisChg;
          resultCell.innerHTML = resultLink;
          currRankCell.innerHTML = b2Cell[i].children[j].id;
        }
        else {
          targetChgCell.innerHTML += "<br>" + thisChg;
          resultCell.innerHTML += "<br>" + resultLink;
          currRankCell.innerHTML += "<br>" + b2Cell[i].children[j].id;
        }
      }
    }
    else {
      resultCell.innerHTML = "";
      currRankCell.innerHTML = "";
      targetChgCell.innerHTML = "";
    }
  }
}

redips.resetBanzuke = function() {
  if (confirm("Reset the banzuke? This will not reset your save in Google Drive") == true) {
    var redipsCell  = document.querySelectorAll(".redips-only"), 
        b2Cell  = document.querySelectorAll(".b2"), 
        chgCell = document.getElementsByClassName("ch");
    var c1 = document.querySelectorAll(".new"), 
        c2 = document.querySelectorAll(".ch1"), 
        c3 = document.querySelectorAll(".rs2"), 
        c4 = document.querySelectorAll(".cur"), 
        c5 = document.querySelectorAll(".ch2"),
        c6 = document.querySelectorAll(".nte");

    window.localStorage.removeItem("picks");
    document.getElementById("makRik").innerHTML = 0;
    for (var i = 1; i < 8; i++) 
      window.localStorage.removeItem("colCheck" + String(i));

    for (var i = 0; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length > 0) {
        //b2Cell[i].style.border = "1px dashed dimgray";
        //chgCell[i].innerHTML = ' ';
        for (var j = b2Cell[i].children.length-1; j >= 0 ; j--) {
          for (var k = 0; k < 100; k++) {
            if (redipsCell[k].classList.contains(b2Cell[i].children[j].id)) {
              rd.moveObject({
                obj: b2Cell[i].children[j], 
                target: redipsCell[k]
              });
              redipsCell[k].children[0].style.display = "none";
              //b1Cell[k].style.removeProperty("border");
              break;
            }
          }
        }
      }
    }
    for (var i = 2; i < c1.length; i++) {
      if (c1[i].innerHTML != "") {
        c1[i].innerHTML = "";
        c2[i].innerHTML = "";
      }
    }
    for (var i = 2; i < c3.length; i++) {
      if (c3[i].innerHTML != "") {
        c3[i].innerHTML = "";
        c4[i].innerHTML = "";
        c5[i].innerHTML = "";
      }
      if (c6[i].children[0].innerHTML != "") 
        c6[i].children[0].innerHTML = "";
    }
    location.reload();
  }
};

function getChange(thisRank, targetCellRank) {
  var chg;

  if (thisRank == targetCellRank) 
    chg = '─';
  else {
    const change = [
      ["calc", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!"],
      [" ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!", "!!!"],
      ["!!!", " ↑ ", "calc", " ↓ ", " ↓ ", "!!!", "!!!"],
      ["!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!", "!!!"],
      ["!!!", "!!!", " ↑ ", " ↑ ", "calc", " ↓ ", "!!!"],
      ["!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ "],
      ["!!!", "!!!", "!!!", "!!!", "!!!", ' ↑ ', "calc"]
    ]
    var r1, r2;

    switch (thisRank.charAt(0)) {
      case 'Y': r1 = 0; break;
      case 'O': r1 = 1; break;
      case 'S': r1 = 2; break;
      case 'K': r1 = 3; break;
      case 'M': 
        if (!thisRank.startsWith("Ms")) 
          r1 = 4;
        else 
          r1 = 6;
        break;
      default:  r1 = 5;
    }
    switch (targetCellRank.charAt(0)) {
      case 'Y': r2 = 0; break;
      case 'O': r2 = 1; break;
      case 'S': r2 = 2; break;
      case 'K': r2 = 3; break;
      case 'M':
        if (!targetCellRank.startsWith("Ms"))
          r2 = 4;
        else
          r2 = 6;
        break;
      default:  r2 = 5;
    }

    if (change[r1][r2] != "calc") 
      chg = change[r1][r2];
    else {
      var thisRankNum   = parseInt(thisRank.slice(1, -1)), 
          targetRankNum = parseInt(targetCellRank.slice(1, -1));
      
      if (thisRank.slice(-1) == 'w')       thisRankNum += 0.5;
      if (targetCellRank.slice(-1) == 'w') targetRankNum += 0.5;

      chg = thisRankNum - targetRankNum;

      if (chg > 0) 
        chg = '+' + chg;
    }
  }

  return chg;
}

function showSaving() {
  var saving = document.getElementById("progressText");
  saving.innerHTML = "Saved!";
  setTimeout(function() {
    saving.innerHTML = "";
  }, 1000);
}

if (window.addEventListener)
  window.addEventListener("load", redips.init, false);
else if (window.attachEvent)
  window.attachEvent("onload", redips.init);
