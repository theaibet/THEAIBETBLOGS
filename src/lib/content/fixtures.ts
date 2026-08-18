import type { Article, Author } from "./types";
import type { SiteKey } from "@/config/types";

/**
 * DEMO FIXTURE CONTENT.
 * Used only when WORDPRESS_API_URL is not set, so the sites can be built,
 * deployed and reviewed before the CMS exists. Replace via WordPress —
 * nothing in the frontend depends on this file's contents.
 *
 * theaibetPath values are PLACEHOLDERS — correct them to real TheAIbet
 * event URLs once the URL structure is confirmed.
 */

const AUTHORS: Record<string, Author> = {
  mitchHarlan: {
    slug: "mitch-harlan",
    name: "Mitch Harlan",
    role: "Senior AFL Writer",
    bio: "Mitch has covered the AFL for over a decade, with a focus on tactics, list management and the numbers that actually decide games.",
  },
  danaOkafor: {
    slug: "dana-okafor",
    name: "Dana Okafor",
    role: "Combat Sports Analyst",
    bio: "Dana breaks down fight cards through stats and style matchups, and tracks where quantitative models disagree with the betting market.",
  },
  tomBrennan: {
    slug: "tom-brennan",
    name: "Tom Brennan",
    role: "Racing Analyst",
    bio: "Form student, speed-map obsessive and long-time watcher of Victorian and Sydney racing. Tom writes previews, reviews and market analysis.",
  },
  priyaSharma: {
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "Sports Data Writer",
    bio: "Priya turns sports data into plain-English information: records, rules, history and the numbers behind Australian and US sport.",
  },
  jackDoyle: {
    slug: "jack-doyle",
    name: "Jack Doyle",
    role: "Feature Writer",
    bio: "Jack writes long-form stories about Australian punting culture — the wins, the losses and the characters in between.",
  },
};

function p(...paras: string[]): string {
  return paras.map((t) => `<p>${t}</p>`).join("\n");
}

function h2(text: string): string {
  return `<h2>${text}</h2>`;
}

const FIXTURES: Record<SiteKey, Article[]> = {
  aflreviews: [
    {
      id: "afl-101",
      slug: "collingwood-v-brisbane-lions-round-24-preview",
      title: "Collingwood v Brisbane Lions: The Round 24 Blockbuster at the MCG",
      excerpt:
        "Eighth hosts third on Friday night with finals shape on the line \u2014 Collingwood off a draw, Brisbane off a 42-point statement.",
      bodyHtml:
        p(
          "Friday night at the MCG delivers the game of Round 24: Collingwood, clinging to eighth on 52 points, host a Brisbane Lions side sitting third on 60 and playing like a team that wants a top-four double chance.",
          "The stakes are lopsided in the best way. Collingwood are defending their place in the eight from a pack of chasers; Brisbane are defending a top-four spot from Hawthorn and Melbourne, both also on 60 points."
        ) +
        h2("The form lines") +
        p(
          "Collingwood arrive off one of the strangest results of the season \u2014 a 92-all draw with Hawthorn at the MCG that felt like a loss for both sides and kept the Magpies two premiership points clear of ninth.",
          "Brisbane's Round 23 was the opposite: a 95\u201353 dismantling of Gold Coast at the Gabba that pushed their percentage to 119.5, comfortably clear of the teams around them."
        ) +
        h2("Team news: three Pies race the clock") +
        p(
          "Collingwood's official Round 24 injury update lists three senior players \u2014 Jeremy Howe (fractured arm), Brayden Maynard (knee) and Steele Sidebottom, a late withdrawal from the Hawthorn draw through illness \u2014 to be assessed after main training on Wednesday.",
          "Isaac Quaynor (glute) has been ruled out of the Brisbane clash but is expected back for finals, while Pat Lipinski (calf) and Harry Perryman (hamstring) remain on individual programs."
        ) +
        h2("What the ladder says") +
        p(
          "The maths is simple. A Collingwood win locks their finals place and drags Brisbane back toward the 60-point logjam. A Brisbane win almost certainly seals a top-four berth \u2014 and opens the door for the Western Bulldogs, on 50 points and playing Melbourne this round, to attack eighth.",
          "The MCG on a Friday night, a draw to atone for, three stars racing the clock \u2014 and a double chance on the line. This is what late August football is for."
        ),
      featuredImage: {
        url: "/photos/collingwood-run.jpg",
        alt: "Collingwood players stream forward at the MCG",
        width: 1266,
        height: 688,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      inlineImage: {
        url: "/photos/lions-celebration.jpg",
        alt: "Brisbane Lions players celebrate a goal",
        width: 1216,
        height: 840,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "previews",
      tags: ["Collingwood", "Brisbane Lions", "MCG", "Round 24"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-18T06:00:00Z",
      updatedAt: "2026-08-18T06:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "See the AI model's probability, confidence and edge for Collingwood v Brisbane",
      masterStoryId: "MS-2026-0818-COLL-BRIS-R24",
      faq: [
        { q: "When do Collingwood play Brisbane in Round 24?", a: "Friday night, August 21, 2026 at 7:40pm AEST at the MCG." },
        { q: "Who is injured for Collingwood in Round 24?", a: "Isaac Quaynor (glute) is out but expected back for finals; Jeremy Howe, Brayden Maynard and Steele Sidebottom will be assessed at training, per the club's official injury update." },
      ],
    },
    {
      id: "afl-102",
      slug: "round-23-review-two-draws-in-one-round",
      title: "Round 23 Review: Two Draws in One Round \u2014 and a Flag Contender Roars",
      excerpt:
        "Hawthorn 92, Collingwood 92. Bulldogs 82, Carlton 82. One round, two draws, and Melbourne's 76-point warning shot.",
      bodyHtml:
        p(
          "Round 23 of the 2026 season produced something genuinely rare: two drawn games in a single round. Hawthorn and Collingwood finished locked at 92 apiece at the MCG on Saturday night, and a day later the Western Bulldogs and Carlton couldn't be separated at 82-all at Docklands.",
          "Draws change finals races in ways wins and losses don't. Hawthorn banked two points that kept them fourth on 60. Collingwood's two points kept eighth. Carlton and the Bulldogs each took two \u2014 and both probably needed four."
        ) +
        h2("Melbourne's statement") +
        p(
          "The result of the round belonged to Melbourne: 132\u201356 over Port Adelaide at Adelaide Oval, a 76-point away demolition that lifted the Demons to 60 points and announced them as a genuine September threat.",
          "Elsewhere, Fremantle consolidated top spot with a 112\u201388 win over Adelaide in Perth, Sydney handled Essendon by 36 at the MCG, and Geelong outlasted North Melbourne in a 235-point shootout at Docklands."
        ) +
        h2("The bottom line") +
        p(
          "Brisbane's 42-point win over Gold Coast and GWS's 54-point win over West Coast rounded out a Round 23 that clarified the top two \u2014 Fremantle and Sydney \u2014 and left six clubs separated by eight points fighting for the other six finals spots."
        ),
      featuredImage: {
        url: "/photos/carlton-mark.jpg",
        alt: "A Carlton player takes a high mark over Western Bulldogs opponents",
        width: 1266,
        height: 1618,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      inlineImage: {
        url: "/photos/afl-contest.jpg",
        alt: "A Collingwood defender wraps up his opponent in a tackle",
        width: 1150,
        height: 1562,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "reviews",
      tags: ["Round 23", "Hawthorn", "Collingwood", "Melbourne", "Draw"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-17T00:00:00Z",
      updatedAt: "2026-08-17T00:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "See how the AI models rated every Round 23 result",
      masterStoryId: "MS-2026-0817-R23-REVIEW",
    },
    {
      id: "afl-103",
      slug: "afl-run-home-round-24-ladder-scenarios",
      title: "The Run Home: What Round 24 Means for Every Finals Contender",
      excerpt:
        "Six teams, eight points, six finals spots still moving. The real ladder maths heading into the final home-and-away round.",
      bodyHtml:
        p(
          "The live ladder tells a clean story at the top: Fremantle first on 76 points with a league-best 142.5 per cent, Sydney second on 68. Barring the absurd, the double-chance top two is set.",
          "Below them is the tightest congestion of the season. Brisbane, Hawthorn and Melbourne all sit on 60 points, Geelong and Adelaide on 56, Collingwood eighth on 52 \u2014 six clubs inside eight points, all still moving."
        ) +
        h2("The games that decide it") +
        p(
          "Round 24 could not have been scripted better. Collingwood host Brisbane at the MCG on Friday in a direct eighth-versus-third collision. Melbourne, fifth, play the ninth-placed Western Bulldogs \u2014 who sit two points behind Collingwood and are very much alive.",
          "Hawthorn travel to Perth to face West Coast, Adelaide host GWS at Adelaide Oval, and Carlton \u2014 tenth on 46 after their draw \u2014 get top-of-the-table Fremantle at Docklands."
        ) +
        h2("What history says") +
        p(
          "Under the current finals format the premier has overwhelmingly come from the top four \u2014 which is why three clubs on 60 points will treat this weekend like a final. Two of them can finish in the four. One of them probably plays elimination football instead.",
          "Percentage may yet decide it: Brisbane's 119.5 leads Geelong's 120.2 and Hawthorn's 117.3 in the fine print that separates a qualifying final from an elimination final."
        ),
      featuredImage: {
        url: "/photos/afl-contest.jpg",
        alt: "A fierce tackle in a top-eight contest",
        width: 1150,
        height: 1562,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "stats",
      tags: ["Ladder", "Finals", "Round 24", "Run Home"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-17T22:00:00Z",
      updatedAt: "2026-08-18T02:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "View AI-modelled finals probabilities for every club",
      masterStoryId: "MS-2026-0817-RUN-HOME",
    },
    {
      id: "afl-104",
      slug: "fremantle-2026-season-by-the-numbers",
      title: "Fremantle's 2026: The Numbers Behind a Runaway Minor Premiership",
      excerpt:
        "76 points, a 142.5 per cent, and the league's stingiest defence. How the Dockers built the season's best resume.",
      bodyHtml:
        p(
          "Fremantle sit on top of the AFL ladder on 76 points, eight clear of Sydney, with the competition's best percentage at 142.5. Those are minor-premiership numbers \u2014 and the underlying figures are even more emphatic.",
          "The Dockers have conceded just 1,547 points, the fewest in the league by a wide margin, while scoring 2,204. No other club combines a top-three attack with the number-one defence."
        ) +
        h2("The defensive foundation") +
        p(
          "Holding opponents to 220 goals across a season is the bedrock stat. In an era where scores from turnover decide finals, Fremantle simply refuse to give up easy chains \u2014 their 112\u201388 handling of Adelaide in Round 23 was a demonstration in controlling territory without over-committing numbers forward.",
          "Perth Stadium has become a fortress, and September will run through it: the top-of-the-ladder finish delivers home qualifying finals in front of 60,000."
        ) +
        h2("The September question") +
        p(
          "The only question left is the one the numbers can't answer: whether a dominant home-and-away season converts. Sydney on 68 and the 60-point trio of Brisbane, Hawthorn and Melbourne will have their say. The resume, though, is the strongest in the competition."
        ),
      categorySlug: "teams",
      tags: ["Fremantle", "Ladder", "Statistics", "Finals"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-16T22:00:00Z",
      updatedAt: "2026-08-16T22:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "Explore Fremantle's AI premiership probability",
      masterStoryId: "MS-2026-0816-FREO-NUMBERS",
    },
  ],

  ufcreview: [
    {
      id: "ufc-001",
      slug: "ufc-330-results-makhachev-breaks-record",
      title: "UFC 330 Results: Makhachev Breaks the All-Time Win-Streak Record in Philadelphia",
      excerpt:
        "Islam Makhachev outpointed Ian Machado Garry for a record 17th straight UFC win, Mackenzie Dern defended her belt \u2014 and Edson Barboza left his gloves in the cage.",
      bodyHtml:
        p(
          "UFC 330 at Philadelphia's Xfinity Mobile Arena on August 15 delivered history: welterweight champion Islam Makhachev held off a determined Ian Machado Garry by unanimous decision (49\u201346, 49\u201346, 48\u201347) to set a new record for the most consecutive victories inside the Octagon \u2014 17 straight.",
          "Machado Garry made rounds competitive and took one on a judge's card, but Makhachev's control in the championship rounds settled a fight that confirms his claim among the sport's all-time greats."
        ) +
        h2("Dern's first defence") +
        p(
          "In the co-main, women's strawweight champion Mackenzie Dern turned back Gillian Robertson by identical scores of 49\u201346, 49\u201346 and 48\u201347 \u2014 the first successful defence of her title.",
          "Further down the card, Jalin Turner needed just 39 seconds for a first-round knockout of Kau\u00EA Fernandes \u2014 back-to-back first-round stoppages \u2014 and Dustin Stoltzfus submitted Mansur Abdul-Malik with a rear-naked choke at 4:25 of the second."
        ) +
        h2("The end of an era") +
        p(
          "The night's most emotional moment belonged to Esteban Ribovics' second-round TKO of Edson Barboza \u2014 after which the Brazilian veteran took off his gloves and laid them in the centre of the cage, closing a 16-year UFC career.",
          "Attention now turns to Sacramento, where Anthony Hernandez and Gregory Rodrigues headline this weekend's Fight Night."
        ),
      categorySlug: "results",
      tags: ["UFC 330", "Islam Makhachev", "Mackenzie Dern", "Results", "Philadelphia"],
      author: AUTHORS.danaOkafor,
      publishedAt: "2026-08-16T14:00:00Z",
      updatedAt: "2026-08-16T14:00:00Z",
      featuredImage: {
        url: "/photos/ufc-champion-belts.jpg",
        alt: "Islam Makhachev roars with his championship gold after a record-breaking win",
        width: 1248,
        height: 1288,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      theaibetPath: "/ufc",
      theaibetCtaLabel: "See how TheAIbet's models scored UFC 330",
      masterStoryId: "MS-2026-0816-UFC330-RESULTS",
      faq: [
        { q: "Who won the UFC 330 main event?", a: "Islam Makhachev beat Ian Machado Garry by unanimous decision (49\u201346, 49\u201346, 48\u201347) to retain the welterweight title." },
        { q: "What record did Islam Makhachev break at UFC 330?", a: "His 17th consecutive UFC victory \u2014 a new record for most consecutive wins inside the Octagon." },
        { q: "Did Mackenzie Dern win at UFC 330?", a: "Yes \u2014 she beat Gillian Robertson by unanimous decision for the first defence of her women's strawweight title." },
        { q: "Why did Edson Barboza leave his gloves in the cage?", a: "After his TKO loss to Esteban Ribovics, Barboza laid his gloves in the centre of the Octagon to signal his retirement, ending a 16-year UFC career." },
      ],
    },
    {
      id: "ufc-002",
      slug: "model-vs-market-what-ufc-330-taught-us",
      title: "Model vs Market: What UFC 330 Taught Us About Fight Pricing",
      excerpt:
        "Quantitative fight models and the betting market agree on most of UFC 330 — but not all of it.",
      bodyHtml:
        p(
          "Most fights on a card, model probability and market-implied probability land within a few points of each other. UFC 330 in Philadelphia was a night where the consensus mostly held \u2014 and where the exceptions were instructive.",
          "Both champions retained: Islam Makhachev's unanimous decision over Ian Machado Garry (49\u201346 twice, 48\u201347) and Mackenzie Dern's identical-scorecard defence against Gillian Robertson were the outcomes models and markets broadly expected. Favourites winning title fights on points is the quiet norm of championship MMA."
        ) +
        h2("Where the surprises lived") +
        p(
          "The volatility, as usual, was underneath. Jalin Turner's 39-second knockout of Kau\u00EA Fernandes is exactly the kind of outcome that round-by-round models struggle to price \u2014 finishing variance compresses a fight's information to a single exchange.",
          "And Esteban Ribovics stopping Edson Barboza inside two rounds \u2014 followed by the veteran retiring in the cage \u2014 is a reminder that age curves eventually break sharply, not gradually. Models are ruthless about late-thirties strikers; sentiment is not."
        ) +
        h2("The takeaway") +
        p(
          "Championship rounds reward control and consistency \u2014 the qualities models measure best. Prelims reward chaos. The discipline is knowing which regime you're pricing before the cage door shuts."
        ),
      categorySlug: "model-vs-market",
      tags: ["Model vs Market", "UFC 330", "Analytics"],
      author: AUTHORS.danaOkafor,
      publishedAt: "2026-08-16T09:00:00Z",
      updatedAt: "2026-08-16T09:00:00Z",
      theaibetPath: "/ufc/ufc-330",
      theaibetCtaLabel: "See live model probability, confidence and edge for UFC 330",
      masterStoryId: "MS-2026-0816-UFC330-MVM",
    },
    {
      id: "ufc-003",
      slug: "the-southpaw-problem-style-matchups-explained",
      title: "The Southpaw Problem: Why Stance Still Decides Fights",
      excerpt:
        "Orthodox fighters keep losing the same way to southpaws. The stats behind MMA's most persistent style trap.",
      bodyHtml:
        p(
          "Stance matchups are the closest thing MMA has to a structural edge. Southpaws remain overrepresented at the top of multiple divisions relative to their share of the population, and the reasons are mechanical, not mystical.",
          "In open-stance matchups, the rear-hand highway — straight left against orthodox opponents — lands at meaningfully higher rates than the equivalent cross in closed-stance fights."
        ) +
        h2("The lead-foot battle") +
        p(
          "Almost everything in an open-stance fight flows from whose lead foot is outside. Win the foot position and your power side aligns with the opponent's centre line; lose it and you're punching across yourself all night.",
          "Fighters who consciously fight for outside foot position win open-stance rounds at a significantly higher rate. Watch tape with only the feet on screen and you can often call the round without seeing a single punch."
        ),
      featuredImage: {
        url: "/photos/ufc-exchange.jpg",
        alt: "A straight punch lands flush in a UFC bout",
        width: 1284,
        height: 774,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "matchups",
      tags: ["Style Matchups", "Southpaw", "Striking"],
      author: AUTHORS.danaOkafor,
      publishedAt: "2026-08-12T08:00:00Z",
      updatedAt: "2026-08-12T08:00:00Z",
      theaibetPath: "/ufc",
      theaibetCtaLabel: "Explore fighter style data inside TheAIbet",
      masterStoryId: "MS-2026-0812-UFC-STANCE",
    },
    {
      id: "ufc-004",
      slug: "ufc-fight-night-hernandez-vs-rodrigues-preview",
      title: "UFC Sacramento Preview: Hernandez v Rodrigues Headlines at Golden 1 Center",
      excerpt:
        "Anthony Hernandez (15-3, 1NC) meets Gregory Rodrigues (19-6) in a middleweight main event this weekend \u2014 both with something to prove.",
      bodyHtml:
        p(
          "The Octagon rolls into Sacramento this weekend, with a middleweight main event at Golden 1 Center on Saturday, August 22 (Sunday AEST): Anthony Hernandez against Gregory Rodrigues.",
          "Hernandez, 32, a Californian fighting close to home in Dunnigan country, brings a 15-3 (1 NC) record \u2014 but arrives off a third-round loss to Sean Strickland at UFC Houston in February that ended an eight-fight winning streak."
        ) +
        h2("The stakes") +
        p(
          "Rodrigues, the 34-year-old Brazilian at 19-6, is hunting a fourth consecutive victory after his first-round knockout of Brunno Ferreira at UFC 326 in March. A win over a ranked name like Hernandez would push him toward the middleweight title conversation.",
          "For Hernandez, it's about proving Houston was a detour, not a decline. Grappling-heavy pressure against Rodrigues' one-punch power is the classic stylistic fault line."
        ) +
        h2("The supporting card") +
        p(
          "Reported matchups include Serghei Spivac against Vitor Petrino at heavyweight, Carli Judice versus Jeisla Chaves at flyweight, and Jackson McVey against Wesley Schultz at middleweight, with further bouts to be confirmed.",
          "Coming seven days after Makhachev's record-breaking night at UFC 330, Sacramento keeps a big August rolling."
        ),
      categorySlug: "previews",
      tags: ["UFC Sacramento", "Anthony Hernandez", "Gregory Rodrigues", "Fight Night"],
      author: AUTHORS.danaOkafor,
      publishedAt: "2026-08-18T09:00:00Z",
      updatedAt: "2026-08-18T09:00:00Z",
      theaibetPath: "/ufc",
      theaibetCtaLabel: "See the AI fight analysis for Hernandez v Rodrigues",
      masterStoryId: "MS-2026-0818-UFC-SACRAMENTO",
      faq: [
        { q: "When is UFC Fight Night: Hernandez vs Rodrigues?", a: "Saturday, August 22, 2026 in Sacramento (Sunday, August 23 AEST) at Golden 1 Center." },
        { q: "What are the records of Hernandez and Rodrigues?", a: "Anthony Hernandez is 15-3 with 1 no-contest; Gregory Rodrigues is 19-6 and chasing a fourth straight win." },
        { q: "What weight class is the main event?", a: "Middleweight." },
      ],
    },
  ],

  puntersreview: [
    {
      id: "rac-001",
      slug: "memsie-stakes-day-preview-caulfield",
      title: "Memsie Stakes 2026: The Spring's First Group 1 Arrives at Caulfield",
      excerpt:
        "Saturday August 29, 1400 metres, $750,000 \u2014 and Sheza Alibi heads early markets from Cosmic Crusader and Jimmysstar.",
      bodyHtml:
        p(
          "The spring starts properly on Saturday, August 29, when the Group 1 Memsie Stakes (1400m, $750,000) is run at Caulfield \u2014 the first Group 1 of the Melbourne spring season and the traditional launching pad for Cox Plate campaigns.",
          "Thirty horses feature among early nominations, and the market has already taken shape: Sheza Alibi heads early quotes at $2.50, from Cosmic Crusader and Jimmysstar sharing the second line at $3.50, with Angel Capital at $5.00 and Beiwacht at $7.00."
        ) +
        h2("The Memsie's meaning") +
        p(
          "The race's history says treat first-up form with respect: last year Treasurethe Moment took the 2025 edition, and Memsie winners regularly frank the form deep into October.",
          "For punters, the eternal Memsie puzzle applies \u2014 proven weight-for-age horses resuming against in-form sprinter-milers at their peak. Fresh class against match fitness, at a track that can favour on-pacers in late winter."
        ) +
        h2("What to watch") +
        p(
          "Final fields and barriers will sharpen the picture in the week of the race. Watch for market moves once gates are drawn \u2014 1400 metres at Caulfield is unforgiving from a wide draw \u2014 and for stables using the race as a set-up for October targets rather than a mission in itself."
        ),
      categorySlug: "previews",
      tags: ["Memsie Stakes", "Caulfield", "Spring Carnival", "Group 1", "Sheza Alibi"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-18T07:00:00Z",
      updatedAt: "2026-08-18T07:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "See AI runner rankings for Memsie Stakes day",
      masterStoryId: "MS-2026-0818-MEMSIE-2026",
      faq: [
        { q: "When is the 2026 Memsie Stakes?", a: "Saturday, August 29, 2026 at Caulfield Racecourse in Melbourne." },
        { q: "What distance and prize money is the Memsie Stakes?", a: "It is a Group 1 run over 1400 metres, worth $750,000 \u2014 the first Group 1 of the Melbourne spring season." },
        { q: "Who is favourite for the 2026 Memsie Stakes?", a: "In early markets Sheza Alibi headed quotes at $2.50, ahead of Cosmic Crusader and Jimmysstar at $3.50." },
        { q: "Who won the Memsie Stakes in 2025?", a: "Treasurethe Moment." },
      ],
    },
    {
      id: "rac-002",
      slug: "understanding-market-percentages-betting-education",
      title: "Market Percentages: The First Number Every Punter Should Learn",
      excerpt:
        "What a betting market's percentage actually tells you, and why it's the quickest test of whether a price is fair.",
      bodyHtml:
        p(
          "Every betting market adds up to more than 100 per cent. That gap — the market percentage or 'overround' — is the bookmaker's margin, and understanding it is the single fastest upgrade available to a recreational punter.",
          "A market framed to 116 per cent means that, collectively, the prices are 16 per cent worse than fair. Your job is not to beat the horse next to you; it's to find the runners priced at better than their true chance despite that margin."
        ) +
        h2("Converting odds to probability") +
        p(
          "Divide 100 by the decimal odds and you have the implied probability. A $4 chance is implied at 25 per cent. If your own assessment — or a model's — puts the true chance at 30 per cent, that price represents value regardless of whether the horse wins this particular race.",
          "Value is a long-run concept. Any single result is noise; the discipline is only betting when the implied probability is below your assessed probability, over and over."
        ) +
        h2("Where markets are weakest") +
        p(
          "Markets are sharpest where the most money flows: metropolitan Saturday racing, feature races, short-priced favourites. They are weakest in thin midweek markets, early markets before scratchings settle, and races where a single piece of information — a track bias, a gear change — hasn't been fully absorbed."
        ),
      categorySlug: "education",
      tags: ["Betting Education", "Value", "Markets"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-14T21:00:00Z",
      updatedAt: "2026-08-14T21:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "Compare AI-assessed probabilities against market prices",
      masterStoryId: "MS-2026-0814-EDU-PERCENT",
    },
    {
      id: "rac-003",
      slug: "how-track-bias-works-betting-education",
      title: "Track Bias, Explained: How to Read a Racing Surface Like a Professional",
      excerpt:
        "Rail positions, sectional times and the discipline of judging a bias while the meeting is still running.",
      bodyHtml:
        p(
          "Track bias is the most misused term in racing \u2014 and one of the most valuable concepts when it's read properly. A bias exists when position on the track, rather than horse quality, is systematically deciding results: leaders holding on when they shouldn't, or one part of the course playing faster than another.",
          "Rail position is the first clue. When the rail moves out, ground that hasn't been raced on comes into play and on-pace runners often get an assist. When it's in the true position late in a carnival, worn ground can turn a track leader-biased or backmarker-friendly."
        ) +
        h2("Reading the sectionals") +
        p(
          "Raw finishing positions lie. The tell is in closing sectionals relative to the day's average: when horses running the fastest final 400 metres consistently fail to make ground, position is beating quality \u2014 the definition of bias.",
          "The professional discipline is judging it DURING the meeting, race by race, not declaring it afterwards. By the time a bias is being discussed on social media, it is already in the prices."
        ) +
        h2("How punters use it") +
        p(
          "Bias reading changes two decisions: how you bet late in the day at the same meeting, and how you treat the form afterwards. A horse beaten two lengths against a hostile bias may be the best horse in the race next start \u2014 and the market won't always remember why it was beaten.",
          "That's where a black book earns its keep: not recording winners, but recording runs that were better than they looked."
        ),
      categorySlug: "education",
      tags: ["Track Bias", "Sectionals", "Betting Education", "Form"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-15T21:00:00Z",
      updatedAt: "2026-08-15T21:00:00Z",
      featuredImage: {
        url: "/photos/flemington-finish.jpg",
        alt: "Two runners hit the line together in a driving finish",
        width: 1284,
        height: 644,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      theaibetPath: "/racing",
      theaibetCtaLabel: "See track and sectional analysis inside TheAIbet",
      masterStoryId: "MS-2026-0815-BIAS-EDU",
      faq: [
        { q: "What is track bias in horse racing?", a: "A track bias exists when position on the track \u2014 such as racing on the rail or on the pace \u2014 systematically affects results more than horse ability." },
        { q: "How do you identify track bias?", a: "Compare closing sectional times with finishing positions: when the fastest-closing horses consistently fail to make ground, the surface or tempo is favouring one position on the track." },
      ],
    },
    {
      id: "rac-004",
      slug: "spicy-martini-road-to-the-everest",
      title: "Spicy Martini: The $8,000 Mare Chasing the World's Best Sprinter",
      excerpt:
        "From an $8,000 purchase to a $3 million Stradbroke \u2014 and now connections want an Everest slot against Ka Ying Rising.",
      bodyHtml:
        p(
          "Every Everest needs a fairytale, and this spring it might wear the colours of an $8,000 bargain buy. Spicy Martini, the Toby Edmonds-trained mare from the Gold Coast, stamped herself as one of Australia's emerging sprint stars with victory in the $3 million Stradbroke Handicap at Eagle Farm in June \u2014 a first Group 1 for young jockey Taylor Marshall.",
          "The win took the daughter of American Triple Crown champion Justify past $2.7 million in earnings \u2014 more than 300 times her purchase price \u2014 and prompted connections to bypass the Tattersall's Tiara and aim squarely at October: The Everest at Royal Randwick."
        ) +
        h2("The mountain in the way") +
        p(
          "Waiting at Randwick is the horse many judges now call the best sprinter in the world \u2014 and some are ready to call the best they've seen. Ka Ying Rising, Hong Kong's champion, returns to defend the Everest crown he won in 2025, and the world's top-ranked sprinter has been preparing for exactly this defence.",
          "That is the equation facing every slot-holder this spring: take the proven mountain, or back the story still being written."
        ) +
        h2("The case for the mare") +
        p(
          "Trainer Toby Edmonds isn't shying from the target. \u201CHopefully this mare might attract an Everest slot, we'll see what happens,\u201D he said after the Stradbroke, invoking Les Bridge \u2014 still training Everest winners into his eighties \u2014 as proof the race rewards believers.",
          "A Stradbroke-winning mare, rising through the sprinting ranks at the right time of year, with the race of her life on the calendar and the best sprinter alive standing at the top of it. Australian racing does not script them better."
        ),
      categorySlug: "news",
      tags: ["Spicy Martini", "The Everest", "Ka Ying Rising", "Randwick", "Stradbroke"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-18T08:00:00Z",
      updatedAt: "2026-08-18T08:00:00Z",
      featuredImage: {
        url: "/photos/racing-blinkers.jpg",
        alt: "Spicy Martini in her distinctive red blinkers heads to the barriers",
        width: 1256,
        height: 892,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      inlineImage: {
        url: "/photos/jockey-celebration.jpg",
        alt: "Taylor Marshall salutes after Spicy Martini's Stradbroke Handicap victory",
        width: 1154,
        height: 1612,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      theaibetPath: "/racing",
      theaibetCtaLabel: "See TheAIbet's AI analysis of the Everest sprinters",
      masterStoryId: "MS-2026-0818-SPICY-MARTINI",
    },
  ],

  sportinformation: [
    {
      id: "spo-001",
      slug: "afl-finals-system-explained",
      title: "The AFL Finals System Explained: How the Top Eight Actually Works",
      excerpt:
        "The complete guide to the AFL finals format — the double chance, week-by-week structure and why finishing top four matters so much.",
      bodyHtml:
        p(
          "The AFL finals series takes the top eight teams from the home-and-away season through a four-week knockout structure — but it is not a simple knockout bracket, and the differences matter enormously.",
          "The defining feature is the double chance. Teams finishing first to fourth can lose their opening final and remain alive; teams finishing fifth to eighth are eliminated the moment they lose."
        ) +
        h2("Week by week") +
        p(
          "Week one comprises two qualifying finals (1st v 4th, 2nd v 3rd) and two elimination finals (5th v 8th, 6th v 7th). Qualifying final winners advance straight to preliminary finals with a week's rest; losers host semi-finals against elimination final winners.",
          "Week three's preliminary finals feed the grand final, traditionally played at the MCG on the last Saturday in September or first in October."
        ) +
        h2("Why top four is everything") +
        p(
          "The double chance, the extra rest and home-ground advantage compound: the large majority of premierships in the current format have been won by top-four sides, and most by teams that won their qualifying final. Finishing fifth with the same win total as fourth is a dramatically worse position — which is why late home-and-away rounds between contenders carry such weight."
        ),
      featuredImage: {
        url: "/photos/carlton-mark.jpg",
        alt: "A high mark in an AFL contest",
        width: 1266,
        height: 1618,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "explainers",
      tags: ["AFL", "Finals", "Explainer"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-15T02:00:00Z",
      updatedAt: "2026-08-15T02:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "See AI-modelled finals probabilities for the 2026 season",
      masterStoryId: "MS-2026-0815-AFL-EXPLAINER",
      faq: [
        { q: "How many teams make the AFL finals?", a: "Eight \u2014 the top eight teams on the ladder after the home-and-away season." },
        { q: "What is the double chance in AFL finals?", a: "Teams finishing in the top four can lose their first final and stay alive; teams fifth to eighth are eliminated with any loss." },
        { q: "Where is the AFL Grand Final played?", a: "Traditionally at the Melbourne Cricket Ground (MCG)." },
      ],
    },
    {
      id: "spo-002",
      slug: "how-ufc-scoring-works-10-point-must",
      title: "How UFC Scoring Works: The 10-Point Must System Explained",
      excerpt:
        "What judges are actually scoring, how rounds are weighed, and why controversial decisions keep happening.",
      bodyHtml:
        p(
          "UFC fights are scored under the Unified Rules of MMA using the 10-point must system borrowed from boxing: the winner of each round must receive 10 points, the loser 9 or fewer.",
          "Judges assess rounds on effective striking and grappling first, with effective aggression and cage control as tiebreakers only. Damage — visible impact on the opponent — is the dominant criterion in modern judging guidance."
        ) +
        h2("The 10-8 round") +
        p(
          "A 10-8 round requires dominance and duration or impact: one fighter overwhelming the other for large portions of the round, or inflicting damage that nearly finishes the fight. Judges have been formally encouraged to score 10-8s more readily than they historically did.",
          "Because most rounds are 10-9 regardless of how close they were, a fight's outcome frequently hinges on one swing round — the structural reason split decisions feel so common in close fights."
        ) +
        h2("Scoring myths") +
        p(
          "Takedowns score nothing by themselves — what happens after the takedown is what counts. Similarly, cage control without effective offence is a tiebreaker at best. The judges' question is always the same: who did more damage and came closer to ending the fight?"
        ),
      featuredImage: {
        url: "/photos/ufc-exchange.jpg",
        alt: "Effective striking: the first thing UFC judges score",
        width: 1284,
        height: 774,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "explainers",
      tags: ["UFC", "Scoring", "Explainer"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-13T03:00:00Z",
      updatedAt: "2026-08-13T03:00:00Z",
      theaibetPath: "/ufc",
      theaibetCtaLabel: "Explore UFC fight data and AI analysis",
      masterStoryId: "MS-2026-0813-UFC-SCORING",
      faq: [
        { q: "How is a UFC fight scored?", a: "Under the 10-point must system: the winner of each round receives 10 points and the loser 9 or fewer, judged primarily on effective striking and grappling." },
        { q: "What is a 10-8 round in the UFC?", a: "A round of clear dominance \u2014 one fighter overwhelming the other in impact, duration or both." },
        { q: "Do takedowns score points in UFC?", a: "Not by themselves \u2014 judges score what a fighter does with the position after the takedown." },
      ],
    },
    {
      id: "spo-003",
      slug: "melbourne-cup-history-facts-records",
      title: "Melbourne Cup History: Records, Facts and the Numbers Behind the Race",
      excerpt:
        "Winners, weights, barriers and the statistical patterns from more than 160 runnings of the race that stops a nation.",
      bodyHtml:
        p(
          "First run in 1861, the Melbourne Cup is Australia's most famous horse race: a 3200-metre handicap at Flemington on the first Tuesday of November, with a full public holiday in Melbourne to mark it.",
          "As a handicap, the Cup assigns weights by rating — better horses carry more — which is precisely what makes it one of the world's hardest races to win twice."
        ) +
        h2("The records") +
        p(
          "Makybe Diva stands alone with three consecutive wins (2003–2005), a feat widely considered unrepeatable under modern handicapping. The heaviest winning weight belongs to Carbine's era; in modern times, horses carrying above 57 kilograms win rarely.",
          "Barrier statistics show the extremes are punished: very wide gates have a poor record over 3200 metres at Flemington, while the middle barriers are overrepresented among winners."
        ) +
        h2("The internationals") +
        p(
          "Since Vintage Crop's 1993 breakthrough for Ireland, internationally-trained horses have reshaped the race — European stayers bred for distance have claimed a large share of recent editions, changing how the local market prices the race entirely."
        ),
      featuredImage: {
        url: "/photos/flemington-finish.jpg",
        alt: "A photo finish at Flemington",
        width: 1284,
        height: 644,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "racing",
      tags: ["Melbourne Cup", "History", "Records"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-10T05:00:00Z",
      updatedAt: "2026-08-10T05:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "See AI analysis for Australian feature racing",
      masterStoryId: "MS-2026-0810-CUP-HISTORY",
      faq: [
        { q: "When is the Melbourne Cup run?", a: "The first Tuesday of November each year, over 3200 metres at Flemington." },
        { q: "Which horse won the most Melbourne Cups?", a: "Makybe Diva, with three consecutive wins from 2003 to 2005." },
      ],
    },
    {
      id: "spo-004",
      slug: "nrl-vs-afl-key-differences-explained",
      title: "NRL vs AFL: The Key Differences Explained for New Fans",
      excerpt:
        "Two codes, two games, endlessly confused by newcomers. Field, scoring, structure and culture — side by side.",
      bodyHtml:
        p(
          "Australia runs two dominant winter football codes, and for newcomers the confusion is understandable: both are called 'footy' by their fans, both played through winter, both climaxing in spring grand finals.",
          "The games themselves could hardly be more different. Rugby league (NRL) is played on a rectangular field with 13 players a side, structured around six tackles or 'sets'. Australian rules (AFL) is played on a large oval with 18 a side and no offside, producing a 360-degree contest."
        ) +
        h2("Scoring and structure") +
        p(
          "NRL scoring: a try is worth four points, conversions two, penalty goals two and field goals one. AFL scoring: a goal (between the two tall central posts) is worth six points, a behind one point.",
          "The AFL season runs 24 home-and-away rounds into an eight-team finals series; the NRL runs 27 rounds into its own top-eight format. Both grand finals are among the most-watched television events in Australia each year."
        ),
      featuredImage: {
        url: "/photos/collingwood-run.jpg",
        alt: "Australian rules football in full flight",
        width: 1266,
        height: 688,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "explainers",
      tags: ["NRL", "AFL", "Explainer"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-08T04:00:00Z",
      updatedAt: "2026-08-08T04:00:00Z",
      theaibetPath: "/",
      theaibetCtaLabel: "Explore AI sports analysis on TheAIbet",
      masterStoryId: "MS-2026-0808-CODES",
    },
  ],

  punterstory: [
    {
      id: "sto-001",
      slug: "the-day-the-tab-went-quiet",
      title: "The Day the TAB Went Quiet",
      excerpt:
        "A suburban TAB, a retired wharfie, and the eight-leg multi that silenced a room full of professional sceptics.",
      bodyHtml:
        p(
          "There is a particular kind of silence that only happens in a TAB. Not the absence of noise — the machines still hum, the vision still calls a maiden at Pakenham — but the silence of forty people simultaneously deciding not to breathe.",
          "It was a Tuesday. Ray, seventy-one, retired off the wharves with a crook shoulder and a system he'd never once explained to anyone, was seven legs into an eight-leg multi that had started with five dollars and a grievance against his son-in-law."
        ) +
        h2("The last leg") +
        p(
          "The last leg was a two-year-old at Canterbury that Ray liked for reasons he took to his grave: something about the way it walked to the gates three starts back. The horse jumped at $9.50. The TAB's printer, Ray said later, was the only thing in the room still working.",
          "It won by a short half head. The photo took four minutes. Ray drank tea through all of it.",
          "The collect was a little over sixty-two thousand dollars. Ray tipped the girl behind the counter fifty, bought the front bar one round, and was home by five because Tuesday was bins night."
        ) +
        h2("Why these stories matter") +
        p(
          "Every punter in that room has told the story since, and in every telling the horse's margin gets shorter and Ray gets calmer. That's the thing about punting stories: the money is never really the point. The point is that for four minutes on a Tuesday, a suburban TAB held its breath together."
        ),
      categorySlug: "big-wins",
      tags: ["TAB", "Multi", "Big Wins"],
      author: AUTHORS.jackDoyle,
      publishedAt: "2026-08-16T06:00:00Z",
      updatedAt: "2026-08-16T06:00:00Z",
      theaibetPath: "/",
      theaibetCtaLabel: "See how AI analyses the races punters bet on",
      masterStoryId: "MS-2026-0816-STORY-TAB",
    },
    {
      id: "sto-002",
      slug: "grand-final-day-1989-a-punting-memory",
      title: "Everything I Know About Losing, I Learned on Grand Final Day",
      excerpt:
        "A personal essay about the bets we shouldn't have made, the ones we didn't, and what a lifetime of Septembers teaches you.",
      bodyHtml:
        p(
          "My father bet twice a year: the Melbourne Cup, because everyone did, and the AFL Grand Final, because he believed — against decades of accumulated evidence — that he understood football.",
          "He taught me to read a form guide the way other fathers taught their sons to fish. Patiently, seriously, and with a quiet understanding that the activity was mostly an excuse for the conversation."
        ) +
        h2("The lesson") +
        p(
          "The bet I remember was not a win. It was a September afternoon, a team he'd followed for forty years, and a wager that was — by any sensible measure — twice as big as it should have been. Hope does that. It moves the decimal point.",
          "They lost by a kick. He folded the ticket in half, put it in his shirt pocket, and watched the presentation to the end, clapping the winners. 'You clap,' he said, when I asked why. 'The bet's got nothing to do with the football.'"
        ) +
        h2("What stays") +
        p(
          "I've made better bets than he ever did. I've had access to numbers he couldn't have imagined — probabilities, models, markets in my pocket. But the discipline underneath it all is still his: decide what it's worth before you know how it ends, and clap either way."
        ),
      featuredImage: {
        url: "/photos/lions-celebration.jpg",
        alt: "The moment every September dreams of",
        width: 1216,
        height: 840,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "moments",
      tags: ["Grand Final", "Essay", "Memory"],
      author: AUTHORS.jackDoyle,
      publishedAt: "2026-08-14T07:00:00Z",
      updatedAt: "2026-08-14T07:00:00Z",
      theaibetPath: "/",
      theaibetCtaLabel: "The modern punter's toolkit: AI analysis on TheAIbet",
      masterStoryId: "MS-2026-0814-STORY-GF",
    },
    {
      id: "sto-003",
      slug: "the-8000-dollar-fairytale-spicy-martini",
      title: "The $8,000 Fairytale: Why Australia Fell for Spicy Martini",
      excerpt:
        "A bargain-bin mare, a young jockey's first Group 1, and a spring dream that runs straight at the best sprinter on the planet.",
      bodyHtml:
        p(
          "Australian punting has always loved an underdog with a good story, and this winter it found a perfect one: a mare bought for $8,000 \u2014 the price of a used ute \u2014 who ran down a $3 million Stradbroke Handicap field at Eagle Farm in June.",
          "Spicy Martini's win was a first Group 1 for young jockey Taylor Marshall, a career highlight for Gold Coast trainer Toby Edmonds, and the kind of result that makes every battler who's ever bought a cheap yearling believe again. Her earnings now top $2.7 million \u2014 more than three hundred times what she cost."
        ) +
        h2("The dream with a mountain in it") +
        p(
          "What makes the story bigger than one race is where it's pointed: The Everest at Randwick in October, the world's richest race on turf \u2014 and the domain of Ka Ying Rising, Hong Kong's champion, the world's top-ranked sprinter and the horse many are already calling the best they've seen.",
          "\u201CHopefully this mare might attract an Everest slot, we'll see what happens,\u201D Edmonds said after the Stradbroke \u2014 the sound of a man trying not to dream too loudly."
        ) +
        h2("Why we barrack for her") +
        p(
          "Racing's economics are brutal and its aristocracy is expensive. That's exactly why stories like this one carry a whole spring: because every so often, the sales-ring leftover turns out to be the best horse someone ever bought.",
          "Whether or not a slot comes, and whether or not anything alive can beat Ka Ying Rising down the Randwick straight, Australia has its horse for the spring. She cost eight grand. That's the whole point."
        ),
      categorySlug: "moments",
      tags: ["Spicy Martini", "The Everest", "Racing Culture", "Underdog"],
      author: AUTHORS.jackDoyle,
      publishedAt: "2026-08-18T10:00:00Z",
      updatedAt: "2026-08-18T10:00:00Z",
      featuredImage: {
        url: "/photos/jockey-celebration.jpg",
        alt: "Taylor Marshall salutes after Spicy Martini's Stradbroke Handicap win",
        width: 1154,
        height: 1612,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      theaibetPath: "/racing",
      theaibetCtaLabel: "See what the AI models make of the Everest picture",
      masterStoryId: "MS-2026-0818-SPICY-STORY",
    },
    {
      id: "sto-004",
      slug: "the-quaddie-that-paid-for-a-wedding",
      title: "The Quaddie That Paid for a Wedding",
      excerpt:
        "Four legs, one venue deposit, and the strangest best-man speech in the history of the Geelong region.",
      bodyHtml:
        p(
          "Weddings are expensive. Deposits are non-refundable. And Dave — groom, apprentice electrician, occasional punter — was, six months out from the big day, exactly $8,400 short.",
          "What follows is a story his wife tells better than he does, which is itself the mark of a truly great punting story: when the person with every right to be furious is the one who dines out on it."
        ) +
        h2("The four legs") +
        p(
          "Leg one: an odds-on favourite that won like an odds-on favourite. Leg two: a $6 chance ridden, in Dave's words, 'like the jockey owed me money'. Leg three was the sweat — a photo finish that took long enough for Dave to compose two separate apology speeches to his fiancée.",
          "Leg four was a mare named — and he maintains this decided the bet — after his fiancée's grandmother. It led all the way."
        ) +
        h2("The aftermath") +
        p(
          "The quaddie paid $11,240 for his dollar-forty flexi. The venue got its deposit, the best man got his story, and the couple got a wedding in which the father of the bride toasted 'the mare that made this possible'.",
          "Dave hasn't had a serious bet since. 'You retire on top,' he says. 'Everyone knows that. Nobody does it. I did it.' His wife rolls her eyes. The framed ticket hangs in their hallway."
        ),
      categorySlug: "big-wins",
      tags: ["Quaddie", "Big Wins", "Culture"],
      author: AUTHORS.jackDoyle,
      publishedAt: "2026-08-08T09:00:00Z",
      updatedAt: "2026-08-08T09:00:00Z",
      theaibetPath: "/",
      theaibetCtaLabel: "Modern form analysis, powered by AI",
      masterStoryId: "MS-2026-0808-STORY-QUADDIE",
    },
  ],
};

export function getFixtures(siteKey: SiteKey): Article[] {
  // Every fixture article automatically receives its branded editorial artwork
  // (generated by scripts/generate-art.mjs into public/art/). Real photography
  // replaces this via WordPress featured images once the CMS is live.
  return FIXTURES[siteKey].map((a) => ({
    ...a,
    featuredImage:
      a.featuredImage ?? {
        url: `/art/${siteKey}/${a.slug}.svg`,
        alt: a.title,
        width: 1600,
        height: 900,
        license: "artwork",
        credit: "Editorial artwork",
        source: "generated-editorial-artwork",
      },
    inlineImage:
      a.inlineImage ?? {
        url: `/art/${siteKey}/_inline.svg`,
        alt: `${a.title} — editorial artwork`,
        width: 1600,
        height: 900,
        license: "artwork",
        credit: "Editorial artwork",
        source: "generated-editorial-artwork",
      },
  }));
}
