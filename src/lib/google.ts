import convertTime from 'convert-time';
const currentDate = new Date();

export function parseTime(start: Date, end: Date) {
  if (!start || !end) return 'Call for time';

  const startDate = new Date(start);
  const endDate = new Date(end);

  const startTime = convertTime(startDate.getHours() + ':' + startDate.getMinutes());
  const endTime = convertTime(endDate.getHours() + ':' + endDate.getMinutes());

  return startTime + ' - ' + endTime;
}

const getFutureDate = (amount = 7) => {
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + amount);

  return futureDate;
};

interface GCalEvent {
  created: string;
  etag: string;
  eventType: string;
  htmlLink: string;
  id: string;
  location: string;
  end: { date?: string; dateTime?: string };
  start: { date?: string; dateTime?: string };
}

export async function listPublicGCalEvents(maxResults = '7'): Promise<GCalEvent[]> {
  /* Testing Calendar */
  //   const calendarId = 'c_mdel5kkfj8i0c42v3up7erm940@group.calendar.google.com';

  // Testing Calendar
  const calendarId = 'overricefoodtruck@gmail.com';
  const apiKey = 'AIzaSyD1lrZPYIGdvo9NLiGfX38P_ywdphKV7IU';

  const searchParams = new URLSearchParams();
  searchParams.append('key', apiKey);
  searchParams.append('timeMin', currentDate.toISOString());
  searchParams.append('timeMax', getFutureDate().toISOString());
  searchParams.append('showDeleted', 'false');
  searchParams.append('singleEvents', 'true');

  searchParams.append('maxResults', maxResults);
  searchParams.append('orderBy', 'startTime');

  const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${searchParams.toString()}`;

  const response = await fetch(calendarUrl);
  return (await response.json()).items;
}
