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
let WorkingBar = require('working-bar');
let workingBar = new WorkingBar();
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

Even change attributes while working

```
workingBar.front = 'New Front: [';
workingBar.back = '] New Back';
```

Play around with different configurations

```
workingBar.before = '-';
workingBar.character = '-';
<!-- Or -->
workingBar.empty = '|';
workingBar.character = '----';
```
Also works with colored strings

Manually or with plugins like [Cosmetic](https://www.npmjs.com/package/cosmetic)

```
workingBar.character = '\x1b[36m-----\x1b[0m'
workingBar.front = cosmetic.green('Green Front: [');
<!-- Or -->
workingBar.before = '\x1b[36m-'
workingBar.character = '-\x1b[0m'
```

Set both before and after empty characters at the same time
Only one character strings accepted currently

```
workingBar.empty = '0';
```

Stop process

```
workingBar.stop();
```

Default values

```
workingBar.length = 40;
workingBar.front = '[';
workingBar.before = ' ';
workingBar.character = '-';
workingBar.after = ' ';
workingBar.back = ']';
workingBar.interval = 35; //(milliseconds)
```

## Authors

* **Jay Deaton** - [Github](https://github.com/jayrdeaton)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
