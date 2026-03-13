const fs = require('fs');
const path = require('path');

function fixUrls(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixUrls(fullPath);
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix double slash issue: https://doudoux2.mysxl.cnhttps://user-assets.sxlcdn.com -> https://user-assets.sxlcdn.com
      content = content.replace(/https:\/\/doudoux2\.mysxl\.cn\/\//g, 'https://');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${fullPath}`);
    }
  }
}

fixUrls(path.join(__dirname, 'public'));
