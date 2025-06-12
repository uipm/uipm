import { Dimensions } from "react-native";


export const COLORS = {
    primary: "#00BA87",
    primaryLight: "rgba(0,186,135,.15)",
    secondary: "#090A15",
    success: "#0ecb81",
    danger: "#ff4a5c",
    info: "#627EEA",
    warning: "#ffb02c",
    yellow: "#fff346",
    white: "#fff",
    dark: "#2f2f2f",
    light: "#E6E6E6",

    // light
    title: "#20212D",
    text: "#909090",
    background: "#FCFBFC",
    card: "#fff",
    border: "#eee",

    // dark 
    darkTitle: "#fff",
    darkText: "rgba(255,255,255,.6)",
    darkBackground: "#080912",
    darkCard: "#161724",
    darkBorder: "#252739",

}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export const SIZES = {
    font: 14,
    fontSm: 13,
    fontXs: 12,
    radius: 10,
    radius_lg: 20,
    radius_sm: 6,
    padding: 15,
    margin: 15,
    h1: 40,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
    container: 800,
    width,
    height,
    contentArea: {
        paddingTop: 70,
        paddingBottom: 150,
    }
};
export const FONTS = {
    font: { fontSize: SIZES.font, lineHeight: 20, fontFamily: 'PoppinsRegular' },
    fontSm: { fontSize: SIZES.fontSm, lineHeight: 18, fontFamily: 'PoppinsRegular' },
    fontXs: { fontSize: SIZES.fontXs, lineHeight: 14, fontFamily: 'PoppinsRegular' },
    h1: { fontSize: SIZES.h1, lineHeight: 48, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h2: { fontSize: SIZES.h2, lineHeight: 34, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h3: { fontSize: SIZES.h3, lineHeight: 28, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h4: { fontSize: SIZES.h4, lineHeight: 26, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h5: { fontSize: SIZES.h5, lineHeight: 24, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h6: { fontSize: SIZES.h6, lineHeight: 20, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },

    fontMedium: { fontFamily: 'PoppinsMedium' },
    fontBold: { fontFamily: 'PoppinsSemiBold' },
}


export const GlobalStyleSheet = {
    modalHeader: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalBody: {
        padding: 20,
    },
    formControl: {
        borderRadius: SIZES.radius,
        borderWidth: 1,
        height: 48,
        borderColor: "transparent",
        marginBottom: 15,
        justifyContent: 'center',
    },
    Input: {
        paddingHorizontal: 18,
        borderRadius: SIZES.radius,
        height: 48,
        ...FONTS.font,
    },
    modalFooter: {
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -5,
        marginRight: -5,
    },
    col50: {
        width: '50%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    col70: {
        width: '70%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    col60: {
        width: '60%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    col40: {
        width: '40%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    col30: {
        width: '30%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    col33: {
        width: '33.33%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    gradient: ['rgba(255,255,255,.12)', 'rgba(255,255,255,.18)', 'rgba(255,255,255,.12)'],
    shadowDark: {
        shadowColor: "#bea1f3",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 20,
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        maxWidth: SIZES.container,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    card: {
        padding: 15,
        borderRadius: SIZES.radius,
        marginBottom: 15,
    },
    shadow: {
        shadowColor: "rgba(0,0,0,.4)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
}