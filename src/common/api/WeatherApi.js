// https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true&timezone=Asia%2FSeoul
export async function getTodayWeatherByLocation(lat, lng) {
    try {
        // const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true&timezone=Asia%2FSeoul');
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&timezone=Asia%2FSeoul`);
        if (!response.ok) throw new Error('네트워크 에러');

        return await response.json(); // 또는 console.log(data)
    } catch (error) {
        console.error('API 요청 에러:', error);
        throw error; // 호출부에서 처리하도록 재전파
    }
}

export async function getWeatherByLocation(lat, lng) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,weathercode&timezone=Asia%2FSeoul`);
        if (!response.ok) throw new Error('네트워크 에러');

        return await response.json(); // 또는 console.log(data)
    } catch (error) {
        console.error('API 요청 에러:', error);
        throw error; // 호출부에서 처리하도록 재전파
    }
}