<template>
  <div class="px-8 py-8">
    <nuxt-content class="markdown-body" :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'documentation',
  props: ['productName', 'categories'],
  scrollToTop: true,
  head() {
    const title = this.page.title + ` - ${this.productName}`;
    const description = this.page.description;
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  },
  async asyncData ({ $content, params }) {
    const url = params.chapter ? `docs/${params.slug}/${params.chapter}` : `docs/${params.slug}`;
    const page = await $content(url)
    .sortBy('position', 'asc')
    .fetch()

    return {
      page
    }
  },
}
</script>

<style lang="scss">
// @import '../../../assets/scss/markdown/index.scss';

.markdown-body {
  body {
    margin: 0 auto;
    font-family: Georgia, Palatino, serif;
    color: #4e4e54;
    line-height: 1;
    max-width: 960px;
    padding: 30px;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #232427;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-bottom: 15px;
    padding: 0;
  }

  b, strong {
    font-weight: bold;
  }

  h1 {
    font-size: 44px;
  }

  h2 {
    font-size: 32px;
    margin: 24px 0 6px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  a {
    color: #0099ff;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    margin-bottom: 1.5rem;
    // padding-left: 30px;
  }

  li {
    line-height: 24px;
  }

  ul li ,
  ol li {
    margin-left: 24px;
    margin-bottom: 5px;
  }

  p,
  ul,
  ol {
    font-size: 16px;
    line-height: 24px;
    max-width: 540px;
  }

  ul {
    list-style-type: disclosure-closed;
  }

  ol {
    list-style-type: decimal;
  }

  pre {
    padding: 10px 24px;
    max-width: 800px;
    white-space: pre-wrap;
    code {
      background-color: transparent;
      padding: 0;
    }
  }

  code {
    font-family: Consolas, Monaco, Andale Mono, monospace;
    line-height: 1.5;
    font-size: 13px;
    background-color: rgba(#0099ff, 0.1);
    padding: 2px 4px;
  }

  aside {
    display: block;
    float: right;
    width: 390px;
  }

  blockquote {
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    max-width: 476px;
    border-left: 4px solid #0099ff;
  }

  blockquote p {
    color: #666;
    max-width: 460px;
  }

  hr {
    width: 540px;
    text-align: left;
    margin: 0 auto 0 0;
    color: #999;
    margin-bottom: 20px;
  }

  table {
    border-collapse: collapse;
    margin: 1em 1em;
    border: 1px solid #CCC;
  }

  table thead {
    background-color: #EEE;
  }

  // table thead td {
  //   color: #666;
  // }

  table td {
    padding: 0.5em 1em;
    border: 1px solid #CCC;
  }
}
</style>
