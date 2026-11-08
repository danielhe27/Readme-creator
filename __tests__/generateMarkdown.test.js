const generateMarkdown = require('../utils/generateMarkdown');

const answers = {
  title: 'My App',
  description: 'Does a thing.',
  installation: 'npm install',
  usage: 'node index.js',
  contributing: 'Daniel Herrera',
  tests: 'npm test',
  github: 'danielhe27',
  email: 'me@example.com',
};

test('includes the title, description and contact links', () => {
  const md = generateMarkdown({ ...answers, license: 'MIT' });
  expect(md).toMatch(/^# My App/);
  expect(md).toContain('## Description\nDoes a thing.');
  expect(md).toContain('[danielhe27](https://github.com/danielhe27)');
});

test.each(['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3'])('%s license gets a badge, link and section', (license) => {
  const md = generateMarkdown({ ...answers, license });
  expect(md).toContain('![License');
  expect(md).toContain('## License');
  expect(md).toContain(generateMarkdown.renderLicenseLink(license));
  expect(md).toContain('- [License](#license)');
});

test('None leaves out the badge and license section', () => {
  const md = generateMarkdown({ ...answers, license: 'None' });
  expect(md).not.toContain('![License');
  expect(md).not.toContain('## License');
  expect(md).not.toContain('(#license)');
});
