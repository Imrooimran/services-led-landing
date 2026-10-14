// CTA Tracking System
const CTATracker = {
    // Store tracking data in localStorage
    storageKey: 'servicesLedCTATracker',

    // Initialize tracking
    init() {
        this.ensureStorage();
        console.log('CTA Tracker initialized');
    },

    // Ensure storage exists
    ensureStorage() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify({
                version: '1.0',
                created: new Date().toISOString(),
                events: []
            }));
        }
    },

    // Track a CTA click
    trackClick(leaderName, ctaType, details = {}) {
        try {
            const data = JSON.parse(localStorage.getItem(this.storageKey));

            const event = {
                id: this.generateId(),
                timestamp: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                leaderName: leaderName,
                ctaType: ctaType, // 'claim', 'ship', 'copy', 'download', 'view'
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'direct',
                pageUrl: window.location.href,
                details: details
            };

            data.events.push(event);
            localStorage.setItem(this.storageKey, JSON.stringify(data));

            // Also send to console for debugging
            console.log('CTA Tracked:', event);

            // Send to analytics (if available)
            this.sendToAnalytics(event);

            // Send to Google Sheets
            this.sendToGoogleSheets(event);

            return event;
        } catch (error) {
            console.error('Tracking error:', error);
        }
    },

    // Get all tracked events
    getEvents() {
        try {
            const data = JSON.parse(localStorage.getItem(this.storageKey));
            return data.events || [];
        } catch (error) {
            console.error('Error retrieving events:', error);
            return [];
        }
    },

    // Get events by type
    getEventsByType(ctaType) {
        return this.getEvents().filter(e => e.ctaType === ctaType);
    },

    // Get events by leader
    getEventsByLeader(leaderName) {
        return this.getEvents().filter(e => e.leaderName === leaderName);
    },

    // Get stats
    getStats() {
        const events = this.getEvents();
        const stats = {
            totalClicks: events.length,
            byType: {},
            byLeader: {},
            topLeaders: [],
            todayClicks: 0,
            thisWeek: 0
        };

        // Count by type
        events.forEach(event => {
            stats.byType[event.ctaType] = (stats.byType[event.ctaType] || 0) + 1;
        });

        // Count by leader
        events.forEach(event => {
            stats.byLeader[event.leaderName] = (stats.byLeader[event.leaderName] || 0) + 1;
        });

        // Top leaders
        stats.topLeaders = Object.entries(stats.byLeader)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));

        // Today's clicks
        const today = new Date().toLocaleDateString();
        stats.todayClicks = events.filter(e => e.date === today).length;

        // This week (last 7 days)
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
        stats.thisWeek = events.filter(e => new Date(e.timestamp) >= new Date(weekAgo)).length;

        return stats;
    },

    // Export as CSV
    exportAsCSV() {
        const events = this.getEvents();
        if (events.length === 0) {
            alert('No tracked events to export');
            return;
        }

        const headers = ['Timestamp', 'Leader', 'CTA Type', 'Date', 'Time', 'Page URL', 'Referrer'];
        const rows = events.map(e => [
            e.timestamp,
            e.leaderName,
            e.ctaType,
            e.date,
            e.time,
            e.pageUrl,
            e.referrer
        ]);

        const csv = [
            headers.join(','),
            ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `services-led-cta-tracking-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log(`Exported ${events.length} events as CSV`);
    },

    // Export as JSON
    exportAsJSON() {
        const data = JSON.parse(localStorage.getItem(this.storageKey));

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `services-led-cta-tracking-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log('Exported tracking data as JSON');
    },

    // Clear all data
    clearData() {
        if (confirm('Are you sure you want to delete all tracked data? This cannot be undone.')) {
            localStorage.removeItem(this.storageKey);
            this.ensureStorage();
            console.log('All tracking data cleared');
            alert('All tracked data has been cleared');
        }
    },

    // Print stats to console
    printStats() {
        const stats = this.getStats();
        console.table(stats);
        console.log('Breakdown by type:', stats.byType);
        console.log('Breakdown by leader:', stats.byLeader);
        console.log('Top 10 leaders:', stats.topLeaders);
    },

    // Generate unique ID
    generateId() {
        return `cta_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },

    // Send to Google Analytics (if available)
    sendToAnalytics(event) {
        if (window.gtag) {
            gtag('event', 'cta_click', {
                leader: event.leaderName,
                cta_type: event.ctaType,
                page: event.pageUrl
            });
        }
    },

    // Send to Google Sheets
    sendToGoogleSheets(event) {
        const sheetUrl = 'https://script.google.com/macros/s/AKfycbwnFRX6X_kVpskLcfdg4cjgIpZcSoX6i-SuRy9YKqwnPAd2N4xFbwe-ZoiceTxs3uWGjA/exec';

        if (!sheetUrl || sheetUrl.includes('YOUR_GOOGLE')) {
            console.log('Google Sheets URL not configured');
            return;
        }

        fetch(sheetUrl, {
            method: 'POST',
            body: JSON.stringify({
                leaderName: event.leaderName,
                ctaType: event.ctaType,
                email: event.details.email || '',
                phone: event.details.phone || '',
                address: event.details.address || '',
                country: event.details.country || '',
                timestamp: event.timestamp
            })
        })
        .then(response => response.json())
        .then(data => console.log('Sent to Google Sheets:', data))
        .catch(error => console.error('Google Sheets error:', error));
    },

    // Open tracking dashboard
    openDashboard() {
        window.open('tracking-dashboard.html', 'CTADashboard', 'width=1000,height=700');
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CTATracker.init());
} else {
    CTATracker.init();
}
