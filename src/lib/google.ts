import convertTime from 'convert-time';
const currentDate = new Date();

export function parseTime(start: Date, end: Date) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startTime = convertTime(startDate.getHours() + ":" + startDate.getMinutes());
    const endTime = convertTime(endDate.getHours() + ":" + endDate.getMinutes());

    return startTime + " - " + endTime;
}

const getFutureDate = (amount=7) => {
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate()  + amount);

    return futureDate;
}

function getPublic(maxResults="7") {
    const calendarId = "c_mdel5kkfj8i0c42v3up7erm940@group.calendar.google.com"
    const apiKey = "AIzaSyAix6OcLoOvh009OoPCM4WwKSo0bxSdDQc"

    const searchParams = new URLSearchParams();
    searchParams.append('key', apiKey);
    searchParams.append('timeMin', currentDate.toISOString());
    searchParams.append('timeMax', getFutureDate().toISOString());
    searchParams.append('showDeleted', "false");
    searchParams.append('singleEvents', "true");

    searchParams.append('maxResults', maxResults);
    searchParams.append('orderBy', "startTime");


    const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${searchParams.toString()}`;


    return fetch(calendarUrl).then(response => {
        return (response.json());
    }).then(events => {
        /* Data I need

        - start.dateTime
        - start.date
        - .location
        - .attachments

        */
        console.log(events);
        return events
    });
}

/* Construct a google drive url to be exported into an
embedded format */
function constructExportUrl(id) {
    // Sample: https://drive.google.com/file/d/1NY3iepaTDFFET8dztRyhfIhHeL2bPXHI/view?usp=drive_web"
    const exportUrl = `https://drive.google.com/uc?export=view&id=${id}`

    return exportUrl;
}

export { getPublic, constructExportUrl }