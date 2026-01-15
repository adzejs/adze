/**
 * semantic-release configuration
 * https://semantic-release.gitbook.io/semantic-release/usage/configuration
 *
 * Uses npm OIDC trusted publishing for authentication.
 * Configure the trusted publisher on npmjs.com:
 *   https://www.npmjs.com/package/adze/access
 * Settings:
 *   - Organization or user: adzejs
 *   - Repository: adze
 *   - Workflow filename: build.yml
 */
export default {
  branches: ['master', { name: 'beta', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        // Disable npm publish here - we publish separately with OIDC trusted publishing
        npmPublish: false,
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
