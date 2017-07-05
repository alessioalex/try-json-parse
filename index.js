"use strict";

function tryToParseJson(string, reviver) {
  try {
    return JSON.parse(string, reviver);
  } catch (error) {
    // oh error? well just return undefined, no biggie
  }
}

module.exports = tryToParseJson;
