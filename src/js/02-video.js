import Player from '@vimeo/player';
console.log(Player);
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');

const localStorageKey = 'videoplayer-current-time';

const saveCurrentTime = throttle((currentTime) => {
  localStorage.setItem(localStorageKey, currentTime);
}, 1000);

const getSavedTime = () => {
  const savedTime = localStorage.getItem(localStorageKey);
  return savedTime ? parseFloat(savedTime) : 0;
};

vimeoPlayer.setCurrentTime(getSavedTime());

vimeoPlayer.on('timeupdate', (event) => {
  const currentTime = event.seconds;
  saveCurrentTime(currentTime);
});

