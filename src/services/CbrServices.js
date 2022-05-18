class CbrServices {
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllcurr = () => {
        return this.getResource('https://www.cbr-xml-daily.ru/daily_json.js');
    }
}

export default CbrServices;