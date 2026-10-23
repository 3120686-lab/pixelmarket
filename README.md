# PixelMarket — интернет-магазин цифровых товаров

Лабораторная работа №19. Создание базовой структуры веб-приложения на React
с использованием компонентов, JSX и управления состоянием.

Вариант 3: «Интернет-магазин цифровых товаров». Дизайн взят из ЛР №17 (Figma).

## Технологии

- React (функциональные компоненты, JSX, хук `useState`)
- Vite
- CSS Modules
- PropTypes

## Запуск проекта

Нужен установленный [Node.js](https://nodejs.org/) (версия 20 или новее).

```bash
# 1. Склонировать репозиторий
git clone <ссылка-на-репозиторий>
cd pixelmarket

# 2. Установить зависимости
npm install

# 3. Запустить в режиме разработки
npm run dev
```

После запуска открыть в браузере адрес, который покажет терминал
(обычно http://localhost:5173).

## Структура проекта

```
src/
├── assets/
│   ├── icons/            # SVG-иконки: logo, cart, search, user, star
│   └── images/           # изображения товаров
├── components/
│   ├── Button/           # кнопка (Default, Hover, Disabled)
│   ├── ProductCard/      # карточка товара
│   ├── QuantitySelector/ # селектор количества «− 1 +»
│   ├── StarRating/       # рейтинг из SVG-звёздочек
│   ├── Header/           # шапка с навигацией и счётчиком корзины
│   └── Hero/             # блок с заголовком и кнопкой
├── App.jsx               # главная страница
├── App.module.css
├── index.css             # глобальные стили и цветовые токены
└── main.jsx              # точка входа
```

## Компоненты

| Компонент | Props | Состояние (`useState`) |
|---|---|---|
| `Button` | `children`, `onClick`, `variant` (`primary` / `secondary`), `size` (`small` / `medium`), `disabled` | — |
| `QuantitySelector` | `initialValue`, `min`, `max`, `onChange` | `quantity` — текущее количество, меняется кнопками «+» и «−» |
| `ProductCard` | `image`, `title`, `category`, `rating`, `price`, `onAddToCart` | `quantity` — выбранное количество; `isAdded` — товар добавлен в корзину |
| `StarRating` | `rating` | — |
| `Header` | `links`, `cartCount` | — |
| `Hero` | `title`, `description`, `buttonText`, `onButtonClick`, `size` | — |
| `App` | — | `cartCount` — общее число товаров в корзине |

## Как работает интерактивность

1. Кнопки «+» и «−» в `QuantitySelector` меняют количество (от 1 до 99).
2. При нажатии «Add to Cart» карточка передаёт название и количество в `App`,
   кнопка становится неактивной («In Cart ✓»).
3. `App` увеличивает счётчик корзины, он отображается на иконке корзины в шапке,
   а в консоль браузера выводится сообщение о добавленном товаре.
