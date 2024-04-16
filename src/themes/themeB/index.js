import style from "./index.module.css";
// import themeA from "../themeA";

export default {
    // ...themeA,
    home: {
        main: style.main,
        link: style.link,
        generalView: style.generalView,
        content: style.content
    },
    viewContent: {
        container: style.container,
        title: style.title
    },
    test: {
        container: style.testContainer
    },
    general: {
        link: style.generalLink
    },
    appBar: {
        buttonCustomStyle: style.buttonCustomStyle,
        appBar: style.appBar,
        ul: style.ul,
        navigationButton: style.menuNavigationButton,
        fillSvg: style.fillSvg
    },
    navigationBar: {
        navigationBar: style.navigationBar,
        navigationBarOpened: style.navigationBarOpened,
        navigationButon: style.navigationButon,
        navigationOpenButon: style.navigationOpenButon
    },
    buttonLink: style.buttonLink
}