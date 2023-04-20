function getRGB(str) {
    let match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/);
    return [match[1], match[2], match[3]];
}

function hexToRgb(hex) {
    return hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
}

export function getTextColorForBGColor(bgColor) {
    let rgbValue;
    if (bgColor === undefined) {
        rgbValue = ['255', '255', '255'];
    } else if (bgColor.startsWith('rgb')) {
        rgbValue = getRGB(bgColor);
    } else {
        rgbValue = hexToRgb(bgColor);
    }
    let color = Math.round(
        (parseInt(rgbValue[0], 10) * 299 +
            parseInt(rgbValue[1], 10) * 587 +
            parseInt(rgbValue[2], 10) * 114) /
        1000,
    );
    return color > 125 ? 'black' : 'white';
}
