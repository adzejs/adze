import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['test/**/*.{test,spec}.{js,ts}'],
    fakeTimers: {
      toFake: [...configDefaults.fakeTimers.toFake, 'performance'],
    },
    restoreMocks: true,
  },
});
