import os
import re

source_dir = r"c:\Users\User\Downloads\springer-main\springer-main"
dest_dir = r"c:\Users\User\Downloads\springer-main\springer-ts\app"

# get all html files except index.html which we already did manually
html_files = [f for f in os.listdir(source_dir) if f.endswith('.html') and f != 'index.html']

def convert_to_jsx(html):
    # Convert some common HTML to JSX
    html = html.replace('class="', 'className="')
    html = html.replace('for="', 'htmlFor="')
    html = html.replace('charset="', 'charSet="')
    html = re.sub(r'style="([^"]*)"', lambda m: 'style={{' + ','.join([f"'{k.strip()}':'{v.strip()}'" for k, v in [x.split(':') for x in m.group(1).split(';') if ':' in x]]) + '}}', html)
    
    # Self closing tags
    html = re.sub(r'<img([^>]*)(?<!/)>', r'<img\1 />', html)
    html = re.sub(r'<br([^>]*)(?<!/)>', r'<br\1 />', html)
    html = re.sub(r'<hr([^>]*)(?<!/)>', r'<hr\1 />', html)
    html = re.sub(r'<input([^>]*)(?<!/)>', r'<input\1 />', html)
    html = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', html, flags=re.DOTALL)
    
    # Replace anchor tags to Link for internal routes
    return html

for file in html_files:
    page_name = file.replace('.html', '')
    
    with open(os.path.join(source_dir, file), 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract body content between header and footer
    match = re.search(r'</header>.*?(<div id="#?[tT]op"></div>|)(.*?)<footer', content, re.DOTALL | re.IGNORECASE)
    
    if match:
        body_content = match.group(2).strip()
        
        # In multi.html, project2.html etc there may be multiple unclosed tags, but React expects one root and closed tags.
        # But we will do our best with regex for perfectly formed HTML.
        jsx_content = convert_to_jsx(body_content)
        
        # create directory
        page_dir = os.path.join(dest_dir, page_name)
        os.makedirs(page_dir, exist_ok=True)
        
        ts_code = f"""import React from 'react';
import Link from 'next/link';

export default function {page_name.capitalize().replace('-', '')}Page() {{
  return (
    <main>
      <div id="top"></div>
      {jsx_content}
    </main>
  );
}}
"""
        with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
            f.write(ts_code)
            
print("Conversion completed!")
