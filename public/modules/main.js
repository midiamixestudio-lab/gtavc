// --- Service Worker registration ---
if ('serviceWorker' in navigator) {
    const SW_BASE = window.location.pathname.startsWith('/gtavc/') ? '/gtavc/' : '/';
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register(`${SW_BASE}sw.js`, { scope: SW_BASE })
            .then((reg) => console.log('[SW] Registrado:', reg.scope))
            .catch((err) => console.error('[SW] Falha:', err));
    });
}
