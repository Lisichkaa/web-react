import squirrelImg from "../images/belochka.jpg";
import coffeeImg from "../images/coffee.png";
import questionImg from "../images/question.png";
import cakeImg from "../images/cake.jpg";


export function getData() {
  return [
    { title: "100 очков", amount: 100, Image: coffeeImg, id: 1, typeId: 0 },
    { title: "1000 очков", amount: 1000, Image: questionImg,id: 2, typeId: 0 },
    { title: "5000 очков", amount: 5000, Image: cakeImg, id: 3, typeId: 0 },
    { title: "10000 очков", amount: 10000, Image: squirrelImg , id: 4, typeId: 0 },
    { title: "50000 очков", amount: 50000, Image: cakeImg, id: 3, typeId: 0},
    { title: "23 награды на профиль", amount: 6600, Image: squirrelImg, id: 5, typeId: 1 },
  ];
}