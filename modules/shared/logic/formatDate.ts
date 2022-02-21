import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

dayjs.extend(localizedFormat);

export const formatToLocal = (date: Date): string => dayjs(date).format("LLL");
