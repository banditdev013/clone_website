const nav = document.getElementById('navbar');
window.onscroll = function () {
    // เมื่อสกอร์เม้าส์ในแนวแกน Y (เลื่อนลงมา) มากกว่า 200 px
    if (this.scrollY >= 200) {
        // เพิ่มคลาส .nav-colored (เพิ่มสีพื้นหลังให้ navbar)
        nav.classList.add("nav-colored");
    } else {
        // ลบคลาส .nav-colored ออก (ลบสีพื้นหลัง navbar ออก)
        nav.classList.remove("nav-colored");
    }
};