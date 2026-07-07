const form = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

// Handle new comment submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = commentInput.value.trim();
  if (text === "") return;

  const newComment = createComment(text);

  // Insert new comment at the top
  const firstComment = commentList.firstElementChild;
  commentList.insertBefore(newComment, firstComment);

  commentInput.value = "";
});

// Function to create comment element
function createComment(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = span.textContent;
    input.className = "edit-input";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";

    // Replace text and button with input and save
    li.replaceChild(input, span);
    li.replaceChild(saveBtn, editBtn);

    saveBtn.addEventListener("click", () => {
      const newText = input.value.trim() || "No comment";
      span.textContent = newText;

      // Replace back after saving
      li.replaceChild(span, input);
      li.replaceChild(editBtn, saveBtn);
    });
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  return li;
}
