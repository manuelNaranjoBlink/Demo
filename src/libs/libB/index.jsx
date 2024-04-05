// import CustomText from "./components/CustomText";
import Button from "./components/Button";
// import AppBar from "./components/AppBar";
// import libA from "../libA/index.jsx";
// import { ViewContent } from "./components/ViewContent";

export default {
    // ...libA,
    // PersonalizedSpan: libA.PersonalizedSpan,
    Button: Button,
    // AppBar: AppBar,
    // CustomText: CustomText,
    // ViewContent: ViewContent
    PersonalizedSpan: () => {
        return <span>Personalized Span B</span>
    },
}