<template>
  <div class="bg-gray-100">
    <div class="bg-blue-600">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="py-12">
          <h1 class="!text-white text-2xl lg:text-5xl mb-2">
            Blog Details
          </h1>
          <div class="text-gray-200 font-light">
            <nuxt-link to="/blog" class="!text-gray-200 hover:text-gray-600">
              Home
            </nuxt-link>
            <nuxt-link class="!text-gray-200 hover:text-gray-600" to="/blog">
              Blog
            </nuxt-link>
            /
            <a href="javascript:void(0)" class="!text-gray-300">
              {{ post.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 bg-white">
      <div class="py-24">
        <div class="w-full md:w-8/12 p-4 mx-auto">
          <div class="mb-6">
            <h2 class="text-5xl mb-4 text-gray-900">
              {{ post.title }}
            </h2>
            <div class="text-sm text-gray-600">
              Updated at
              <span class="mr-2 pr-3 border-r border-gray-400">{{
                formateDate(post.updatedAt)
                }}</span>
              Category:
              <a href="#" v-for="(tag, index) in post.tags" :key="index">
                {{ tag.name }},
              </a>
            </div>
          </div>
          <img class="w-full h-auto object-cover" v-if="post.image && post.image.url" :src="post.image.url"
            :alt="post.title">
          <div class="content py-4 markdown-body">
            <structured-text :data="post.description" :render-inline-record="renderInlineRecord"
              render-link-to-record="renderLinkToRecord" />
          </div>
        </div>
        <section class="text-gray-600 body-font overflow-hidden pt-14 lg:pt-20">
          <div class="w-full md:w-8/12 px-5 mx-auto">
            <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Read More
            </h4>
            <hr class="my-6">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap group" v-for="(item, i) in relatedPosts" :key="i">
                <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700" v-for="(tag, index) in item.tags" :key="index">{{
                    tag.name }}</span>
                  <span class="mt-1 text-gray-500 text-sm">{{
                    item.updatedAt
                    }}</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: item?.slug } }"
                      class="text-gray-900 group-hover:text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      {{ item.title }}
                    </nuxt-link>
                  </h2>
                  <p class="leading-relaxed">
                    {{ item.shortDescription }}
                  </p>
                  <nuxt-link to="/" class="text-blue-500 inline-flex items-center mt-4">
                    Read More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from "dayjs";
  import BLOG_DETAILS from "~/graphql/blog/postDetails";

  export default {
    methods: {
      renderInlineRecord: ({ record, h }) => {
        switch (record.__typename) {
          case "ProductRecord":
            return h(
              "nuxt-link",
              { href: `/demo/${record.slug}` },
              record.firstName,
            );
          case "PostRecord":
            return h(
              "nuxt-link",
              { ...transformedMeta, to: `/blog/${record.slug}` },
              children,
            );
          case "TagRecord":
            return h(
              "nuxt-link",
              { ...transformedMeta, to: `/blog/${record.slug}` },
              children,
            );
          default:
            return null;
        }
      },
      renderLinkToRecord: ({ record, h, children, transformedMeta }) => {
        switch (record.__typename) {
          case "TeamMemberRecord":
            return h(
              "a",
              { ...transformedMeta, href: `/team/${record.slug}` },
              children,
            );
          default:
            return null;
        }
      },
      formateDate(data) {
        return dayjs(data).format("D MMMM, YYYY");
      },
    },

    async setup() {
      const { data } = await useGraphqlQuery({ query: BLOG_DETAILS });
      const post = ref([]);
      const relatedPosts = ref([]);
      post.value = data._rawValue.post;
      relatedPosts.value = data._rawValue.allPosts;

      const title = `${post?._rawValue?.title} | Templatecookie.com`;
      const description = post?._rawValue?.shortDescription;
      const image = post?._rawValue?.image?.url;

      useSeoMeta({
        title: title,
        ogTitle: title,
        description: description,
        ogDescription: description,
        ogImage: image,
      });

      return {
        post,
        relatedPosts,
      };
    },
  };
</script>
