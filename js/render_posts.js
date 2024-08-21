import { fetchPosts } from "./fetch_data.js";
import { postTmplGrid, postTmplList } from "./templates.js";

let postContainer = document.querySelector(".post-container");
let btnGrid = document.querySelector(".btnGrid");
let btnList = document.querySelector(".btnList");

// Vores array med brugere
let posts = await fetchPosts();

export function renderPosts() {
  // udskriver listen af brugere
  posts.forEach((post) => {
    postContainer.insertAdjacentHTML("beforeend", postTmplGrid(post));
  });

  // ændrer visning alt efter hvilken knap der trykkes på

  btnGrid.addEventListener("click", () => {
    postContainer.innerHTML = "";
    posts.forEach((post) => {
      postContainer.insertAdjacentHTML("beforeend", postTmplGrid(post));
    });
  });

  btnList.addEventListener("click", () => {
    postContainer.innerHTML = "";
    posts.forEach((post) => {
      postContainer.insertAdjacentHTML("beforeend", postTmplList(post));
    });
  });
}
