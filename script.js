const menuItems = document.querySelectorAll('.food-box');
const buttons = document.querySelectorAll('.menu-sort li a');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const category = button.textContent.toLowerCase();

        menuItems.forEach(item => {
            const itemCat = item.dataset.category;

            if (category === "all" || category === itemCat) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
});
