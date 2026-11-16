// Plain-text summary for AI assistants and recruiter tools (llms.txt convention).
// Built from the same i18n text as the site, so it never drifts.
import { person, projects } from '../data/site';
import { t } from '../i18n';
import { absolute } from '../lib/url';

export function GET() {
  const d = t('en');
  const cv = d.cv;
  const lines = [
    `# ${person.name}`,
    '',
    `> ${cv.headline}. ${cv.workAuth}. ${cv.availability}.`,
    '',
    cv.summary,
    '',
    '## Links',
    `- [CV (HTML)](${absolute('en/cv/')})`,
    `- [CV (PDF, English)](${absolute(person.cvPdf.en)})`,
    `- [CV (PDF, Spanish)](${absolute(person.cvPdf.es)})`,
    `- [Portfolio, English](${absolute('en/')})`,
    `- [Portfolio, Spanish](${absolute('es/')})`,
    `- [GitHub](${person.github})`,
    ...(person.linkedin ? [`- [LinkedIn](${person.linkedin})`] : []),
    `- Email: ${person.email}`,
    '',
    '## Experience',
    ...cv.experience.flatMap((x) => ['', `### ${x.role} · ${x.org} (${x.dates}, ${x.place})`, ...x.bullets.map((b) => `- ${b}`)]),
    '',
    '## Other experience',
    ...cv.other.flatMap((x) => ['', `### ${x.role} · ${x.org} (${x.dates}, ${x.place})`, ...x.bullets.map((b) => `- ${b}`)]),
    '',
    '## Projects',
    ...projects.flatMap((p) => {
      const c = cv.projects[p.id];
      return [
        '',
        `### ${p.name} (${p.years.replace(' — ', '–')})`,
        c.sub,
        `Live: ${p.live.url} · Code: ${p.repo ?? cv.privateCode} · Case study: ${absolute(`en/#${p.id}`)}`,
        `Stack: ${p.stack.join(', ')}`,
        ...c.bullets.map((b) => `- ${b}`),
      ];
    }),
    '',
    '## Skills',
    ...d.stack.groups.map(([name, items]) => `- ${name}: ${items}`),
    '',
    '## Education',
    ...d.about.edu.map(([what, where]) => `- ${what}, ${where}`),
    '',
    '## Languages',
    d.about.langs.map(([n, l]) => `${n} (${l})`).join(', '),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
