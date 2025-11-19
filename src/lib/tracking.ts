// Client-side tracking helpers

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined") {
        // Facebook Pixel
        if ((window as any).fbq) {
            (window as any).fbq("track", eventName, params)
        }

        // Google Analytics (if present)
        if ((window as any).gtag) {
            (window as any).gtag("event", eventName, params)
        }

        // TikTok Pixel (if present)
        if ((window as any).ttq) {
            (window as any).ttq.track(eventName, params)
        }
    }
}

export const trackPageView = () => {
    trackEvent("PageView")
}

export const initializeTracking = () => {
    // This function can be called in useEffect to ensure tracking is ready
    // In a real scenario, this might check for consent or load scripts
}
