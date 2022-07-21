<template>
  <section class="bg-gray-100">
    <div class="bg-blue-600">
      <div class="container markdown-body">
        <div class="py-12">
          <h1 class="text-white">Best eCommerce Script on Codecanyon</h1>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="py-24">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="md:w-8/12 p-4 w-full pr-4">
              <div class="mb-6">
                <h2 class="text-4xl mb-2 text-gray-900">Best eCommerce Script on Codecanyon </h2>
                <div class="text-sm text-gray-600">Updated at <span class="mr-2 pr-2 border-r border-gray-400">27th July, 2022</span> Written by <a href="#">Zakir Hossen</a> Category: <a href="#">Web Development</a> </div>
              </div>
              <img class="w-full h-auto object-cover" src="../../../static/docs/adlisting/preview.png" alt="">
              <div class="content py-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit quod laudantium hic reprehenderit ab! Neque unde numquam ducimus modi, recusandae dicta totam ad fugiat minus accusamus vero nisi reprehenderit.</p>
                <p>Tempora iure ea tempore, cumque dolore accusamus laboriosam praesentium neque quo. Itaque dolorum, accusantium eligendi dolores dicta cupiditate mollitia quia minus perspiciatis temporibus natus. Quos ex reiciendis fuga ut atque?</p>
              </div>
            </div>
            <div class="md:w-4/12 p-4 w-full">
              <div class="section mb-8">
                <h3 class="text-2xl mb-3 pb-2 border-gray-300 border-b-2">Hand Picked Product</h3>
                <div v-for="(item, index) in 2" :key="index" class="rounded-lg mb-6">
                  <img class="w-full h-auto object-cover rounded-md" src="../../../static/docs/adlisting/preview.png" alt="">
                  <h3 class="mt-2">Best eCommerce Script on Codecanyon</h3>
                </div>
              </div>
              <div class="section mb-8">
                <h3 class="text-2xl mb-3 pb-2 border-gray-300 border-b-2">Popular Posts</h3>
                <div v-for="(item, index) in 2" :key="index" class="rounded-lg mb-6">
                  <img class="w-full h-auto object-cover rounded-md" src="../../../static/docs/adlisting/preview.png" alt="">
                  <h3 class="mt-2">Best eCommerce Script on Codecanyon</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
