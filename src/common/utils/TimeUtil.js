import dayjs from "dayjs";

export function getNextHourRoundedTime() {
    const now = dayjs();
    const next = now.startOf('hour').add(1, 'hour');
    return next.format('YYYY-MM-DDTHH:mm');
}