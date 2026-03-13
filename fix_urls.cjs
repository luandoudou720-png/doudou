const fs = require('fs');
const path = require('path');

function fixUrls(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixUrls(fullPath);
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/https:\/\/doudoux2\.mysxl\.cn\/\//g, 'https://');
      fs.writeFileSync(fullPath, content);
      console.log('Fixed ' + fullPath);
    }
  }
}

fixUrls(process.cwd());