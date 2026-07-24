const cloudLeft = document.querySelector(".cloud-left");
const cloudRight = document.querySelector(".cloud-right");
const boat = document.querySelector(".boat");

let current = 0;
let target = 0;

window.addEventListener("scroll", () => {
    target = window.scrollY;
});

function animate(){

    current += (target - current) * 0.08;

    cloudLeft.style.transform =
        `translateX(${-current*1.2}px)`;

    cloudRight.style.transform =
        `translateX(${current*1.2}px)`;

    const boatY = Math.min(current,350);

    const scale = 0.8 + (boatY/350)*0.2;

    boat.style.transform =
        `translate(-50%,${-boatY}px) scale(${scale})`;

    requestAnimationFrame(animate);
}

animate();