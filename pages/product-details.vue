<template>
  <div>
      <Breadcrumb/>
      <!-- end -->
      <div class="pt-12">
        <div class="container">
            <div class="lg:grid grid-cols-12 gap-6">
              <div class="col-span-8">
                <div class="border border-gray-e6 rounded-2xl p-6">
                  <div class="mb-6">
                      <img class="w-full h-full" src="~@/assets/images/all-img/product-details-thumb.png" alt="">
                  </div>
                  <div class="sm:flex justify-between">
                      <nuxt-link to="#" class="btn inline-block bg-blue-0b rounded-5 text-sm py-2.5 px-5 text-white duration-300 hover:bg-black">
                      <img class="inline-block mr-1.5 duration-300" src="~/assets/images/svg/image-square.svg" alt="" /> Screenshots 
                      </nuxt-link>
                      <div class="flex items-center">
                      <p class="text-dark-06 text-base mr-4">Compatible with:</p>
                      <ul class="flex space-x-3">
                        <li><nuxt-link to="#"><img src="~@/assets/images/svg/icon2.svg" alt=""></nuxt-link></li>
                        <li><nuxt-link to="#"><img src="~@/assets/images/svg/icon3.svg" alt=""></nuxt-link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- end -->
                <div class="pt-6">
                  <div>
                    header menu
                  </div>
                  <div class="py-8 border-b border-gray-e6 xl:pr-24">
                    <h4 class="text-dark-06 text-xl mb-5 uppercase">DESCRIPTION</h4>
                    <p class="text-dark-42 text-base font-light mb-5">Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file. This Admin Dashboard helps the users to build their dashboard design with the format you like by components on Figma that are fully customizable and dragging & dropping widgets and components. This website is designed based on extensive UX Research to provide the best experience to buy & sell products with better communication between buyers & sellers. And we surely say that “You’ll love it”.</p>
                    <p class="text-dark-42 text-base font-light mb-5">Every company, startup, and agency has a personal site. And the Companies want an analytics admin dashboard where they can see: Live active users, user clicks, website bounce & conversation rate, where the users are from, most visited page, social media traffic, etc. That’s why we created Relik – Analytics Admin Dashboard Templates for Startups, Companies, Agencies, and also for landing pages. Our main goal is to build an analytics admin dashboard that helps the user to see Live active users, the user clicks, website bounce & conversation rate, where the users are from, most visited page, social media traffic, etc. You can edit this Figma Template easily, it’s 100% customizable. All layers, groups, and components are logically named. All shapes are resizable and editable with no quality loss. It’s based on Bootstrap 5 Grid System (1320px).</p>
                    <p class="text-dark-42 text-base font-light">This HTML Template is perfect for converting into WordPress, Joomla, and other computer languages.</p>
                  </div>
                  <!-- end -->
                  <div class="py-8 border-b border-gray-e6">
                    <h4 class="text-dark-06 text-xl mb-5 uppercase">HIGHLIGHTS</h4>
                    <div class="grid grid-cols-12 gap-6">
                      <div class="col-span-12 md:col-span-6">
                        <ul>
                          <li v-for="(item, indexItem) in highlightItemOne" :key="indexItem" class="relative pl-8 text-dark-06 text-base font-light py-2"><img class="absolute left-0" src="~@/assets/images/svg/check-circle.svg" alt="">{{item.text}}</li>
                        </ul>
                      </div>
                      <div class="col-span-12 md:col-span-6">
                        <ul>
                          <li v-for="(item, indexItem) in highlightItemOne" :key="indexItem" class="relative pl-8 text-dark-06 text-base font-light py-2"><img class="absolute left-0" src="~@/assets/images/svg/check-circle.svg" alt="">{{item.text}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- end -->
                  <div class="py-8 border-b border-gray-e6">
                    <h4 class="text-dark-06 text-xl mb-5 uppercase">FOLDER STRUCTURE</h4>
                     <p class="text-dark-42 text-base font-light mb-5">Donec volutpat risus ac turpis tempor pulvinar. Mauris viverra varius felis, ut auctor sapien commodo eu. In finibus quis tellus nec auctor. Morbi vehicula suscipit fringilla. Etiam varius libero iaculis rutrum rutrum. Nunc augue ipsum, malesuada ut erat mollis, viverra porta dolor.</p>
                      <pre class=" p-8 rounded-lg bg-gray-f5 text-sm text-dark-06 pb-0">
    ├── templatecookie
        ├── assets
          ├── css
          ├── fonts 
          ├── images
          ├── js
        ├── index.vue
        ├── hire-us.vue
        ├── product-demo.vue
        ├── product-details.vue
        ├── product-list.vue
        ├── billing.vue
                </pre>
                  </div>
                  <!-- end -->
                  <div class="py-8 border-b border-gray-e6">
                    <h4 class="text-dark-06 text-xl mb-5 uppercase">CHANGELOG</h4>
                     <p class="text-dark-42 text-base font-light mb-5">Donec volutpat risus ac turpis tempor pulvinar. Mauris viverra varius felis, ut auctor sapien commodo eu. In finibus quis tellus nec auctor. Morbi vehicula suscipit fringilla. Etiam varius libero iaculis rutrum rutrum. Nunc augue ipsum, malesuada ut erat mollis, viverra porta dolor.</p>

                     <VueFaqAccordion 
                      :items="myItems"
                    />
                  </div>
                  <!-- end -->
                </div>
              </div>
              <div class="col-span-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, ex!
              </div>
            </div>
            <div class="bg-blue-09 xl:px-14 xl:p-0 p-10 pb-0  rounded-2xl">
                <div class="xl:grid grid-cols-12">
                    <div class="col-span-6 flex items-center">
                      <div class="xl:max-w-536 xl:py-16">
                          <h2 class="text-white text-3xl lg:text-heading-40 font-semibold mb-5 tracking-ls01">24/7 Customer Support</h2>
                          <p class="text-white text-lg sm:text-lg mb-5 lg:mb-8 font-light">Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex.  </p>
                          <div>
                            <nuxt-link to="/" class="block text-center sm:inline-block bg-white-12 rounded-7 py-4 px-9 text-body-17 text-white duration-300 sm:mb-0 mb-3 sm:mr-3 hover:bg-dark-06">Buy Now</nuxt-link>
                            <nuxt-link to="/" class="block text-center sm:inline-block bg-white rounded-7 py-4 px-9 text-body-17 text-blue-0b duration-300 hover:bg-dark-06 hover:text-white">Customer Support</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-6">
                        <img class="w-full h-full object-cover object-center" src="~@/assets/images/all-img/img-one.png" alt="">
                    </div>
                </div>
            </div>
            
        </div>
      </div>
      
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

import Breadcrumb from "../components/Breadcrumb.vue"
  export default{
    name: "ProductDetails",
    components: {
      Breadcrumb,
      VueFaqAccordion
    },
    data() {
      return{
         highlightItemOne:[
           {
             text: "150+ Widgets & Components."
           },
           {
             text: "124+ UI Components & Widgets."
           },
           {
             text: "Based on Extensive UX Research."
           },
           {
             text: "All Layers, Groups, and Components are Logically Named Correctly."
           },
           {
             text: "Designed for Designers & Developers."
           },
           {
             text: "Full Width 1920px."
           },
           {
             text: "Free Google Fonts Used. (Public Sans)"
           },
           {
             text: "Icon Provided by phosphoricons. (flat icon)"
           },
           {
             text: "Light, Dark & Navy Blue Left Side Bar."
           },
           {
             text: "Kanban Board to Manage with Team."
           },
           {
             text: "Post Comments on Cards."
           },
           {
             text: "Attach/Upload File."
           },
           {
             text: "Social Authentication."
           },
           
         ],
          myItems: [
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
          },
          {
            title: 'How long is a day and year on Venus?',
            value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
          },
          {
            title: 'What animal smells like popcorn?',
            value: 'Binturongs smell like popcorn.',
          }
        ]
      }
    }
  }
</script>