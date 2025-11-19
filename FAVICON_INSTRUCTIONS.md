# Instrukcja: Jak zamienić favicon

## Problem

Aktualnie wyświetla się domyślny favicon Next.js/Vercel zamiast customowego favicon dla Pauliny od Matematyki.

## Pliki do zamiany

Musisz zastąpić następujące pliki w `public/`:

1. **`favicon.ico`** (16x16, 32x32, 48x48 ICO format)
2. **`icon.png`** (180x180 PNG dla Apple Touch Icon)

## Gdzie wziąć favicon?

### Opcja 1: Użyj logo Pauliny od Matematyki

Jeśli masz logo w formacie PNG/JPG:

1. Przejdź do: https://realfavicongenerator.net/
2. Upload swojego logo (preferowane wymiary: 512x512 lub większe)
3. Dostosuj ustawienia:
   - **iOS:** Włącz "Add a solid, plain background color"
   - **Android:** Wybierz odpowiednie kolory brand
   - **Windows:** Metro tiles z kolorem
4. Kliknij **Generate your Favicons**
5. Pobierz paczkę ZIP

### Opcja 2: Szybki favicon z inicjałem "P"

Użyj https://favicon.io/favicon-generator/:

**Ustawienia:**
- **Text:** P
- **Background:** #571A47 (Paulina Primary)
- **Font Color:** #FFFFFF (biały)
- **Font Family:** Montserrat Bold
- **Font Size:** 80
- **Shape:** Rounded

Kliknij **Download** i pobierz ZIP.

### Opcja 3: Znajdź favicon na głównej stronie WordPress

1. Zaloguj się do WordPress dashboardu
2. **Appearance → Customize → Site Identity**
3. W sekcji "Site Icon" powinieneś mieć upload
4. Pobierz ten plik i użyj go

## Jak zainstalować nowy favicon?

### Krok 1: Rozpakuj pobrany ZIP

```bash
unzip ~/Downloads/favicon_package.zip -d ~/Downloads/favicon_temp
```

### Krok 2: Skopiuj pliki do public/

```bash
# Z Favicon Generator
cp ~/Downloads/favicon_temp/favicon.ico public/favicon.ico
cp ~/Downloads/favicon_temp/apple-touch-icon.png public/icon.png

# LUB jeśli masz własne pliki:
cp ~/path/to/your/favicon.ico public/favicon.ico
cp ~/path/to/your/apple-icon.png public/icon.png
```

### Krok 3: Zweryfikuj

```bash
# Sprawdź czy to ICO (nie PNG z rozszerzeniem .ico):
file public/favicon.ico
# Powinno być: "MS Windows icon resource"

# Sprawdź czy icon.png to PNG:
file public/icon.png
# Powinno być: "PNG image data, 180 x 180"
```

### Krok 4: Build i Deploy

```bash
npm run build
git add public/favicon.ico public/icon.png
git commit -m "Update favicon to Paulina brand"
git push
```

## Wymagania techniczne

### favicon.ico
- **Format:** ICO (nie PNG!)
- **Wymiary:** Multi-size (16x16, 32x32, 48x48)
- **Kolory:** 24-bit lub 32-bit (z alpha)

### icon.png
- **Format:** PNG
- **Wymiary:** 180x180px (Apple Touch Icon)
- **Kolory:** RGB lub RGBA
- **Optymalizacja:** Użyj https://tinypng.com/ aby zmniejszyć rozmiar

## Kolory Brand Paulina od Matematyki

Do użycia w favicon generator:

- **Primary:** #571A47 (fioletowy)
- **Accent:** #EC9A4F (pomarańczowy)
- **Blue:** #06AEEF (niebieski)
- **BG Purple:** #F7EEF4 (jasny fiolet)
- **BG Yellow:** #FEF1D3 (jasny żółty)

## Testowanie

### Lokalnie

```bash
npm run dev
# Otwórz http://localhost:3000/librus/
# Sprawdź kartę przeglądarki - powinieneś zobaczyć nowy favicon
```

### Na produkcji

1. Po deploy sprawdź: https://paulinaodmatematyki.com/librus/
2. Hard refresh (Cmd+Shift+R lub Ctrl+Shift+R)
3. Sprawdź DevTools → Network → favicon.ico (200 OK?)

### Narzędzia do testowania

- **Favicon Checker:** https://realfavicongenerator.net/favicon_checker
- **Multi-browser test:** https://www.favicon-generator.org/search/
- **Apple Touch Icon:** Sprawdź na iPhone Safari (Add to Home Screen)

## Troubleshooting

### Favicon nadal pokazuje Vercel

**Rozwiązanie:**
1. Hard refresh (Cmd+Shift+R)
2. Wyczyść cache przeglądarki
3. Sprawdź DevTools Network czy ładuje `/librus/favicon.ico`
4. Sprawdź czy plik rzeczywiście się zmienił: `md5 public/favicon.ico`

### Favicon nie ładuje się (404)

**Sprawdź:**
```bash
# Lokalnie:
curl -I http://localhost:3000/librus/favicon.ico

# Na produkcji:
curl -I https://paulinaodmatematyki.com/librus/favicon.ico
```

Powinno zwrócić `200 OK`.

### Icon.png zamiast favicon.ico

Niektóre przeglądarki preferują PNG. To normalne - oba pliki są używane.

### Favicon jest rozmazany

**Rozwiązanie:**
- Upewnij się że favicon.ico ma multi-size (16, 32, 48)
- Użyj https://realfavicongenerator.net/ - automatycznie to robi
- Nie skaluj małego obrazka - użyj dużego (512x512) i pozwól generator zrobić resize

## Przykładowy favicon z inicjałem "P"

Jeśli nie masz logo, możesz użyć prostego favicon z literą "P":

### SVG favicon (nowoczesne przeglądarki)

Możesz też dodać SVG favicon (lżejszy, lepszej jakości):

```html
<!-- W layout.tsx <head>: -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

Utwórz `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#571A47"/>
  <text x="50" y="70" font-family="Montserrat, sans-serif" font-size="60"
        font-weight="bold" fill="white" text-anchor="middle">P</text>
</svg>
```

## Dodatkowe pliki (opcjonalne)

Dla pełnego wsparcia wszystkich platform:

```
public/
├── favicon.ico          ✅ REQUIRED (multi-browser)
├── icon.png            ✅ REQUIRED (Apple Touch Icon)
├── favicon.svg         ⭐ RECOMMENDED (modern browsers)
├── favicon-16x16.png   📱 Optional (explicit sizing)
├── favicon-32x32.png   📱 Optional (explicit sizing)
└── android-chrome-192x192.png  🤖 Optional (Android)
```

Ale **minimum to favicon.ico + icon.png**.

---

**Dokument utworzony:** 19 listopada 2025
**Status:** Czeka na favicon od użytkownika
