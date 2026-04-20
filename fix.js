const fs = require('fs');
const path = require('path');

const files = [
  'about.html', 'contact.html', 'faqs.html', 'index.html',
  'login.html', 'register.html', 'project-detail.html', 'studio.html'
];

files.forEach(f => {
  const p = path.join('d:/Downloads/pragathi', f);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  // 1. Rename company
  content = content.replace(/Pragathi Home Solutions/g, 'Pragathi Steel Kitchens');

  // 2. Fix the menu links
  content = content.replace(/<div>Medium Homes \(2BHK\/3BHK\)<\/div>/g, '<div>Medium Kitchen Layouts</div>');
  content = content.replace(/<div>Luxury Villas \/ Farmhouses<\/div>/g, '<div>Luxury Steel Kitchens</div>');

  // 3. Delete the broken filter JS from studio.html
  if (f === 'studio.html') {
    const brokenJS = `// Filter functionality
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          const filter = this.dataset.filter;
          document.querySelectorAll('#projects-grid [data-category]').forEach(card => {
            if (filter === 'all' || card.dataset.category.includes(filter)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });`;
    content = content.replace(brokenJS, '// Bootstrap native tabs handle the functionality now.');
  }

  fs.writeFileSync(p, content);
  console.log('Fixed', f);
});
