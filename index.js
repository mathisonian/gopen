#!/usr/bin/env node
var gitRemoteProtocol = require('git-remote-protocol');
var gitRemoteOriginUrl = require('git-remote-origin-url');
var gitRemoteFromUrl = require('git-remote-from-url');
var open = require('open');

var args = process.argv.slice(2);

var pathToOpen;
if (args.length) {
  pathToOpen = args[0];
}

gitRemoteOriginUrl(pathToOpen)
  .then(function(url) {
    var remote = gitRemoteFromUrl(url);
    var openURL = gitRemoteProtocol.toHTTPS(remote);
    open(openURL);
  });
