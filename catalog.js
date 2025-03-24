document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("applyFilters");
    const carGrid = document.getElementById("carGrid");

    // Данные автомобилей
    const carsData = [
        {
            brand: "audi",
            model: "Audi A3 35 TFSI, 2021",
            mileage: "37 000 км",
            price: "1 000 000 руб.",
            year: 2021,
            image: "img/audi_a3/audi_a3_1.jpg",
            link: "audi_a3.html"
        },
        {
            brand: "bmw",
            model: "BMW X1 xDrive25Li Premium Edition, 2023",
            mileage: "13 000 км",
            price: "185 000 ¥",
            year: 2023,
            image: "img/bmw_x1/x1_1.jpg",
            link: "bmw_x1.html"
        },
        {
            brand: "toyota",
            model: "Toyota RAV4 2021 2.0L CVT 2WD Fashion",
            mileage: "48 000 км",
            price: "131 800 ¥",
            year: 2021,
            image: "img/toy_rav4/rav4_1.jpg",
            link: "toyota_rav4.html"
        },
        {
            brand: "toyota",
            model: "Toyota C-HR 2020",
            mileage: "8 700 км",
            price: "88 000 ¥",
            year: 2020,
            image: "img/toy_ch-r/ch-r_1.jpg",
            link: "toyota_chr.html"
        },
        {
            brand: "hyundai",
            model: "Hyundai Elantra 2021 1.5L CVT LUX Premium Edition",
            mileage: "29 000 км",
            price: "77 000 ¥",
            year: 2021,
            image: "img/h_elantra/h_elantra_1.jpg",
            link: "hyundai_elantra.html"
        }
    ];

    // Функция для отображения автомобилей
    function displayCars(cars) {
        carGrid.innerHTML = ""; // Очищаем сетку
        cars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("col-lg-6", "col-sm-6"); // Добавляем классы для сетки
            carCard.innerHTML = `
                <div class="single_product_item">
                    <img src="${car.image}" alt="${car.model}" class="img-fluid">
                    <h3> <a href="${car.link}">${car.model}</a> </h3>
                    <p>Пробег: ${car.mileage}</p>
                    <p>Цена: ${car.price}</p>
                </div>
            `;
            carGrid.appendChild(carCard);
        });
    }

    // Изначально отображаем все автомобили
    displayCars(carsData);

    // Фильтрация автомобилей
    filterButton.addEventListener("click", function () {
        const brand = document.getElementById("brand").value; // Получаем выбранную марку
        const priceInput = document.getElementById("price").value; // Получаем цену
        const yearInput = document.getElementById("year").value; // Получаем год

        // Преобразуем цену и год в числа
        const price = priceInput ? parseFloat(priceInput) : null;
        const year = yearInput ? parseInt(yearInput) : null;

        // Фильтруем автомобили
        const filteredCars = carsData.filter(car => {
            const carPrice = parseFloat(car.price.replace(/\D/g, '')); // Убираем всё, кроме цифр
            const carYear = car.year;

            // Проверяем фильтры
            const brandMatch = brand === "all" || car.brand === brand;
            const priceMatch = !price || carPrice <= price;
            const yearMatch = !year || carYear >= year;

            return brandMatch && priceMatch && yearMatch;
        });

        // Отображаем отфильтрованные автомобили
        displayCars(filteredCars);
    });
});