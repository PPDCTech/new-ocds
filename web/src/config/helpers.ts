export const calcDifferencePercent = (ca: number, ba: number) => {
    if (!ca || !ba) return null;
    if (ca > ba) {
        const percent = ((100 * (ca - ba)) / ca).toFixed(1);
        return `${percent}%`;
    }
    if (ba > ca) {
        const npercent = ((100 * (ca - ba)) / ba).toFixed(1);
        return `${npercent}%`;
    }
};

export const truncateStr = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + " ..." : str;
};

// export const apiBaseUrl = "https://ada-api.up.railway.app/api/projects-stats"
export const apiBaseUrl = "http://localhost:3030/api";

// window.location.hostname ?

// : "https://ada-api.up.railway.app/api";

// : "https://ada-ocds-api.onrender.com/api";
