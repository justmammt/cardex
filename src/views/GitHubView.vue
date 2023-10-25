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
       <!--<div class="flex justify-center items-center p-4">
          <button
            @click="fetch_info"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            To fetch data, use this button or reload page.
          </button>
        </div>--> 
      </div>
    </div>
  </div>
  <div
    class="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
            class="text-decoration-none"
            name="sha-write"
            >- link</a
          >
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
              >- link</a
            >
          </span>
        </li>
      </ul>
    </div>
    <div class="shadow-hover-animation bg-white rounded-lg p-4">
      <h3 class="text-2xl font-bold mb-2">Info Box 2</h3>
      <p class="text-gray-700">This is the content of info box 2.</p>
    </div>
    <div class="shadow-hover-animation bg-white rounded-lg p-4">
      <h3 class="text-2xl font-bold mb-2">Info Box 3</h3>
      <p class="text-gray-700">This is the content of info box 3.</p>
    </div>
    <div class="shadow-hover-animation bg-white rounded-lg p-4">
      <h3 class="text-2xl font-bold mb-2">Info Box 4</h3>
      <p class="text-gray-700">This is the content of info box 4.</p>
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
          console.log(sha);
          console.log(value);
          return value;
        });
      }
      async function latest_commit_prod() {
        const promise_prod = new Promise((resolve, _reject) => {
          resolve(
            octokit.rest.repos.getCommit({
              owner: "justmammt",
              repo: "cardex",
              ref: "dev",
            })
          );
          _reject("error");
        });

        await promise_prod.then((value) => {
          // document.getElementById("latestCommitDevSha").innerHTML = value;
          console.log(value);
        });
      }

      latest_commit_dev();
      latest_commit_prod();
    },

  },
  mounted() {
    this.fetch_info();
  }
};
</script>
