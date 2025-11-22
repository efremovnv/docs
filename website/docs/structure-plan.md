# Структура документации

## Текущая организация

### Структура файлов

```
docs/
├── intro.md                           # Главная страница
├── contributing.md                    # Руководство по контрибьюции
├── peripheral-devices/                # Периферийные устройства
│   ├── lab1.md
│   ├── lab2.md
│   ├── lab3.md
│   ├── lab4.md
│   └── image/                         # Изображения по лабам
│       ├── lab1/
│       ├── lab2/
│       ├── lab3/
│       └── lab4/
├── computer-organization/             # Организация ЭВМ
│   ├── lab7.md
│   ├── lab8.md
│   └── assets/
└── course-work/                       # Курсовая работа
    ├── 01-rp-op-design.md
    ├── 02-arithmetic-device.md
    ├── assets/
    └── image/
```

### Структура sidebars.ts

Документы организованы по категориям в боковой панели:

```typescript
labsSidebar: [
    "intro",
    {
        type: "category",
        label: "Периферийные устройства",
        items: [
            "peripheral-devices/lab1",
            "peripheral-devices/lab2",
            "peripheral-devices/lab3",
            "peripheral-devices/lab4",
        ],
    },
    {
        type: "category",
        label: "Организация ЭВМ",
        items: ["computer-organization/lab7", "computer-organization/lab8"],
    },
    {
        type: "category",
        label: "Курсовая работа",
        items: [
            "course-work/01-rp-op-design",
            "course-work/02-arithmetic-device",
        ],
    },
];
```

### Принципы организации

-   **Одна лаба = один файл** — весь контент (теория, задание, решение) в одном `.md` файле
-   **Изображения** хранятся в подпапках `image/labN/` внутри соответствующей категории
-   **Нумерация** лаб соответствует реальным номерам работ
-   **Курсовые** используют префиксы `01-`, `02-` для сортировки

### Добавление новой лабораторной

1. Создать файл `labN.md` в соответствующей категории
2. Добавить запись в `sidebars.ts` в нужную категорию
3. При необходимости создать папку `image/labN/` для изображений
