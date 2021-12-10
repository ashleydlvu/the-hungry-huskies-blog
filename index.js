/**
 * Ashley Vu
 * Date: 4/18/21
 * Section: AF/TA: Shriya Kurpad
 * This is the index.jss that allows the user to read about
 * my different food reviews, add new entries, and remove
 * posts.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    let entries = qsa("#entries > section > article");
    let numEntries = entries.length;
    for (let i = 0; i < numEntries; i++) {
      let entry = entries[i];
      entry.addEventListener("click", showReview);
    }
    qs("button").addEventListener("click", addEntry);
  }

  /**
   * toggles the visibility of the picture of the restaturant
   * + caption and the review.
   */
  function showReview() {
    let review = this.firstElementChild;
    let picture = this.lastElementChild;
    review.classList.toggle("hidden");
    picture.classList.toggle("hidden");
  }

  /**
   * adds a post to the food reviews section
   */
  function addEntry() {
    let container = gen("article");
    let restaraunt = gen("h2");
    let date = gen("h3");
    let review = gen("p");
    restaraunt.textContent = id("restaraunt").value;
    date.textContent = id("date").value;
    review.textContent = id("review").value;
    container.appendChild(restaraunt);
    container.appendChild(date);
    container.appendChild(review);
    container.classList.add("posts");
    qs("#entries > section").appendChild(container);
    container.addEventListener("dblclick", removeEntry);
    id("restaraunt").value = "";
    id("date").value = "";
    id("review").value = "";
  }

  /**
   * removes the selected post
   */
  function removeEntry() {
    this.parentNode.removeChild(this);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns array of matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {array} - DOM object associated selector.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Generates and returns new element
   * @param {object} tagName - HTML element.
   * @returns {object} - DOM element.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();