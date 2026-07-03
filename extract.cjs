const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\enriq\\.gemini\\antigravity-ide\\brain\\0e9aff23-216b-4d25-a412-44a66dfec83b\\.system_generated\\steps\\751\\content.md', 'utf8');

const latMatch = content.match(/"latitude"\s*:\s*([0-9.-]+)/);
const lngMatch = content.match(/"longitude"\s*:\s*([0-9.-]+)/);
console.log('Lat:', latMatch ? latMatch[1] : 'null');
console.log('Lng:', lngMatch ? lngMatch[1] : 'null');

const imgMatches = content.match(/https:\/\/media\.vrbo\.com\/lodging\/[\w/.-]+/g);
if (imgMatches) {
  const uniqueImgs = [...new Set(imgMatches)];
  console.log('Images:');
  console.log(uniqueImgs.slice(0, 20).join('\n'));
} else {
  console.log('No images found');
}
