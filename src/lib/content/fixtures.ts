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
      id: "afl-001",
      slug: "collingwood-vs-carlton-round-23-preview",
      title: "Collingwood vs Carlton: Round 23 Match Preview",
      excerpt:
        "Form, injuries, key matchups and the numbers that will decide Friday night's blockbuster at the MCG.",
      bodyHtml:
        p(
          "Friday night at the MCG rarely needs extra stakes, but this one has them anyway: both clubs are jostling for a top-four berth with a fortnight left in the home-and-away season, and the loser faces a likely elimination final.",
          "Collingwood's midfield has been the engine of their late-season surge. Their clearance differential over the last six weeks ranks among the league's best, and their pressure rating at stoppages has forced opposition midfields into rushed, low-percentage exits."
        ) +
        h2("The matchup that decides it") +
        p(
          "Carlton's tall forward structure against Collingwood's undersized but highly organised defence is the clearest fault line in this game. If the Blues can generate one-on-ones inside 50, they win those contests more often than not. If the Magpies force them to bomb long to outnumbered contests, the intercept game takes over.",
          "The other pivot point is the wings. Both teams want to control the corridor, and whichever wing pairing provides more defensive coverage will dictate where the game is played."
        ) +
        h2("Selection and conditions") +
        p(
          "Both clubs go in close to full strength, with late fitness tests expected for one key defender apiece. A dry, still Melbourne night should mean a high-possession, high-mark game — conditions that historically favour the more methodical ball-movement side.",
          "The history says these games are close: the last five meetings have been decided by an average of under 12 points."
        ),
      categorySlug: "previews",
      tags: ["Collingwood", "Carlton", "MCG", "Round 23"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-17T22:00:00Z",
      updatedAt: "2026-08-17T22:00:00Z",
      theaibetPath: "/afl/collingwood-vs-carlton",
      theaibetCtaLabel: "See the AI model's probability, confidence and edge for Collingwood vs Carlton",
      masterStoryId: "MS-2026-0812-COLL-CARL",
    },
    {
      id: "afl-002",
      slug: "top-four-race-ladder-scenarios-2026",
      title: "The Top-Four Race: Every Ladder Scenario With Two Rounds Left",
      excerpt:
        "Six clubs, four spots, two rounds. We map every realistic permutation of the 2026 run home.",
      bodyHtml:
        p(
          "With two rounds remaining, six clubs can still finish in the top four, and the percentage gaps are tight enough that margins — not just results — will matter.",
          "The simplest path belongs to the ladder leaders: win one of two and they cannot drop out of the top two. Below them it gets messy quickly."
        ) +
        h2("The scenarios that matter") +
        p(
          "Third through sixth are separated by four premiership points and less than three per cent. Head-to-head results in the final fortnight mean two of these sides will directly eliminate each other from the double chance.",
          "Percentage swings of the size required are rare but not unprecedented in final rounds, particularly when one contender plays a bottom-four side."
        ) +
        h2("What history says") +
        p(
          "Since the current finals format was introduced, teams finishing in the top four have supplied the premier in the overwhelming majority of seasons. The double chance is not a bonus — it is the whole ball game."
        ),
      categorySlug: "stats",
      tags: ["Ladder", "Finals", "Top Four"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-16T04:30:00Z",
      updatedAt: "2026-08-16T04:30:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "View AI-modelled finals probabilities for every AFL club",
      masterStoryId: "MS-2026-0816-AFL-LADDER",
    },
    {
      id: "afl-003",
      slug: "why-forward-pressure-is-the-2026-premiership-stat",
      title: "Why Forward-Half Pressure Is the 2026 Premiership Stat",
      excerpt:
        "The numbers say turnovers created inside forward 50 have never been more valuable. Here's why.",
      bodyHtml:
        p(
          "Every era of football has its defining statistic. In 2026, the strongest correlation with winning isn't clearances or inside 50s — it's turnovers generated in the forward half.",
          "Scores from turnover now account for a larger share of total scoring than at any point in the last decade, and the sides that create repeat forward-half stoppages are the ones controlling territory and rest patterns."
        ) +
        h2("The tactical shift") +
        p(
          "Coaches have responded to faster ball movement by pushing extra numbers behind the ball, which makes clean exits harder and turnovers deadlier. A turnover won 60 metres out is worth demonstrably more than a centre clearance, because the defence is disorganised.",
          "For the contenders, the message is blunt: if your forwards don't pressure, your defence gets flooded with fast entries — and no key-back group survives that for four quarters of finals football."
        ),
      categorySlug: "teams",
      tags: ["Tactics", "Statistics", "Pressure"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-13T06:00:00Z",
      updatedAt: "2026-08-14T01:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "Explore AFL team metrics inside TheAIbet",
      masterStoryId: "MS-2026-0813-AFL-PRESSURE",
    },
    {
      id: "afl-004",
      slug: "injury-list-round-23-who-returns-for-finals",
      title: "Round 23 Injury List: Who Makes It Back for Finals?",
      excerpt:
        "The full injury picture across the contenders, and which returns genuinely move the needle in September.",
      bodyHtml:
        p(
          "Finals are usually decided by the list you have standing in September, not the one you picked in March. With two rounds left, several contenders are sweating on key returns.",
          "The pattern this time of year is familiar: clubs get conservative, timelines get vague, and 'testing later in the week' becomes the most common phrase in football."
        ) +
        h2("Returns that change structures") +
        p(
          "A returning key defender changes a team's entire defensive method — permitting a more aggressive intercept game rather than forced zone coverage. Similarly, a genuine ruck returning reshapes centre bounce setups that have been improvised for months.",
          "The riskiest category is the soft-tissue return in week one of finals: recurrence rates within the first two matches back remain the quiet fear of every high-performance department."
        ),
      categorySlug: "injuries",
      tags: ["Injuries", "Finals", "Selection"],
      author: AUTHORS.mitchHarlan,
      publishedAt: "2026-08-15T00:00:00Z",
      updatedAt: "2026-08-17T00:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "See how injuries shift AI match probabilities",
      masterStoryId: "MS-2026-0815-AFL-INJURY",
    },
  ],

  ufcreview: [
    {
      id: "ufc-001",
      slug: "ufc-330-full-card-breakdown",
      title: "UFC 330 Full Card Breakdown: Every Fight, Every Angle",
      excerpt:
        "Main card and prelims dissected — styles, stats, paths to victory and where the value might be hiding.",
      bodyHtml:
        p(
          "UFC 330 is one of the deepest cards of the year on paper, with a title fight headlining, two ranked contenders' bouts underneath, and a prelim slate stacked with debuting prospects.",
          "This breakdown walks the card in order, focusing on the style dynamics that decide fights rather than name value."
        ) +
        h2("The main event") +
        p(
          "The headliner is a classic pressure-versus-counter matchup. The champion walks opponents down behind a high-output jab and mixes takedown threats off feints; the challenger is a low-volume, high-accuracy counter striker who needs space to operate.",
          "Cage position is everything here. When the challenger's back touches the fence, output historically drops and the round slips away. The champion's corner knows it; expect relentless cutting of the cage from the first bell."
        ) +
        h2("Where the card gets interesting") +
        p(
          "The co-main features a grappler with elite control time against a striker whose takedown defence numbers look good until you notice the level of wrestling he's faced. Statistical profiles built against weak grapplers are the market's most common blind spot.",
          "On the prelims, watch the short-notice replacement bout: weight-cut quality and camp length are worth more than any highlight reel in those spots."
        ),
      categorySlug: "previews",
      tags: ["UFC 330", "Card Breakdown", "Main Event"],
      author: AUTHORS.danaOkafor,
      publishedAt: "2026-08-17T10:00:00Z",
      updatedAt: "2026-08-17T10:00:00Z",
      theaibetPath: "/ufc/ufc-330",
      theaibetCtaLabel: "View the AI model analysis for every UFC 330 fight",
      masterStoryId: "MS-2026-0817-UFC330",
    },
    {
      id: "ufc-002",
      slug: "model-vs-market-where-the-numbers-disagree-ufc-330",
      title: "Model vs Market: Where the Numbers Disagree on UFC 330",
      excerpt:
        "Quantitative fight models and the betting market agree on most of UFC 330 — but not all of it.",
      bodyHtml:
        p(
          "Most fights on a card, model probability and market-implied probability land within a few points of each other. The interesting fights are the ones where they don't.",
          "On UFC 330, three bouts show a meaningful gap between statistical models and the current market — and each gap has a different cause."
        ) +
        h2("Three kinds of disagreement") +
        p(
          "The first gap is a name-value fade: the market prices a popular veteran above what declining output and absorbed strikes justify. Models are ruthless about age curves; casual money is not.",
          "The second is an information gap — a camp change and a move up in weight that the market has priced heavily but models treat as neutral until fight-night data exists.",
          "The third is the classic grappling blind spot: takedown-heavy fighters are systematically underpriced against strikers with untested defensive wrestling, because knockouts are memorable and control time is not."
        ) +
        h2("How to read the gaps") +
        p(
          "A gap is not automatically value. It is a flag to look closer: sometimes the market knows something the data doesn't, and sometimes it's the reverse. The discipline is in telling those situations apart."
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
      slug: "prospect-watch-five-fighters-to-track-2026",
      title: "Prospect Watch: Five Fighters to Track for the Rest of 2026",
      excerpt:
        "Five under-the-radar fighters whose underlying numbers say they're better than their rankings.",
      bodyHtml:
        p(
          "Rankings lag reality. By the time a fighter is ranked, the market has adjusted and the value is gone. The edge is identifying fighters whose statistical profiles outrun their profiles.",
          "This list is built from underlying metrics — strike differential, control time against credentialled grapplers, defensive round-over-round improvement — rather than finishes, which are noisy."
        ) +
        h2("What we look for") +
        p(
          "Three signals matter most: output that holds or rises in round three, defensive metrics improving fight-over-fight, and performance against step-up competition rather than padded records.",
          "Fighters who tick all three tend to beat the number the first two or three times they face ranked opposition — the window before the market catches up."
        ),
      categorySlug: "fighters",
      tags: ["Prospects", "Analytics", "Rankings"],
      author: AUTHORS.danaOkafor,
      publishedAt: "2026-08-10T07:30:00Z",
      updatedAt: "2026-08-11T02:00:00Z",
      theaibetPath: "/ufc",
      theaibetCtaLabel: "Track fighter analytics on TheAIbet",
      masterStoryId: "MS-2026-0810-UFC-PROSPECTS",
    },
  ],

  puntersreview: [
    {
      id: "rac-001",
      slug: "memsie-stakes-day-preview-caulfield",
      title: "Memsie Stakes Day Preview: The Spring Starts at Caulfield",
      excerpt:
        "Race-by-race thinking for Caulfield's traditional spring opener — speed maps, form lines and where the value sits.",
      bodyHtml:
        p(
          "The Memsie is where spring reputations are made and autumn form goes to die. First-up specialists, weight-for-age pretenders and genuine Cox Plate contenders all collide, and the market has to price all three at once.",
          "The overriding rule of Memsie day: respect fresh horses from stables that win first-up, and be suspicious of horses whose best form is buried three runs deep into a preparation."
        ) +
        h2("The shape of the race") +
        p(
          "Early speed looks genuine this year, which changes everything for the closers. In recent renewals with honest tempo, horses settling worse than midfield have filled the placings; in falsely-run editions, on-pace horses have been untouchable.",
          "The map suggests a truly-run race, which brings the swoopers right into calculations — provided the track isn't playing leader-biased, and Caulfield in late winter often is."
        ) +
        h2("The market read") +
        p(
          "The favourite is short on class but first-up over an unsuitable trip; that's a horse to beat at the price rather than back. The value typically lives in the second line of the market — proven weight-for-age horses having their first run in a set-up race, where the stable's eye is on October."
        ),
      categorySlug: "previews",
      tags: ["Memsie Stakes", "Caulfield", "Spring Carnival"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-17T20:00:00Z",
      updatedAt: "2026-08-17T20:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "See AI runner rankings and race analysis for Caulfield",
      masterStoryId: "MS-2026-0817-MEMSIE",
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
      slug: "flemington-track-bias-report-winter-2026",
      title: "Flemington Track Report: What the Winter Data Says About Bias",
      excerpt:
        "Rail position, sectional patterns and where you wanted to be at Flemington through the winter — with spring implications.",
      bodyHtml:
        p(
          "Track bias is the most misused term in racing, but it's real, measurable, and worth money when you're ahead of the market on it. This report covers the winter Flemington pattern with the rail movements and sectional data laid out.",
          "The headline: with the rail out beyond six metres, on-pace runners in the straight-course races have performed above expectation, while the 2000-metre-plus races have consistently favoured horses ridden quietly and angled to the outside."
        ) +
        h2("Reading the sectionals") +
        p(
          "Raw finishing positions lie. The tell is in closing sectionals relative to race averages: when horses running the fastest final 400 metres consistently fail to make ground, position on the track is beating quality of horse — the definition of bias.",
          "Punters who adjust for this within a race meeting, not after it, are the ones who profit. By the time the bias is on social media, it's in the prices."
        ),
      categorySlug: "tracks",
      tags: ["Flemington", "Track Bias", "Sectionals"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-11T22:00:00Z",
      updatedAt: "2026-08-12T04:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "See track and sectional analysis inside TheAIbet",
      masterStoryId: "MS-2026-0811-FLEM-BIAS",
    },
    {
      id: "rac-004",
      slug: "spring-carnival-2026-early-markets-value-scan",
      title: "Spring Carnival 2026: An Early Scan of the Futures Markets",
      excerpt:
        "Caulfield Cup, Cox Plate and Melbourne Cup futures — where the early money has gone and what still looks over the odds.",
      bodyHtml:
        p(
          "Futures betting is a different game: you're pricing not just ability but the probability a horse actually gets to the race, at the right distance, in the right condition. Most early futures bets lose to a scratching, not a slow horse.",
          "That said, every spring a handful of horses are clearly under-priced in August because their path to a major is more certain than the market appreciates."
        ) +
        h2("How to shop futures") +
        p(
          "The checklist: a stated target from a stable that means it, a proven pattern for the race's conditions, ballot-exemption or enough rating to guarantee a start, and a preparation with an obvious lead-up sequence.",
          "Horses ticking all four are rare, and they're the only futures bets worth the exposure. Everything else is better taken on the day at a shorter but safer price."
        ),
      categorySlug: "markets",
      tags: ["Spring Carnival", "Futures", "Melbourne Cup"],
      author: AUTHORS.tomBrennan,
      publishedAt: "2026-08-09T23:00:00Z",
      updatedAt: "2026-08-10T01:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "View AI racing analysis and runner rankings",
      masterStoryId: "MS-2026-0809-SPRING-FUTURES",
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
      categorySlug: "explainers",
      tags: ["AFL", "Finals", "Explainer"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-15T02:00:00Z",
      updatedAt: "2026-08-15T02:00:00Z",
      theaibetPath: "/afl",
      theaibetCtaLabel: "See AI-modelled finals probabilities for the 2026 season",
      masterStoryId: "MS-2026-0815-AFL-EXPLAINER",
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
      categorySlug: "explainers",
      tags: ["UFC", "Scoring", "Explainer"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-13T03:00:00Z",
      updatedAt: "2026-08-13T03:00:00Z",
      theaibetPath: "/ufc",
      theaibetCtaLabel: "Explore UFC fight data and AI analysis",
      masterStoryId: "MS-2026-0813-UFC-SCORING",
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
      categorySlug: "racing",
      tags: ["Melbourne Cup", "History", "Records"],
      author: AUTHORS.priyaSharma,
      publishedAt: "2026-08-10T05:00:00Z",
      updatedAt: "2026-08-10T05:00:00Z",
      theaibetPath: "/racing",
      theaibetCtaLabel: "See AI analysis for Australian feature racing",
      masterStoryId: "MS-2026-0810-CUP-HISTORY",
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
      slug: "interview-thirty-years-on-course-bookmaker",
      title: "Thirty Years in the Ring: An On-Course Bookmaker Tells All",
      excerpt:
        "From bags of cash at Moonee Valley to betting apps and data feeds — a bookie on everything that's changed and the one thing that hasn't.",
      bodyHtml:
        p(
          "He asked us not to use his name, then spent three hours telling stories that make anonymity pointless to anyone who stood in the Moonee Valley ring in the nineties. We'll call him M.",
          "M's first day as a licensed bookmaker was a wet Wednesday in 1994. He lost eleven thousand dollars and drove home, he says, 'happier than I'd ever been in my life. I was in the game.'"
        ) +
        h2("What changed") +
        p(
          "'The phones killed the walk-up punter, the data killed the mug price, and the corporates killed the ring. In that order.' M says the modern on-course bookie survives on service and theatre: 'People bet with me for the same reason they buy records. It feels like something.'",
          "The sharpest change, he says, is information symmetry. 'In 1995 I knew things the crowd didn't. Now the kid with the phone knows things I don't. The margin used to be knowledge. Now it's nerve.'"
        ) +
        h2("What hasn't changed") +
        p(
          "'Greed. Hope. The bloke who has one good Saturday in March and tells you about it in December.' He laughs. 'The technology is unrecognisable. The people are identical. That's why I'm still here.'"
        ),
      categorySlug: "interviews",
      tags: ["Interview", "Bookmaker", "Racing Culture"],
      author: AUTHORS.jackDoyle,
      publishedAt: "2026-08-11T08:00:00Z",
      updatedAt: "2026-08-11T08:00:00Z",
      theaibetPath: "/",
      theaibetCtaLabel: "See what the models say before the ring does",
      masterStoryId: "MS-2026-0811-STORY-BOOKIE",
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
  return FIXTURES[siteKey];
}
