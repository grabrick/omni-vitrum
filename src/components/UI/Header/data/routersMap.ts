const navRouters = [
  { id: 0, title: "Главная", isSelector: false, routePath: "/" },
  { id: 1, title: "О компании", isSelector: false, routePath: "/about" },
  { id: 2, title: "Продукция и Услуги", isSelector: true, routePath: null },
  { id: 4, title: "Блог", isSelector: false, routePath: "/blog" },
  { id: 5, title: "Контакты", isSelector: false, routePath: "/contacts" },
];

const productsData = [
  {
    id: 0,
    title: "Продукция",
    content: [
      { id: 0, title: "Гнутое стекло", route: "/products/bent-glass", type: 'bent-glass' },
      { id: 1, title: "Гнутый триплекс", route: "/products/bent-triplex", type: 'bent-triplex' },
      { id: 2, title: "Гнутое стекло для витрин", route: "/products/curved-glass-for-showcases", type: 'curved-glass-for-showcases' },
      { id: 3, title: "Гнутое стекло для мебели", route: "/products/curved-glass-for-furniture", type: 'curved-glass-for-furniture' },
      { id: 4, title: "Сферическое стекло", route: "/products/spherical-glass", type: 'spherical-glass' },
      { id: 5, title: "Сферические зеркала", route: "/products/spherical-mirrors", type: 'spherical-mirrors' },
      { id: 6, title: "Гнутое стекло для душевой кабины", route: "/products/curved-glass-for-shower-cabin", type: 'curved-glass-for-shower-cabin' },
      { id: 7, title: "Каленое гнутое стекло", route: "/products/tempered-curved-glass", type: 'tempered-curved-glass' },
      { id: 8, title: "Гнутое стекло под 90 градусов", route: "/products/90degree-bent-glass", type: '90degree-bent-glass' },
      { id: 9, title: "Огнеупорное стекло", route: "/products/fireproof-glass", type: 'fireproof-glass' },
      { id: 10, title: "Гнутое стекло для камина", route: "/products/curved-glass-for-fireplace", type: 'curved-glass-for-fireplace' },
      { id: 11, title: "Закаленное стекло", route: "/products/tempered-glass", type: 'tempered-glass' },
      { id: 12, title: "Гнутые зеркала", route: "/products/curved-mirrors", type: 'curved-mirrors' },
      { id: 13, title: "Гнутое стекло для лестницы", route: "/products/curved-glass-for-stairs", type: 'curved-glass-for-stairs' },
      { id: 14, title: "Гнутый стеклопакет", route: "/products/curved-glass-unit", type: 'curved-glass-unit' },
      { id: 15, title: "Гнутое стекло для аквариума", route: "/products/curved-glass-for-aquarium", type: 'curved-glass-for-aquarium' },
      { id: 16, title: "Гнутое стекло для спец техники", route: "/products/curved-glass-for-special-equipment", type: 'curved-glass-for-special-equipment' },
      { id: 17, title: "Гнутое стекло на катер", route: "/products/curved-glass-for-boats", type: 'curved-glass-for-boats' },
    ],
  },
  {
    id: 1,
    title: "Услуги",
    content: [
      { id: 0, title: "Моллированное стекло", route: "/products/molten-glass", type: 'molten-glass' },
      { id: 1, title: "Полировка стекла", route: "/products/glass-polishing", type: 'glass-polishing' },
      { id: 2, title: "Закалка стекла", route: "/products/glass-tempering", type: 'glass-tempering' },
      { id: 3, title: "Химическая закалка стекла", route: "/products/chemical-glass-tempering", type: 'chemical-glass-tempering' },
      { id: 4, title: "Печи для производства гнутого стекла", route: "/products/furnaces-for-bent-glass-production", type: 'furnaces-for-bent-glass-production' },
      { id: 5, title: "Матирование стекла", route: "/products/glass-frosting", type: 'glass-frosting' },
      { id: 6, title: "Покраска стекла", route: "/products/glass-painting", type: 'glass-painting' },
      {
        id: 7,
        title: "Универсальная форма для моллирования стекла",
        route: "/products/universal-mold-for-glass-milling",
        type: 'universal-mold-for-glass-milling'
      },
    ],
  },
];

export { navRouters, productsData };
