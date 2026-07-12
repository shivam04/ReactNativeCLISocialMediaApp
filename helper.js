import { Platform } from 'react-native';

export const getFontFamily = (baseFont = 'Inter', weight) => {
    // Android matches font files by filename (e.g. "Inter_28pt-Thin"),
    // iOS matches by the font's internal PostScript name (e.g. "Inter28pt-Thin").
    const family = Platform.OS === 'ios' ? baseFont.replace(/_/g, '') : baseFont;

    switch (weight) {
        case '100':
            return `${family}-Thin`;
        case '200':
            return `${family}-ExtraLight`;
        case '300':
            return `${family}-Light`;
        case 'normal':
        case '400':
            return `${family}-Regular`;
        case '500':
            return `${family}-Medium`;
        case '600':
            return `${family}-SemiBold`;
        case 'bold':
        case '700':
            return `${family}-Bold`;
        case '800':
            return `${family}-ExtraBold`;
        case '900':
            return `${family}-Black`;
        default:
            return `${family}-Regular`;
    }
};
