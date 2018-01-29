# Working-Bar

A simple plugin to show some feedback while running processes in the command line

## Getting Started

These instructions will show you how to quickly get working-bar setup and displaying in your command line applications

### Installing

Add this package to your project

```
npm install --save working-bar
```

### Using

Instantiate object

```
let workingBar = require('working-bar');
```

Configure object

```
workingBar.front = 'Working: [';
workingBar.back = '] Bar';
workingBar.character = '-----';
workingBar.length = 80;
```

Start process

```
workingBar.start();
```

Print a message without stopping display

```
workingBar.message('Hey there');
```

Change front while displaying

```
workingBar.setFront('New Front: [');
```

Also works with colored strings

Manually or with plugins like [Chalk](https://www.npmjs.com/package/chalk)

```
workingBar.character = '\x1b[36m-----\x1b[0m'
workingBar.setFront(chalk.green('Colored Front: ['));
```

Stop process

```
workingBar.stop();
```

Default values

```
workingBar.length = 40;
workingBar.front = '[';
workingBar.back = ']';
workingBar.character = '-';
workingBar.interval = 35; //(milliseconds)
```

## Authors

* **Jay Deaton** - [Github](https://github.com/jayrdeaton)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
