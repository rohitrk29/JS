## project5 (Keyboard check)

```html

<!-- html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./chaiaurcode.js"></script>
  </body>
</html>
```

```javascript

// javascript

console.log("Project 5");

window.addEventListener("keypress", (e) => {
  document.querySelector(".project").innerHTML = e.key;
});

```


## project6 (Unlimited colors)

```html

<!-- html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

```javascript

// javascript

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
//16777215

let timeId; //global val

startBtn.addEventListener('click', () => {
  clearInterval(timeId);
  timeId = setInterval(() => {
    let random = Math.round(Math.random() * 16777215);
    document.querySelector('body').style.backgroundColor =
      '#' + random.toString(16);
  }, 1000);
  console.log(timeId);
});

stopBtn.addEventListener('click', () => {
  console.log(timeId);
  clearInterval(timeId);
});

```