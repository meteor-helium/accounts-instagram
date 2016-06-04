Accounts.oauth.registerService('instagram');

if (Meteor.isClient) {
  Meteor.loginWithInstagram = function(options, callback) {
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Instagram.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.instagram'],
    forOtherUsers: []
  });
}
