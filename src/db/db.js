import squirrelImg from "../images/belochka.jpg";
import coffeeImg from "../images/coffee.png";
import questionImg from "../images/question.png";
import cakeImg from "../images/cake.jpg";


export function getData() {
  return [
    { title: "Белочка", amount: 100, image: squirrelImg, id: 1, typeId: 0 },
    { title: "Вопросики", amount: 1000, image: questionImg,id: 2, typeId: 0 },
    { title: "Булочка с листиком", amount: 5000, image: cakeImg, id: 3, typeId: 0 },
    { title: "Кофе", amount: 10000, image: coffeeImg , id: 4, typeId: 0 },
    { title: "Булочка с листиком", amount: 50000, image: cakeImg, id: 3, typeId: 0 },
    { title: "23 награды на профиль", amount: 6600, image: cakeImg, id: 5, typeId: 1 },
  ];
}