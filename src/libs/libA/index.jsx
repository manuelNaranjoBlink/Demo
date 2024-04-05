import InputNumber from "./components/InputNumber/index.jsx";
import Button from "./components/Button/index.jsx";
import AppBar from "./components/AppBar";
import ViewContent from "./components/ViewContent/index.jsx";

export default {
    Button: Button,
    AppBar: AppBar,
    InputNumber: InputNumber,
    PersonalizedSpan: () => {
        return <span>Personalized Span A</span>
    },
    ViewContent: ViewContent
}