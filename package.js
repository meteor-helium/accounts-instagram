Package.describe({
  name: 'helium:accounts-instagram',
  version: '1.0.0',
  summary: 'Login service for Instagram accounts',
  git: 'https://github.com/meteor-helium/accounts-instagram.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('helium:instagram@1.0.0', ['client', 'server']);

  api.addFiles("instagram.js");
});
