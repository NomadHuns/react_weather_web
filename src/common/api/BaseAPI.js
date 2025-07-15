export async function baseGetAPI(schema, url, path, params) {
    try {
        const queryString = new URLSearchParams(params).toString();

        const response = await fetch(`${schema}://${url}${path}?${queryString}`);
        if (!response.ok) throw new Error('네트워크 에러');

        return await response.json(); // 또는 console.log(data)
    } catch (error) {
        console.error('API 요청 에러:', error);
        throw error; // 호출부에서 처리하도록 재전파
    }
}