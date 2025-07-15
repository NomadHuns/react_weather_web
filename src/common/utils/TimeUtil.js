import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export function getNextHourRoundedTime() {
    const now = dayjs();
    const next = now.startOf('hour').add(1, 'hour');
    return next.format('YYYY-MM-DDTHH:mm');
}

dayjs.extend(customParseFormat);

/**
 * ISO 문자열을 12시간제 AM/PM 형식으로 변환
 * @param {string} isoString - 예: "2025-07-07T05:17"
 * @param {string} divider - 시간과 분 사이에 들어가는 문자열
 * @returns {string} 변환된 시간 (예: "5${divider}17 AM")
 */
export function formatToAmPmTime(isoString, divider) {
    return dayjs(isoString).format(`h${divider}mm A`);
}

export function getCurrentHour24() {
    return new Date().getHours(); // 0~23 반환
}

export function getFormattedToday() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // 오늘 날짜 객체 생성
    const today = new Date();

    // 월(Month)과 일(Day) 정보 가져오기
    // getMonth()는 0(1월)부터 11(12월)까지의 숫자를 반환하므로 배열의 인덱스로 사용합니다.
    const month = monthNames[today.getMonth()];
    const day = today.getDate(); // 1부터 31까지의 숫자를 반환

    // 원하는 형식으로 출력
    return `${month}, ${day}`;
}