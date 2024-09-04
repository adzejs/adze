<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import Navbar from '@vuepress/theme-default/components/VPNavbar.vue';
</script>

<template>
  <ParentLayout>
    <template #navbar>
      <Navbar>
        <template #after> </template>
      </Navbar>
    </template>
  </ParentLayout>
</template>

<style lang="css"></style>
