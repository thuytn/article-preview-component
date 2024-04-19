const shareBtn = document.querySelector(".share__button")
const shareBox = document.querySelector(".share__box")

shareBtn.addEventListener("click", (e) => {
	e.preventDefault()
	if (shareBox.classList.contains("hidden")) {
		shareBox.classList.replace("hidden", "visible")
    shareBtn.classList.replace("non-active", "active")
		
  } else {
    shareBox.classList.replace("visible", "hidden")
    shareBtn.classList.replace("active", "non-active")

  }
	if (window.innerWidth <= 768) {
		shareBtn.classList.toggle("mobile")
	}
})

