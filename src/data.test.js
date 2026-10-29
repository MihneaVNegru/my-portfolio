import { personalInfo, projects, experience, education, skillGroups } from './data';

describe('portfolio data', () => {
  test('personal info has no placeholder values', () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(personalInfo.github).toMatch(/^https:\/\/github\.com\//);
    expect(personalInfo.linkedin || '').not.toMatch(/yourprofile/i);
  });

  test('every project has a title, description, tags and a repo link', () => {
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.repoLink).toMatch(/^https:\/\/github\.com\//);
    });
  });

  test('project ids are unique', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('experience, education and skills are populated', () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThan(0);
  });
});
