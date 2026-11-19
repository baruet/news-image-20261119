# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/baruet/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/baruet/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

An entry for the [make.fun](https://make.fun) bounty
[news-image-20261119](https://make.fun/bounty/news-image-20261119): sum up one day's
world news in a single image.

## What it is

A front page for **Thursday 19 November 2026** — 42 stories on one page:

- 9 lead stories, each with a flat illustration, a headline, and a short summary:
  the Trump–Xi–Putin trilateral in Shenzhen, the World Court's ruling on the
  Myanmar genocide case, the worldwide launch of Grand Theft Auto VI (99 on
  Metacritic), Cyclone Akvan nearing India's east coast, Israeli troops
  pushing into central Gaza, Anthropic's first day trading on the Nasdaq,
  Australia's sanctions on Israeli settlers, Hegseth's visit to Venezuela,
  and the EU clearing its trade deal with Indonesia.
- A "by the numbers" strip: 99 (GTA VI's Metacritic score), 50 crore Indians
  out of extreme poverty, 299.25 GW of Indian renewable capacity, 21 COP31
  issues still unresolved, and 16% expected global profit growth in 2027.
- A dotted world map with numbered dots marking where the nine lead stories
  happened, plus a count bar of stories by region: Asia 10, North America 10,
  Europe 8, Oceania 5, Middle East 4, Africa 2, Latin America 1.
- 33 more stories in one line each — from the COP31 final stretch and a Pew
  report on religion to a Houthi missile shot down over Riyadh, the
  Microsoft–ByteDance talks, and a record Test innings by Litton Das.

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
