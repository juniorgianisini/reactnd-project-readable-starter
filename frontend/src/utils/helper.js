import UUID from "uuid";

export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return d.toLocaleDateString() + " at " + time.substr(0, 5) + time.slice(-2);
}

export function capitalizeString(text) {
    return text.substr(0, 1).toUpperCase() + text.substr(1, text.length);
}

export function generateUUID() {
    return UUID();
}
