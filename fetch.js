import https from 'https';
import fs from 'fs';

https.get('https://doudoux2.mysxl.cn/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('site.html', data);
    console.log("Saved to site.html");
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
