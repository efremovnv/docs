/**
 * Универсальный скрипт для создания ZIP архива из папки "Программные заготовки"
 * Работает на всех платформах (Windows, Linux, macOS) и в CI/CD (GitHub Actions)
 * 
 * Использование:
 *   node scripts/create-zip.js
 * 
 * Требования:
 *   - Node.js >= 18.0
 *   - Пакет 'archiver' должен быть установлен в website/node_modules
 */

const fs = require('fs');
const path = require('path');

// Пути
const rootDir = path.join(__dirname, '..');
const sourceDir = path.join(rootDir, 'old_doc', 'актуальные материалы', 'OEVM', '7', 'Программные заготовки');
const outputDir = path.join(rootDir, 'website', 'static', 'downloads');
const outputFile = path.join(outputDir, 'programmnye-zagotovki.zip');

// Пытаемся найти archiver в website/node_modules (для работы в CI/CD)
let archiver;
try {
    // Сначала пробуем из website/node_modules
    const archiverPath = path.join(rootDir, 'website', 'node_modules', 'archiver');
    if (fs.existsSync(archiverPath)) {
        archiver = require(archiverPath);
    } else {
        // Если не найден, пробуем глобально
        archiver = require('archiver');
    }
} catch (err) {
    console.error('❌ Ошибка: пакет "archiver" не найден.');
    console.error('   Установите его командой: cd website && npm install --save-dev archiver');
    process.exit(1);
}

// Проверяем существование исходной папки
if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Ошибка: исходная папка не найдена: ${sourceDir}`);
    process.exit(1);
}

// Создаем папку для выходных файлов, если её нет
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✅ Создана папка: ${outputDir}`);
}

// Удаляем старый ZIP, если существует
if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
    console.log(`🗑️  Удален старый ZIP файл`);
}

// Создаем ZIP архив
const output = fs.createWriteStream(outputFile);
const archive = archiver('zip', {
    zlib: { level: 9 } // Максимальное сжатие
});

// Обработка предупреждений (например, файлы не найдены)
archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.warn(`⚠️  Предупреждение: ${err.message}`);
    } else {
        throw err;
    }
});

// Обработка ошибок
archive.on('error', (err) => {
    console.error(`❌ Ошибка при создании архива: ${err.message}`);
    process.exit(1);
});

// Когда архив готов
output.on('close', () => {
    const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
    console.log(`✅ ZIP архив успешно создан!`);
    console.log(`   Файл: ${outputFile}`);
    console.log(`   Размер: ${sizeInMB} MB`);
    console.log(`   Всего байт: ${archive.pointer()}`);
});

// Событие завершения потока данных
output.on('end', () => {
    console.log('📦 Данные архива записаны');
});

// Подключаем поток записи
archive.pipe(output);

// Добавляем все файлы из исходной папки (false = содержимое папки на корневом уровне архива)
console.log(`📦 Упаковываю папку: ${sourceDir}`);
archive.directory(sourceDir, false);

// Завершаем архивацию
archive.finalize();

