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
    [
      '@semantic-release/npm',
      {
        // Disable npm publish here - we publish separately with OIDC trusted publishing
        npmPublish: false,
      },
    ],
    '@semantic-release/github',
    // Note: @semantic-release/git and @semantic-release/changelog removed because
    // master branch protection prevents direct pushes. The changelog is included
    // in the GitHub release notes instead.
  ],
};
