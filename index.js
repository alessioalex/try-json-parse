"use strict";

function tryToParseJson(string, reviver) {
  var result;

  try {
    result = JSON.parse(string, reviver);
  } catch (error) {
    // oh error? well just return null, no biggie
    result = null;
  }

  return result;
}

module.exports = tryToParseJson;
