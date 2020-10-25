@vlah.io/ngx-pipe

Angular pipes library.

### Usage (code example)

#### Currency Pipes
```
  <span [innerText]="125.64 | vlahioEUR"></span>

  <span [innerText]="125.64 | vlahioUSD"></span>

  <span [innerText]="125.64 | vlahioGBP"></span>
```

#### Date Pipe
```
  <span [innerText]="date | vlahioDate"></span>

  <span [innerText]="date | vlahioDate:'dd/MM/yyyy hh:mma':'UTC'"></span>
  <span [innerText]="date | vlahioDate:'dd/MM/yyyy hh:mma':'+0100'"></span>

  export class AppComponent {
    date = new Date();
  }
```

#### Various Pipes
```
  <span [innerText]="1140.56 | vlahioNumeric"></span>

  <span [innerText]="'someRandomText' | vlahioSplitUcWords"></span>

  <span [innerHTML]="text | vlahioHighlight:'text'"></span>
```

```
  export class AppComponent {
    text = 'This <span class="text">text</span> is long enough to help us make an idea of how this text will get highlighted each time the word text occurs.';
  }
```

For more details read [here](https://github.com/vlah-io/ngx-pipe/blob/master/INSTALLATION.md).
