# Скрипт для создания ZIP архива из папки "Программные заготовки"
$sourcePath = "old_doc\актуальные материалы\OEVM\7\Программные заготовки"
$destinationPath = "website\static\downloads\programmnye-zagotovki.zip"

# Проверяем существование исходной папки
if (-not (Test-Path $sourcePath)) {
    Write-Host "Ошибка: Папка '$sourcePath' не найдена!" -ForegroundColor Red
    exit 1
}

# Создаем ZIP архив
Write-Host "Создание ZIP архива из '$sourcePath'..." -ForegroundColor Yellow
Compress-Archive -Path "$sourcePath\*" -DestinationPath $destinationPath -Force

if (Test-Path $destinationPath) {
    Write-Host "ZIP архив успешно создан: $destinationPath" -ForegroundColor Green
} else {
    Write-Host "Ошибка при создании ZIP архива!" -ForegroundColor Red
    exit 1
}

