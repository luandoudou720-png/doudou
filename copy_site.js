import fs from 'fs';

let html = fs.readFileSync('site.html', 'utf-8');

// Replace relative paths with absolute paths pointing to the original site
html = html.replace(/src="\//g, 'src="https://doudoux2.mysxl.cn/');
html = html.replace(/src='\//g, "src='https://doudoux2.mysxl.cn/");
html = html.replace(/href="\//g, 'href="https://doudoux2.mysxl.cn/');
html = html.replace(/href='\//g, "href='https://doudoux2.mysxl.cn/");

// Also replace any background-image urls that might be relative
html = html.replace(/url\(\//g, 'url(https://doudoux2.mysxl.cn/');

fs.writeFileSync('index.html', html);
console.log("Replaced index.html with the copied site.");
