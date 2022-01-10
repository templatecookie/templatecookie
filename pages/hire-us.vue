<template>
<div>
    <div class="bg-gray-f0 py-20 lg:py-124">
      <div class="container">
        <div class="text-center max-w-4xl	m-auto mb-28">
          <h1 class="text-dark-06 text-4xl md:text-5xl lg:text-6xl xl:text-heading-80 font-semibold mb-6 lg:mb-9 tracking-ls02">The easiest way to create your website.</h1>
          <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9 max-w-xl m-auto">Golio gives you everything you need to create your website in minutes. Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.</p>
          <nuxt-link to="/" class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">Let’s Work together <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div v-for="(item, indexItem) in CounterUpItem" :key="indexItem" class="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
              <CounterUp :title="item.title" :text="item.text" />
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 lg:py-124 ">
        <div class="container">
          <div class="lg:grid grid-cols-12 gap-7">
            <div class="col-span-6 lg:order-2 lg:mb-0 mb-8">
                <div class="grid grid-cols-12 gap-6">
                    <div v-for="(item, itemIndex) in items" :key="itemIndex" class="sm:col-span-6 col-span-12 build-solution">
                      <SolutionCard :title="item.title" :text="item.text"/>
                    </div>
                </div>
            </div>
            <div class="col-span-6 flex items-center">
              <div class=" lg:max-w-536">
                <h2 class="text-dark-06 text-4xl md:text-5xl xl:text-heading-56 font-semibold mb-6 tracking-ls01">We design & build your solution.</h2>
              <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9">Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex.  </p>
              <nuxt-link to="/" class="inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">Request A Quote <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
              </div>
            </div>
            
          </div>
        </div>
    </div>
    <div class="bg-orange-ff py-20 lg:py-124">
        <div class="container">
          <div class="lg:max-w-680 m-auto text-center mb-16">
            <h2 class="text-dark-06 text-4xl md:text-5xl  xl:text-heading-56 font-semibold mb-6  tracking-ls02">Beautiful UI kit designed to grow your business.</h2>
           <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9">Phasellus interdum sagittis magna. Donec varius ultricies diam sed lacinia. Mauris porttitor. quis risus eget mattis Ut auctor.</p>
          </div>
          <div class="grid grid-cols-12 gap-6">
              <div v-for="(item, itemIndex) in BusinessItems" :key="itemIndex" class="col-span-12 xl:col-span-4  lg:col-span-6 md:col-span-6">
                  <BusinessCard className="text-center" classNameIcon="m-auto" :title="item.title" :text="item.text"/>
              </div>
          </div>
        </div>
    </div>
    <div class="py-20 lg:py-124">
      <div class="container">
          <div class="lg:max-w-3xl m-auto text-center mb-16">
          <h2 class="text-dark-06 text-4xl md:text-5xl xl:text-heading-56 font-semibold mb-6 tracking-ls02">Your development plan, our development team.</h2>
          <p class="text-dark-06 text-lg sm:text-lg mb-6 lg:mb-9">You want to build a web app from scratch or just add some new features on a theme. We’ll give you an entire team of professional developers. Or just one. Pick what works best for you, and we’ll develop wonders.</p>
        </div>
        <div class="max-w-872 m-auto grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-6">
              <div class="rounded-xl p-6 md:p-8 shadow-bs8 border border-gray-e6">
                <div class="mb-8">
                  <img class="m-auto" src="~@/assets/images/all-img/thumb1.png" alt="">
                </div>
                <div>
                  <h3 class="text-2xl font-semibold mb-6 text-center text-dark-06">Lend-a-dev.</h3>
                  <p class="text-dark-42 font-light text-lg mb-4">In need of some extra help customizing features? Borrow one of our developers.</p>
                  <p class="text-dark-42 font-light text-lg">One is not enough for your growing development needs? We have more. Profesional engineers that can augment your team now.</p>
                  <nuxt-link to="/"><span class="mt-7 w-full font-medium rounded-7 text-body-17 text-white p-3 bg-blue-0b block text-center duration-300 hover:bg-dark-06">I Want This</span></nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-6">
              <div class="rounded-xl p-6 md:p-8 shadow-bs8 border border-gray-e6">
                <div class="mb-8">
                  <img class="m-auto" src="~@/assets/images/all-img/thumb2.png" alt="">
                </div>
                <div>
                  <h3 class="text-2xl font-semibold mb-6 text-center text-dark-06">Get-a-team.</h3>
                  <p class="text-dark-42 font-light text-lg">In need of full coding power? You can get the entire dev team with just the right roles:</p>
                  <ul class="list-disc text-dark-06 text-base pt-4 pl-4">
                    <li class="mb-2">Professional engineers? Check.</li>
                    <li class="mb-2">Testers? Check.</li>
                    <li class="mb-2">UI/UX Designers? Check.</li>
                    <li class="mb-2">Project Managers? Check.</li>
                    <li>Your app is exactly what you want!</li>
                  </ul>
                  <nuxt-link to="/"><span class="mt-7 w-full font-medium rounded-7 text-body-17 text-white p-3 bg-blue-0b block text-center duration-300 hover:bg-dark-06">I Want This</span></nuxt-link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="py-20 lg:py-124 bg-cover bg-center" :style="projectIdea">
      <div class="container">
          <div class="lg:max-w-680 m-auto text-center mb-16">
            <h2 class="text-dark-06 text-4xl md:text-5xl  xl:text-heading-56 font-semibold mb-6  tracking-ls02">Have a project idea! Write down a quote.</h2>
           <p class="text-dark-06 text-lg sm:text-xl mb-6 lg:mb-9">Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.</p>
          </div>
          <div class="shadow-bs08 rounded-3xl p-12 bg-white max-w-872 m-auto">
            <h2 class="text-dark-06 font-semibold tracking-ls01 text-2xl md:text-4xl mb-12 text-center">Request a quote to <span class="text-blue-0b">Templatecookie</span></h2>
            <div class="mb-6">
                <div class="lg:grid grid-cols-12 gap-6">
                    <div class="col-span-6 mb-6">
                        <label class="text-dark-06 text-sm font-light mb-1.5 block">Name</label>
                        <input class="w-full placeholder:text-gray-83 text-base font-light border border-gray-e6 rounded-5 px-4 h-48" type="text" placeholder="Full name">
                    </div>
                    <div class="col-span-6 mb-6">
                        <label class="text-dark-06 text-sm font-light mb-1.5 block">Email</label>
                        <input class="w-full placeholder:text-gray-83 text-base font-light border border-gray-e6 rounded-5 px-4 h-48" type="email" placeholder="Email adress">
                    </div>
                </div>
                <div class=" mb-6">
                    <label class="text-dark-06 text-sm font-light mb-1.5 block">Message</label>
                    <input class="w-full placeholder:text-gray-83 text-base font-light border border-gray-e6 rounded-5 px-4 h-48" type="text" placeholder="Brand/Company/Product Name">
                </div>
                <div class="mb-6">
                    <label class="text-dark-06 text-sm font-light mb-1.5 block">Company Name</label>
                    <textarea class="w-full placeholder:text-gray-83 text-base font-light border border-gray-e6 rounded-5 p-4" name="textarea" rows="3" placeholder="Tell us about your project..."></textarea>
                </div>
            </div>
            <div class="mb-6">
              <span class="text-sm text-dark-06 font-light mb-3 block">I want:</span>
              <div class="flex flex-wrap items-center">
                <div class="mr-2 sm:mr-6 my-2">
                  <input id="radio1" type="radio" name="radio" class="hidden" checked />
                  <label for="radio1" class="flex items-center cursor-pointer text-sm text-dark-06 font-light">
                  <span class="w-5 h-5 inline-block mr-2 rounded-full border-1.5 border-gray-cd flex-no-shrink"></span>
                 <strong>Plan A:</strong>  One or more developer</label>
                </div>
                <div class="mr-2 sm:mr-6 my-2">
                  <input id="radio2" type="radio" name="radio" class="hidden" />
                  <label for="radio2" class="flex items-center cursor-pointer text-sm text-dark-06 font-light">
                  <span class="w-5 h-5 inline-block mr-2 rounded-full border-1.5 border-gray-cd flex-no-shrink"></span>
                 <strong>Plan A+:</strong>  An entire team</label>
                </div>
              </div>
            </div>
            <div class="mb-12">
              <span class="text-sm text-dark-06 font-light mb-3 block">Budgets</span>
              <div class="flex flex-wrap items-center">
                <div class="mr-2 sm:mr-6 my-2">
                  <input id="radio3" type="radio" name="radio" class="hidden" checked />
                  <label for="radio3" class="flex items-center cursor-pointer text-sm text-dark-06 font-light">
                  <span class="w-5 h-5 inline-block mr-2 rounded-full border-1.5 border-gray-cd flex-no-shrink"></span>
                 $1,000 to $2,500</label>
                </div>
                <div class="mr-2 sm:mr-6 my-2">
                  <input id="radio4" type="radio" name="radio" class="hidden" />
                  <label for="radio4" class="flex items-center cursor-pointer text-sm text-dark-06 font-light">
                  <span class="w-5 h-5 inline-block mr-2 rounded-full border-1.5 border-gray-cd flex-no-shrink"></span>
                 $1,000 to $2,500</label>
                </div>
                <div class="mr-2 sm:mr-6 my-2">
                  <input id="radio5" type="radio" name="radio" class="hidden" />
                  <label for="radio5" class="flex items-center cursor-pointer text-sm text-dark-06 font-light">
                  <span class="w-5 h-5 inline-block mr-2 rounded-full border-1.5 border-gray-cd flex-no-shrink"></span>
                 $5,000 to $10,000</label>
                </div>
                <div>
                  <input id="radio6" type="radio" name="radio" class="hidden" />
                  <label for="radio6" class="flex items-center cursor-pointer text-sm text-dark-06 font-light">
                  <span class="w-5 h-5 inline-block mr-2 rounded-full border-1.5 border-gray-cd flex-no-shrink"></span>
                 $10,000 or more</label>
                </div>
              </div>
            </div>
            <div>
              <nuxt-link to="/" class="w-full text-center inline-block bg-blue-0b rounded-7 py-4 px-9 text-body-17 text-white duration-300 hover:bg-dark-06">Request a quote <img class="inline-block ml-2" src="~/assets/images/svg/arrow-right.svg" alt="brand-logo" /></nuxt-link>
            </div>
          </div>
      </div>
    </div>
</div>
  
</template>
<script>
import SolutionCard from "../components/SolutionCard.vue";
import BusinessCard from "../components/BusinessCard.vue";
import CounterUp from "../components/CounterUp.vue";
export default{
  name: "HireUsPage",
  component:{
    SolutionCard,
    BusinessCard,
    CounterUp
  },
  data(){
    return{
      items:[
        {
          title: "1. Understanding (UX)",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "2. Stage of Design (UI)",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "3. Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "4. Project Delivery",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        }
      ],
      BusinessItems:[
        {
          title: "Project Introduction",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "User Experience Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "User Interface Design",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "Front-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "Back-end Development",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
        {
          title: "Delivery & Client Feedback",
          text: "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."
        },
      ],
      projectIdea: {
        backgroundImage: "url(https://i.imgur.com/2HNdUlR.png)",
      },
      CounterUpItem:[
        {
          title: "17+",
          text: "Awards Rewarded",
        },
        {
          title: "23+",
          text: "Years of Experience",
        },
        {
          title: "183+",
          text: "Happy Clients",
        },
        {
          title: "315+",
          text: "COMPLETED PROJECT",
        }
      ],

    }
  }
};
</script>