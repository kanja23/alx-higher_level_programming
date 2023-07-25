#!/usr/bin/node

const fs = require('fs');

function writeStringToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote to ${filePath}`);
    }
  });
}

if (process.argv.length < 4) {
  console.error('Usage: node 1-writeme.js <file_path> <content>');
} else {
  const filePath = process.argv[2];
  const content = process.argv[3];
  writeStringToFile(filePath, content);
}
