# Скрипты для работы с документацией

## create-zip.js

Универсальный скрипт для создания ZIP архива из папки "Программные заготовки".

### Использование

```bash
# Из корня проекта
node scripts/create-zip.js

# Или через npm скрипт (из папки website)
cd website
npm run create-zip
```

### Что делает скрипт

1. Берет папку `old_doc/актуальные материалы/OEVM/7/Программные заготовки`
2. Упаковывает все содержимое в ZIP архив
3. Сохраняет результат в `website/static/downloads/programmnye-zagotovki.zip`

### Требования

- Node.js >= 18.0
- Пакет `archiver` установлен в `website/node_modules`:
  ```bash
  cd website
  npm install --save-dev archiver
  ```

### Работает на всех платформах

- ✅ Windows
- ✅ Linux  
- ✅ macOS
- ✅ GitHub Actions (CI/CD)

### Использование в GitHub Actions

Скрипт автоматически найдет `archiver` в `website/node_modules`, поэтому будет работать в CI/CD без дополнительных настроек.

