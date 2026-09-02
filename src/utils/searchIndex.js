export function buildSearchIndex(college) {
  const entries = [];

  const add = (label, href, category) => {
    if (label && href) entries.push({ label, href, category });
  };

  for (const link of college.navLinks || []) {
    add(link.name, link.href, 'Page');
    for (const item of link.dropdown || []) add(item.label, item.href, link.name);
  }
  for (const item of college.quickLinks || []) add(item.label, item.href, 'Quick Links');
  for (const item of college.resources || []) add(item.label, item.href, 'Resources');

  // Deduplicate by href
  const seen = new Set();
  return entries.filter(({ href }) => seen.has(href) ? false : seen.add(href));
}
