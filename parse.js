import fs from 'fs';

const html = fs.readFileSync('site.html', 'utf-8');
const imgRegex = /(?:https?:)?\/\/user-assets\.sxlcdn\.com\/images\/[^"'\s]+/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[0]);
}
console.log("Images:", [...new Set(images)]);
