const r = window.resume;
const esc = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list = items => `<ul>${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
const section = (id, en, title, content, extra = '') => `<section id="${id}" class="section ${extra}" aria-labelledby="${id}-title"><div class="section-label"><span>${en}</span><h2 id="${id}-title">${title}</h2></div><div class="section-content">${content}</div></section>`;
const career = (company) => `<article class="company">
  <header class="job-heading"><div><h3>${esc(company.company)}</h3><p class="job-role">${esc(company.team)}</p></div><span class="period">${esc(company.period)}</span></header>
  <div class="company-projects">${company.projects.map(project => `<section class="project"><h4>${esc(project.title)}</h4>${project.period ? `<p class="project-context">${esc(project.period)}</p>` : ''}${project.bullets ? list(project.bullets) : ''}${project.description ? `<p class="project-description">${esc(project.description)}</p>` : ''}${project.areas?.length ? `<div class="project-areas">${project.areas.map(area => `<div class="project-area">${area.title ? `<h5>${esc(area.title)}</h5>` : ''}${list(area.bullets)}</div>`).join('')}</div>` : ''}</section>`).join('')}</div>
  ${company.automation?.length ? `<section class="company-workflow"><h4>개발 환경과 업무 자동화</h4>${company.automation.map(item => `<div class="automation"><h5>${esc(item.title)}</h5><p>${esc(item.text)}</p></div>`).join('')}</section>` : ''}
</article>`;
document.querySelector('#main').innerHTML = `
<div class="print-page">
<section class="hero" id="about" aria-labelledby="name">
  <div class="hero-eyebrow"><span class="dot"></span>${esc(r.role)}</div>
  <h1 id="name">${esc(r.name)}<span>${esc(r.englishName)}</span></h1>
  <div class="intro">${r.intro.map(p=>`<p>${esc(p)}</p>`).join('')}</div>
  <div class="hero-links screen-only">${r.links.map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)} <span aria-hidden="true">↗</span></a>`).join('')}<a href="./Jonghun_Shin_Resume.pdf" download>제출용 PDF 다운로드 <span aria-hidden="true">↓</span></a></div>
</section>
${section('experience','WORK EXPERIENCE','경력 및 프로젝트',r.experiences.map(career).join(''))}
</div>
<div class="print-page">
${section('side-projects','SIDE PROJECTS','개인·팀 프로젝트',r.sideProjects.map(p=>`<article class="side-project"><h3>${esc(p.title)}</h3><p class="side-project-period">${esc(p.period)}</p><p class="side-project-role">${esc(p.role)}</p>${list(p.bullets)}</article>`).join(''))}
${section('research','RESEARCH & PATENT','논문 및 특허',r.research.map(p=>`<article class="publication"><p class="kicker">${esc(p.category)}</p><h3>${esc(p.title)}</h3>${p.venue ? `<p class="venue">${esc(p.venue)}</p>` : ''}${p.authors ? `<p class="authors">${esc(p.authors)}</p>` : ''}<p>${esc(p.description)}${p.result?`<br>${esc(p.result)}<br>${esc(p.detail)}`:''}</p></article>`).join(''))}
${section('activities','ACTIVITES','수상 및 활동',r.activities.map(p=>`<article class="activity"><span class="activity-year">${esc(p.year)}</span><div><h3>${esc(p.title)}<span class="activity-badge${p.award ? ' activity-badge-award' : ''}">${esc(p.badge)}</span></h3></div></article>`).join(''))}
${section('education','EDUCATION','학력',`<div class="education"><h3>${esc(r.education.major)}</h3><p>${esc(r.education.date)} <span>·</span> ${esc(r.education.grade)}</p></div>`)}
</div>`;
document.querySelector('#print-button').addEventListener('click', () => window.print());
const nav = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(x => x.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    nav.forEach(a => { if(a.hash === '#' + id) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  }, { rootMargin: '-15% 0px -60% 0px' });
  nav.forEach(a => observer.observe(document.querySelector(a.hash)));
}
