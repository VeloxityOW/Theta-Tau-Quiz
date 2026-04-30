# Customization Guide

This file explains the parts you are most likely to edit.

## 1. Change the password gate

Open:

```txt
js/config.js
```

Edit this section:

```js
gate: {
  title: "Theta Tau",
  subtitle: "Psi Gamma — Study Guide",
  symbol: "ΘΤ",
  password: "PsiGamma"
}
```

You can also edit wrong password messages:

```js
wrongMessages: [
  "Nice try, pledge.",
  "The forge says no.",
  "Hammer and tongs deny entry."
]
```

And hints:

```js
hints: [
  { afterAttempts: 3, text: "Hint: It has something to do with the class." },
  { afterAttempts: 6, text: "Bigger hint: no spaces. Capital P, Capital G." }
]
```

## 2. Change mastery difficulty

Open:

```txt
js/config.js
```

Edit:

```js
correctsToMaster: 3
```

Set it to `1` if you want one correct answer to instantly master the card.

## 3. Change quiz size options

Open:

```txt
js/config.js
```

Edit:

```js
quizSizeOptions: [10, 20, 30, "All"]
```

## 4. Turn fuzzy matching on/off

Fuzzy matching allows small typos.

```js
enableFuzzyMatching: true,
fuzzyDistanceLimit: 2
```

Set `enableFuzzyMatching` to `false` if you want stricter answers.

## 5. Change colors

Open:

```txt
css/styles.css
```

At the top, edit variables like:

```css
--bg0: #140101;
--gold: #d6b25e;
--red: #b21f2d;
--text: #ffecec;
```

## 6. Add a new question

Open:

```txt
data/questions.js
```

Add this inside the array:

```js
{
  id: "NewUniqueId",
  q: "Your question here?",
  a: "Your answer here",
  mode: "exact"
}
```

Make sure every `id` is unique. Do not reuse IDs, because progress is saved using the ID.

## 7. Accept multiple answers

Use `multi` mode:

```js
{
  id: "CoatOfArmsHand",
  q: "What is clasping these objects?",
  a: "right hand | hands | hand",
  mode: "multi"
}
```

## 8. Add a question that checks a list

Use `contains` mode:

```js
{
  id: "Colors",
  q: "Official colors of Theta Tau:",
  a: "Dark Red, Gold",
  mode: "contains"
}
```

The user can type a longer answer as long as the expected parts are included.

## 9. Change quiz grouping

Open:

```txt
js/app.js
```

Find:

```js
const QUIZ_BOUNDARIES = [
  { name: "Quiz 1", start: 0, end: 20 },
  ...
]
```

The app groups questions by their position in `data/questions.js`. If you move questions around, update the `start` and `end` indexes.

Indexes are zero-based:

```txt
first question = 0
second question = 1
third question = 2
```

## 10. Reset saved progress while testing

Open DevTools Console and run:

```js
localStorage.clear()
```

Then refresh.


## Make it faster or more animated

Open `js/config.js` and find the `performance` section.

```js
performance: {
  enabled: true,
  maxVisibleStudyCards: 32,
  loadMoreStep: 32,
  gateFps: 30,
  gatePixelRatio: 1.35,
  maxConfettiPieces: 45
}
```

Good edits:

- Set `enabled: false` if you want the full fancy version with more blur/animation.
- Increase `maxVisibleStudyCards` if you want Study Mode to show more cards before the Load More button.
- Lower `gateFps` to `24` if the login animation feels heavy.
- Raise `gateFps` to `60` if you want the login animation smoother.
- Lower `gatePixelRatio` to `1` if the login screen still feels laggy on older laptops.
