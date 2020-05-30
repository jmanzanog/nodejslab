"scripts": {
  "test": "DEBUG=example:* nyc --reporter=lcov ava tests/ --verbose",
    "setup": "DEBUG=example:* node setup.js",
      "lint": "standard"
}


"scripts": {
  "setup": "@powershell $env:DEBUG='example:*';node setup.js",
    "lint": "standard",
      "test": "SET DEBUG=example:* && nyc --reporter=lcov ava tests/* --verbose"
}