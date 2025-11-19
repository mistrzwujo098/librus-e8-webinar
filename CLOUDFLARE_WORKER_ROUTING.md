# Cloudflare Worker Routing - Jak to działa?

## Problem: basePath vs Worker Routing

### Poprzednia konfiguracja (BŁĘDNA) ❌

```typescript
// next.config.ts
const nextConfig = {
  basePath: "/librus",  // ❌ To powoduje problemy!
}
```

**Co się działo:**
1. User odwiedza: `paulinaodmatematyki.com/librus/`
2. Worker proxy'uje do: `librus-e8-webinar.pages.dev/librus/`
3. Next.js z basePath próbuje załadować favicon z: `/librus/favicon.ico`
4. Worker dodaje prefix: `librus-e8-webinar.pages.dev/librus/librus/favicon.ico` ❌
5. **Result: 404 Not Found**

### Aktualna konfiguracja (POPRAWNA) ✅

```typescript
// next.config.ts
const nextConfig = {
  // basePath removed - Worker handles routing
}
```

**Jak to działa teraz:**
1. User odwiedza: `paulinaodmatematyki.com/librus/`
2. Worker proxy'uje do: `librus-e8-webinar.pages.dev/`
3. Next.js bez basePath załadowuje favicon z: `/favicon.ico`
4. Worker proxy'uje: `librus-e8-webinar.pages.dev/favicon.ico` ✅
5. **Result: 200 OK**

## Worker Configuration

```javascript
const ROUTES = [
  { kind: 'PREFIX', path: '/librus', host: 'librus-e8-webinar.pages.dev' }
];
```

### Co to oznacza?

**PREFIX routing:**
- `/librus` → `librus-e8-webinar.pages.dev/`
- `/librus/e8` → `librus-e8-webinar.pages.dev/e8`
- `/librus/favicon.ico` → `librus-e8-webinar.pages.dev/favicon.ico`
- `/librus/api/subscribe` → `librus-e8-webinar.pages.dev/api/subscribe`

Worker **usuwa prefix `/librus`** i proxy'uje do Pages deployment.

## Dlaczego NIE używać basePath?

### 1. Duplikacja routingu
- Worker już zarządza routingiem `/librus/*`
- basePath w Next.js powoduje podwójny prefix
- Assety (favicon, images, _next/*) nie działają

### 2. API Routes nie działają
```typescript
// Z basePath:
fetch("/librus/api/subscribe")  // → /librus/librus/api/subscribe ❌

// Bez basePath:
fetch("/api/subscribe")         // → /librus/api/subscribe ✅ (Worker dodaje prefix)
```

### 3. Static Assets (favicon, _next/static/*)
```html
<!-- Z basePath: -->
<link rel="icon" href="/librus/favicon.ico" />
<!-- Worker: /librus/librus/favicon.ico ❌ -->

<!-- Bez basePath: -->
<link rel="icon" href="/favicon.ico" />
<!-- Worker: /librus/favicon.ico ✅ -->
```

## Kiedy używać basePath?

**Użyj basePath TYLKO gdy:**
- ✅ Hostujesz na jednej domenie BEZ workera
- ✅ Next.js zarządza całym routingiem
- ✅ Nie używasz Cloudflare Worker routing

**NIE używaj basePath gdy:**
- ❌ Masz Cloudflare Worker z PREFIX routing
- ❌ Proxy'ujesz z głównej domeny do Pages
- ❌ Masz wiele projektów na jednej domenie

## Testing

### Lokalnie (Development)

```bash
npm run dev
# http://localhost:3000/
```

**Ważne:** Lokalnie NIE ma prefixu `/librus` bo nie ma workera.

### Na produkcji (Cloudflare Pages + Worker)

```
paulinaodmatematyki.com/librus/       → strona główna
paulinaodmatematyki.com/librus/e8     → strona egzaminu
paulinaodmatematyki.com/librus/favicon.ico → favicon
```

Worker proxy'uje:
```
/librus/          → librus-e8-webinar.pages.dev/
/librus/e8        → librus-e8-webinar.pages.dev/e8
/librus/favicon.ico → librus-e8-webinar.pages.dev/favicon.ico
```

## Troubleshooting

### Favicon nie działa na produkcji

**Sprawdź:**
1. ✅ Czy `basePath` jest **usunięte** z `next.config.ts`
2. ✅ Czy favicon istnieje w `public/favicon.ico`
3. ✅ Czy Worker ma poprawny routing `/librus`
4. ✅ Czy Pages deployment ma favicon w root

**Test:**
```bash
# Direct Pages URL (should work):
curl -I https://librus-e8-webinar.pages.dev/favicon.ico

# Via Worker (should work):
curl -I https://paulinaodmatematyki.com/librus/favicon.ico
```

### API Routes nie działają

**Sprawdź:**
```typescript
// ✅ Poprawnie:
fetch("/api/subscribe")

// ❌ BŁĄD:
fetch("/librus/api/subscribe")  // Worker doda prefix!
```

### _next/static/* assets 404

Worker powinien proxy'ować wszystko:
```
/librus/_next/static/...  → librus-e8-webinar.pages.dev/_next/static/...
```

Jeśli nie działa, sprawdź Worker code - może przechwytuje assety.

## Best Practices

### 1. Routing należy do Workera
- Worker = routing layer
- Next.js = application layer
- Rozdziel odpowiedzialności

### 2. Używaj relative URLs
```typescript
// ✅ Good:
<Link href="/e8">Egzamin 8</Link>
fetch("/api/subscribe")

// ❌ Bad:
<Link href="/librus/e8">Egzamin 8</Link>  // hardcoded prefix
fetch("/librus/api/subscribe")           // duplikacja
```

### 3. Test na obu środowiskach
- Localhost: bez prefixu
- Produkcja: z prefixem (via Worker)
- Upewnij się że oba działają

## Summary

| Aspekt | Z basePath ❌ | Bez basePath ✅ |
|--------|--------------|-----------------|
| Favicon | `/librus/librus/favicon.ico` (404) | `/librus/favicon.ico` (200) |
| API Routes | `/librus/librus/api/*` (404) | `/librus/api/*` (200) |
| Static Assets | Broken | Working |
| Routing | Duplikacja | Worker handles |
| Maintenance | Confusing | Clear |

**Wniosek:** Gdy używasz Cloudflare Worker z PREFIX routing, **NIE używaj basePath** w Next.js.

---

**Dokument utworzony:** 19 listopada 2025
**Status:** ✅ Production-ready
