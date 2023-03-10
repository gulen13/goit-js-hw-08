import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

updateTime();

player.on('timeupdate', _throttle(onTimeUpdate, 1000));

function onTimeUpdate (event) {
  localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
}

function updateTime() {
  const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}