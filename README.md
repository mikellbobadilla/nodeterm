# _Nodeterm_

Is a CLI (command line interface) what allows to modify the **Windows Terminal**.

## Requirements

- [Node.js (v16.15.0 or +)](https://nodejs.org/en/)
- [npm (v8.5.5)](https://www.npmjs.com/)
- [Windows Terminal (estable release)](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=US)

## Installation

Run this command to install:

```bash
npm install -g nodeterm-windows
```

If can't running scipts on **Power Shell** try this command:

```bash
Set-ExecutionPolicy Unrestricted
```

You can restore the default settings running this command:

```bash
nodeterm --reset
```

## Things Pre-Installed

If need add more themes, seet the file **settings/**

**Themes:**

- ayu-dark
- ayu-mirage
- dracula
- material-git

**Fonts**
Only can set if are installed on the computer

See the JSON file **settings/fonts.json**

```json
{
  "cascadia-code": "Cascadia Code",
  "cobalt": "Cobalt",
  "ubuntu-mono": "UbuntuMono Nerd Font",
  "caskaydia": "CaskaydiaCove Nerd Font Mono",
  "consolas": "Consolas"
}
```

Only need to write the key to set the font, the program use to value to set the font.

If you need to add more themes, please, see the file **settings/themes.json**
The scheme what use **Windows Terminal** is this:.

```json
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

## Commands and Options

| Command                             | Description              |
| ----------------------------------- | ------------------------ |
| `nodeterm`                          | Run the program          |
| `nodeterm --help`                   | Show the help            |
| `nodeterm --version`                | Show the version         |
| `nodeterm --reset`                  | Reset the settings       |
| `nodeterm --font -f <font>`         | Set the font             |
| `nodeterm --theme -t <theme>`       | Set the theme            |
| `nodeterm --size -s <size>`         | Set the font size        |
| `nodeterm --opacity -o <opacity>`   | Set the opacity          |
| `nodeterm --width <width>`          | Set the window width     |
| `nodeterm --height <height>`        | Set the window height    |
| `nodeterm --terminal <terminaName>` | Set the default terminal |

**I'm thinking more features see you soom :)**
