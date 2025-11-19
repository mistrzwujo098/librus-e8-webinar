#!/bin/bash

# Skrypt do konfiguracji Cloudflare KV dla projektu webinary-blackfriday
#
# INSTRUKCJE:
# 1. Wypełnij poniższe zmienne swoimi danymi
# 2. Uruchom: bash setup-webinary-blackfriday-kv.sh

# ============================================================
# WYPEŁNIJ TE DANE:
# ============================================================

FACEBOOK_PIXEL_ID="328860071729858"
FACEBOOK_ACCESS_TOKEN="EAAJm4luspHABOZC9HjQrMofJ3wnIgdZBwBxwZBhABv8qJFW2AZAh5ijxqCs866SBZCPwLT8Yn0RbnRW6ZAk7KG5QDrh0eEEc0oDBtJbtzrL0aDvtw6PHhXRo2kETzt31JmPGGUJryeschfHonHfDS9tLuxwZBY4lAxImM5ZCK4kJXFHbZCBwvcxhqkNQkMhZAV832ZAoAZDZD"

GOOGLE_CONVERSION_ID="AW-405660852"
GOOGLE_CONVERSION_LABEL=""  # Brak labela

TIKTOK_PIXEL_ID="CQ762UBC77U6L0AM30HG"
TIKTOK_ACCESS_TOKEN="ef37f6fb9397b5fcbc16355f713b6e60b45f6748"

# MailerLite Configuration
MAILERLITE_GROUP_ID_E8="171508717680854768"
MAILERLITE_GROUP_ID_MATURA="171508723313805227"

# Cloudflare KV Namespace ID (z tracking-worker/wrangler.toml)
KV_NAMESPACE_ID="7a2e20a2655c4de6a5201a7711bd6024"

# ============================================================
# NIE EDYTUJ PONIŻEJ (chyba że wiesz co robisz)
# ============================================================

echo "📝 Tworzenie konfiguracji dla webinary-blackfriday..."

# Tworzenie pliku JSON z konfiguracją
cat > config-webinary-blackfriday.json << EOF
{
  "facebook": {
    "pixelId": "${FACEBOOK_PIXEL_ID}",
    "accessToken": "${FACEBOOK_ACCESS_TOKEN}"
  },
  "google": {
    "conversionId": "${GOOGLE_CONVERSION_ID}",
    "conversionLabel": "${GOOGLE_CONVERSION_LABEL}"
  },
  "tiktok": {
    "pixelId": "${TIKTOK_PIXEL_ID}",
    "accessToken": "${TIKTOK_ACCESS_TOKEN}"
  },
  "mailerlite": {
    "groupIdE8": "${MAILERLITE_GROUP_ID_E8}",
    "groupIdMatura": "${MAILERLITE_GROUP_ID_MATURA}"
  }
}
EOF

echo "✅ Plik config-webinary-blackfriday.json utworzony"
echo ""
echo "📤 Uploading do Cloudflare KV..."

# Upload do KV (compressed JSON - usuwa białe znaki)
wrangler kv key put \
  --remote \
  --namespace-id="${KV_NAMESPACE_ID}" \
  "webinary-blackfriday" \
  "$(cat config-webinary-blackfriday.json | tr -d '\n' | tr -d ' ')"

echo ""
echo "✅ Konfiguracja dodana do Cloudflare KV!"
echo ""
echo "🔍 Weryfikacja..."

# Weryfikacja
wrangler kv key get \
  --remote \
  --namespace-id="${KV_NAMESPACE_ID}" \
  "webinary-blackfriday"

echo ""
echo "✅ Gotowe! Konfiguracja dla webinary-blackfriday została dodana."
echo ""
echo "📋 Następne kroki:"
echo "   1. Dodaj zmienne środowiskowe do .env.local w projekcie:"
echo "      - MAILERLITE_API_KEY=twoj_klucz_api"
echo "      - MAILERLITE_GROUP_ID_E8=${MAILERLITE_GROUP_ID_E8}"
echo "      - MAILERLITE_GROUP_ID_MATURA=${MAILERLITE_GROUP_ID_MATURA}"
echo ""
echo "   2. Dodaj zmienne w Cloudflare Pages Settings → Environment Variables:"
echo "      - MAILERLITE_API_KEY (znajdź w MailerLite → Integrations → API)"
echo "      - MAILERLITE_GROUP_ID_E8"
echo "      - MAILERLITE_GROUP_ID_MATURA"
echo ""
echo "   3. Przetestuj tracking i zapisy na stronie"
echo ""
