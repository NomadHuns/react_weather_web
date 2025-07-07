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

export async function getWeeklyWeatherByLocation(lat, lng) {
    try {
        // 오늘 날짜
        const today = new Date();
        const startDate = today.toISOString().split('T')[0];

        // 7일 후 날짜
        const endDate = new Date(today);
        endDate.setDate(endDate.getDate() + 6); // 오늘 포함 7일치
        const endDateStr = endDate.toISOString().split('T')[0];

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset,uv_index_max&timezone=Asia%2FSeoul&start_date=${startDate}&end_date=${endDateStr}`);
        if (!response.ok) throw new Error('네트워크 에러');

        return await response.json(); // 또는 console.log(data)
    } catch (error) {
        console.error('API 요청 에러:', error);
        throw error; // 호출부에서 처리하도록 재전파
    }
}