<template>
  <div class="py-12">
    <div class="items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          GitHub Info Overview
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
          There are the infos about the GitHub repositories
        </p>
      </div>
      <div
        class="flex border-solid border-2 border-blue-500 mx-12 md:mx-60 mt-8 flex-1 items-center p-4 mb-2 text-sm text-blue-800 rounded-lg bg-blue-50"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Info alert!</span> If infos return blank or
          undefined, your IP might being rate limited, try again later.
        </div>
      </div>
    </div>
  </div>
  <div
    class="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"
  >
    <div class="shadow-hover-animation bg-white rounded-lg p-4">
      <h3 class="text-2xl font-bold mb-2">
        <a
          class="text-decoration-none"
          href="https://github.com/justmammt/cardex/tree/dev"
          ><i class="fa-solid fa-code-branch"></i> dev</a
        >
      </h3>
      <ul class="text-inline">
        <li>
          <i class="fa-solid fa-code-commit"></i>
          <span id="latestCommitDevSha" class="text-gray-700"></span>
          <a
            href=""
            id="latestCommitDevShaHref"
            class="px-2 text-decoration-none"
            name="sha-write"
            ><i class="align-top text-xs fa-solid fa-up-right-from-square"></i
          ></a>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-at" style="padding-right: 5px"></i>
            <img
              class="rounded-full h-6 w-6 inline"
              id="LatestCommitAuthorIMG"
              src=""
            />
            <span
              style="padding-left: 5px"
              id="latestCommitDevAuthor"
              class="text-gray-700"
            ></span>
            <a
              href=""
              id="latestCommitDevAuthorHref"
              class="px-2 text-decoration-none"
              name="sha-write"
              ><i class="align-top text-xs fa-solid fa-up-right-from-square"></i
            ></a>
          </span>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-message"></i>
            <span style="padding-left: 5px" id="" class="text-gray-700"
              >Message:
              <div class="mx-auto block bg-gray-200 rounded-sm">
                <p class="m-2" id="latestCommitDevMessage"></p></div
            ></span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-circle-info"></i>
            <span style="padding-left: 5px" id="" class="text-gray-700"
              >Infos:</span
            >
          </span>
        </li>
        <li>
          <span>
            <i
              style="padding-left: 10px"
              class="text-green-500 fa-solid fa-plus"
            ></i>
            <span style="padding-left: 10px" id="" class="text-gray-700"
              >Additions: <span id="latestCommitDevAdditions"></span
            ></span>
          </span>
        </li>
        <li>
          <span>
            <i
              style="padding-left: 10px"
              class="text-red-500 fa-solid fa-minus"
            ></i>
            <span style="padding-left: 10px" id="" class="text-gray-700"
              >Deletions: <span id="latestCommitDevDeletions"></span
            ></span>
          </span>
        </li>
      </ul>
    </div>
    <!-- Prod infos-->
    <div class="shadow-hover-animation bg-white rounded-lg p-4">
      <h3 class="text-2xl font-bold mb-2">
        <a
          class="text-decoration-none"
          href="https://github.com/justmammt/cardex/tree/main"
          ><i class="fa-solid fa-code-branch"></i> main</a
        >
      </h3>
      <ul class="text-inline">
        <li>
          <i class="fa-solid fa-code-commit"></i>
          <span id="latestCommitProdSha" class="text-gray-700"></span>
          <a
            href=""
            id="latestCommitProdShaHref"
            class="px-2 text-decoration-none"
            name="sha-write"
            ><i class="align-top text-xs fa-solid fa-up-right-from-square"></i
          ></a>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-at" style="padding-right: 5px"></i>
            <img
              class="rounded-full h-6 w-6 inline"
              id="LatestCommitProdAuthorIMG"
              src=""
            />
            <span
              style="padding-left: 5px"
              id="latestCommitProdAuthor"
              class="text-gray-700"
            ></span>
            <a
              href=""
              id="latestCommitProdAuthorHref"
              class="px-2 text-decoration-none"
              name="sha-write"
              ><i class="align-top text-xs fa-solid fa-up-right-from-square"></i
            ></a>
          </span>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-message"></i>
            <span style="padding-left: 5px" id="" class="text-gray-700"
              >Message:
              <div class="mx-auto block bg-gray-200 rounded-sm">
                <p class="m-2" id="latestCommitProdMessage"></p></div
            ></span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-circle-info"></i>
            <span style="padding-left: 5px" id="" class="text-gray-700"
              >Infos:</span
            >
          </span>
        </li>
        <li>
          <span>
            <i
              style="padding-left: 10px"
              class="text-green-500 fa-solid fa-plus"
            ></i>
            <span style="padding-left: 10px" id="" class="text-gray-700"
              >Additions: <span id="latestCommitProdAdditions"></span
            ></span>
          </span>
        </li>
        <li>
          <span>
            <i
              style="padding-left: 10px"
              class="text-red-500 fa-solid fa-minus"
            ></i>
            <span style="padding-left: 10px" id="" class="text-gray-700"
              >Deletions: <span id="latestCommitProdDeletions"></span
            ></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/fontawesome/css/all.css";
@import "@/styles/GitHubView.scss";
@import "@/styles/TextDecorationNone.css";
</style>

<script scoped>
export default {
  methods: {
    fetch_info: function () {
      const { Octokit } = require("@octokit/rest");
      const octokit = new Octokit();
      async function latest_commit_dev() {
        const promise_dev = new Promise((resolve, _reject) => {
          resolve(
            octokit.rest.repos.getCommit({
              owner: "justmammt",
              repo: "cardex",
              ref: "dev",
            })
          );
          _reject("error");
        });

        await promise_dev.then((value) => {
          var sha = value.data.sha.slice(0, 7);

          document.getElementById("latestCommitDevSha").innerHTML = " " + sha;
          document.getElementById("latestCommitDevShaHref").href =
            value.data.html_url;
          document.getElementById("LatestCommitAuthorIMG").src =
            value.data.author.avatar_url;
          document.getElementById("latestCommitDevAuthor").innerHTML =
            value.data.commit.author.name;
          document.getElementById("latestCommitDevAuthorHref").href =
            value.data.author.html_url;
          document.getElementById("latestCommitDevAdditions").innerHTML =
            parseInt(value.data.stats.additions);
          document.getElementById("latestCommitDevDeletions").innerHTML =
            parseInt(value.data.stats.deletions);
          var message = value.data.commit.message;
          var parsed_msg = message.replace(RegExp("\\n", "g"), "<br>");
          document.getElementById("latestCommitDevMessage").innerHTML =
            parsed_msg;
          console.log(sha);
          console.log(value);
        });
      }
      async function latest_commit_prod() {
        const promise_prod = new Promise((resolve, _reject) => {
          resolve(
            octokit.rest.repos.getCommit({
              owner: "justmammt",
              repo: "cardex",
              ref: "main",
            })
          );
          _reject("error");
        });

        await promise_prod.then((value) => {
          var sha = value.data.sha.slice(0, 7);

          document.getElementById("latestCommitProdSha").innerHTML = " " + sha;
          document.getElementById("latestCommitProdShaHref").href =
            value.data.html_url;
          document.getElementById("LatestCommitProdAuthorIMG").src =
            value.data.author.avatar_url;
          document.getElementById("latestCommitProdAuthor").innerHTML =
            value.data.commit.author.name;
          document.getElementById("latestCommitProdAuthorHref").href =
            value.data.author.html_url;
          document.getElementById("latestCommitProdAdditions").innerHTML =
            parseInt(value.data.stats.additions);
          document.getElementById("latestCommitProdDeletions").innerHTML =
            parseInt(value.data.stats.deletions);
          var message = value.data.commit.message;
          var parsed_msg = message.replace(RegExp("\\n", "g"), "<br>");
          document.getElementById("latestCommitProdMessage").innerHTML =
            parsed_msg;
          console.log(value);
        });
      }

      latest_commit_dev();
      latest_commit_prod();
    },
  },
  mounted() {
    this.fetch_info();
  },
};
</script>
