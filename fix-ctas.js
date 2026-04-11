const fs = require('fs');

const files = {
  'multi': ['Interested In Capital Investments for Multi Family and Student Accommodations?', 'Please complete the form below to get started on acquiring capital for your multi family real estate investment.'],
  'logistics': ['Interested in Capital for Logistics Investments?', 'Please complete the form below to get started on raising capital for your logistics investments.'],
  'hospitality': ['Interested In Capital Investments for Hospitality Developments?', 'Please complete the form below to get started on acquiring capital for your hospitality investments.'],
  'mixed': ['Interested In Mixed Use Capital Investments?', 'Please complete the form below to get started on acquiring capital for your mixed-use investments.'],
  'development': ['Interested In Acquiring Capital For Land Developments?', 'Please complete the form below to get started on acquiring capital for your development project.']
};

for (const [name, texts] of Object.entries(files)) {
  const file = 'app/' + name + '/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<h2 className="text-3xl font-bold font-serif mb-6">.*?<\/h2>/, '<h2 className="text-3xl font-bold font-serif mb-6">' + texts[0] + '</h2>');
  content = content.replace(/<p className="text-xl text-zinc-600 mb-10">.*?<\/p>/, '<p className="text-xl text-zinc-600 mb-10">' + texts[1] + '</p>');
  fs.writeFileSync(file, content);
}
console.log('done');
