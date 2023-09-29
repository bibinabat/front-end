import * as shamsi from 'shamsi-date-converter';

export const j2g = (date) => {
    let year = date.split(" ")[0].split("/")[0]
    let month = date.split(" ")[0].split("/")[1]
    let day = date.split(" ")[0].split("/")[2]

    let gDateNo0 = shamsi.jalaliToGregorian(+year, +month, +day)

    let monthWith0 = gDateNo0[1] < 10 ? `0${gDateNo0[1]}` : gDateNo0[1].toString()
    let dayWith0 = gDateNo0[2] < 10 ? `0${gDateNo0[2]}` : gDateNo0[2].toString()

    return [gDateNo0[0], monthWith0, dayWith0].join("-")
}