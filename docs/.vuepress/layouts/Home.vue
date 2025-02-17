<template>
  <main class="theme-container">
    <hero />

    <!-- Getting Started is Easy -->
    <div class="full-width-container alt-bg-fade half-height">
      <div class="content-container box">
        <section class="content-block no-border centered no-padding">
          <div class="content">
            <h2>Getting Started is Easy</h2>
            <Content path="/home/getting-started-is-easy.md" />
            <img
              :src="$withBase('/images/info-example-browser.svg')"
              alt="Example of an info log generated from the example code"
              style="max-width: 500px; height: 100%"
            />
          </div>
        </section>
      </div>
    </div>

    <div class="content-container">
      <!-- TypeScript -->
      <section class="content-block no-border">
        <div class="image">
          <img
            :src="$withBase('/images/hero.svg')"
            alt="An isometric illustration of a node server and a web browser among trees"
            style="max-width: 100%; height: 100%"
          />
        </div>
        <div class="content">
          <h2>Universal By Nature</h2>
          <Content path="/home/universal.md" />
          <div class="great-with">
            <h3>Works great with</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap">
              <div>
                <a href="https://nextjs.org/" target="_blank">
                  <img style="height: 40px" :src="$withBase('images/next-logo.png')" alt="NextJS" />
                </a>
              </div>
              <div>
                <a href="https://nuxt.com/" target="_blank">
                  <img style="height: 40px" :src="$withBase('images/nuxt-logo.png')" alt="NuxtJS" />
                </a>
              </div>
              <div>
                <a href="https://kit.svelte.dev/">
                  <img
                    style="height: 40px"
                    :src="$withBase('images/sveltekit-logo.png')"
                    alt="SvelteKit"
                  />
                </a>
              </div>
              <div>
                <a href="https://nodejs.org/en">
                  <img
                    style="height: 40px; max-width: 100%"
                    :src="$withBase('images/node-logo.svg')"
                    alt="NodeJS"
                  />
                </a>
              </div>
              <div>
                <a href="https://bun.sh/">
                  <img
                    style="height: 40px; max-width: 100%"
                    :src="$withBase('images/bun-logo.svg')"
                    alt="BunJS"
                  />
                </a>
              </div>
              <div>
                <a href="https://deno.com/">
                  <img
                    style="height: 40px; max-width: 100%"
                    :src="$withBase('images/deno-logo.svg')"
                    alt="DenoJS"
                  />
                </a>
              </div>
              <div>
                <a href="https://reactnative.dev/">
                  <img
                    style="height: 40px; max-width: 100%"
                    :src="$withBase('images/react-native-logo.svg')"
                    alt="React Native"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Chainable API -->
      <section class="content-block left">
        <div class="image">
          <img :src="$withBase('images/chainsaw.svg')" style="width: 100%; max-height: 200px" />
        </div>
        <div class="content">
          <h2>Simple, Chainable API</h2>
          <Content path="/home/chainable-api.md" />
          <img
            :src="$withBase('/images/alert-example-browser.svg')"
            alt="Example of an alert log generated from the example code"
            style="max-width: 800px; height: 100%"
            class="hidden-small"
          />
        </div>
      </section>
    </div>

    <!-- Choose Your Format -->
    <div class="full-width-container alt-bg">
      <div class="content-container">
        <section class="content-block no-border centered">
          <div class="image">
            <img
              :src="$withBase('images/lumber-scene-1.svg')"
              style="max-width: 100%; height: auto"
            />
          </div>
          <div class="content">
            <h2>Choose Your Format</h2>
            <Content path="/home/configurable.md" />
            <strong class="hidden-small">
              This is an example of the same log printed two different ways by changing the format.
            </strong>
            <img
              class="hidden-small"
              :src="$withBase('images/humanAndMachineFormat-example-browser.png')"
              style="max-width: 100%; height: auto"
            />
          </div>
        </section>
      </div>
    </div>

    <!-- TypeScript Support -->
    <div class="content-container">
      <!-- Chainable API -->
      <section class="content-block no-border">
        <div class="image">
          <img :src="$withBase('images/truck-loaded.svg')" style="max-height: 260px" />
        </div>
        <div class="content">
          <h2 style="display: flex; align-items: center; gap: 15px">
            First Class TypeScript Support
            <img :src="$withBase('images/ts-icon.svg')" style="max-height: 40px" />
          </h2>
          <Content path="/home/typescript-first.md" />
        </div>
      </section>
    </div>

    <!-- Microfrontends -->
    <div class="content-container">
      <!-- Chainable API -->
      <section class="content-block left">
        <div class="image">
          <img :src="$withBase('images/woodmill.svg')" style="max-height: 260px" />
        </div>
        <div class="content">
          <h2>Easy Microfrontend Logging</h2>
          <Content path="/home/global-store.md" />
        </div>
      </section>
    </div>

    <!-- Learn More -->
    <div class="full-width-container alt-bg">
      <div class="content-container">
        <section class="content-block no-border">
          <div class="image">
            <img :src="$withBase('images/shaped-wood.svg')" style="max-height: 150px" />
          </div>
          <div class="content">
            <h2>And Much More...</h2>
            <Content path="/home/much-more.md" />
            <br />
            <p class="action">
              <RouteLink class="action-button" to="/getting-started/introduction.md">
                Get Started
              </RouteLink>
            </p>
          </div>
        </section>
      </div>
    </div>

    <div clas="content-container">
      <footer class="footer">
        <Content path="/home/footer.md" />
      </footer>
    </div>
  </main>
</template>

<script setup>
import Hero from '../components/Hero.vue';
</script>

<style scoped lang="scss">
@use '../styles/palette';

img {
  max-width: 100%;
  height: auto;
}

.hidden-small {
  display: none;
  @media screen and (min-width: 600px) {
    display: initial;
  }
}

.home-container {
  position: relative;
  padding: 6rem 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  display: block;
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: palette.$accentColor;
  padding: 0.8rem 1.6rem;
  border: 0.3rem solid palette.$accentColor;
  border-radius: 0;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: lighten(palette.$accentColor, 10%);
  }
}

.features {
  border-top: 1px solid palette.$borderColor;
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}

.content-container {
  max-width: 960px;
  margin: 0px auto;
  display: block;
  padding-left: 40px;
  padding-right: 40px;

  &.box {
    position: relative;
    height: 50%;
    bottom: -250px;
    background: palette.$white;
    border: 1px solid rgba(239, 239, 239, 1);
  }
}

.full-width-container {
  padding: 40px 20px;

  &.alt-bg {
    background-color: palette.$altBgColor;
  }

  &.alt-bg-fade {
    pointer-events: none;
    background: rgb(239, 239, 239);
    background: linear-gradient(0deg, rgba(239, 239, 239, 1) 30%, transparent 70%);
    z-index: 1;
  }

  &.half-height {
    position: relative;
    top: -220px;
    pointer-events: none;
  }
}

.great-with {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  h3 {
    margin-right: 2rem;
  }
  > div > a > img {
    max-height: 40px;
  }
}

.content-block {
  display: flex;
  padding: 60px 0;
  margin: 40px 0;
  border-top: 1px solid #eaecef;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &.no-padding {
    padding: 0;
  }

  &.no-border {
    border: 0;
  }

  &.left {
    flex-direction: row-reverse;
    flex-wrap: none;

    .image {
      padding-left: 20px;
      padding-right: 0;
    }
  }

  &.centered {
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .content {
      width: 100%;
      max-width: none;
    }

    .image {
      padding-right: 0;
    }
  }

  .image {
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    padding-right: 20px;
    img {
      display: block;
    }
  }

  .content {
    max-width: 60%;

    a.header-anchor {
      display: none;
    }

    h2 {
      padding-left: 15px;
      padding-bottom: 0;
      font-family: 'Share', 'Helvetica', 'Arial', 'sans-serif';
      color: palette.$textColor;
      border-bottom: none;
      border-left: 10px solid palette.$adzeBrown;
    }

    p {
      a {
        display: inline;
      }
    }
  }
}

.footer {
  padding: 2.5rem;
  border-top: 1px solid palette.$borderColor;
  text-align: center;
  color: lighten(palette.$textColor, 25%);
}

@media (max-width: palette.$MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }
    .feature {
      max-width: initial;
      padding: 0 2.5rem;
    }
  }

  .content-block {
    padding: 40px 0;
    margin: 20px 0;
    justify-content: center;
    .image {
      flex: none;
      width: 280px;
    }

    .content {
      max-width: 100%;

      h3 {
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: palette.$MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }
      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
  }

  .content-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .features {
    flex-direction: column;
    .feature {
      flex-basis: auto;
      max-width: initial;
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
