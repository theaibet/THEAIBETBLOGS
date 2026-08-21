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
  zacChristie: {
    slug: "zac-christie",
    name: "Zac Christie",
    role: "Sports and Racing Analysis",
    bio: "Zac Christie writes sports and racing analysis across TheAIbet media network, with a focus on form, data and the numbers that actually decide results.",
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
      id: "afl-108",
      slug: "brisbane-159-collingwood-96-round-24-review-pendlebury-injury",
      title: "Brisbane Run Over Collingwood — But Pendlebury Injury Could Be the Bigger Story",
      excerpt:
        "Logan Morris kicked a career-high eight as the Lions piled on 159 at the MCG — but Collingwood's wildcard week now hinges on Scott Pendlebury's knee.",
      bodyHtml:
        p(
          "Brisbane has sent Collingwood into the wildcard round with plenty to think about after running away with a huge 159–96 victory at the MCG.",
          "The final margin was 63 points, but the scoreboard only tells part of the story.",
          "Collingwood showed patches of good football, particularly early. They were prepared to use the handball to create space and tried to open Brisbane up through the middle, but Brisbane's ball use and efficiency going forward were simply on another level.",
          "And the biggest problem Collingwood couldn't solve was Logan Morris.",
          "The 21-year-old was outstanding. Morris had four goals by halftime and could easily have had five. By the end of the night he had kicked a career-high eight goals and was the dominant forward on the ground.",
          "Brisbane led 63–41 at halftime before completely taking control after the break."
        ) +
        h2("Pendlebury injury the major concern") +
        p(
          "The biggest concern for Collingwood now surrounds Scott Pendlebury.",
          "Pendlebury started the game brilliantly, collecting eight disposals in the opening quarter and looking composed around the contest. But he left the ground late in the first quarter and didn't return.",
          "Early reports pointed towards an issue around the back of the knee, with a knee bursa problem being reported after the match. Until scans and further assessment are completed, Collingwood won't know exactly what they're dealing with.",
          "And the timing couldn't be worse. Collingwood now heads into the wildcard round, meaning every injury suddenly becomes significant.",
          "If the issue settles quickly, Pendlebury could potentially be available. If it proves more serious, though, Collingwood could be heading into its biggest game of the season without one of the most experienced finals players in AFL history.",
          "There is another layer to the story. Pendlebury's playing future beyond this season remains uncertain, with reports linking rival clubs — including Gold Coast — with interest in using the veteran in a playing and leadership role.",
          "That makes the injury situation even more intriguing. Nobody knows yet what Pendlebury will decide about 2027, but every game from here carries a little more weight."
        ) +
        h2("Swadling continues to impress") +
        p(
          "One major positive for Collingwood was Sam Swadling.",
          "Fresh off receiving an AFL Rising Star nomination following his breakout performance against Hawthorn, the youngster backed it up with another impressive game.",
          "For a Collingwood side beginning to transition towards its next generation, Swadling is quickly becoming one of the most exciting parts of that future.",
          "Jordan De Goey was another strong contributor, finishing with around 30 disposals and hitting the scoreboard with two goals."
        ) +
        h2("Six straight goals — but Brisbane had already done the damage") +
        p(
          "Collingwood did produce one final burst. The Magpies kicked six unanswered goals during the final quarter and briefly gave their supporters something to get excited about.",
          "But the damage had already been done. Brisbane responded and finished the night with 25 goals and 159 points — an enormous score against a Collingwood side heading into finals football.",
          "The Lions looked faster, cleaner and far more dangerous when they went forward. Morris' eight-goal performance will grab the headlines, but Brisbane's ability to continually create quality scoring opportunities was arguably even more impressive."
        ) +
        h2("What does it mean for Collingwood?") +
        p(
          "That's now the question. A 63-point defeat immediately before wildcard football isn't the preparation Collingwood would have wanted.",
          "There were positives. Swadling continues to emerge. De Goey found plenty of the football. Collingwood showed in the final quarter that they can still score quickly when they move the ball aggressively.",
          "But conceding 25 goals is the concern. Finals football doesn't give you much room to fix problems.",
          "Collingwood now has a week to work out what went wrong defensively, get players back into the side and, most importantly, find out whether Scott Pendlebury will be available.",
          "Brisbane walks away looking every bit like a genuine premiership threat. Collingwood walks away with questions.",
          "And heading into wildcard week, we're about to find out very quickly whether they have the answers."
        ),
      featuredImage: {
        url: "/photos/lions-morris-celebrates.jpg",
        alt: "Logan Morris celebrates one of his career-high eight goals as Brisbane ran over Collingwood at the MCG",
        width: 486,
        height: 496,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      inlineImage: {
        url: "/photos/collingwood-degoey.jpg",
        alt: "Jordan De Goey takes stock — around 30 disposals and two goals on a night when little else went Collingwood's way",
        width: 464,
        height: 523,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "reviews",
      tags: ["Collingwood", "Brisbane Lions", "Logan Morris", "Scott Pendlebury", "Round 24", "Match Review"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T12:30:00Z",
      updatedAt: "2026-08-21T12:30:00Z",
      theaibetPath: "/sports?sport=aussierules_afl",
      theaibetCtaLabel: "See the AI's wildcard-round probabilities for Collingwood and Brisbane",
      masterStoryId: "MS-2026-0821-PIES-LIONS-REVIEW",
      faq: [
        { q: "What was the final score in Collingwood v Brisbane in Round 24, 2026?", a: "Brisbane defeated Collingwood 159–96 at the MCG — a 63-point margin, with the Lions kicking 25 goals." },
        { q: "How many goals did Logan Morris kick against Collingwood?", a: "A career-high eight goals — four of them by halftime — making him the dominant forward on the ground." },
        { q: "What is Scott Pendlebury's injury?", a: "He left the ground late in the first quarter and did not return, with a knee bursa problem reported after the match. Scans will determine his availability for Collingwood's wildcard-round final." },
      ],
    },
    {
      id: "afl-107",
      slug: "afl-wildcard-round-2026-what-it-means",
      title: "Wildcard Round: Why Sixth Just Became the Most Valuable Place on the Ladder",
      excerpt:
        "The AFL\u2019s biggest finals change in 25 years arrives seven days from now. Ten teams, five weeks, and two clubs inside the eight who have to survive an extra final.",
      bodyHtml:
        p(
          "Round 24 is not the last weekend of the season any more. For the first time since 2000 the AFL has changed the shape of September, and the new <strong>Wildcard Round</strong> is played on the weekend that used to be the pre-finals bye.",
          "Ten clubs now make the finals. Five weeks, not four. And the club that finishes sixth has just been handed something the club that finishes seventh would give a lot for: a week off."
        ) +
        h2("What actually happens") +
        p(
          "The teams finishing seventh to tenth play off across one weekend. <strong>Seventh hosts tenth. Eighth hosts ninth.</strong> Winners go through to the finals proper. Losers are finished.",
          "The top six do not play at all. They watch, they rest, and they enter the qualifying and elimination finals a week fresher than whoever comes through."
        ) +
        h2("The re-seed nobody has thought through yet") +
        p(
          "Here is the wrinkle that will decide somebody\u2019s season. The two Wildcard winners are not simply plugged into seventh and eighth based on who they beat. They are <strong>re-seeded on ladder position</strong> \u2014 a rankings system the AFL says it has not used since 1999.",
          "The AFL\u2019s wording: \u201Cfifth will play the lowest-ranked Wildcard winner and sixth will play the highest-ranked Wildcard winner.\u201D So fifth and sixth genuinely do not know who they are playing until both Wildcard games are done. If tenth pulls off an upset, tenth is the lowest-ranked survivor and travels to fifth."
        ) +
        h2("Why this changes how Round 24 is played") +
        p(
          "In the old format, the fight at the bottom of the eight was about being in or out. Now it is about <strong>which door you come through</strong>, and the gap between them is enormous.",
          "Finish sixth and you need three wins to lift the cup. Finish seventh or eighth and you need five straight, though at least you host your Wildcard game \u2014 AFL chief executive Andrew Dillon confirmed \u201Call teams who finish in the top eight of ten will host a home final.\u201D Finish ninth or tenth and you need five straight <em>away from home</em>. Nobody has ever done that."
        ) +
        h2("Who it applies to") +
        p(
          "Brisbane, Hawthorn and Melbourne are level on 60 points with Geelong and Adelaide two wins back on 56 \u2014 all five are playing for the safety of the top six. Collingwood sit eighth on 52, the Western Bulldogs ninth on 50, Carlton tenth on 46.",
          "Two of those bottom four will be gone by this time next fortnight. The other two get a September nobody in their position would have had last year."
        ) +
        h2("The dates") +
        p(
          "Round 24 runs 20\u201323 August. The Wildcard Round takes the following weekend, with the fixture released once the ladder is final on Sunday night.",
          "The <strong>Grand Final is Saturday 26 September at the MCG</strong>, 2:30pm AEST."
        ),
      featuredImage: {
        url: "/photos/afl-pack-mark.jpg",
        alt: "Geelong players celebrate a goal — the Cats are one of the sides jostling for position as the wildcard era begins",
        width: 1058,
        height: 500,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "stats",
      tags: ["Wildcard Round", "Finals", "AFL", "Format", "Round 24"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T05:00:00Z",
      updatedAt: "2026-08-21T05:00:00Z",
      theaibetSport: "afl",
      theaibetCtaLabel: "See AI-modelled premiership odds under the new ten-team format",
      masterStoryId: "MS-2026-0821-WILDCARD",
      faq: [
        { q: "What is the AFL Wildcard Round?", a: "A new finals week introduced in 2026. The clubs finishing 7th to 10th play off \u2014 7th hosts 10th, 8th hosts 9th \u2014 with the two winners advancing to the finals proper and the two losers eliminated." },
        { q: "When is the 2026 AFL Wildcard Round?", a: "The weekend after Round 24, in the slot previously used for the pre-finals bye. The fixture is confirmed after the final home-and-away round." },
        { q: "Do the top six play in the Wildcard Round?", a: "No. The top six have the weekend off and enter the qualifying and elimination finals fresh, which is why finishing sixth is now far more valuable than finishing seventh." },
        { q: "How are the Wildcard winners seeded?", a: "By ladder position, not by who they beat. Fifth plays the lowest-ranked Wildcard winner and sixth plays the highest-ranked Wildcard winner." },
        { q: "How many finals does a team from 10th have to win?", a: "Five, all away from home. No club has ever won a premiership from anywhere near that position." }
      ],
    },
    {
      id: "afl-105",
      slug: "sydney-swans-suspend-five-players-what-it-means-for-september",
      title: "Five Stars, One Hotel Room, No September: The Ban That Blew Up Sydney's Season",
      excerpt:
        "Heeney, Warner, Blakey, Jordon and Bice are out for the year. Sydney still finishes second \u2014 but every model of their premiership chances has to be rebuilt.",
      bodyHtml:
        p(
          "Sydney have suspended five players for the remainder of the 2026 season \u2014 finals included \u2014 after an incident at a Melbourne hotel in the early hours of Monday morning. Isaac Heeney, Chad Warner, Nick Blakey, James Jordon and Riley Bice will not play again this year.",
          "The football consequence is brutal and simple: a club that has locked away second place, a home qualifying final and one of the strongest premiership platforms in the competition has just removed five regular players from its team."
        ) +
        h2("What the club has confirmed") +
        p(
          "Sydney's sanctions relate to breaches of club standards \u2014 specifically, players continuing to drink late into the night and bringing women back to the team hotel. Chairman Andrew Pridham was blunt about the club's response: \u201CThey shouldn't have been in that situation. The only way we can deal with it is to put our foot down incredibly hard, which we've done.\u201D",
          "Chief executive Matthew Pavlich confirmed the players remain part of the club: \u201CThey will be allowed back at the football club\u2026 We're not abandoning our players.\u201D The AFL has separately ruled all five out of consideration for the 2026 All-Australian team.",
          "The five issued a joint statement accepting the sanction and apologising to their partners, families, teammates, supporters and the wider club community."
        ) +
        h2("What police are investigating \u2014 and what they are not") +
        p(
          "Victoria Police detectives are investigating an allegation of touching without consent following the incident at the Pullman Hotel in Melbourne. The woman involved has spoken with police.",
          "Several distinctions matter here and deserve stating plainly. It has not been suggested that any of the five suspended players is accused of the alleged assault. None of the banned players had been formally interviewed by police. No arrests have been made and no charges have been laid.",
          "The club sanctioned five players for conduct it established through its own internal standards process. Police are separately investigating whether a criminal offence occurred. One does not establish the other, and an allegation is not a finding.",
          "Further claims about that night have circulated online. AFL Reviews has not been able to verify them and does not repeat them. Until the investigation concludes, nobody outside that room can responsibly claim to know the full sequence of events."
        ) +
        h2("Five absences, one broken structure") +
        p(
          "Sydney finish the home-and-away season 17\u20135 with a percentage of 134.5, second only to Fremantle and immovable from second place with a round to play. Under any normal circumstance that is a premiership platform.",
          "These circumstances are not normal. This is not a side covering five fringe players \u2014 it is losing an established group that has been in the team almost every week, across every part of the ground. Heeney brings clearance power, marking strength and scoreboard impact. Warner can break a game open through the midfield. Blakey drives the transition out of defence. Jordon takes the hard defensive midfield assignments. Bice has become a regular part of the backline structure.",
          "The injury list offers no relief. The club's Round 24 update lists James Rowbottom (hand fracture) as a test and Justin McInerney (hamstring strain) at two to three weeks, with Joel Amartey two weeks away and Hayden McLean in concussion protocols."
        ) +
        h2("Why every Sydney prediction has to be rebuilt") +
        p(
          "A lazy model subtracts five player ratings from a team rating and moves on. That badly understates this, because these losses compound.",
          "Removing Heeney and Warner together costs more than either individually \u2014 it strips two elite midfield weapons, clearance strength and two players who hit the scoreboard from the same unit. Removing Blakey and Bice together changes how the ball leaves defence. Removing Jordon changes who takes the opposition's most dangerous midfielder.",
          "An honest adjustment lowers Sydney's expected score, lowers the midfield clearance rating, reassesses defensive-transition efficiency, raises the expected output of the opposition's best midfielder \u2014 and, most importantly, widens the uncertainty band around every number, because the replacement structure is untested at this level.",
          "Any prediction still leaning on Sydney's full-season form is rating a team that no longer exists."
        ) +
        h2("Sunday is the experiment") +
        p(
          "Sydney host North Melbourne at the SCG on Sunday in a game that cannot change their ladder position. The result is close to irrelevant; the structure is everything.",
          "Who attends centre bounces without Heeney, Warner and Jordon? Who takes the opposition's best midfielder? Who replaces Blakey's run from defence? Who is the player Sydney turn to when a final needs changing? Dean Cox has one week to find answers.",
          "Their qualifying-final opponent will be settled in the final round, with Brisbane, Hawthorn and Melbourne all level on 60 points fighting for third. Brisbane can punish a depleted midfield. Hawthorn can attack a weakened transition. Melbourne can drag the game into the contest and make Sydney win it without two of their best.",
          "Second place and a home final still matter. Sydney remain a good football team. But the margin for error that came with that record has gone \u2014 and the modelling has no choice but to start again."
        ),
      categorySlug: "teams",
      tags: ["Sydney Swans", "Isaac Heeney", "Chad Warner", "Finals", "AFL News"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-20T09:00:00Z",
      updatedAt: "2026-08-20T09:00:00Z",
      featuredImage: {
        url: "/photos/swans-five-banned.jpg",
        alt: "Isaac Heeney, Chad Warner, Nick Blakey, James Jordon and Riley Bice \u2014 the five Sydney Swans players suspended for the rest of 2026",
        width: 1179,
        height: 458,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      inlineImage: {
        url: "/photos/afl-marking-contest.jpg",
        alt: "A marking contest \u2014 Sydney must rebuild their structure in a single week",
        width: 1600,
        height: 1090,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      theaibetSport: "afl",
      theaibetCtaLabel: "See the AI's updated finals probabilities for Sydney",
      masterStoryId: "MS-2026-0820-SWANS-SUSPENSIONS",
      faq: [
        { q: "Which Sydney Swans players are suspended?", a: "Isaac Heeney, Chad Warner, Nick Blakey, James Jordon and Riley Bice have been suspended by the club for the remainder of the 2026 season, including the finals series." },
        { q: "Why were the Sydney Swans players suspended?", a: "The club sanctioned them for breaching club standards \u2014 continuing to drink late into the night and bringing women back to the team hotel. The AFL has also ruled them out of 2026 All-Australian consideration." },
        { q: "Are the suspended players accused of sexual assault?", a: "No. Victoria Police are investigating an allegation of touching without consent following the incident, but it has not been suggested that any of the five suspended players is accused of that alleged assault. No arrests have been made and no charges laid." },
        { q: "Where does Sydney finish on the ladder?", a: "Second, with a 17-5 record and 134.5 per cent \u2014 locked in ahead of the final round, and hosting a qualifying final at the SCG." },
      ],
    },
    {
      id: "afl-100",
      slug: "the-kids-are-coming-collingwood-september",
      title: "The Kids Are Coming: Can Collingwood Make Some Noise in September?",
      excerpt:
        "Collingwood's injury list has been smashed \u2014 but Swadling, West and Hayes are arriving, and September is coming.",
      bodyHtml:
        p(
          "Collingwood's injury list has been absolutely smashed this season, but somehow the Pies are still alive \u2014 and heading towards September with a group that suddenly looks very different.",
          "And maybe that's the most exciting part."
        ) +
        h2("The injury list isn't pretty") +
        p(
          "Jeremy Howe is recovering from a fractured arm and is being assessed this week. Brayden Maynard is also pushing to return from his knee and hamstring issue, while Steele Sidebottom missed the Hawthorn game through illness and is another being assessed ahead of Brisbane.",
          "Sidebottom's situation is a bit different. We know the end of an unbelievable AFL career is getting close, and every game from here means something. He's given Collingwood nearly everything over a career spanning almost two decades \u2014 373 games, two premierships and countless huge moments. If he's right, you want to see Steele running around in black and white for as long as this season lasts.",
          "Patrick Lipinski is recovering from his calf and is listed as around a week away, which should have him right around the wildcard/finals period. Isaac Quaynor injured his glute against Hawthorn and will miss Brisbane, but the club expects him to be available for finals. Harry Perryman is a little further away with his hamstring \u2014 currently around two to three weeks.",
          "Then there's the brutal part. Darcy Moore. Jamie Elliott. Reef McInnes. Oscar Steene. Tew Jiath. Their seasons are effectively done. For most clubs, losing that amount of experience and talent would probably finish the year. But something interesting is happening at Collingwood."
        ) +
        h2("The kids are starting to arrive") +
        p(
          "We've spent years talking about Nick and Josh Daicos when we talk about Collingwood's young talent. Now some different names are starting to emerge \u2014 and Sam Swadling might be the biggest surprise of the lot.",
          "The 19-year-old produced a massive performance against Hawthorn \u2014 29 disposals, seven marks and 660 metres gained \u2014 and earned the Round 23 Rising Star nomination. But forget the stat sheet for a second. His spoil in the dying moments helped save the game. That's a young player, in his seventh AFL game, standing up when the pressure is at its highest.",
          "Then you've got Will Hayes continuing to get opportunities. Charlie West is another one \u2014 he had just two touches the week before and could easily have gone back into his shell. Instead, against Hawthorn, he responded with two goals and genuinely made an impact.",
          "You don't need young players dominating every week. You need them learning, responding and showing that when their moment comes, they're not afraid of it."
        ) +
        h2("And then there's the Hawthorn game") +
        p(
          "That 92\u201392 draw was wild. Collingwood led by 22 points at half-time. Hawthorn then turned the game around and got 21 points ahead early in the last. And somehow Collingwood came again.",
          "That's probably the best and worst thing about this Pies side at the moment. When Collingwood switches on, the pressure, ball movement and intensity can still look as damaging as anyone in the competition. The problem is sustaining it.",
          "At this point of the season, I'm not even asking for four perfect quarters. Give me two or three quarters of Collingwood playing its best football and I reckon they're capable of knocking over some very good sides."
        ) +
        h2("So how far can they actually go?") +
        p(
          "Collingwood's locked into the finals picture and September is coming. They're wounded. They're missing stars. They're relying on kids who probably weren't expected to carry this much responsibility this season. But sometimes that's exactly how a young player announces himself.",
          "Get Howe and Maynard back. Get Quaynor and Lipinski right for finals. Give Sidebottom the chance to finish his career the way he deserves. And then let the kids play without fear.",
          "Because we've already seen what this Collingwood side can do when everything clicks. The question isn't whether they have that level \u2014 we've seen it. The question is whether they can hold it long enough when September football arrives. And if they can? I wouldn't want to be the top-eight side that has to find out."
        ),
      categorySlug: "teams",
      tags: ["Collingwood", "Sam Swadling", "Steele Sidebottom", "Finals", "Opinion"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-18T11:30:00Z",
      updatedAt: "2026-08-18T11:30:00Z",
      featuredImage: {
        url: "/photos/afl-contest.jpg",
        alt: "A Collingwood defender fights through a tackle \u2014 a wounded Pies side refusing to go away",
        width: 1150,
        height: 1562,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      inlineImage: {
        url: "/photos/afl-kick-action.jpg",
        alt: "A Collingwood player drives the ball forward by foot",
        width: 928,
        height: 626,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      theaibetCtaLabel: "See the AI's September probabilities for Collingwood",
      masterStoryId: "MS-2026-0818-PIES-KIDS",
      faq: [
        { q: "Who is Sam Swadling?", a: "A 19-year-old Collingwood youngster who earned the Round 23 Rising Star nomination with 29 disposals, seven marks and 660 metres gained in the 92-all draw against Hawthorn \u2014 his seventh AFL game." },
        { q: "Which Collingwood players are out for the season?", a: "Darcy Moore, Jamie Elliott, Reef McInnes, Oscar Steene and Tew Jiath are effectively done for the year." },
      ],
    },
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-18T06:00:00Z",
      updatedAt: "2026-08-18T06:00:00Z",
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
      categorySlug: "reviews",
      tags: ["Round 23", "Hawthorn", "Collingwood", "Melbourne", "Draw"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-17T00:00:00Z",
      updatedAt: "2026-08-17T00:00:00Z",
      theaibetCtaLabel: "See how the AI models rated every Round 23 result",
      masterStoryId: "MS-2026-0817-R23-REVIEW",
      faq: [
        { q: "How many drawn games were there in AFL Round 23, 2026?", a: "Two. Hawthorn and Collingwood finished level at 92-apiece at the MCG, and the Western Bulldogs and Carlton drew 82-all at Marvel Stadium the following day." },
        { q: "What was the biggest win of Round 23?", a: "Melbourne beat Port Adelaide 132\u201356 at Adelaide Oval, a 76-point away win that took the Demons to 60 points." },
        { q: "How did the draws affect the finals race?", a: "Hawthorn's two points kept them fourth on 60 and Collingwood's kept them eighth, while Carlton and the Western Bulldogs each banked two points when both arguably needed four." },
      ],
    },
    {
      id: "afl-103",
      slug: "afl-run-home-round-24-ladder-scenarios",
      title: "The Run Home: What Round 24 Decides Under the New Top-Ten Finals",
      excerpt:
        "Ten teams make September for the first time. The fight is no longer for eighth \u2014 it is to avoid the Wildcard Round entirely.",
      bodyHtml:
        p(
          "The live ladder tells a clean story at the top: Fremantle first on 76 points with a league-best 142.5 per cent, Sydney second on 68. Barring the absurd, the top two is set.",
          "Everything underneath is being decided by a system the AFL has never used before. Ten clubs make the 2026 finals, and the last weekend of the home-and-away season is really a fight over one thing \u2014 <strong>finishing sixth or better, and skipping the Wildcard Round altogether</strong>."
        ) +
        h2("Why sixth is the line that matters") +
        p(
          "Under the new format, the top six get the Wildcard weekend off and walk into the finals proper fresh. Seventh through tenth have to play an extra elimination game first \u2014 7th hosts 10th, 8th hosts 9th \u2014 and two of those four are gone before the qualifying finals are even played.",
          "That turns the old scramble for eighth into something different. Eighth is now survivable but expensive: five straight wins to win a flag. Ninth and tenth need five straight wins <em>away from home</em>. Sixth needs three."
        ) +
        h2("The congestion") +
        p(
          "Brisbane, Hawthorn and Melbourne are level on 60 points. Geelong and Adelaide sit on 56. Collingwood are eighth on 52, the Western Bulldogs ninth on 50, Carlton tenth on 46 after their draw.",
          "Percentage is doing real work in the fine print: Geelong\u2019s 120.2 leads Brisbane\u2019s 119.5 and Hawthorn\u2019s 117.3. A single result this weekend can move a club from a home qualifying final to a Wildcard game."
        ) +
        h2("The games that decide it") +
        p(
          "Collingwood hosted Brisbane at the MCG on Friday night in a direct collision between eighth and third. Melbourne, fifth, meet the ninth-placed Bulldogs \u2014 a game with finals seeding at both ends of it.",
          "Hawthorn travel to Perth to face West Coast, Adelaide host GWS at Adelaide Oval, and Carlton get top-of-the-table Fremantle at Marvel Stadium with their Wildcard position on the line. Gold Coast opened the round on Thursday with a 14.19 (103) to 12.8 (80) win over St Kilda at Marvel."
        ) +
        h2("What happens next") +
        p(
          "The Wildcard Round is played the following weekend, on what used to be the pre-finals bye. The AFL confirms the fixture once the ladder is final on Sunday night.",
          "Then the familiar bracket resumes: 1 v 4, 2 v 3 in the qualifying finals, and the two Wildcard survivors re-seeded into the elimination finals against fifth and sixth."
        ),
      featuredImage: {
        url: "/photos/afl-tackle-contest.jpg",
        alt: "A tackle is laid in heavy traffic during an AFL match",
        width: 1062,
        height: 626,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "stats",
      tags: ["Ladder", "Finals", "Round 24", "Wildcard Round", "Run Home"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-17T22:00:00Z",
      updatedAt: "2026-08-21T03:00:00Z",
      theaibetSport: "afl",
      theaibetCtaLabel: "View AI-modelled finals probabilities for every club",
      masterStoryId: "MS-2026-0817-RUN-HOME",
      faq: [
        { q: "How many teams make the AFL finals in 2026?", a: "Ten. The AFL expanded to a ten-team, five-week finals series in 2026, opening with a Wildcard Round between the clubs finishing 7th to 10th." },
        { q: "Which teams avoid the Wildcard Round?", a: "The top six. They have the Wildcard weekend off and enter the qualifying and elimination finals fresh." },
        { q: "Who is still fighting for a top-six finish?", a: "Brisbane, Hawthorn and Melbourne are level on 60 points, with Geelong and Adelaide on 56. Percentage separates them: Geelong 120.2, Brisbane 119.5, Hawthorn 117.3." },
        { q: "When is the AFL Wildcard Round played?", a: "On the weekend after Round 24, in the slot previously used for the pre-finals bye. The fixture is confirmed once the final ladder is known." }
      ],
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
      featuredImage: {
        url: "/photos/fremantle-longmuir.jpg",
        alt: "Fremantle coach Justin Longmuir with his players after another win — the Dockers sealed the minor premiership with a league-best defence",
        width: 1072,
        height: 664,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "teams",
      tags: ["Fremantle", "Ladder", "Statistics", "Finals"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-16T22:00:00Z",
      updatedAt: "2026-08-16T22:00:00Z",
      theaibetCtaLabel: "Explore Fremantle's AI premiership probability",
      masterStoryId: "MS-2026-0816-FREO-NUMBERS",
      faq: [
        { q: "Why did Fremantle win the 2026 minor premiership?", a: "Fremantle finished the home-and-away season on 76 points, eight clear of Sydney, with a league-best percentage of 142.5 \u2014 combining a top-three attack with the competition's best defence." },
        { q: "How many points did Fremantle concede in 2026?", a: "1,547 \u2014 the fewest in the league by a wide margin \u2014 while scoring 2,204." },
        { q: "What does finishing top of the ladder earn a club in 2026?", a: "A home qualifying final and, under the new ten-team format, a week off during the Wildcard Round." },
      ],
    },
  ],

  ufcreview: [
    {
      id: "ufc-007",
      slug: "ufc-333-abu-dhabi-two-titles-one-trilogy",
      title: "UFC 333: Two Titles and a Trilogy in Abu Dhabi",
      excerpt:
        "Volkanovski defends against an undefeated Evloev, and Petr Yan and Merab Dvalishvili go a third time with the bantamweight belt on the line.",
      bodyHtml:
        p(
          "The UFC has confirmed a championship doubleheader for <strong>UFC 333 on 24 October at Etihad Arena in Abu Dhabi</strong>, and it is the strongest card announced for the back half of 2026.",
          "<strong>Alexander Volkanovski (28-4)</strong> defends the featherweight title against <strong>Movsar Evloev (20-0)</strong>, and <strong>Petr Yan (20-5)</strong> puts the bantamweight belt on the line against <strong>Merab Dvalishvili (21-5)</strong> in the third fight of a rivalry that has now produced a title change in both directions."
        ) +
        h2("Volkanovski v Evloev: the last undefeated problem") +
        p(
          "Evloev earned this with a decision over Lerone Murphy at UFC London in March. He arrives at 20-0 \u2014 the sort of record that eventually stops being a curiosity and starts being a warning.",
          "The stylistic question is the obvious one and it is not a simple one. Volkanovski has spent his championship life solving pressure grapplers by out-working them in space and out-lasting them late. Evloev is the version of that problem who has never been solved by anybody."
        ) +
        h2("Yan v Dvalishvili 3: the belt keeps changing hands") +
        p(
          "Yan took the title from Dvalishvili by unanimous decision at UFC 323 on 6 December 2025, ending a fourteen-fight winning streak in the process. That result is what makes the trilogy fight compelling rather than obligatory \u2014 both men have now beaten the other in a fight that mattered.",
          "Dvalishvili\u2019s case is volume and an engine that has broken better strikers than Yan. Yan\u2019s case is that he has already proven he can defuse it once."
        ) +
        h2("Where it sits on the calendar") +
        p(
          "Abu Dhabi lands five weeks after UFC 331 in Los Angeles, where <strong>Joshua Van</strong> defends the flyweight title against <strong>Alexandre Pantoja</strong> in a rematch of the fastest finish in flyweight championship history, and <strong>Arman Tsarukyan</strong> meets <strong>Mauricio Ruffy</strong> over five rounds.",
          "Before either of those, the schedule runs through Sacramento, Shanghai, Paris, Glendale and Salt Lake City. UFC 332 in Salt Lake City on 3 October still has no announced main event."
        ),
      featuredImage: {
        url: "/art/ufcreview/ufc-333-abu-dhabi-two-titles-one-trilogy.svg",
        alt: "Abstract octagon artwork for UFC 333 in Abu Dhabi",
        width: 1600,
        height: 900,
        credit: "UFC Review editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "news",
      tags: ["UFC 333", "Volkanovski", "Evloev", "Petr Yan", "Dvalishvili", "Abu Dhabi"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T04:00:00Z",
      updatedAt: "2026-08-21T04:00:00Z",
      theaibetSport: "ufc",
      theaibetCtaLabel: "See the AI model\u2019s read on both UFC 333 title fights",
      masterStoryId: "MS-2026-0821-UFC333",
      faq: [
        { q: "When and where is UFC 333?", a: "Saturday 24 October 2026 at Etihad Arena in Abu Dhabi." },
        { q: "What are the UFC 333 title fights?", a: "Alexander Volkanovski (28-4) defends the featherweight title against Movsar Evloev (20-0), and Petr Yan (20-5) defends the bantamweight title against Merab Dvalishvili (21-5) in their trilogy bout." },
        { q: "How did Petr Yan win the bantamweight title?", a: "By unanimous decision over Merab Dvalishvili at UFC 323 on 6 December 2025, ending Dvalishvili\u2019s fourteen-fight winning streak." },
        { q: "Is Movsar Evloev undefeated?", a: "Yes. He enters UFC 333 at 20-0, having earned the title shot with a decision win over Lerone Murphy at UFC London in March 2026." }
      ],
    },
    {
      id: "ufc-008",
      slug: "umar-nurmagomedov-fighter-profile-2026",
      title: "Umar Nurmagomedov: Seven Submissions, One Loss, and a Second Run at the Belt",
      excerpt:
        "The bantamweight No.3 fights in Shanghai next weekend. A look at what the record actually says about him \u2014 and what the one blemish cost.",
      bodyHtml:
        p(
          "<strong>Umar Nurmagomedov</strong> is 20-1 as a professional and ranked third at bantamweight. Next Saturday in Shanghai he meets <strong>Song Yadong</strong>, ranked sixth, in a fight the division has effectively made an eliminator.",
          "He is 30, fights out of Dagestan, stands 5\u20198\u201D with a 69-inch reach, and made his octagon debut on 20 January 2021. He carries <strong>seven submission wins and five first-round finishes</strong>."
        ) +
        h2("The one loss") +
        p(
          "On 18 January 2025 at UFC 311 he challenged <strong>Merab Dvalishvili</strong> for the bantamweight title and lost a unanimous decision. That is the entire blemish on the record \u2014 one fight, at the highest level, against a champion in the middle of a fourteen-fight run.",
          "What he has done since is rebuild without shortcuts. A unanimous decision over <strong>Mario Bautista</strong> at UFC 321 in October 2025, then a unanimous decision over former flyweight champion <strong>Deiveson Figueiredo</strong> at UFC 324 in January 2026."
        ) +
        h2("The Song Yadong problem") +
        p(
          "Song is 23-9-1 and comes in off a submission win over the same Figueiredo \u2014 a second-round guillotine at UFC Fight Night Macau in May, which is a very different way of solving the same opponent.",
          "The obvious framing is grappler against boxer: UFC.com lists Song\u2019s fighting style as boxer, and Nurmagomedov\u2019s seven submissions speak for themselves. The less obvious question is what happens in the rounds where neither man gets his preferred fight, because both have shown they can win those."
        ) +
        h2("What is actually at stake") +
        p(
          "The bantamweight belt is held by <strong>Petr Yan</strong>, who defends against Dvalishvili in a trilogy fight at UFC 333 in Abu Dhabi on 24 October. Whoever wins in Shanghai is next in a very short queue.",
          "For Nurmagomedov specifically, a third straight win since the title loss makes the case difficult to argue against \u2014 and it would be a rematch with the man who beat him, or a first meeting with the man who beat that man."
        ) +
        h2("Card details") +
        p(
          "UFC Fight Night: Nurmagomedov vs Song is on <strong>Saturday 29 August 2026 in Shanghai</strong>, broadcast on Paramount+. The co-main is <strong>Yan Xiaonan</strong> (19-5, ranked fourth at women\u2019s strawweight) against <strong>Denise Gomes</strong> (12-3, ranked fourteenth).",
          "Kai Asakura, Alex Perez, Sumudaerji, Jack Jenkins and former strawweight champion Xiong Jingnan also feature on the card."
        ),
      featuredImage: {
        url: "/art/ufcreview/umar-nurmagomedov-fighter-profile-2026.svg",
        alt: "Abstract octagon artwork for the Umar Nurmagomedov fighter profile",
        width: 1600,
        height: 900,
        credit: "UFC Review editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "fighters",
      tags: ["Umar Nurmagomedov", "Song Yadong", "Bantamweight", "Shanghai", "Fighter Profile"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T04:30:00Z",
      updatedAt: "2026-08-21T04:30:00Z",
      theaibetSport: "ufc",
      theaibetCtaLabel: "See the AI model\u2019s probability and edge for Nurmagomedov vs Song",
      masterStoryId: "MS-2026-0821-UMAR-PROFILE",
      faq: [
        { q: "What is Umar Nurmagomedov\u2019s record?", a: "20-1. His only defeat is a unanimous decision to Merab Dvalishvili in a bantamweight title fight at UFC 311 on 18 January 2025." },
        { q: "Where is Umar Nurmagomedov ranked?", a: "Third at bantamweight on the UFC\u2019s official rankings as at August 2026." },
        { q: "Who does Umar Nurmagomedov fight next?", a: "Song Yadong, ranked sixth at bantamweight, at UFC Fight Night in Shanghai on Saturday 29 August 2026." },
        { q: "How many finishes does Umar Nurmagomedov have?", a: "He has seven submission wins and five first-round finishes across his 20 professional victories." },
        { q: "Who holds the UFC bantamweight title?", a: "Petr Yan, who beat Merab Dvalishvili by unanimous decision at UFC 323 in December 2025. He defends against Dvalishvili in a trilogy fight at UFC 333 on 24 October 2026." }
      ],
    },
    {
      id: "ufc-005",
      slug: "umar-nurmagomedov-song-yadong-shanghai-preview",
      title: "Umar Nurmagomedov v Song Yadong: A Title Eliminator in Shanghai",
      excerpt:
        "The No. 3 bantamweight takes on the No. 5 in a fight the winner almost certainly turns into a title shot.",
      bodyHtml:
        p(
          "The UFC returns to Shanghai on Saturday 29 August with a bantamweight main event that carries genuine championship weight: No. 3-ranked Umar Nurmagomedov (20-1) against No. 5-ranked Song Yadong (23-9-1) at the Shanghai Oriental Sports Center.",
          "This is a title-challenger eliminator in everything but name. Two of the division's top five, both with reasons to believe the winner is next."
        ) +
        h2("The 20-1 problem") +
        p(
          "Nurmagomedov's record tells the story of a fighter who has beaten almost everyone put in front of him \u2014 a single defeat across 21 professional fights, and a skill set built on the smothering wrestling-and-pressure template that has made his surname the most feared in the sport.",
          "The tactical question is whether Song can prevent that template from being applied. Once Nurmagomedov establishes control positions, rounds tend to evaporate quietly on the scorecards."
        ) +
        h2("Song at home") +
        p(
          "Song Yadong fights in China as the region's biggest homegrown draw, and a 23-9-1 record built largely against the division's upper half gives him the experience edge in fight-week chaos.",
          "His path is the striker's path: keep the fight vertical, make the exchanges happen in space, and force his opponent to take risks to close distance. Song's counter-right has ended nights before."
        ) +
        h2("The rest of the card") +
        p(
          "The co-main is a strong one in its own right \u2014 No. 4-ranked Yan Xiaonan (19-5) against No. 13 Denise Gomes at women's strawweight, a fight with its own contender implications.",
          "Elsewhere, Alex Perez (26-10) meets Sumudaerji in a flyweight rematch, Junior Tafa faces Liu Ce at light heavyweight, and unbeaten-in-the-UFC flyweight Rei Tsuruya (11-1) takes on Kevin Borjas."
        ),
      categorySlug: "previews",
      tags: ["UFC Shanghai", "Umar Nurmagomedov", "Song Yadong", "Bantamweight"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-20T06:00:00Z",
      updatedAt: "2026-08-20T06:00:00Z",
      featuredImage: {
        url: "/art/ufcreview/umar-nurmagomedov-song-yadong-shanghai-preview.svg",
        alt: "Abstract octagon artwork for the Nurmagomedov v Song title eliminator in Shanghai",
        width: 1600,
        height: 900,
        credit: "UFC Review editorial artwork",
        license: "owned",
        source: "generated",
      },
      theaibetSport: "ufc",
      theaibetEventId: "ufc-shanghai-2026",
      theaibetCtaLabel: "See the AI fight analysis for Nurmagomedov v Song",
      masterStoryId: "MS-2026-0820-UFC-SHANGHAI",
      faq: [
        { q: "When is UFC Shanghai: Nurmagomedov vs Song?", a: "Saturday 29 August 2026 at the Shanghai Oriental Sports Center in Shanghai, China." },
        { q: "What are Umar Nurmagomedov and Song Yadong's records?", a: "Umar Nurmagomedov is 20-1 and ranked No. 3 at bantamweight; Song Yadong is 23-9-1 and ranked No. 5." },
        { q: "What is the co-main event in Shanghai?", a: "No. 4-ranked Yan Xiaonan (19-5) versus No. 13-ranked Denise Gomes (12-3) at women's strawweight." },
      ],
    },
    {
      id: "ufc-006",
      slug: "ufc-331-van-pantoja-2-preview",
      title: "UFC 331: Joshua Van v Alexandre Pantoja 2 — The Rematch the Title Deserves",
      excerpt:
        "Van won the belt when Pantoja's elbow gave way 26 seconds in. In Los Angeles on 19 September, both men get the fight they were denied.",
      bodyHtml:
        p(
          "Some title fights need a rematch. This one demands it. Joshua Van holds the UFC flyweight championship because Alexandre Pantoja suffered an elbow injury 26 seconds into their meeting at UFC 323 \u2014 a title changing hands before either man had thrown anything meaningful.",
          "On Saturday 19 September at the Crypto.com Arena in Los Angeles, UFC 331 gives the division the fight it was denied."
        ) +
        h2("The champion has since proved the point") +
        p(
          "Whatever the circumstances of the win, Van has answered the obvious question. He defended the belt in emphatic fashion with a fifth-round TKO of Tatsuro Taira at UFC 328 in May \u2014 a finish that late in a championship fight says as much about conditioning and will as it does about power.",
          "A champion who stops a top contender in the fifth is not a paper champion."
        ) +
        h2("Pantoja's last act") +
        p(
          "Pantoja, 36, is chasing history: he would become just the third flyweight in UFC history to reclaim the championship. Before losing the belt he defended it four times \u2014 against Brandon Royval, Steve Erceg, Kai Asakura and Kai Kara-France \u2014 a reign that stands as one of the division's best.",
          "The Brazilian's case rests on the one thing the first fight never tested: whether his grappling and championship-round experience still solve the puzzle Van presents."
        ) +
        h2("A card with weight underneath") +
        p(
          "The co-main is arguably the best non-title fight of the month: No. 2-ranked Arman Tsarukyan against No. 7 Mauricio Ruffy in a five-round lightweight contest with clear title implications.",
          "Further down, Renato Moicano meets Brian Ortega, Patricio Pitbull faces Dooho Choi at featherweight, and Alonzo Menifield takes on Iwo Baraniewski at light heavyweight."
        ),
      categorySlug: "previews",
      tags: ["UFC 331", "Joshua Van", "Alexandre Pantoja", "Flyweight Title", "Arman Tsarukyan"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-20T07:00:00Z",
      updatedAt: "2026-08-20T07:00:00Z",
      featuredImage: {
        url: "/art/ufcreview/ufc-331-van-pantoja-2-preview.svg",
        alt: "Abstract octagon artwork for the UFC 331 flyweight title rematch between Joshua Van and Alexandre Pantoja",
        width: 1600,
        height: 900,
        credit: "UFC Review editorial artwork",
        license: "owned",
        source: "generated",
      },
      theaibetSport: "ufc",
      theaibetEventId: "ufc-331",
      theaibetCtaLabel: "See the AI model's read on Van v Pantoja 2",
      masterStoryId: "MS-2026-0820-UFC331",
      faq: [
        { q: "When is UFC 331?", a: "Saturday 19 September 2026 at Crypto.com Arena in Los Angeles \u2014 Sunday 20 September AEST for Australian viewers." },
        { q: "How did Joshua Van win the flyweight title?", a: "Van became champion at UFC 323 when Alexandre Pantoja suffered an elbow injury 26 seconds into the opening round. Van then defended the title with a fifth-round TKO of Tatsuro Taira at UFC 328 in May." },
        { q: "What is the UFC 331 co-main event?", a: "Arman Tsarukyan (No. 2) versus Mauricio Ruffy (No. 7) in a five-round lightweight bout." },
      ],
    },
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
      author: AUTHORS.zacChristie,
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
      featuredImage: {
        url: "/art/ufcreview/model-vs-market-what-ufc-330-taught-us.svg",
        alt: "Abstract octagon artwork representing model versus market analysis",
        width: 1600,
        height: 900,
        credit: "UFC Review editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "model-vs-market",
      tags: ["Model vs Market", "UFC 330", "Analytics"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-16T09:00:00Z",
      updatedAt: "2026-08-16T09:00:00Z",
      theaibetCtaLabel: "See live model probability, confidence and edge for UFC 330",
      masterStoryId: "MS-2026-0816-UFC330-MVM",
      faq: [
        { q: "Who won the main event at UFC 330?", a: "Islam Makhachev retained the welterweight title with a unanimous decision over Ian Machado Garry, scored 49\u201346 twice and 48\u201347." },
        { q: "What happened in the UFC 330 co-main event?", a: "Mackenzie Dern retained the women's strawweight title against Gillian Robertson on identical scorecards to the main event \u2014 49\u201346, 49\u201346, 48\u201347." },
        { q: "Why are finishes hard for prediction models to price?", a: "A knockout compresses a fight's information into a single exchange. Round-by-round models estimate accumulated advantage, so an early finish like Jalin Turner's 39-second knockout of Kau\u00EA Fernandes sits outside what the model is measuring." },
      ],
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-12T08:00:00Z",
      updatedAt: "2026-08-12T08:00:00Z",
      theaibetCtaLabel: "Explore fighter style data inside TheAIbet",
      masterStoryId: "MS-2026-0812-UFC-STANCE",
      faq: [
        { q: "Why are southpaws overrepresented in MMA?", a: "The advantage is mechanical rather than mystical. In open-stance matchups the straight left lands at meaningfully higher rates than the equivalent orthodox cross, and southpaws face orthodox opponents far more often than the reverse." },
        { q: "What is an open-stance matchup?", a: "A fight between an orthodox fighter and a southpaw, where the two fighters' lead feet are on opposite sides. A closed-stance fight is two fighters in the same stance." },
        { q: "What decides an open-stance exchange?", a: "Outside foot position. Whoever gets their lead foot outside the opponent's aligns their power side with the opponent's centre line; the fighter who loses that position spends the round punching across himself." },
      ],
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
      featuredImage: {
        url: "/photos/ufc-cage-action.jpg",
        alt: "Middleweights trade in close \u2014 the stakes rise in Sacramento",
        width: 842,
        height: 818,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "previews",
      tags: ["UFC Sacramento", "Anthony Hernandez", "Gregory Rodrigues", "Fight Night"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-18T09:00:00Z",
      updatedAt: "2026-08-18T09:00:00Z",
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
      id: "rac-005",
      slug: "winx-stakes-2026-first-group-1-of-the-season",
      title: "The Season Starts Here: Winx Stakes Opens the Group 1 Year at Randwick",
      excerpt:
        "Saturday, 1400 metres, $1 million \u2014 the first Group 1 of the Australian season, and Chris Waller has eight of the fourteen.",
      bodyHtml:
        p(
          "Australian racing has been without a Group 1 since the Tattersall\u2019s Tiara at Eagle Farm on 27 June. That ends on <strong>Saturday 22 August</strong>, when the <strong>Winx Stakes</strong> is run over 1400 metres at Royal Randwick for $1 million \u2014 the first Group 1 of the new season and the traditional front door to the Sydney spring.",
          "It is also, on the face of the field, a Chris Waller benefit. He saddles <strong>eight of the fourteen</strong>."
        ) +
        h2("The field") +
        p(
          "<strong>Autumn Glow</strong> is the $1.90 favourite for Waller, with <strong>James McDonald</strong> aboard from barrier three. <strong>Sheza Alibi</strong> ($3.10, Peter G Moody and Katherine Coleman, Luke Nolen) draws the inside gate.",
          "The rest, in barrier order: Lady Shenandoah (Waller, McEvoy), Beiwacht, Midnight Dynamite (Bjorn Baker), Autumn Boy, Gringotts (Ciaron Maher, Ethan Brown), Ceolwulf (Joseph Pride), Idle Flyer (Matthew Smith), Fangirl (Waller, Tommy Berry), Aeliana, Lindermann (Hugh Bowman), Barnavara and Green Spaces."
        ) +
        h2("What Waller is really doing") +
        p(
          "Autumn Glow has been nominated for the Cox Plate, and Waller has been careful about what that means. \u201CIt\u2019s not on our radar, but if James at any stage says, \u2018have a go at the Cox Plate\u2019 she\u2019ll be having a go,\u201D he said.",
          "That is the honest position for most of this field. The Winx Stakes is a Group 1 worth winning, but for the better half of the card it is a fitness test with prizemoney attached \u2014 the first read on horses whose real targets are seven weeks away."
        ) +
        h2("The rest of the card") +
        p(
          "Randwick also stages the <strong>Silver Shadow Stakes</strong> (1200m) and the <strong>Show County Quality</strong> (1200m) as supporting black type, along with the Premier\u2019s Cup over 2000 metres and the Drinkwise Mile.",
          "Elsewhere on Saturday: <strong>Sandown</strong> hosts the Listed Carlyon Stakes in Melbourne, <strong>Doomben</strong> runs its Mekka Raceday in Brisbane, and <strong>Belmont Park</strong> has the Idyllic Prince Stakes in Perth. Moonee Valley is not racing \u2014 it is closed for redevelopment \u2014 and Ascot does not return until the warmer months, with Belmont carrying the Perth winter season through to 26 September."
        ) +
        h2("Then the real spring") +
        p(
          "The following Saturday, 29 August, splits between the <strong>Memsie Stakes</strong> at Caulfield \u2014 Melbourne\u2019s first Group 1 \u2014 and the Group 3 <strong>San Domenico Stakes</strong> at Rosehill.",
          "From there Sydney runs Golden Rose (26 September, Rosehill), Epsom Day (3 October, Randwick), <strong>Everest Day (17 October, Randwick)</strong> and Golden Eagle (31 October)."
        ),
      featuredImage: {
        url: "/photos/racing-close-finish.jpg",
        alt: "A tight finish between horses at the post",
        width: 1200,
        height: 800,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "previews",
      tags: ["Winx Stakes", "Randwick", "Group 1", "Chris Waller", "Autumn Glow"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T06:00:00Z",
      updatedAt: "2026-08-21T06:00:00Z",
      theaibetSport: "racing",
      theaibetCtaLabel: "See the AI model\u2019s ratings for Randwick on Saturday",
      masterStoryId: "MS-2026-0821-WINX-STAKES",
      faq: [
        { q: "When is the 2026 Winx Stakes?", a: "Saturday 22 August 2026 at Royal Randwick, over 1400 metres for $1 million. It is the first Group 1 of the Australian racing season." },
        { q: "Who is favourite for the Winx Stakes?", a: "Autumn Glow at $1.90, trained by Chris Waller and ridden by James McDonald from barrier three. Sheza Alibi is next at $3.10." },
        { q: "How many runners does Chris Waller have in the Winx Stakes?", a: "Eight of the fourteen, including Autumn Glow, Lady Shenandoah and Fangirl." },
        { q: "What was the last Group 1 before the Winx Stakes?", a: "The Tattersall\u2019s Tiara at Eagle Farm on 27 June 2026, won by Splash Back for trainer Grahame Begg and jockey Jordan Childs \u2014 the final Group 1 of the 2025-26 season." }
      ],
    },
    {
      id: "rac-006",
      slug: "cox-plate-2026-moves-to-flemington",
      title: "The Cox Plate Is Leaving the Valley: What Flemington Does to Australia\u2019s Weight-For-Age Championship",
      excerpt:
        "For the first time in its history the Cox Plate will be run somewhere other than Moonee Valley. The track is closed, and the race the Valley built has to work somewhere else.",
      bodyHtml:
        p(
          "The <strong>2026 Cox Plate will be run at Flemington on Saturday 24 October</strong>, over 2040 metres. It is the first time in the race\u2019s history it has been staged anywhere other than Moonee Valley.",
          "The reason is straightforward: the Valley is closed for redevelopment, a shutdown of at least 21 months from November 2025. The reason it matters is anything but."
        ) +
        h2("The Valley made the race") +
        p(
          "Moonee Valley is 1805 metres round with a short straight and tight turns. That geometry is the Cox Plate. It is why the race has so often gone to the horse who could hold a position and quicken off a genuine tempo rather than the horse with the biggest raw finish \u2014 there is nowhere to make up five lengths at the Valley if you have not been in the race turning for home.",
          "Flemington is the opposite proposition. Big, galloping, a 450-metre straight. The horse who is three-wide and last on the turn is not out of it."
        ) +
        h2("What that does to the form") +
        p(
          "Every Cox Plate trend built on Valley bias should be treated as suspect for this running. Barrier statistics, on-pace bias, the historic weight of tactical speed \u2014 all of it was measured at a track this race is not being run on.",
          "The honest position for punters is that the 2026 Cox Plate is closer to a first running than a 106th. Handicappers and models trained on Valley data are working from the wrong track."
        ) +
        h2("It is not the only race that moved") +
        p(
          "Racing Victoria\u2019s 2026 spring programme has redeployed a string of Valley features. The <strong>Moir Stakes</strong> (Group 1, 1000m) goes to <strong>Sandown</strong> on 5 September. The <strong>Manikato Stakes</strong> moves to <strong>Caulfield</strong>. The Zipping Classic stays at Sandown.",
          "Racing Victoria chief executive Aaron Morrison framed the Flemington decision commercially: \u201CFlemington is the best location to maximise attendance, wagering and engagement with the meeting.\u201D Moonee Valley Racing Club chief executive Michael Browell acknowledged the obvious \u2014 it is \u201Cthe first time the race has been run at a different track.\u201D"
        ) +
        h2("The nominations") +
        p(
          "The MVRC took <strong>103 nominations</strong> for the 2026 running. <strong>Sir Delius</strong> (Gai Waterhouse and Adrian Bott) heads the local entries after missing last year\u2019s race. <strong>Gstaad</strong>, runner-up in the Group 1 Sussex Stakes at Goodwood, and Royal Ascot winner <strong>Map Of Stars</strong> lead the international interest, with <strong>Buckaroo</strong> back after finishing second last year.",
          "<strong>Aeliana</strong>, sixth in 2025, is being aimed at it again. Waller: \u201CWe\u2019ll probably make it her target race\u2026 a Cox Plate.\u201D"
        ),
      featuredImage: {
        url: "/photos/flemington-finish.jpg",
        alt: "Horses race to the line at Flemington",
        width: 1200,
        height: 800,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "tracks",
      tags: ["Cox Plate", "Flemington", "Moonee Valley", "Spring Carnival", "Track Bias"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T06:30:00Z",
      updatedAt: "2026-08-21T06:30:00Z",
      theaibetSport: "racing",
      theaibetCtaLabel: "See how the AI model rates the spring staying and weight-for-age races",
      masterStoryId: "MS-2026-0821-COX-PLATE-FLEMINGTON",
      faq: [
        { q: "Where is the 2026 Cox Plate being run?", a: "Flemington, on Saturday 24 October 2026, over 2040 metres. It is the first Cox Plate in the race\u2019s history run at a track other than Moonee Valley." },
        { q: "Why has the Cox Plate moved from Moonee Valley?", a: "Moonee Valley is closed for redevelopment, a shutdown of at least 21 months from November 2025. Racing Victoria selected Flemington to host the 2026 running." },
        { q: "Does the track change affect Cox Plate form?", a: "Substantially. Moonee Valley is 1805 metres round with a short straight, which historically favoured tactical speed and on-pace runners. Flemington is a big galloping track with a 450-metre straight, so Valley-derived barrier and pace trends should be treated as unreliable for this running." },
        { q: "Which other races moved from Moonee Valley in 2026?", a: "The Moir Stakes goes to Sandown on 5 September and the Manikato Stakes to Caulfield, among other redeployed features in Racing Victoria\u2019s 2026 spring programme." }
      ],
    },
    {
      id: "rac-007",
      slug: "caulfield-cup-2026-nominations-150th-running",
      title: "124 Nominations for the 150th Caulfield Cup \u2014 and the Melbourne Cup Winner Heads Them",
      excerpt:
        "Half Yours leads a $6 million field that has drawn Aidan O\u2019Brien, Willie Mullins and William Haggas. Waller has 18 entries on his own.",
      bodyHtml:
        p(
          "The <strong>150th Caulfield Cup</strong> has attracted <strong>124 nominations</strong> for the $6 million Group 1 over 2400 metres at Caulfield on <strong>Saturday 17 October</strong>.",
          "Heading them is <strong>Half Yours</strong>, the reigning Melbourne Cup winner \u2014 which is the sort of entry that sets the tone for an entire staying spring."
        ) +
        h2("Who has the numbers") +
        p(
          "<strong>Chris Waller</strong> leads all nominators with 18 entries. <strong>Ciaron Maher</strong> and <strong>Joseph O\u2019Brien</strong> have 15 apiece.",
          "The Australian list also includes Sir Delius, Treasurethe Moment, Cosmic Crusader, Green Spaces, Yellow Jersey, King Pedro and She\u2019s A Hustler."
        ) +
        h2("The European raid") +
        p(
          "The international contingent is deep. <strong>Aidan O\u2019Brien</strong> has entered Causeway. <strong>Willie Mullins</strong> has three \u2014 Gaucher, Love Me Tender and Thread Of Gold. <strong>Andrew Balding</strong> has Fantasy World, Mount Atlas and Tarriance. <strong>Roger Varian</strong> nominated Enfjaar and <strong>William Haggas</strong> Tenability.",
          "Handicap staying races worth $6 million do not need to advertise themselves in Europe any more, and the entry sheet reflects that."
        ) +
        h2("Key dates") +
        p(
          "Late nominations close on <strong>8 September</strong> at $6,500. First declarations are due <strong>22 September</strong>.",
          "The Caulfield Cup sits a week before the Cox Plate \u2014 which this year is at Flemington, not Moonee Valley \u2014 and just over two weeks before the Melbourne Cup on Tuesday 3 November."
        ) +
        h2("Where the Cup fits") +
        p(
          "The 2026 Melbourne spring runs from the Memsie Stakes on 29 August through to 29 November. The staying path into October goes Turnbull Stakes (3 October, Flemington), Caulfield Cup (17 October), Cox Plate (24 October), Victoria Derby (31 October) and Melbourne Cup (3 November).",
          "For a horse like Half Yours, the Caulfield Cup is the question of whether last November was a peak or a plateau."
        ),
      featuredImage: {
        url: "/photos/racing-finish-roses.jpg",
        alt: "A winning horse and jockey after a feature race",
        width: 1200,
        height: 800,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "news",
      tags: ["Caulfield Cup", "Nominations", "Half Yours", "Chris Waller", "Spring Carnival"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T07:00:00Z",
      updatedAt: "2026-08-21T07:00:00Z",
      theaibetSport: "racing",
      theaibetCtaLabel: "Track AI ratings across the spring staying races",
      masterStoryId: "MS-2026-0821-CAULFIELD-CUP-NOMS",
      faq: [
        { q: "When is the 2026 Caulfield Cup?", a: "Saturday 17 October 2026 at Caulfield, over 2400 metres for $6 million. It is the 150th running of the race." },
        { q: "How many nominations did the 2026 Caulfield Cup receive?", a: "124. Chris Waller leads all nominators with 18 entries, ahead of Ciaron Maher and Joseph O\u2019Brien on 15 each." },
        { q: "Is the Melbourne Cup winner nominated for the Caulfield Cup?", a: "Yes. Half Yours, the reigning Melbourne Cup winner, heads the nominations." },
        { q: "When do Caulfield Cup nominations close?", a: "Late nominations close on 8 September 2026 at $6,500, with first declarations due on 22 September." }
      ],
    },
    {
      id: "rac-001",
      slug: "memsie-stakes-day-preview-caulfield",
      title: "Memsie Stakes 2026: Melbourne\u2019s Spring Opens at Caulfield",
      excerpt:
        "Saturday 29 August, 1400 metres, Group 1 \u2014 the first serious Melbourne mission of the spring, and the traditional launching pad for October.",
      bodyHtml:
        p(
          "The Melbourne spring opens properly on <strong>Saturday 29 August</strong>, when the Group 1 Memsie Stakes is run over 1400 metres at Caulfield. Racing Victoria has the carnival running from that date through to 29 November.",
          "The Memsie has always been a race about intent. It is where the good weight-for-age horses declare themselves, and where the Cox Plate and Caulfield Cup campaigns get their first public read."
        ) +
        h2("Who is being aimed at it") +
        p(
          "<strong>Cosmic Crusader</strong> comes out of the Group 2 P.B. Lawrence Stakes at Caulfield on 15 August, which he won \u2014 two from two since making the trip across from Perth \u2014 and is squarely in the frame here.",
          "<strong>Mr Brightside</strong>, <strong>Tom Kitten</strong> and <strong>Treasurethe Moment</strong> have all been reported as being readied for their first starts of the preparation in the Memsie. Aethera, De Bergerac, Giga Kick and Yellow Jersey were among others put through a Caulfield Heath trial in the lead-up."
        ) +
        h2("The Memsie puzzle") +
        p(
          "The eternal question in this race is fresh class against match fitness: proven weight-for-age horses resuming, against in-form sprinter-milers already wound up. Caulfield over 1400 metres in late winter rarely forgives a wide gate.",
          "Final fields and barriers are released on the Wednesday of race week, which is when the market does most of its real moving. Anything quoted before then is a futures price on an assumed field, not a bet on a confirmed one."
        ) +
        h2("What it feeds") +
        p(
          "The 2026 spring runs Memsie (29 Aug) into the Makybe Diva Stakes at Flemington on 12 September, the Turnbull Stakes on 3 October, the Caulfield Cup on 17 October and the Cox Plate on 24 October.",
          "One change worth carrying into every one of those previews: the <strong>Cox Plate is at Flemington this year</strong>, not Moonee Valley, with the Valley closed for redevelopment. It is the first time in the race\u2019s history it has been run at another track."
        ),
      featuredImage: {
        url: "/photos/racing-field.jpg",
        alt: "A field of thoroughbreds races down the straight",
        width: 1200,
        height: 800,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "previews",
      tags: ["Memsie Stakes", "Caulfield", "Group 1", "Spring Carnival", "Cosmic Crusader"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-18T00:00:00Z",
      updatedAt: "2026-08-21T03:00:00Z",
      theaibetSport: "racing",
      theaibetCtaLabel: "See the AI model\u2019s read on Memsie Stakes day",
      masterStoryId: "MS-2026-0818-MEMSIE",
      faq: [
        { q: "When is the 2026 Memsie Stakes?", a: "Saturday 29 August 2026 at Caulfield, over 1400 metres. It is a Group 1 and the opening feature of the Melbourne spring carnival." },
        { q: "Which horses are being aimed at the Memsie Stakes?", a: "Cosmic Crusader comes off a P.B. Lawrence Stakes win on 15 August, and Mr Brightside, Tom Kitten and Treasurethe Moment have all been reported as being prepared for first-up runs in the race. The final field is released on the Wednesday of race week." },
        { q: "Where is the 2026 Cox Plate being run?", a: "Flemington, on Saturday 24 October 2026. Moonee Valley is closed for redevelopment, making it the first Cox Plate run at another track in the race\u2019s history." },
        { q: "What are the key Melbourne spring dates in 2026?", a: "Memsie Stakes 29 August, Makybe Diva Stakes 12 September, Turnbull Stakes 3 October, Caulfield Cup 17 October, Cox Plate 24 October and the Melbourne Cup on Tuesday 3 November." }
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
      featuredImage: {
        url: "/art/puntersreview/understanding-market-percentages-betting-education.svg",
        alt: "Abstract racing artwork representing betting market percentages",
        width: 1600,
        height: 900,
        credit: "Punters Review editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "education",
      tags: ["Betting Education", "Value", "Markets"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-14T21:00:00Z",
      updatedAt: "2026-08-14T21:00:00Z",
      theaibetCtaLabel: "Compare AI-assessed probabilities against market prices",
      masterStoryId: "MS-2026-0814-EDU-PERCENT",
      faq: [
        { q: "What is a market percentage or overround?", a: "The amount by which a betting market's implied probabilities exceed 100 per cent. A market framed to 116 per cent means the prices are collectively 16 per cent worse than fair, and that gap is the bookmaker's margin." },
        { q: "How do you convert odds into implied probability?", a: "Divide 100 by the decimal odds. A $4 chance is implied at 25 per cent; a $2.50 chance is implied at 40 per cent." },
        { q: "What does 'value' actually mean in betting?", a: "A bet has value when the price's implied probability is lower than your own assessed probability of the outcome. It is a long-run concept \u2014 any single result tells you nothing about whether the bet was correct." },
        { q: "Where are markets weakest?", a: "In thin midweek markets, in early markets before scratchings settle, and in races where a single piece of information such as a track bias or a gear change has not yet been fully absorbed." },
      ],
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-15T21:00:00Z",
      updatedAt: "2026-08-15T21:00:00Z",
      featuredImage: {
        url: "/art/puntersreview/how-track-bias-works-betting-education.svg",
        alt: "Abstract racing artwork illustrating track bias and rail position",
        width: 1600,
        height: 900,
        credit: "Punters Review editorial artwork",
        license: "owned",
        source: "generated",
      },
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
          "The win took her past $2.7 million in earnings \u2014 more than 300 times her purchase price \u2014 and pointed the campaign at Sydney. She has <strong>no Everest slot</strong>: the plan reported at the start of August is a spring run beginning in The Shorts, the most traditional path any horse takes toward the $20 million race."
        ) +
        h2("The mountain in the way") +
        p(
          "Waiting at Randwick is the horse many judges now call the best sprinter in the world. Ka Ying Rising, Hong Kong's champion, won the 2025 Everest and is being prepared to come back for it \u2014 the Hong Kong Jockey Club holds its slot under a two-year agreement struck in 2025, which covers this running.",
          "That is the equation facing every slot-holder this spring: take the proven mountain, or back the story still being written."
        ) +
        h2("The case for the mare") +
        p(
          "Trainer Toby Edmonds isn't shying from the target, but he has never claimed more than he has. \u201CHopefully this mare might attract an Everest slot, we'll see what happens,\u201D he said after the Stradbroke. Two months on, that is still exactly where it sits \u2014 a campaign built to earn a slot, not one that has been given one.",
          "A Stradbroke-winning mare, rising through the sprinting ranks at the right time of year, with the race of her life on the calendar and the best sprinter alive standing at the top of it. Australian racing does not script them better."
        ),
      categorySlug: "news",
      tags: ["Spicy Martini", "The Everest", "Ka Ying Rising", "Randwick", "Stradbroke"],
      author: AUTHORS.zacChristie,
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
      theaibetCtaLabel: "See TheAIbet's AI analysis of the Everest sprinters",
      masterStoryId: "MS-2026-0818-SPICY-MARTINI",
      faq: [
        { q: "Does Spicy Martini have an Everest slot?", a: "No. As at August 2026 she has not been named in any of the twelve slots. Trainer Toby Edmonds said after the Stradbroke only that \u201Chopefully this mare might attract an Everest slot\u201D, and her reported spring campaign begins in The Shorts." },
        { q: "What has Spicy Martini won?", a: "The $3 million Group 1 Stradbroke Handicap at Eagle Farm in June 2026 \u2014 a first Group 1 for jockey Taylor Marshall. Her earnings now exceed $2.7 million, more than 300 times her $8,000 purchase price." },
        { q: "When and where is The Everest run?", a: "Saturday 17 October 2026 at Royal Randwick, over 1200 metres for $20 million, with twelve starters selected by twelve slot-holders." },
        { q: "Who won the 2025 Everest?", a: "Ka Ying Rising, for the Hong Kong Jockey Club, which holds its slot under a two-year agreement struck in 2025." },
      ],
    },
  ],

  sportinformation: [
    {
      id: "spo-005",
      slug: "nrl-2026-ladder-race-for-the-eight",
      title: "NRL 2026: The Ladder, the Run Home and the Race for the Eight",
      excerpt:
        "Three rounds left. Penrith and the Roosters are locked together on 38 points and four clubs are fighting over the last two spots.",
      bodyHtml:
        p(
          "With three rounds of the 2026 Telstra Premiership still to play, the top of the NRL ladder is a two-horse race and the bottom of the eight is a genuine scramble.",
          "<strong>Penrith</strong> and the <strong>Roosters</strong> are level on 38 points, separated only by points differential \u2014 Penrith +294, the Roosters +163. The <strong>Warriors</strong> sit third on 36 with a differential of +276, which is the second-best in the competition."
        ) +
        h2("The ladder") +
        p(
          "1. Panthers 38 \u00b7 2. Roosters 38 \u00b7 3. Warriors 36 \u00b7 4. Dolphins 34 \u00b7 5. Sharks 32 \u00b7 6. Knights 32 \u00b7 7. Rabbitohs 30 \u00b7 8. Cowboys 30 \u00b7 9. Bulldogs 26 \u00b7 10. Sea Eagles 24 \u00b7 11. Storm 24 \u00b7 12. Raiders 24.",
          "The Cowboys hold eighth on 30 points but with a differential of \u2212 78 \u2014 the only side inside the eight with a negative record. The Bulldogs are four points back on 26 with two rounds to make it up."
        ) +
        h2("What is left") +
        p(
          "Round 25 runs 20\u201323 August, Round 26 from 27\u201330 August, and the final round from 3\u20136 September. The regular season ends on <strong>Sunday 6 September</strong>.",
          "Byes still matter: the Cowboys have theirs in Round 25, the Raiders in Round 26 and the Knights in Round 27. In a competition where four clubs are separated by six points, a bye in the wrong week is a real disadvantage."
        ) +
        h2("How the NRL finals work") +
        p(
          "The NRL runs a top-eight over four weeks. Week one has two qualifying finals \u2014 <strong>1st hosts 4th</strong>, <strong>2nd hosts 3rd</strong> \u2014 and two elimination finals, <strong>5th hosts 8th</strong> and <strong>6th hosts 7th</strong>. Elimination final losers are out.",
          "Qualifying final winners get a bye straight to a home preliminary final. Qualifying final losers drop into home semi-finals against the elimination final winners. That is the double chance, and it is why the difference between fourth and fifth is worth more than one ladder position suggests: the top four need two wins to reach the decider, fifth through eighth need three."
        ) +
        h2("Grand Final") +
        p(
          "The <strong>2026 NRL Grand Final is Sunday 4 October at Accor Stadium</strong>, sharing the day with the NRLW decider.",
          "The week-by-week finals fixture is confirmed after the final round, once the ladder is locked."
        ),
      featuredImage: {
        url: "/photos/nrl-eels.jpg",
        alt: "NRL players contest possession",
        width: 1200,
        height: 800,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "nrl",
      tags: ["NRL", "Ladder", "Finals", "Penrith", "Roosters"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T07:30:00Z",
      updatedAt: "2026-08-21T07:30:00Z",
      theaibetSport: "nrl",
      theaibetCtaLabel: "See AI-modelled NRL finals probabilities",
      masterStoryId: "MS-2026-0821-NRL-LADDER",
      faq: [
        { q: "Who is on top of the NRL ladder in 2026?", a: "Penrith and the Roosters are level on 38 points with three rounds remaining, separated by points differential \u2014 Penrith +294 to the Roosters\u2019 +163." },
        { q: "When does the 2026 NRL regular season end?", a: "Sunday 6 September 2026, at the end of Round 27." },
        { q: "How does the NRL finals system work?", a: "A top-eight over four weeks. Week one: 1st hosts 4th and 2nd hosts 3rd in qualifying finals, 5th hosts 8th and 6th hosts 7th in elimination finals. Qualifying final winners go straight to a home preliminary final; qualifying final losers host semi-finals." },
        { q: "When is the 2026 NRL Grand Final?", a: "Sunday 4 October 2026 at Accor Stadium in Sydney, on the same day as the NRLW Grand Final." }
      ],
    },
    {
      id: "spo-006",
      slug: "australian-sport-calendar-september-november-2026",
      title: "What\u2019s On: The Australian Sport Calendar, September to November 2026",
      excerpt:
        "Two finals series, the NFL\u2019s first regular-season game at the MCG, Brazil at Lang Park and a spring carnival that has moved its biggest race.",
      bodyHtml:
        p(
          "The next ten weeks are the densest stretch of the Australian sporting year. Both football codes reach their finals, the spring carnival runs its full course, and two genuine firsts land inside a fortnight of each other.",
          "Every date below is as published by the relevant governing body or venue."
        ) +
        h2("Football codes") +
        p(
          "<strong>AFL Wildcard Round</strong> \u2014 the weekend after Round 24, in the old pre-finals bye slot. New for 2026: 7th v 10th and 8th v 9th, with the winners joining the top six in a ten-team, five-week finals series. <strong>AFL Grand Final: Saturday 26 September, MCG, 2:30pm AEST.</strong>",
          "<strong>NRL regular season ends Sunday 6 September</strong> after Round 27, followed by a four-week top-eight finals series. <strong>NRL Grand Final: Sunday 4 October, Accor Stadium</strong>, shared with the NRLW decider."
        ) +
        h2("The firsts") +
        p(
          "<strong>NFL at the MCG</strong> \u2014 the Los Angeles Rams play the San Francisco 49ers on <strong>Friday 11 September, 10:35am AEST</strong>. It is the first NFL regular-season game ever staged in Australia.",
          "<strong>The Cox Plate at Flemington</strong> \u2014 Saturday 24 October. The first time in the race\u2019s history it has been run anywhere other than Moonee Valley, which is closed for redevelopment."
        ) +
        h2("Racing") +
        p(
          "Memsie Stakes 29 August (Caulfield) \u00b7 Moir Stakes 5 September (Sandown) \u00b7 Makybe Diva Stakes 12 September (Flemington) \u00b7 Golden Rose 26 September (Rosehill) \u00b7 Turnbull Stakes 3 October (Flemington) \u00b7 Epsom Day 3 October (Randwick).",
          "<strong>The Everest</strong> 17 October (Randwick, $20 million, 1200m) \u00b7 Caulfield Cup 17 October \u00b7 <strong>Cox Plate 24 October (Flemington)</strong> \u00b7 Victoria Derby and Golden Eagle 31 October \u00b7 <strong>Melbourne Cup Tuesday 3 November</strong> \u00b7 Crown Oaks 5 November \u00b7 Champions Day 7 November."
        ) +
        h2("Cricket, rugby and football") +
        p(
          "<strong>Cricket:</strong> the second Test between Australia and Bangladesh runs <strong>22\u201326 August at Great Barrier Reef Arena, Mackay</strong>. Bangladesh won the first Test in Darwin by nine wickets \u2014 their first Test victory in Australia.",
          "<strong>Rugby:</strong> the Wallabies tour Argentina for Tests on <strong>29 August and 5 September</strong>, then host South Africa on 27 September before the Bledisloe Cup on 10 October (away) and 17 October at Accor Stadium.",
          "<strong>Football:</strong> the Socceroos host <strong>Brazil</strong> at Lang Park in Brisbane on <strong>25 September</strong> and again in Townsville on 29 September. The A-League Men season opens <strong>Friday 16 October</strong> with a Sydney Derby at Allianz Stadium."
        ) +
        h2("Basketball and tennis") +
        p(
          "<strong>Boomers</strong> FIBA World Cup qualifiers in Manila: v Syria Friday 28 August and v Jordan Sunday 30 August, both 7:00pm AEST. Australia are unbeaten through six qualifiers.",
          "<strong>NBL27</strong> tips off Saturday 19 September. The <strong>NBA</strong> 2026-27 season starts Tuesday 20 October US time \u2014 Wednesday 21 October AEDT. The <strong>US Open</strong> main draw begins Sunday 30 August."
        ),
      featuredImage: {
        url: "/art/sportinformation/australian-sport-calendar-september-november-2026.svg",
        alt: "Abstract data artwork representing the Australian sporting calendar",
        width: 1600,
        height: 900,
        credit: "Sport Information editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "explainers",
      tags: ["Calendar", "AFL", "NRL", "Racing", "NFL", "Cricket"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T08:00:00Z",
      updatedAt: "2026-08-21T08:00:00Z",
      theaibetSport: "general",
      theaibetCtaLabel: "See AI analysis across every sport on the calendar",
      masterStoryId: "MS-2026-0821-SPORT-CALENDAR",
      faq: [
        { q: "When is the 2026 AFL Grand Final?", a: "Saturday 26 September 2026 at the MCG, 2:30pm AEST." },
        { q: "When is the 2026 NRL Grand Final?", a: "Sunday 4 October 2026 at Accor Stadium in Sydney." },
        { q: "Is the NFL playing a game in Australia in 2026?", a: "Yes. The Los Angeles Rams play the San Francisco 49ers at the MCG on Friday 11 September 2026 at 10:35am AEST \u2014 the first NFL regular-season game held in Australia." },
        { q: "When is the 2026 Melbourne Cup?", a: "Tuesday 3 November 2026 at Flemington." },
        { q: "When do the Socceroos play Brazil?", a: "Friday 25 September 2026 at Lang Park in Brisbane, and again on 29 September in Townsville." }
      ],
    },
    {
      id: "spo-001",
      slug: "afl-finals-system-explained",
      title: "AFL Finals 2026 Explained: How the New Wildcard Round Works",
      excerpt:
        "The AFL has changed its finals system for the first time in 25 years. Ten teams, five weeks, and a new Wildcard Round \u2014 here is exactly how it works.",
      bodyHtml:
        p(
          "For the first time since 2000, the AFL has changed the shape of its finals series. From 2026 the competition runs a <strong>five-week, ten-team finals campaign</strong>, opening with a new <strong>Wildcard Round</strong> played on what used to be the pre-finals bye weekend.",
          "The old top-eight McIntyre system is gone. Two extra clubs now get a September, and two of the clubs who finish inside the eight have to survive an extra week before the finals proper begin."
        ) +
        h2("Wildcard Round: 7th v 10th, 8th v 9th") +
        p(
          "The four clubs finishing seventh to tenth play off across one weekend. <strong>Seventh hosts tenth</strong> and <strong>eighth hosts ninth</strong>. The two winners advance; the two losers are done for the year.",
          "The top six do not play. They get the weekend off and enter the finals proper fresh \u2014 which is the single biggest reason finishing sixth is now worth so much more than finishing seventh."
        ) +
        h2("How the winners are re-seeded") +
        p(
          "This is the part most people get wrong. The two Wildcard winners are not simply slotted into 7th and 8th based on who they beat. They are <strong>re-seeded by ladder position</strong> \u2014 the AFL describes it as a rankings system the competition has not used since 1999.",
          "In the AFL\u2019s own words: \u201Cfifth will play the lowest-ranked Wildcard winner and sixth will play the highest-ranked Wildcard winner.\u201D So if seventh and eighth both win, seventh becomes the higher seed and meets sixth, while eighth meets fifth. If tenth causes an upset, tenth becomes the lowest-ranked winner and travels to fifth."
        ) +
        h2("Weeks two to five are unchanged") +
        p(
          "Once the Wildcard survivors join the top six, the bracket is the familiar one: <strong>1 v 4</strong> and <strong>2 v 3</strong> in the qualifying finals, <strong>5 v 8</strong> and <strong>6 v 7</strong> in the elimination finals.",
          "Qualifying final winners get the week off and a home preliminary final. Qualifying final losers drop into home semi-finals against the elimination final winners. Elimination final losers are out. Preliminary final winners meet in the Grand Final."
        ) +
        h2("What it costs to come from the bottom") +
        p(
          "A club finishing seventh or eighth must now win <strong>five straight finals</strong> to win the flag. A club finishing ninth or tenth must win five straight finals <strong>all away from home</strong>. No side has ever done anything close to that.",
          "AFL chief executive Andrew Dillon has confirmed the home-ground principle holds throughout: \u201Call teams who finish in the top eight of ten will host a home final.\u201D That means seventh and eighth host their Wildcard games."
        ) +
        h2("The 2026 dates") +
        p(
          "Round 24, played 20\u201323 August, was the final home-and-away round. The Wildcard Round takes the following weekend \u2014 the old pre-finals bye \u2014 with the fixture confirmed once the ladder is final.",
          "The <strong>2026 Grand Final is Saturday 26 September at the MCG</strong>, first bounce 2:30pm AEST."
        ),
      featuredImage: {
        url: "/photos/afl-pack-mark.jpg",
        alt: "Geelong players celebrate a goal — September football is where the new wildcard format begins",
        width: 1058,
        height: 500,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "explainers",
      tags: ["AFL", "Finals", "Wildcard Round", "Explainer", "Format"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T02:00:00Z",
      updatedAt: "2026-08-21T02:00:00Z",
      theaibetSport: "afl",
      theaibetCtaLabel: "See AI-modelled premiership probabilities for all ten finalists",
      masterStoryId: "MS-2026-0821-WILDCARD-EXPLAINER",
      faq: [
        { q: "How does the AFL Wildcard Round work?", a: "Teams finishing 7th to 10th play off over one weekend: 7th hosts 10th and 8th hosts 9th. The two winners advance to the finals proper and the two losers are eliminated. The top six clubs have the weekend off." },
        { q: "How many teams make the AFL finals in 2026?", a: "Ten. The AFL expanded from an eight-team to a ten-team finals series in 2026, run across five weeks instead of four." },
        { q: "Who do the Wildcard Round winners play?", a: "The two winners are re-seeded by ladder position. Fifth plays the lowest-ranked Wildcard winner and sixth plays the highest-ranked Wildcard winner, forming the usual 5 v 8 and 6 v 7 elimination finals." },
        { q: "Has the qualifying final format changed?", a: "No. The top four still contest qualifying finals \u2014 1st v 4th and 2nd v 3rd \u2014 with the double chance intact. Winners advance straight to a home preliminary final." },
        { q: "How many finals must a team win from 10th?", a: "Five, all away from home. A side finishing 7th or 8th also needs five straight wins but hosts its Wildcard game." },
        { q: "When is the 2026 AFL Grand Final?", a: "Saturday 26 September 2026 at the MCG, with a 2:30pm AEST start." }
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-13T03:00:00Z",
      updatedAt: "2026-08-13T03:00:00Z",
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-10T05:00:00Z",
      updatedAt: "2026-08-10T05:00:00Z",
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
          "The AFL season runs 24 home-and-away rounds into a finals series that, from 2026, takes ten teams across five weeks and opens with a Wildcard Round. The NRL runs 27 rounds into a four-week, eight-team format. Both grand finals are among the most-watched television events in Australia each year."
        ),
      featuredImage: {
        url: "/photos/nrl-dragons.jpg",
        alt: "Rugby league in full flight: a Dragons runner hits the line",
        width: 872,
        height: 968,
        credit: "Supplied",
        license: "user-supplied",
        source: "publisher-upload",
      },
      categorySlug: "explainers",
      tags: ["NRL", "AFL", "Explainer"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-08T04:00:00Z",
      updatedAt: "2026-08-08T04:00:00Z",
      theaibetCtaLabel: "Explore AI sports analysis on TheAIbet",
      masterStoryId: "MS-2026-0808-CODES",
      faq: [
        { q: "What is the difference between NRL and AFL?", a: "Rugby league is played on a rectangular field with 13 players a side and possession structured around six tackles. Australian rules is played on a large oval with 18 a side, no offside rule and a 360-degree contest." },
        { q: "How does scoring work in each code?", a: "In the NRL a try is four points, a conversion two, a penalty goal two and a field goal one. In the AFL a goal between the two tall central posts is six points and a behind is one." },
        { q: "How many rounds does each season run?", a: "The AFL plays 24 home-and-away rounds and from 2026 runs a ten-team, five-week finals series that opens with a Wildcard Round. The NRL plays 27 rounds into a four-week, eight-team finals series." },
        { q: "When are the 2026 grand finals?", a: "The AFL Grand Final is Saturday 26 September 2026 at the MCG. The NRL Grand Final is Sunday 4 October 2026 at Accor Stadium." },
      ],
    },
  ],

  punterstory: [
    {
      id: "sto-005",
      slug: "bangladesh-darwin-first-test-win-in-australia",
      title: "Nine Wickets in Darwin: The Morning Australia Stopped Being Unbeatable at Home",
      excerpt:
        "Bangladesh had never won a Test in Australia. On a Sunday in Darwin they chased 57 for the loss of one wicket and the whole country had to sit with it.",
      bodyHtml:
        p(
          "There is a particular kind of quiet that settles over Australian sport when something happens that was not supposed to be possible. Not anger. Not even disappointment, at first. Just the sound of a lot of people recalibrating at once.",
          "On <strong>16 August 2026</strong>, at Marrara in Darwin, <strong>Bangladesh beat Australia by nine wickets</strong> \u2014 their first Test win on Australian soil, in their first ever attempt at a series here."
        ) +
        h2("How it happened") +
        p(
          "Australia made <strong>198</strong> in the first innings. <strong>Hasan Mahmud</strong> took the game by the throat and did not let go, finishing with <strong>9/111</strong> for the match and Player of the Match. <strong>Mehidy Hasan Miraz</strong> took a five-wicket haul and made 65 with the bat, which is the sort of all-round performance that decides Tests.",
          "<strong>Cameron Green</strong> made a century in Australia\u2019s second innings of 284 \u2014 a genuinely fine hundred that ended up being a footnote, which is the cruellest thing that can happen to a batsman. It left Bangladesh 57 to win. They lost one wicket getting them."
        ) +
        h2("What it actually means") +
        p(
          "Australia has lost Tests at home before. Australia has not often lost Tests at home to a side ranked where Bangladesh are ranked, in conditions that were supposed to be a formality, in a match scheduled partly because it looked like a comfortable start to a summer.",
          "That is the part worth sitting with. Not the scoreline \u2014 the assumption underneath it. Darwin in August was supposed to be a warm-up."
        ) +
        h2("The bit punters will recognise") +
        p(
          "Every market has a price at which a result stops being priced as a real possibility and starts being priced as a formality. Somewhere in the first innings of that Test, a lot of people found out where that line sits.",
          "The honest lesson is not \u201Cback the underdog.\u201D It is that the gap between a 5 per cent chance and a 0 per cent chance is the entire game, and that most of us round the first one down to the second without noticing we\u2019ve done it."
        ) +
        h2("What comes next") +
        p(
          "The second Test starts <strong>22 August at Great Barrier Reef Arena in Mackay</strong>, 10am local. Australia have a series to save and a fortnight of questions to answer.",
          "Bangladesh have something they cannot lose no matter what happens in Mackay. That is the thing about firsts."
        ),
      featuredImage: {
        url: "/art/punterstory/bangladesh-darwin-first-test-win-in-australia.svg",
        alt: "Editorial artwork of a cricket ball — the morning Bangladesh took nine wickets in Darwin",
        width: 1600,
        height: 900,
        credit: "Punter Story editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "moments",
      tags: ["Cricket", "Bangladesh", "Darwin", "Upset", "Test Cricket"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-21T08:30:00Z",
      updatedAt: "2026-08-21T08:30:00Z",
      theaibetSport: "general",
      theaibetCtaLabel: "See how AI models price the games nobody expects",
      masterStoryId: "MS-2026-0821-BANGLADESH-DARWIN",
      faq: [
        { q: "When did Bangladesh beat Australia in Darwin?", a: "16 August 2026, on day four of the first Test at Marrara in Darwin. Bangladesh won by nine wickets \u2014 their first Test victory in Australia." },
        { q: "Who was player of the match?", a: "Hasan Mahmud, who took 9/111 for the match. Mehidy Hasan Miraz also took a five-wicket haul and scored 65." },
        { q: "What were the scores?", a: "Australia 198 and 284, with Cameron Green making a century in the second innings. Bangladesh chased the target of 57 for the loss of one wicket." },
        { q: "When is the second Test?", a: "22-26 August 2026 at Great Barrier Reef Arena in Mackay, starting at 10am local time." }
      ],
    },
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
      featuredImage: {
        url: "/art/punterstory/the-day-the-tab-went-quiet.svg",
        alt: "Abstract editorial artwork of oversized quotation marks",
        width: 1600,
        height: 900,
        credit: "Punter Story editorial artwork",
        license: "owned",
        source: "generated",
      },
      categorySlug: "big-wins",
      tags: ["TAB", "Multi", "Big Wins"],
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-16T06:00:00Z",
      updatedAt: "2026-08-16T06:00:00Z",
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-14T07:00:00Z",
      updatedAt: "2026-08-14T07:00:00Z",
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
          "What makes the story bigger than one race is where it's pointed: The Everest at Randwick on 17 October, $20 million over 1200 metres \u2014 and the domain of Ka Ying Rising, Hong Kong's champion, who won it in 2025 and is being readied to come back for it.",
          "\u201CHopefully this mare might attract an Everest slot, we'll see what happens,\u201D Edmonds said after the Stradbroke \u2014 the sound of a man trying not to dream too loudly. She still doesn't have one. Twelve slots, twelve owners, and a mare who has to go and take one off somebody. Her spring reportedly starts in The Shorts."
        ) +
        h2("Why we barrack for her") +
        p(
          "Racing's economics are brutal and its aristocracy is expensive. That's exactly why stories like this one carry a whole spring: because every so often, the sales-ring leftover turns out to be the best horse someone ever bought.",
          "Whether a slot comes, and whether anything alive can beat Ka Ying Rising down the Randwick straight, are two separate questions and neither is answered yet. Australia has its horse for the spring regardless. She cost eight grand. That's the whole point."
        ),
      categorySlug: "moments",
      tags: ["Spicy Martini", "The Everest", "Racing Culture", "Underdog"],
      author: AUTHORS.zacChristie,
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
      theaibetCtaLabel: "See what the AI models make of the Everest picture",
      masterStoryId: "MS-2026-0818-SPICY-STORY",
      faq: [
        { q: "How much did Spicy Martini cost?", a: "$8,000. Her career earnings now exceed $2.7 million \u2014 more than three hundred times her purchase price." },
        { q: "Who trains and rides Spicy Martini?", a: "She is trained by Toby Edmonds on the Gold Coast. Taylor Marshall rode her to a first Group 1 in the 2026 Stradbroke Handicap." },
        { q: "Is Spicy Martini running in The Everest?", a: "Not as things stand. She has no slot. Her connections are chasing one, with a spring campaign reported to begin in The Shorts." },
      ],
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
      author: AUTHORS.zacChristie,
      publishedAt: "2026-08-08T09:00:00Z",
      updatedAt: "2026-08-08T09:00:00Z",
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
