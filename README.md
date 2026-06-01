# Stylish Readme: Style your README

Dynamic SVG widgets for your GitHub README, profile bio, and documentation. Stylish Readme generates real-time, customizable badges for your profile without requiring complex setups, API keys, or client-side scripts. 

<img src="https://img.shields.io/badge/status-production-brightgreen?style=flat-square" alt="Production-ready" /> <img src="https://img.shields.io/badge/stack-node.js%20%2B%20SVG-blue?style=flat-square" alt="Stack" /> <img src="https://img.shields.io/badge/license-MIT-black?style=flat-square" alt="License" /> <img src="https://img.shields.io/badge/themes-8%20styles-orange?style=flat-square" alt="Themes" />


## Overview

Stylish Readme renders widgets as standalone SVGs. Because GitHub natively supports SVGs in markdown image tags, these widgets update automatically whenever your profile is loaded.

<table>
  <tr>
    <td>
      <img src="https://img.icons8.com/fluency/30/resume.png" alt="Profile Icon"/>
      <br><strong>Profile Cards</strong><br>Developer identity
    </td>
    <td>
      <img src="https://img.icons8.com/fluency/30/music.png" alt="Music Icon"/>
      <br><strong>Now Playing</strong><br>Music status
    </td>
    <td>
      <img src="https://img.icons8.com/fluency/30/clock.png" alt="Clock Icon"/>
      <br><strong>Live Time</strong><br>Real-time clocks
    </td>
    <td>
      <img src="https://img.icons8.com/fluency/30/fire-element.png" alt="Streak Icon"/>
      <br><strong>Streaks</strong><br>Activity tracking
    </td>
  </tr>
</table>

## Widget Documentation & Examples

Copy the markdown snippets below and paste them into your README. You can change the parameters in the URL to customize the data, layout, and colors.

### 1. Developer Profile Card
Combines your avatar, role, bio, and skills into a clean header block. Use `radius` to go from sharp and structured to soft and modern.

**Theme: Paper | Sharp edges (`radius=0`)**
```md
![Profile Card](https://readmeme.eu.cc/api/profile.svg?avatar=https%3A%2F%2Fgithub.com%2Fcu-sanjay.png&name=Sanjay&role=Full-Stack+Developer&bio=Building+cool+things+with+code+n+coffee.&skills=HTML%2CJS%2CREACT%2CNODE%2CPYTHON%2CGIT%2CSQL&handle=cu-sanjay&theme=paper&radius=0)
```

<img src="https://readmeme.eu.cc/api/profile.svg?avatar=https%3A%2F%2Fgithub.com%2Fcu-sanjay.png&name=Sanjay&role=Full-Stack+Developer&bio=Building+cool+things+with+code+n+coffee.&skills=HTML%2CJS%2CREACT%2CNODE%2CPYTHON%2CGIT%2CSQL&handle=cu-sanjay&theme=paper&radius=0" alt="Profile Preview Sharp" />

**Theme: Paper | Soft edges (`radius=12`)**
```md
![Profile Card](https://readmeme.eu.cc/api/profile.svg?avatar=https%3A%2F%2Fgithub.com%2Fcu-sanjay.png&name=Sanjay&role=Full-Stack+Developer&bio=Building+cool+things+with+code+n+coffee.&skills=HTML%2CJS%2CREACT%2CNODE%2CPYTHON%2CGIT%2CSQL&handle=cu-sanjay&theme=paper&radius=12)
```

<img src="https://readmeme.eu.cc/api/profile.svg?avatar=https%3A%2F%2Fgithub.com%2Fcu-sanjay.png&name=Sanjay&role=Full-Stack+Developer&bio=Building+cool+things+with+code+n+coffee.&skills=HTML%2CJS%2CREACT%2CNODE%2CPYTHON%2CGIT%2CSQL&handle=cu-sanjay&theme=paper&radius=12" alt="Profile Preview Soft" />

### 2. Now Playing Status

**Theme: Terminal | Platform: YouTube Music**

```md
![Now Playing](https://readmeme.eu.cc/api/music.svg?theme=terminal&musicSong=Smells+Like+Teen+Spirit&musicArtist=Nirvana&musicListen=Now+Playing&musicPlatform=ytmusic)
```

<img src="https://readmeme.eu.cc/api/music.svg?theme=terminal&musicSong=Smells+Like+Teen+Spirit&musicArtist=Nirvana&musicListen=Now+Playing&musicPlatform=ytmusic" alt="Music Preview Terminal" />

**Theme: Ink | Platform: SoundCloud**

```md
![Now Playing](https://readmeme.eu.cc/api/music.svg?theme=ink&musicSong=Tera+Intezaar&musicArtist=Rahat+Fateh+Ali+Khan&musicListen=On+Repeat&musicPlatform=soundcloud)
```

<img src="https://readmeme.eu.cc/api/music.svg?theme=ink&musicSong=Tera+Intezaar&musicArtist=Rahat+Fateh+Ali+Khan&musicListen=On+Repeat&musicPlatform=soundcloud" alt="Music Preview Ink" />

### 3. Live Local Time

**Theme: Classic | 24h format with seconds**

```md
![Local Time](https://readmeme.eu.cc/api/time.svg?theme=classic&timezone=Asia/Kolkata&timeFormat=24h&showSeconds=1&showDate=1&showDay=1&label=Local+Time)
```

<img src="https://readmeme.eu.cc/api/time.svg?theme=classic&timezone=Asia/Kolkata&timeFormat=24h&showSeconds=1&showDate=1&showDay=1&label=Local+Time" alt="Time Preview Classic" />

**Theme: Retro | 12h format, compact**

```md
![Local Time](https://readmeme.eu.cc/api/time.svg?theme=retro&timezone=America/New_York&timeFormat=12h&showSeconds=0&showDate=0&showDay=0&label=NYC)
```

<img src="https://readmeme.eu.cc/api/time.svg?theme=retro&timezone=America/New_York&timeFormat=12h&showSeconds=0&showDate=0&showDay=0&label=NYC" alt="Time Preview Retro" />

### 4. Coding Streaks

**Theme: Crimson | Platform: LeetCode**

```md
![Coding Streak](https://readmeme.eu.cc/api/streak.svg?theme=crimson&startDate=2023-01-01&unit=days&customLabel=LeetCode+Grind&platform=leetcode)
```

<img src="https://readmeme.eu.cc/api/streak.svg?theme=crimson&startDate=2023-01-01&unit=days&customLabel=LeetCode+Grind&platform=leetcode" alt="Streak Preview" />

### 5. Daily Quotes

**Theme: Ocean | Category: Programming**

```md
![Daily Quote](https://readmeme.eu.cc/api/quote.svg?theme=ocean&quoteCategory=programming&label=Daily+Wisdom)
```

<img src="https://readmeme.eu.cc/api/quote.svg?theme=ocean&quoteCategory=programming&label=Daily+Wisdom" alt="Quote Preview" />

### 6. Location & Timezone Flags

**Theme: Forest | Country: Japan**

```md
![Country Flag](https://readmeme.eu.cc/api/flag.svg?theme=forest&country=JP&label=Based+In)
```

<img src="https://readmeme.eu.cc/api/flag.svg?theme=forest&country=JP&label=Based+In" alt="Flag Preview" />

**Theme: Ink | Timezone Banner**

```md
![Timezone Banner](https://readmeme.eu.cc/api/timezone.svg?theme=ink&timezone=Europe/London&timeFormat=24h)
```

<img src="https://readmeme.eu.cc/api/timezone.svg?theme=ink&timezone=Europe/London&timeFormat=24h" alt="Timezone Preview" />

## Parameter Reference

Customize your URLs by modifying these query strings. Always replace spaces in your text with `+` or `%20`.

### Global Parameters
* `theme`: classic, paper, terminal, retro, ocean, crimson, forest, ink
* `label`: Custom text displayed on the widget header or side tab.
* `radius`: Controls the corner roundness of every widget. `0` = sharp, structured edges. `12` = soft, modern edges. Applies globally across all widgets.

### Profile Card
* `avatar`: Direct URL to an image.
* `name`: Display name.
* `role`: Job title or primary focus.
* `bio`: Short description.
* `skills`: Comma-separated list (e.g., HTML,CSS,JS).
* `handle`: Username (excluding the @ symbol).

### Music Status
* `musicSong`: Track name.
* `musicArtist`: Artist name.
* `musicPlatform`: spotify, ytmusic, applemusic, soundcloud.
* `musicListen`: Status text (e.g., Now Playing, On Repeat).

### Time & Date
* `timezone`: Standard IANA timezone (e.g., Asia/Kolkata, Europe/London).
* `timeFormat`: 12h or 24h.
* `showSeconds`: 1 (true) or 0 (false).
* `showDate`: 1 (true) or 0 (false).
* `showDay`: 1 (true) or 0 (false).

### Streaks
* `startDate`: Format as YYYY-MM-DD.
* `unit`: days or weeks.
* `platform`: leetcode, gfg, hackerrank, codeforces, codechef, atcoder, hackerearth, github, none.

## Local Development

If you want to add new themes, create custom widgets, or self-host the API, you can run the generator locally.

1. Clone the repository:
```bash
git clone https://github.com/cu-sanjay/stylish-readme.git
cd stylish-readme
```

2. Install dependencies:
```bash
npm install
```

3. Start the local server:
```bash
npm start
```

The UI workshop will be available at `http://localhost:5000`.
