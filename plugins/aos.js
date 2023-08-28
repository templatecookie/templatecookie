import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init({
    once: true,
  });
});
