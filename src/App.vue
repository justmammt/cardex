<template>
  <div
    class="bg-amber-100 border-t border-b border-amber-500 text-amber-700 px-4 py-1"
    role="alert"
  >
    <p class="font-bold">WIP!</p>
    <p class="text-sm">This site is actually a work in progress.</p>
  </div>
  <nav
    class=" border-bottom shadow-lg relative px-4 py-0 flex justify-between items-center bg-white"
  >
    <a class="text-3xl font-bold leading-none" href="#">
      <img src="logo/cardex-logo-png.png" class="h-32 p-0" unselectable="on" />
    </a>
    <div class="lg:hidden">
      <button class="navbar-burger flex items-center text-blue-600 p-3">
        <svg
          class="block h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul
      class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
    >
      <li>
        <router-link
          exact-active-class="text-blue-400 hover:text-blue-500"
          class="text-sm text-gray-400 hover:text-gray-500"
          to="/"
          >Home</router-link
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>

      <li>
        <router-link
          exact-active-class="text-blue-400 hover:text-blue-500"
          class="text-sm text-gray-400 hover:text-gray-500"
          to="/contact"
          >Contact</router-link
        >
      </li>
      <li class="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <router-link
          exact-active-class="text-blue-400 hover:text-blue-500"
          class="text-sm text-gray-400 hover:text-gray-500"
          to="/github-overview"
          >GitHub Infos</router-link
        >
      </li>
    </ul>
    <!--<a
            class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="#">Sign In</a><a
            class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#">Sign up</a>-->
    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <img src="logo/cardex-logo-png.png" class="h-16" />
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <router-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/"
                >Home</router-link
              >
              <router-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/contact"
                >Contact</router-link
              >
              <router-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/github-overview"
                >GitHub Infos</router-link
              >
            </li>
          </ul>
        </div>
        <!--  <div class="mt-auto">
                    <div class="pt-6">
                        <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                            href="#">Sign in</a>
                        <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                            href="#">Sign Up</a>
                    </div>
                    <p class="my-4 text-xs text-center text-gray-400">
                        <span>Copyright © 2021</span>
                    </p>
                </div>-->
      </nav>
    </div>
  </nav>
  <router-view />
  <div class="footer border-top shadow-2xl">
    <footer class="bg-gray-900 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center">
          <a href="#" class="text-gray-400 hover:text-gray-300 mx-3">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300 mx-3">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-300 mx-3">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import "@/styles/HomeView.css";
@import '@/styles/TextDecorationNone.css';
.footer {
  position: fixed;
   bottom: 0;
   width: 100%;
   height: 70px;

}
</style>

<script>

// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var w = 0; w < close.length; w++) {
      close[w].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var y = 0; y < backdrop.length; y++) {
      backdrop[y].addEventListener("click", function () {
        for (var z = 0; z < menu.length; z++) {
          menu[z].classList.toggle("hidden");
        }
      });
    }
  }
});

/* window.onload = function () {
  document.body.onselectstart = function () {
    return false;
  };
};*/

const elH = document.querySelectorAll(".timeline li > div");

window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

function setEqualHeights(el) {
  let counter = 0;
  for (let x = 0; x < el.length; x++) {
    const singleHeight = el[x].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let x = 0; x < el.length; x++) {
    el[x].style.height = `${counter}px`;
  }
}
</script>
