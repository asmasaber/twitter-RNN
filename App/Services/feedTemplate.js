// eslint-disable-next-line no-sparse-arrays
import randomWords from 'random-words';
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
String.prototype.capitalizeFirstLetter = function() {
  return `${this.substr(0, 1).toUpperCase()}${this.substr(1)}`;
};

export default () => ({
  user: randomWords().capitalizeFirstLetter(),
  userHandle: `@${randomWords()}`,
  content: randomWords({min: 18, max: 40}).join(' '),
  time: '1hr',
  retweeted: [true, false].random(),
  liked: [true, false].random(),
  retweetedBy: ['Sandra', 'Hannit', 'Michael', 'Jason', 'Queen'][
    Math.floor(
      Math.random() * ['Sandra', 'Hannit', 'Michael', 'Jason', 'Queen'].length,
    )
  ],
  retweets: Math.floor(Math.random() * 100 + 1),
  comments: Math.floor(Math.random() * 100 + 1),
  likes: Math.floor(Math.random() * 200 + 1),
  hasPhoto: [true, false].random(),
});
