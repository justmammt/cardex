<template>
  <div class="py-12">
    <div class="items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
          Have a doubt or want to give a feedback? We'd love to hear from you!
        </p>
      </div>
    </div>
    <div class="items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="p-12 relative grid grid-cols-1 md:grid-cols-3 gap-3">
        <div
          class="shadow-hover-animation px-2 hover:shadow-2xl shadow-inner rounded-lg"
        >
          <div class="text-center">
            <div>
              <i
                class="fa-regular fa-envelope sm:py-3 py-2 header-icon fa-bounce"
              ></i>

              <h1
                class="font-bold text-center header"
                style="padding-bottom: 10px"
              >
                Email
              </h1>
              <span class="text-left"
                >If you'd like to leave a feedback, or have any questions, feel
                free to contact the email below</span
              >
              <div class="py-3">
                <button
                  class="py-1 button-transition px-2 bg-blue-500 rounded-xl"
                >
                  <a
                    class="button-text-size text-white font-bold"
                    href="mailto:justnorganization@justmammtlol.wtf"
                    >justnorganization@justmammtlol.wtf</a
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shadow-hover-animation px-2 hover:shadow-2xl shadow-inner rounded-lg"
        >
          <div class="text-center">
            <div>
              <i
                class="fa-solid fa-hashtag sm:py-3 py-2 header-icon"
              ></i>

              <h1
                class="font-bold text-center header"
                style="padding-bottom: 10px"
              >
                Social Media
              </h1>
              <span class="text-left">You can contact us via social media<br>unfortunately, this isn't available yet.</span>
              <div class="py-3">
                <button
                  class="py-1 button-transition px-2 bg-gray-400 button-disabled rounded-xl"
                >
                  <span class="button-text-size text-white font-bold" href=""
                    >Soon..</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shadow-hover-animation px-2 hover:shadow-2xl shadow-inner rounded-lg"
        >
          <div class="text-center">
            <div>
              <i class="fa-brands fa-whatsapp  sm:py-3 py-2 header-icon"></i>

              <h1
                class="font-bold text-center header"
                style="padding-bottom: 10px"
              >
                WhatsApp
              </h1>
              <span class="text-left">You can contact us via WhatsApp<br>unfortunately, this isn't available yet.</span>
              <div class="py-3">
                <button
                  class="py-1 button-transition px-2 bg-gray-400 button-disabled rounded-xl"
                >
                  <span class="button-text-size text-white font-bold" href=""
                    >Soon..</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/fontawesome/css/all.css";
@import "@/styles/ContactView.scss";
</style>
