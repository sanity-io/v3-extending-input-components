import { createPlugin } from "sanity";
import { renderTextStats } from "./TextStatsComponent";

export default createPlugin({
    name: 'Text Stats',
    form: {
        renderInput: renderTextStats,
    }
})