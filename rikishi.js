// rikishi.js

/* To make this, enable "One Column" option in SumoDB, copy & paste the tables
 * as plain text and then turn them into array like this.
 */
export const theSekitori = [
"Y1e Terunofuji 0-2-13",
"O1e Hoshoryu 10-5",
"O1w Kotozakura 11-4",
"O2e Takakeisho 0-2-13",
"O2w Kirishima 1-6-8",
"S1e Wakamotoharu 4-8-3",
"S1w Abi 10-5",
"K1e Asanoyama 0-0-15",
"K1w Onosato 12-3",
"M1e Atamifuji 7-8",
"M1w Daieisho 11-4",
"M2e Hiradoumi 9-6",
"M2w Gonoyama 6-9",
"M3e Takayasu 7-3-5",
"M3w Tobizaru 6-9",
"M4e Oho 6-9",
"M4w Ura 7-8",
"M5e Onosho 7-8",
"M5w Meisei 10-5",
"M6e Takerufuji 0-0-15",
"M6w Midorifuji 5-10",
"M7e Nishikigi 5-10",
"M7w Mitakeumi 8-7",
"M8e Takanosho 8-7",
"M8w Kotoshoho 8-7",
"M9e Tamawashi 7-8",
"M9w Shodai 7-8",
"M10e Shonannoumi 9-6",
"M10w Kinbozan 8-7",
"M11e Sadanoumi 9-6",
"M11w Hokutofuji 7-8",
"M12e Ichiyamamoto 8-7",
"M12w Nishikifuji 5-10",
"M13e Mitoryu 2-9-8",
"M13w Churanoumi 8-7",
"M14e Ryuden 10-5",
"M14w Oshoma 10-5",
"M15e Tokihayate 6-9",
"M15w Roga 7-8",
"M16e Tomokaze 2-13",
"M16w Takarafuji 9-6",
"M17e Tsurugisho 3-12",
"J1e Daiamami 6-9",
"J1w Myogiryu 3-12",
"J2e Bushozan 9-6",
"J2w Daishoho 5-10",
"J3e Endo 12-3",
"J3w Chiyoshoma 12-3",
"J4e Tohakuryu 6-9",
"J4w Asakoryu 7-8",
"J5e Kagayaki 11-4",
"J5w Kitanowaka 8-5",
"J6e Shirokuma 6-9",
"J6w Wakatakakage 14-1",
"J7e Shishi 5-10",
"J7w Shimazuumi 5-8-2",
"J8e Hidenoumi 6-9",
"J8w Hakuoho 5-6-4",
"J9e Chiyosakae 6-9",
"J9w Tamashoho 8-7",
"J10e Shiden 8-7",
"J10w Hakuyozan 6-9",
"J11e Shimanoumi 9-6",
"J11w Aoiyama 7-8",
"J12e Onokatsu 13-2",
"J12w Tsushimanada 7-8",
"J13e Oshoumi 5-10",
"J13w Chiyomaru 4-11",
"J14e Tochitaikai 8-7",
"J14w Kazekeno 7-8"
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
export const retiredRikishi = ["Hokuseiho", "Terutsuyoshi"];

/* Enable "No Rank Colouring" and "One Column" options and then open the
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node.
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an
 * array (add the empty spots as 0). This array should have the same length as
 * theSekitori array.
 */
export const sekitoriID = [
  11927, 12231, 12451, 12191, 12270, 11985, 6480, 12226, 11980, 12664, 12352,
  12094, 12688, 12239, 12203, 12130, 6594, 6596, 12721, 12162, 12362, 12291,
  12646, 12314, 12210, 11946, 5944, 2879, 12113, 12453, 11855, 11784, 12320,
  12055, 12449, 12043, 12427, 12836, 11728, 12117, 12013, 11786, 12273, 12406,
  12351, 12575, 12516, 12548, 11976, 7153, 11785, 12717, 12542, 12773, 11845,
  12599, 12024, 12141, 12710, 12040, 12780, 11943, 11918, 12026, 7240, 12709,
  12165, 12634, 11736, 12674, 12774, 12370, 12342, 1241, 12114, 12793, 12255,
  12732, 12711, 12796, 12425, 12155, 12704, 12585, 12840, 12729, 12561, 12519,
  11809, 12357, 12448, 11949, 12597, 12610, 11723, 12733, 12724, 12333, 12800,
  12536, 12713, 12592, 12725, 12144, 6506, 12534, 12523, 12236, 12557, 12593,
  12767, 12319, 12699, 12075, 12727, 12771, 12220, 12484, 12576, 7156, 12199,
  12601, 11755, 12485, 12526, 2892, 12832, 12530, 12189, 12782, 12379, 11743,
  12703, 12316, 7143, 9066, 12455, 12656, 12225, 12778, 12834, 12689, 12192,
  12702,
];

class Rikishi {
  constructor(rank, name, winCount, id) {
    this.rank = rank;
    this.name = name;
    this.winCount = winCount;
    this.id = id;
  }

  getLink() {
    return `<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=${this.id}" target="_blank">${this.name}</a>`;
  }

  getRecordLink(basho) {
    return `<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=${this.id}&b=${basho}" target="_blank">${this.winCount}</a>`;
  }

  createCard(basho) {
    const card = document.createElement("div");
    const wins = this.winCount.split("-")[0];
    card.id = this.rank;
    card.className = "redips-drag se";
    card.setAttribute("data-w", this.rank.startsWith("Ms") || this.rank.startsWith("Sd") || this.rank.startsWith("Jd") || this.rank.startsWith("Jk") ? wins * 2 : wins);
    card.setAttribute("data-re", this.winCount);
    card.innerHTML = this.getLink(basho);
    return card;
  }
}

class RetiredRikishi extends Rikishi {
  constructor(rank, name, winCount, id) {
    super(rank, name, winCount, id);
  }

  createCard(basho) {
    const card = super.createCard(basho);
    card.style.backgroundColor = "rgb(203, 203, 203)";
    card.className = "redips-drag intai";
    card.setAttribute("title", "Retired");
    return card;
  }
}

export const allRikishi = theSekitori.map((rikishiString, index) => {
  const [rank, name, winCount] = rikishiString.split(' ');
  const id = sekitoriID[index];
  if (retiredRikishi.includes(name)) {
    return new RetiredRikishi(rank, name, winCount, id);
  }
  return new Rikishi(rank, name, winCount, id);
});
