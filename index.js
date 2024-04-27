// Пример наследования

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} гав`);
//     }
// }


// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} говорит `);
//     }
// }

// const dog = new Dog('Пес');
// dog.speak();




// Пример инкапсуляции

// Создаем класс с помощью замыкания
// const Counter = (() => {
//     let count = 0; // Приватная переменная, недоступная снаружи

//     return {
//         increment: () => {
//             count++;
//             console.log(count);
//         },
//         getCount: () => {
//             return count;
//         }
//     };
// })();

// Counter.increment(); 
// console.log(Counter.getCount()); 


// Пример полиморфизм
// Создаем классы Bird и Fish
// class Bird {
//     move() {
//         console.log('Летает');
//     }
// }

// class Fish {
//     move() {
//         console.log('Плавает');
//     }
// }

// const bird = new Bird();
// const fish = new Fish();

// const moveThroughSky = (animal) => {
//     animal.move();
// };

// moveThroughSky(bird);
// moveThroughSky(fish); 






// геттер сеттер

// Создаем объект с использованием геттеров и сеттеров
const user = {
    firstName: '',
    lastName: '',

    // Геттер для получения полного имени пользователя
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Сеттер для установки имени и фамилии пользователя
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Устанавливаем полное имя пользователя с помощью сеттера
user.fullName = 'John Doe';

// Выводим полное имя пользователя с помощью геттера
console.log(user.fullName); // Выведет: John Doe
