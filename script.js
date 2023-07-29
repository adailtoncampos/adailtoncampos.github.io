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

        // Verificar o índice atual para ocultar o botão anterior no primeiro slide
        if (currentIndex === 0) {
            document.querySelector('.btn-prev').style.display = 'none';
        } else {
            document.querySelector('.btn-prev').style.display = 'block';
        }

        // Verificar o índice atual para ocultar o botão próximo no último slide
        if (currentIndex === eventos.length - 1) {
            document.querySelector('.btn-next').style.display = 'none';
        } else {
            document.querySelector('.btn-next').style.display = 'block';
        }
    }

    function nextEvent() {
        // Verificar se já estamos no último slide
        if (currentIndex === eventos.length - 1) {
            return; // Não avançar mais se estivermos no último slide
        }

        currentIndex = (currentIndex + 1) % eventos.length;
        showEvent(currentIndex);
    }

    function prevEvent() {
        // Verificar se já estamos no primeiro slide
        if (currentIndex === 0) {
            return; // Não voltar mais se estivermos no primeiro slide
        }

        currentIndex = (currentIndex - 1 + eventos.length) % eventos.length;
        showEvent(currentIndex);
    }

    showEvent(currentIndex);

    document.querySelector('.btn-next').addEventListener('click', nextEvent);
    document.querySelector('.btn-prev').addEventListener('click', prevEvent);