const fs = require('fs');
const path = require('path');

const sourceDir = 'c:\\Users\\User\\Downloads\\springer-main\\springer-main';
const destDir = 'c:\\Users\\User\\Downloads\\springer-main\\springer-ts\\app';

const htmlFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of htmlFiles) {
    const pageName = file.replace('.html', '');
    const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');

    const regex = /<\/header>.*?([\s\S]*?)<footer/im;
    const match = regex.exec(content);

    if (match) {
        let bodyContent = match[1].trim();
        // Remove <div id="#top"></div> if it's there
        bodyContent = bodyContent.replace(/<div id="#?top"><\/div>/i, '');
        
        // Let's replace hrefs in bodyContent so links work in SPA
        bodyContent = bodyContent.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
        bodyContent = bodyContent.replace(/href="index"/g, 'href="/"');

        const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, '');

        const pageDir = path.join(destDir, pageName === 'team' ? 'team' : pageName);
        fs.mkdirSync(pageDir, { recursive: true });

        const tsCode = `import React from 'react';

export default function ${componentName}Page() {
  const htmlContent = ${JSON.stringify(bodyContent)};

  return (
    <main>
      <div id="top"></div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
`;
        fs.writeFileSync(path.join(pageDir, 'page.tsx'), tsCode, 'utf-8');
    }
}

console.log('Node.js HTML to dangerouslySetInnerHTML conversion completed!');
