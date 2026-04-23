# Решение для мягкого размытия краев фото (Mask Image)

Это решение позволяет плавно интегрировать фотографию в фон сайта, создавая эффект «растворения» краев без использования тяжелых графических редакторов.

## Основная идея
Вместо обычного тега `<img>`, мы используем `div` с фоновым изображением (`background-image`) и CSS-свойство `mask-image` (с вендорным префиксом `-webkit-mask-image` для поддержки в Safari/iOS). Это дает наиболее плавный и стабильный результат размытия.

## Код компонента (React + Tailwind)

```jsx
{/* Интегрированное фото */}
<div className="absolute top-0 right-0 w-full lg:w-[65%] h-[75vh] lg:h-full -z-10 opacity-60 md:opacity-90 lg:opacity-100 pointer-events-none">
  <div className="relative w-full h-full flex items-start justify-center lg:justify-end">
    
    {/* Мобильная и Планшетная версия (Радиальное размытие) */}
    <div className="lg:hidden w-full h-full relative">
      <div 
        className="w-full h-full filter grayscale contrast-110 brightness-75 scale-100 origin-top"
        style={{ 
          backgroundImage: 'url(./photo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 40%, transparent 95%)',
          maskImage: 'radial-gradient(circle at 50% 30%, black 40%, transparent 95%)'
        }}
      />
    </div>

    {/* Компьютерная версия (Линейное размытие слева) */}
    <div className="hidden lg:block w-full h-full relative">
      <div 
        className="w-full h-full filter grayscale contrast-110 brightness-75 scale-[0.85] translate-x-[15%] origin-top"
        style={{ 
          backgroundImage: 'url(./photo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 80%, transparent 100%)'
        }}
      />
    </div>
    
  </div>
</div>
```

## Почему это работает лучше других способов:

1.  **Использование `div` вместо `img`**: Браузеры (особенно мобильные) лучше накладывают маски на фоновые изображения блоков, чем на прямые теги изображений.
2.  **`mask-image`**: В отличие от градиентных наложений (которые создают «черные полосы»), маска просто делает части изображения прозрачными. Это позволяет фотографии напрямую «вливаться» в любые фоновые свечения (например, изумрудные).
3.  **Разные маски для разных устройств**:
    *   **На мобильных/планшетах**: `radial-gradient` (радиальная маска) мягко размывает фото по кругу, оставляя центр четким.
    *   **На компьютерах**: `linear-gradient` (линейная маска) плавно проявляет фото слева направо, что идеально для композиций, где текст находится слева.
4.  **Вендорные префиксы**: Обязательное использование `-webkit-mask-image` гарантирует, что размытие будет работать на iPad и iPhone (в Safari).
