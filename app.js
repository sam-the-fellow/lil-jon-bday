const MONTHS = [
  ['January', 31],
  ['February', 28],
  ['March', 31],
  ['April',30],
  ['May', 31],
  ['June', 30],
  ['July', 31],
  ['August', 31],
  ['September',30],
  ['October',31],
  ['November', 30],
  ['December', 31]
];

const BIRTHDAYS = {
  '1': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': ['Zayn'],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': []
  },
  '2': {
    '1': ['Harry Styles'],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': ['Kiana Florendo'],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': []
  },
  '3': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': []
  },
  '4': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': []
  },
  '5': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': ['Isabella'],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': []
  },
  '6': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [Tala],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': []
  },
  '7': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': []
  },
  '8': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': ['Liam'],
    '30': [],
    '31': []
  },
  '9': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': ['Niall'],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': []
  },
  '10': {
    '1': [],
    '2': [],
    '3': [],
    '4': ["Brianna"],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': ['Sam'],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': []
  },
  '11': {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': [],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': []
  },
  '12': {
    '1': [],
    '2': ["githel suico"],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': [],
    '13': ['Nancy Sarabia'],
    '14': [],
    '15': [],
    '16': [],
    '17': [],
    '18': [],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': ['Louis Tomlinson and Jennifer.'],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': [],
    '31': []
  }
};

const AUDIO_URLS = [
  './audio/happenin.mp3',
  './audio/okay.wav',
  './audio/what.mp3',
  './audio/what2.wav',
  './audio/yeah.mp3',
  './audio/yeah2.wav'
];

const BIRTHDAY_INTERVAL_MS = 800;
const NON_BIRTHDAY_INTERVAL_MS = 200;

const SERIOUS_JON_URL = './images/lj-serious.jpg';

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function App(monthEl, dayEl, msgEl, imgEl) {
  this.monthEl = monthEl;
  this.dayEl = dayEl;
  this.msgEl = msgEl;
  this.imgEl = imgEl;
  this.currentMonthIdx = 0;
  this.currentDay = 0;
  this.audios = [];
  this.isRunning = false;
  AUDIO_URLS.forEach((url) => {
    this.audios.push(new Audio(url));
  });
  this.imageContainer = document.getElementById('img-container');
  this.seriousJon = document.getElementById('serious-jon');
  this.birthdayImages = [];
  this.setUpImages();
}

App.prototype.setUpImages = function setUpImages() {
  for (let i = 1; i <= 5; i++) {
    const birthdayImage = new Image(400, 400);
    birthdayImage.src = `./images/lj${i}.jpg`;
    this.birthdayImages.push(birthdayImage);
  }
};

App.prototype.updateText = function updateText() {
  this.monthEl.innerHTML = MONTHS[this.currentMonthIdx][0];
  this.dayEl.innerHTML = this.currentDay;

};

App.prototype.incrementDay = function incrementDay() {
  const currentMaxDay = MONTHS[this.currentMonthIdx][1];
  if (this.currentDay + 1 <= currentMaxDay) {
    this.currentDay += 1;
  } else {
    this.currentMonthIdx = (this.currentMonthIdx + 1) % 11;
    this.currentDay = 1;
  }
};

App.prototype.checkBirthdays = function checkBirthdays() {
  const birthdayPeople = BIRTHDAYS[String(this.currentMonthIdx + 1)][String(this.currentDay)] || [];
  if (birthdayPeople.length < 1) {
    this.imageContainer.appendChild(this.seriousJon);
    this.msgEl.innerHTML = 'Just another day...';
    return false;
  }

  const newMsg = "Happy birthday " + birthdayPeople.join(' and ') + '!!!';
  this.msgEl.innerHTML = newMsg;
  const birthdayJon = getRandom(this.birthdayImages);
  this.imageContainer.appendChild(birthdayJon);

  this.sayHappyBirthday();
  return true;
};

App.prototype.sayHappyBirthday = function sayHappyBirthday() {
  const audio = getRandom(this.audios);
  audio.play();
};

App.prototype.step = function step() {
  if (!this.isRunning) {
    return;
  }
  while (this.imageContainer.firstChild) {
    this.imageContainer.removeChild(this.imageContainer.firstChild);
  }
  this.incrementDay();
  this.updateText();
  const wasBirthday = this.checkBirthdays();
  const interval = wasBirthday ? BIRTHDAY_INTERVAL_MS : NON_BIRTHDAY_INTERVAL_MS;
  setTimeout(() => this.step(), interval);
};

App.prototype.run = function run() {
  if (this.isRunning) {
    return;
  }
  this.isRunning = true;
  this.step();
};

App.prototype.stop = function stop() {
  this.isRunning = false;
};
