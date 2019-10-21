# VS Code TouchBar

VS Code TouchBar is a WIP project that I am developing to allow for customisable buttons on a MacBook Touch Bar.

## Installation

You can download the VS code extension [online](https://marketplace.visualstudio.com/items?itemName=Maruan-Alush.vs-code-touchbar) or on the native VS Code marketplace.

## Usage

You can edit your settings in VS code to change what each button does or for those more tech savvy you can edit your settings.json.

```json
"touchbar.test": "test:unit",
"touchbar.build": "build:local",
"touchbar.run": "run:offline",
"touchbar.start": "start:dev"
```
The ```touchbar.test``` is the name of the button for which your are changing the command and the ```test:unit``` is the new command that you want it to run.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.