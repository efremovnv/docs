import React from "react";

interface DownloadYandexDiskButtonProps {
    url: string;
    buttonText?: string;
}

/**
 * Компонент для кнопки скачивания файла с Яндекс.Диска
 * 
 * @example
 * <DownloadYandexDiskButton 
 *   url="https://disk.yandex.ru/d/YoAhWZWAESR8ww" 
 *   buttonText="📦 Скачать файл инициализации ПЗУ"
 * />
 */
export default function DownloadYandexDiskButton({
    url,
    buttonText = "📦 Скачать с Яндекс.Диска",
}: DownloadYandexDiskButtonProps) {
    const handleClick = () => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <button
            onClick={handleClick}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                }}
            >
                {buttonText}
            </span>
        </button>
    );
}
