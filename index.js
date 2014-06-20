"use strict";

function tryToParseJson(string) {
  var result;

  try {
    result = JSON.parse(string);
  } catch (error) {
    // oh error? well just return null, no biggie
    result = undefined;
  }

  return result;
}

module.exports = tryToParseJson;
