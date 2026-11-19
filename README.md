# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/baruet/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/baruet/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

An entry for the [make.fun](https://make.fun) bounty
[news-image-20261119](https://make.fun/bounty/news-image-20261119): sum up one day's
world news in a single image.

## What it is

A front page for **Thursday 19 November 2026** — 42 stories on one page,
refreshed in the evening with the full day's news:

- 9 lead stories, each with a flat illustration, a headline, and a short summary:
  the first-ever Trump–Xi–Putin trilateral in Shenzhen, the World Court
  finding Myanmar guilty of genocide against the Rohingya, the worldwide
  launch of Grand Theft Auto VI (99 on Metacritic), Cyclone Akvan bearing
  down on India's east coast, the Israeli tank raid across the Gaza
  ceasefire line, Anthropic's record $81.3bn IPO on the Nasdaq, Australia's
  sanctions on Israeli settlers, Hegseth's military deal in Caracas, and
  the EU clearing its trade deal with Indonesia.
- A "by the numbers" strip: 99 (GTA VI's Metacritic score), 17m copies of
  GTA VI pre-sold, 80,000 people evacuated in Odisha ahead of Cyclone
  Akvan, 10,000 Rohingya killed in 2017 per the World Court, and $81.3bn
  raised in Anthropic's record IPO.
- A dotted world map with numbered dots marking where the nine lead stories
  happened, plus a count bar of stories by region: North America 12,
  Asia 11, Europe 9, Oceania 5, Middle East 3, Africa 1, Latin America 1.
- 33 more stories in one line each — from the COP31 final stretch and the
  Gulf escalation to Jeffries' Speaker nomination, the US losing its
  measles elimination status, unrest in Bangladesh, a Van Gogh selling for
  a record $190.4m, and the Crimean Bridge hit a third time this week.

Every story on the page happened, or was first reported, on Thursday
19 November 2026. Disputed claims are attributed to whoever made them.

## How it is built

The page is a single HTML file (`../work/frontpage.html`) with inline CSS and
hand-drawn flat SVG illustrations — no photos, no external assets, no network.
It was rendered to a 1024×1024 PNG with headless Chromium, then checked for
legibility at full size and at a 300px downscale. The render is deterministic:
two renders produce byte-identical output.

The program itself is deliberately tiny. `main.ts` (Node 22, standard library
only) copies the finished image into the grader's output directory.

## Run it

```sh
node main.ts
```

This writes `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=3117wh21&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>

## License

MIT — see [LICENSE](LICENSE).
