<template>
  <main
    :aria-labelledby="pageFrontmatter.heroText !== null ? 'main-title' : undefined"
    class="theme-container"
  >
    <hero />

    <!-- Getting Started is Easy -->
    <div class="full-width-container alt-bg-fade half-height">
      <div class="content-container box">
        <section class="content-block no-border centered no-padding">
          <div class="content">
            <Content slot-key="getting-started-is-easy" />
          </div>
        </section>
      </div>
    </div>

    <div class="content-container">
      <!-- TypeScript -->
      <section class="content-block no-border">
        <div class="image">
          <img
            :src="$withBase('images/hero.svg')"
            alt="An isometric illustration of a node server and a web browser among trees"
            style="max-height: 240px"
          />
          <img :src="$withBase('images/trees-1.svg')" />
        </div>
        <div class="content">
          <Content slot-key="browser-and-node" />

          <div class="great-with">
            <div><h3>Works great with</h3></div>
            <div>
              <a href="https://nextjs.org/" target="_blank">
                <img :src="$withBase('images/next-logo.png')" alt="NextJS" />
              </a>
            </div>
            <div>
              <a href="https://nuxt.com/" target="_blank">
                <img :src="$withBase('images/nuxt-logo.png')" alt="NuxtJS" />
              </a>
            </div>
            <div>
              <a href="https://kit.svelte.dev/">
                <img :src="$withBase('images/sveltekit-logo.png')" alt="SvelteKit" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Chainable API -->
      <section class="content-block left">
        <div class="image">
          <img
            :src="$withBase('images/truck-loaded-with-lumberjack.svg')"
            style="max-height: 250px"
          />
        </div>
        <div class="content">
          <Content slot-key="human-machine-readable" />
          <!-- <h2>A Fluent, Chainable API</h2>
          <p>
            Writing your logs should feel natural which is why Adze chose to implement a chainable
            API that feels very much like the standard console API (but better).
          </p> -->
        </div>
      </section>
    </div>

    <!-- Lumber Scene 1 -->
    <div class="full-width-container alt-bg">
      <div class="content-container">
        <section class="content-block no-border centered">
          <div class="image">
            <img
              :src="$withBase('images/lumber-scene-1.svg')"
              style="width: 100%; max-height: 300px"
            />
          </div>
          <div class="content">
            <Content slot-key="everything-configurable" />
          </div>
        </section>
      </div>
    </div>

    <!-- Browser and Node -->
    <div class="content-container">
      <!-- Chainable API -->
      <section class="content-block no-border">
        <div class="image">
          <img :src="$withBase('images/truck-loaded.svg')" style="max-height: 200px" />
        </div>
        <div class="content">
          <Content slot-key="typescript-support" />
        </div>
      </section>
    </div>

    <!-- Shed -->
    <div class="content-container">
      <!-- Chainable API -->
      <section class="content-block left">
        <div class="image">
          <img :src="$withBase('images/woodmill.svg')" style="max-height: 172px" />
        </div>
        <div class="content">
          <Content slot-key="shed" />
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
            <Content slot-key="learn-more" />
            <br />
            <p class="action">
              <nav-link class="action-button" :item="quickStartLink" />
            </p>
          </div>
        </section>
      </div>
    </div>

    <div clas="content-container">
      <footer class="footer">
        <Content slot-key="footer" />
      </footer>
    </div>
  </main>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import { useClientData, withBase } from '@vuepress/client';

const {
  pageData,
  pageFrontmatter,
  pageHead,
  pageHeadTitle,
  pageLang,
  routeLocale,
  siteData,
  siteLocaleData,
} = useClientData();
</script>

<style scoped lang="scss">
@use '../styles/palette';

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

.feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    padding-bottom: 0;
    color: lighten(palette.$textColor, 10%);
  }

  p {
    color: lighten(palette.$textColor, 25%);
  }

  img {
    display: block;
    float: left;
    margin-right: 15px;
  }

  #chainsaw {
    max-height: 50px;
  }

  #lumberjack-bust {
    max-height: 60px;
  }

  #logs-small {
    max-height: 50px;
  }
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
  gap: 20px;
  align-items: center;

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
  }

  p {
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .image {
    padding-right: 20px;
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
    .content {
      max-width: 100%;
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
