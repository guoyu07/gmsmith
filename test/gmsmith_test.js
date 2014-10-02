// Load our dependencies
var gmsmith = require('../lib/gmsmith');
var spritesmithEngineTest = require('spritesmith-engine-test');

// Configure gmsmith for our environment
gmsmith.clearSettings();
if (process.env.TEST_IMAGEMAGICK === 'TRUE') {
  gmsmith.set({imagemagick: true});
} else if (process.env.TEST_IMAGEMAGICK === 'IMPLICIT_WITH_SET') {
  gmsmith.set({});
}

// Run our tests
spritesmithEngineTest.run({
  engine: gmsmith,
  engineName: 'gmsmith',
  options: {
    // If we are on Windows, skip over performance test (it cannot handle the long argument string)
    // TODO: Implement this flag
    skipRidiculousImagesTest: process.platform === 'win32'
  }
});
