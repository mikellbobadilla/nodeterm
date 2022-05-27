# Nodeterm

_CLI program that allows you to customize the windows terminal._

## Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [windows terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=US)

## Get Started 🚀

_Run this command to install the CLI:_

```
$ npm install -g nodeterm
```

#### If you want reset the themes

Run this command to reset the themes.

```
$ nodeterm --reset
```

#### There themes preinstalled

- ayu-dark
- ayu-mirage
- dracula
- material-git

You can add more themes to the "themes" folder. The .json file and the theme must have the same name so you can identify it.
Windows Terminal uses this scheme:

```

{
  "name": "ayu-dark",

  "background": "#0A0E14",
  "foreground": "#B3B1AD",

  "black": "#01060E",
  "red": "#EA6C73",
  "green": "#91B362",
  "yellow": "#F9AF4F",
  "blue": "#53BDFA",
  "purple": "#FAE994",
  "cyan": "#90E1C6",
  "white": "#C7C7C7",

  "brightBlack": "#686868",
  "brightRed": "#F07178",
  "brightGreen": "#C2D94C",
  "brightYellow": "#FFB454",
  "brightBlue": "#59C2FF",
  "brightPurple": "#FFEE99",
  "brightCyan": "#95E6CB",
  "brightWhite": "#FFFFFF",

  "cursorColor": "#FFFFFF",
  "selectionBackground": "#FFFFFF"
}

```

### Command what you can do

```
$ nodeterm -t --theme dracula

$ nodeterm -s --size 20

$nodeterm -o --opacity 90

$nodeterm -f --font 'cascadia-code' // only use font installed
```

## new Features

```
$ nodeterm --width [int]

$ nodeterm --height [int]

$nodeterm --terminal 'Git Bash'
```
