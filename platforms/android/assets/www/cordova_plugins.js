cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-twitter.TwitterPlugin",
        "file": "plugins/cordova-twitter/www/TwitterPlugin.js",
        "pluginId": "cordova-twitter",
        "clobbers": [
            "Twitter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-twitter": "0.8.5"
};
// BOTTOM OF METADATA
});