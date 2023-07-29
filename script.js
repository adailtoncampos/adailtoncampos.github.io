function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}


const eventos = document.querySelectorAll('.evento');
    let currentIndex = 0;

    function showEvent(index) {
        eventos.forEach((evento, i) => {
            evento.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextEvent() {
        currentIndex = (currentIndex + 1) % eventos.length;
        showEvent(currentIndex);
    }

    function prevEvent() {
        currentIndex = (currentIndex - 1 + eventos.length) % eventos.length;
        showEvent(currentIndex);
    }

    showEvent(currentIndex);

    document.querySelector('.btn-next').addEventListener('click', nextEvent);
    document.querySelector('.btn-prev').addEventListener('click', prevEvent);