<template>
  <div class="hero">
    <div class="intro">
      <img :src="$withBase('images/logo.svg')" alt="Adze JS " />
      <h1>Universal Logging for Modern JavaScript</h1>
      <div class="button-container">
        <RouteLink class="action-button" to="/getting-started/introduction.md">
          Getting Started
        </RouteLink>
        <RouteLink class="action-button alt" to="/reference/introduction.md"
          >Reference Guide</RouteLink
        >
      </div>
    </div>
    <div class="illustration">
      <div class="image-container">
        <img
          :src="$withBase('images/hero.svg')"
          alt="An isometric illustration of a node server and a web browser among trees"
        />
      </div>
      <div class="button-container">
        <RouteLink class="action-button" to="/getting-started/introduction.md">
          Getting Started
        </RouteLink>
        <RouteLink class="action-button alt" to="/reference/introduction.md"
          >Reference Guide</RouteLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteLink } from '@vuepress/client';
</script>

<style scoped lang="scss">
@use '../styles/palette';

.hero {
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  // @media screen and (min-width: 400px) and (orientation: landscape) {
  //   height: 230vh;
  // }
  @media screen and (min-width: 920px) {
    flex-direction: column-reverse;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      24deg,
      rgba(255, 255, 255, 0) 46%,
      rgba(83, 70, 61, 1) 46%,
      rgba(83, 70, 61, 1) 49%,
      rgba(103, 83, 69, 1) 49%,
      rgba(103, 83, 69, 1) 50%,
      rgba(170, 192, 82, 1) 50%
    );
  }
  @media screen and (min-width: 1000px) and (orientation: landscape) {
    height: 100vh;
  }
  @media screen and (min-width: 1236px) and (orientation: landscape) {
    flex-direction: row;
  }
}

.action-button {
  display: inline-block;
  min-width: 205px;
  font-size: 1.2rem;
  color: #fff;
  background-color: palette.$accentColor;
  padding: 0.8rem 1.6rem;
  border: 0.3rem solid palette.$accentColor;
  border-radius: 0;
  transition: background-color 0.15s ease;
  box-sizing: border-box;
  border-bottom: 0.3rem solid darken(palette.$accentColor, 10%);
  &:hover {
    border-color: lighten(palette.$accentColor, 10%);
    background-color: lighten(palette.$accentColor, 10%);
  }
  &.alt {
    background-color: palette.$white;
    border: 0.3rem solid palette.$accentColor;
    color: palette.$accentColor;
    &:hover {
      color: palette.$white;
      background-color: lighten(palette.$accentColor, 10%);
      border-color: lighten(palette.$accentColor, 10%);
    }
  }
}

.intro {
  padding: 0 2rem 0 2rem;
  text-align: center;
  img {
    max-width: 340px;
  }
  h1 {
    font-size: 24px;
  }
  .button-container {
    display: none;
  }
  @media screen and (min-width: 920px) {
    padding: 0 0 0 2rem;
    flex-grow: 1;
    min-height: 40vh;
    align-self: flex-start;
    .button-container {
      display: block;
    }
  }
  @media screen and (min-width: 1236px) and (orientation: landscape) {
    align-self: flex-end;
  }
}

// 1235px

.illustration {
  padding: 20px;
  text-align: center;

  .button-container {
    margin-top: 4rem;
  }

  @media screen and (min-width: 920px) {
    min-width: 500px;
    min-height: 40vh;
    flex-grow: 1;
    align-self: flex-end;
    .button-container {
      display: none;
    }
  }
  @media screen and (min-width: 1236px) and (orientation: landscape) {
    align-self: flex-start;
  }
  .image-container {
    display: none;
    max-width: 500px;
    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (min-width: 389px) {
      display: block;
    }
    @media screen and (min-width: 540px) and (min-height: 720px) and (orientation: portrait) {
      max-width: 380px;
    }
    @media screen and (min-width: 700px) and (min-height: 720px) and (orientation: portrait) {
      max-width: 500px;
    }
    @media screen and (min-height: 845px) and (min-width: 1138px) {
      max-width: 650px;
    }
  }
}
</style>
