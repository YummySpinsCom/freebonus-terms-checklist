const checkboxes = document.querySelectorAll(".term-check");
const progress = document.getElementById("progress");

function updateProgress() {
  const checked = document.querySelectorAll(".term-check:checked").length;
  const total = checkboxes.length;

  progress.textContent = `${checked} of ${total} bonus terms checked`;

  if (checked === total) {
    progress.textContent = `✓ All ${total} bonus terms checked`;
  }
}

function resetChecklist() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  updateProgress();
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

updateProgress();
