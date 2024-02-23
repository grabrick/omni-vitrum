import media from "@/assets/images/topography_wallpaper.jpg";

const minProducts = [
  {
    id: 0,
    title: "Гнутое стекло",
    label: "Производство и обработка",
    image: media,
    linkRouter: "/",
    revers: false,
    text: "Одно из приоритетных направлений работы нашей организации – это производство гнутых стеклопакетов, а также их транспортировка и монтаж. Стеклопакет представляет собой светопрозрачную конструкцию, которая состоит из двух либо больше стеклянных полотен.",
  },
  {
    id: 1,
    title: "Гнутый триплекс",
    label: "Бронированные стекла для авто",
    image: media,
    linkRouter: "/",
    revers: true,
    text: "Технология изготовления гнутых триплексов не отличается от создания обычных многослойных стекол. Придать стеклу изгиб получается благодаря дополнительной стадии – моллированию, при выполнению которой полотно гнется по заданному профилю.",
  },
  {
    id: 2,
    title: "Сферическое стекло",
    label: "Для торговых и выставочных целей",
    image: media,
    linkRouter: "/",
    revers: false,
    text: "Есть различные модели представленных конструкций. Они отличаются размерами, оттенком основания, видом и дизайном. Ассортимент представляет низки и высокие, широки и узкие варианты для современных и классических интерьеров.",
  },
];

export { minProducts };