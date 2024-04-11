import BlinkComponentsLibrary from "@/componentsLibraries/libB";
import BlinkThemeLibrary from "@/themes/themeB";

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