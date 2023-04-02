const container = document.querySelector('.container');
const text = container.querySelector("h1");
const walk = 100;

function shadow(e){
    const { offsetWidth: width, offsetHeight: height } = container;
    var { offsetX: x, offsetY: y } = e;

    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width *walk) - ( walk / 2 ));
    const yWalk = Math.round((y / height *walk) - ( walk / 2 ));

    text.style.textShadow =  `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * - 1}px ${yWalk * + 2}px 0 rgba(0,255,255,0.7),
      ${xWalk * + 1}px ${yWalk * - 1}px 0 rgba(255,255,0,0.7),
      ${xWalk * + 2}px ${yWalk * - 2}px 0 rgba(0,255,0,0.7)
    `;

  }

container.addEventListener("mousemove", shadow);