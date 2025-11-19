"use client"

import Script from "next/script"

const MAILERLITE_ACCOUNT_ID = process.env.NEXT_PUBLIC_MAILERLITE_ACCOUNT_ID

export function MailerLiteScript() {
    if (!MAILERLITE_ACCOUNT_ID) {
        return null
    }

    return (
        <Script
            id="mailerlite-universal"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '${MAILERLITE_ACCOUNT_ID}');
            `,
            }}
        />
    )
}
