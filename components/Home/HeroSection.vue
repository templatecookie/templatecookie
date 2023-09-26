<template>
    <section class="section-bg" style="background-image: url('./hero-bg.jpg');">
        <div class="mx-auto max-w-7xl">
            <swiper :loop="true" :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
                :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2">
                <swiper-slide>
                    <div class="lg:pt-[100px] pt-16 lg:pb-[152px] pb-[120px] px-4 sm:px-6 lg:px-8">
                        <div class="max-w-[648px] w-full mx-auto">
                            <h2 class="md:text-5xl md:leading-[56px] font-semibold text-3xl text-center text-white md:mb-6 mb-4">Get Elite Support for
                                your business, Worry
                                Free.</h2>
                            <p class="md:text-xl text-base text-center text-white/80 md:mb-8 mb-6">Let us handle the
                                technical parts, you focus on the business. Welcome to Template cookie's Elite Support,
                                where you can
                                hire our team of expert developers at an unbelievably affordable rate.</p>
                            <div class="flex justify-center w-full flex-wrap gap-6">
                                <nuxt-link :to="item.href" v-for="(item, index) in hero.buttons"
                                    :key="index"
                                    :class="item.href === '/docs/' ?
                                        'border-2 border-white bg-transparent hover:bg-white hover:text-dark text-white' :
                                        'border-2 border-white bg-white hover:bg-transparent text-dark hover:text-white'"
                                    class="py-4 px-10 flex items-center transition-all duration-500 justify-center text-sm-17 rounded-lg overflow-hidden max-w-max"
                                    data-aos="flip-up" :data-aos-delay="100 * index">
                                    {{ item . label }}
                                    <span class="inline-block ml-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-[648px] w-full mx-auto">
                            <h2 class="md:text-5xl md:leading-[56px] font-semibold text-3xl text-center text-white md:mb-6 mb-4">Looking for Partner for
                                Your Next Project?</h2>
                            <p class="md:text-xl text-base text-center text-white/80 md:mb-8 mb-6">We have a talented
                                and experienced team of designers and developers who are committed to offering the best
                                value to your
                                projects.</p>
                            <div class="flex justify-center w-full flex-wrap gap-6">
                                <nuxt-link to="/get-support"
                                    class="border-2 border-white bg-white hover:bg-transparent text-dark hover:text-white py-4 px-10 flex items-center transition-all justify-center text-sm-17 rounded-lg overflow-hidden max-w-max"
                                    data-aos="flip-up" :data-aos-delay="100">
                                    Get a Free Quote
                                    <span class="inline-block ml-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-[648px] w-full mx-auto">
                            <h2 class="md:text-5xl md:leading-[56px] font-semibold text-3xl text-center text-white md:mb-6 mb-4">Need Customer Support
                                Worry Free, We’re Here
                            </h2>
                            <p class="md:text-xl text-base text-center text-white/80 md:mb-8 mb-6">Our customer support
                                team is available to answer your questions and help you with whatever you need.</p>
                            <div class="flex justify-center w-full flex-wrap gap-6">
                                <nuxt-link to="/get-support"
                                    class="border-2 border-white bg-white hover:bg-transparent text-dark hover:text-white py-4 px-10 flex items-center transition-all justify-center text-sm-17 rounded-lg overflow-hidden max-w-max"
                                    data-aos="flip-up" :data-aos-delay="100">
                                    Create a Ticket
                                    <span class="inline-block ml-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </nuxt-link>
                                <nuxt-link to="/docs/"
                                    class="border-2 border-white bg-transparent hover:bg-white hover:text-dark text-white py-4 px-10 flex items-center transition-all justify-center text-sm-17 rounded-lg overflow-hidden max-w-max"
                                    data-aos="flip-up" :data-aos-delay="100">
                                    Documentation
                                    <span class="inline-block ml-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="0" :slidesPerView="3"
                :breakpoints="{
                    '640': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }"
                :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div
                        class="whitespace-nowrap text-sm sm:text-base flex gap-2 justify-center items-center lg:p-6 px-2.5 py-2 thumbs-item text-white">
                        <svg class="hidden md:inline-block" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 15.837C19.456 16.568 20.704 17.742 21.615 19.21C21.795 19.5 21.885 19.646 21.917 19.847C21.98 20.256 21.701 20.759 21.32 20.92C21.132 21 20.922 21 20.5 21M16 11.532C16.7512 11.1597 17.3835 10.585 17.8255 9.87254C18.2675 9.16013 18.5018 8.3384 18.5018 7.5C18.5018 6.6616 18.2675 5.83987 17.8255 5.12746C17.3835 4.41505 16.7512 3.8403 16 3.468M14 7.5C14 8.09095 13.8836 8.67611 13.6575 9.22208C13.4313 9.76804 13.0999 10.2641 12.682 10.682C12.2641 11.0998 11.768 11.4313 11.2221 11.6575C10.6761 11.8836 10.091 12 9.50001 12C8.90906 12 8.3239 11.8836 7.77793 11.6575C7.23197 11.4313 6.73589 11.0998 6.31803 10.682C5.90016 10.2641 5.5687 9.76804 5.34255 9.22208C5.1164 8.67611 5.00001 8.09095 5.00001 7.5C5.00001 6.30653 5.47411 5.16193 6.31803 4.31802C7.16194 3.47411 8.30653 3 9.50001 3C10.6935 3 11.8381 3.47411 12.682 4.31802C13.5259 5.16193 14 6.30653 14 7.5ZM2.56001 18.938C4.15301 16.545 6.67001 15 9.50001 15C12.33 15 14.846 16.545 16.44 18.938C16.79 19.463 16.965 19.725 16.945 20.06C16.929 20.32 16.758 20.64 16.549 20.798C16.282 21 15.914 21 15.178 21H3.82201C3.08601 21 2.71801 21 2.45001 20.798C2.22699 20.613 2.08522 20.3482 2.05501 20.06C2.03501 19.725 2.21101 19.463 2.56001 18.938Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>Elite Support</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="whitespace-nowrap text-sm sm:text-base flex gap-2 justify-center items-center lg:p-6 px-2.5 py-2 thumbs-item text-white">
                        <svg class="hidden md:inline-block" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 12L14 5V9H3.8C3.52 9 3.38 9 3.273 9.055C3.17881 9.10272 3.10215 9.17903 3.054 9.273C3 9.38 3 9.52 3 9.8V14.2C3 14.48 3 14.62 3.054 14.727C3.10215 14.821 3.17881 14.8973 3.273 14.945C3.38 15 3.52 15 3.8 15H14V19L21 12Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>Hire us</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="whitespace-nowrap text-sm sm:text-base flex gap-2 justify-center items-center lg:p-6 px-2.5 py-2 thumbs-item text-white">
                        <svg class="hidden md:inline-block" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 18V12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12V18M5.5 21C4.83696 21 4.20107 20.7366 3.73223 20.2678C3.26339 19.7989 3 19.163 3 18.5V16.5C3 15.837 3.26339 15.2011 3.73223 14.7322C4.20107 14.2634 4.83696 14 5.5 14C6.16304 14 6.79893 14.2634 7.26777 14.7322C7.73661 15.2011 8 15.837 8 16.5V18.5C8 19.163 7.73661 19.7989 7.26777 20.2678C6.79893 20.7366 6.16304 21 5.5 21ZM18.5 21C17.837 21 17.2011 20.7366 16.7322 20.2678C16.2634 19.7989 16 19.163 16 18.5V16.5C16 15.837 16.2634 15.2011 16.7322 14.7322C17.2011 14.2634 17.837 14 18.5 14C19.163 14 19.7989 14.2634 20.2678 14.7322C20.7366 15.2011 21 15.837 21 16.5V18.5C21 19.163 20.7366 19.7989 20.2678 20.2678C19.7989 20.7366 19.163 21 18.5 21Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>Customer Support</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script>
    import {
        ref
    } from 'vue';
    // Import Swiper Vue.js components
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/thumbs';

    // import required modules
    import {
        FreeMode,
        Autoplay,
        Thumbs
    } from 'swiper/modules';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        props: ["data"],
        computed: {
            hero() {
                return this.data[0];
            },
        },
        setup() {
            const thumbsSwiper = ref(null);

            const setThumbsSwiper = (swiper) => {
                thumbsSwiper.value = swiper;
            };

            return {
                thumbsSwiper,
                setThumbsSwiper,
                modules: [FreeMode, Autoplay, Thumbs],
            };
        },
    };
</script>
<style>
    .section-bg {
        background-size: cover;
        background-repeat: no-repeat;
    }

    .thumbs-item {
        border-top: 4px solid transparent;
    }

    .thumbs-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-top: 4px solid white;
        /* Adjust the border properties as needed */
    }

    .thumbs-item:hover {
        border-radius: 12px 12px 0px 0px;
        background: rgba(255, 255, 255, 0.12);
    }

    .swiper-slide-thumb-active .thumbs-item {
        border-radius: 12px 12px 0px 0px;
        background: rgba(255, 255, 255, 0.12);
    }

    .swiper-slide-thumb-active .thumbs-item:before {
        width: 95%;
        margin: 0px 10px;
        transition: all 5000ms ease;
    }
</style>
