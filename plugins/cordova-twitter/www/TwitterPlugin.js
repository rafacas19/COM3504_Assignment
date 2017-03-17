var exec = require('cordova/exec');
/**
 * @constructor
 */
var Twitter = function() {};
/**
 * Checks if the Twitter SDK is loaded
 * @param {Function} response callback on result
 * @param {Number} response.response is 1 for success, 0 for failure
 * @example
 *      window.plugins.twitter.isTwitterAvailable(function (response) {
 *          console.log("twitter available? " + response);
 *      });
 */
Twitter.prototype.isTwitterAvailable = function(response){
    cordova.exec(response, null, "TwitterPlugin", "isTwitterAvailable", []);
};
/**
 * Checks if the Twitter SDK can send a tweet
 * @param {Function} response callback on result
 * @param {Number} response.response is 1 for success, 0 for failure
 * @example
 *      window.plugins.twitter.isTwitterSetup(function (r) {
 *          console.log("twitter configured? " + r);
 *      });
 */
Twitter.prototype.isTwitterSetup = function(success, failure, consumerKey, consumerSecret, oauthToken, oauthSecret){
   cordova.exec(success, failure, "TwitterPlugin", "isTwitterSetup", [consumerKey, consumerSecret, oauthToken, oauthSecret]);
};
/**
 * Sends a Tweet to Twitter
 * @param {Function} success callback
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 * @param {String} tweetText message to send to twitter
 * @param {Object} options (optional)
 * @param {String} options.urlAttach URL to embed in Tweet
 * @param {String} options.imageAttach Image URL to embed in Tweet
 * @param {Number} response.response - 1 on success, 0 on failure
 * @example
 *     window.plugins.twitter.composeTweet(
 *         function () { console.log("tweet success"); },
 *         function (error) { console.log("tweet failure: " + error); },
 *         "Text, Image, URL",
 *         {
 *             urlAttach:"http://youtu.be/Ot-rPGv85u4",
 *             imageAttach:"http://i.ytimg.com/vi/obx2VOtx0qU/hqdefault.jpg?w=320&h=192&sigh=QD3HYoJj9dtiytpCSXhkaq1oG8M"
 *         }
 * );
 */
Twitter.prototype.composeTweet = function(success, failure, tweetText, options){
    options = options || {};
    options.text = tweetText;
    cordova.exec(success, failure, "TwitterPlugin", "composeTweet", [options]);
};

Twitter.prototype.sendTweet = function(success,failure,tweetText,options){
    options = options || {};
    options.text = tweetText;
    cordova.exec(success, failure, "TwitterPlugin", "sendTweet", [options]);
};
/**
 * Gets Tweets from Twitter Timeline
 * @param {Function} success callback
 * @param {Object[]} success.response Tweet objects, see [Twitter Timeline Doc]
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 * @example
 *     window.plugins.twitter.getPublicTimeline(
 *         function (response) { console.log("timeline success: " + JSON.stringify(response)); },
 *         function (error) { console.log("timeline failure: " + error); }
 *     );
 *
 * [Twitter Timeline Doc]: https://dev.twitter.com/docs/api/1/get/statuses/public_timeline
 */
Twitter.prototype.getPublicTimeline = function(success, failure){
    cordova.exec(success, failure, "TwitterPlugin", "getPublicTimeline", []);
};


/**
 * Search Tweets from Twitter Hashtag
 * @param {Function} success callback
 * @param {Object[]} success.response Tweet objects, see [Twitter Timeline Doc]
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 * @param {String} text Hashtag to search in twitter
 * @example
 *     window.plugins.twitter.searchByHashtag(
 *         function (response) { console.log("timeline success: " + JSON.stringify(response)); },
 *         function (error) { console.log("timeline failure: " + error); },
 *         "twitterPlugin"
 *     );
 *
 * [Twitter Timeline Doc]: https://dev.twitter.com/rest/reference/get/search/tweets
 */
Twitter.prototype.searchByHashtag = function(success, failure, text){
    options = options || {};
    options.hashtag = text;
    cordova.exec(success, failure, "TwitterPlugin", "searchByHashtag", [options]);
};


/**
 * Gets Tweets from Twitter Mentions
 * @param {Function} success callback
 * @param {Object[]} success.result Tweet objects, see [Twitter Mentions Doc]
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 * @example
 *     window.plugins.twitter.getMentions(
 *         function (response) { console.log("mentions success: " + JSON.stringify(response)); },
 *         function (error) { console.log("mentions failure: " + error); }
 *     );
 *
 * [Twitter Timeline Doc]: https://dev.twitter.com/docs/api/1/get/statuses/public_timeline
 */
Twitter.prototype.getMentions = function(success, failure){
    cordova.exec(success, failure, "TwitterPlugin", "getMentions", []);
};
/**
 * Gets Tweets from Twitter Mentions API
 * @param {Function} success callback
 * @param {String} success.response Twitter Username
 * @param {Object[]} success.result Tweet objects, see [Twitter Mentions Doc]
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 *
 * [Twitter Mentions Doc]: https://dev.twitter.com/docs/api/1/get/statuses/mentions
 */
Twitter.prototype.getTwitterUsername = function(success, failure) {
    cordova.exec(success, failure, "TwitterPlugin", "getTwitterUsername", []);
};
/**
 * Gets user Twitter Profile
 * @param {Function} success callback
 * @param {Object[]} success.result Tweet Profile, see [Twitter Doc]
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 *
 * [Twitter Mentions Doc]: https://dev.twitter.com/docs/api/1.1/get/users/show
 */
Twitter.prototype.getTwitterProfile = function(success, failure) {
    cordova.exec(success, failure, "TwitterPlugin", "getTwitterProfile", []);
};
/**
 * Gets Tweets from Twitter Mentions API
 * @param {String} url of [Twitter API Endpoint]
 * @param {Object} params key-value map, matching [Twitter API Endpoint]
 * @param {Function} success callback
 * @param {Object[]} success.response objects returned from Twitter API (Tweets, Users,...)
 * @param {Function} failure callback
 * @param {String} failure.error reason for failure
 * @param {Object} options (optional) other options for the HTTP request
 * @param {String} options.requestMethod HTTP Request type, ex: "POST"
 * @example
 *     window.plugins.twitter.getTWRequest(
 *          'users/lookup.json',
 *          {user_id: '16141659,783214,6253282'},
 *          function (response) { console.log("usersLookup success: " + JSON.stringify(response)); },
 *          function (error) { console.log("usersLookup failure: " + error); },
 *          {requestMethod: 'POST'}
 *     );
 *
 * [Twitter API Endpoints]: https://dev.twitter.com/docs/api
 */
Twitter.prototype.getTWRequest = function(url, params, success, failure, options){
    options = options || {};
    options.url = url;
    options.params = params;
    cordova.exec(success, failure, "TwitterPlugin", "getTWRequest", [options]);
};


Twitter.prototype.reTweet = function(success, failure, id) {
    cordova.exec(success, failure, "TwitterPlugin", "reTweet", [id]);
};

Twitter.prototype.addFavorites = function(success, failure, id) {
    cordova.exec(success, failure, "TwitterPlugin", "addFavorites", [id]);
};

Twitter.prototype.rmFavorites = function(success, failure, id) {
    cordova.exec(success, failure, "TwitterPlugin", "rmFavorites", [id]);
};

module.exports = new Twitter();
