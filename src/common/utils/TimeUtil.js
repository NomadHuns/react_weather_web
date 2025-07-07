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