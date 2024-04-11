import BlinkComponentsLibrary from "@/componentsLibraries/libA";
import BlinkThemeLibrary from "@/themes/themeA";

export const ComponentsLibrary = () => {
    return BlinkComponentsLibrary;
}

export const ThemeLibrary = () => {
    return BlinkThemeLibrary;
}

export const LogicLibrary = async () => {
    const BlinkLogicLibrary = await import("@/useLogic/ButtonLogic/useDefault");

    return BlinkLogicLibrary;
}