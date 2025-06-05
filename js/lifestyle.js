document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("commentForm");
  const commentList = document.getElementById("commentList");

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const comment = document.getElementById("userComment").value.trim();

    if (name && comment) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `${name} recommends: ${comment}`;
      commentList.appendChild(listItem);

      // Clear input fields
      document.getElementById("userName").value = "";
      document.getElementById("userComment").value = "";
    }
  });
});
