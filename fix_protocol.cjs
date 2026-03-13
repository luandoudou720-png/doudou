const fs = require('fs');
const path = require('path');

function fixUrls(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixUrls(fullPath);
    } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('//user-assets.sxlcdn.com')) {
        content = content.split('//user-assets.sxlcdn.com').join('https://user-assets.sxlcdn.com');
        content = content.split('https:https://').join('https://');
        fs.writeFileSync(fullPath, content);
        console.log('Fixed protocol in ' + fullPath);
      }
    }
  }
}

fixUrls(process.cwd());