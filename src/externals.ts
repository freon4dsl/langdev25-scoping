import { setCustomComponents } from "@freon4dsl/core-svelte"
import ExternalAccordion from "./lib/accordion/ExternalAccordion.svelte";


/**
 * Configure the external components used, so Freon can find them.
 */
export function configureExternals() {
    /**
     * Make the external components known to Freon before starting the app!
     */
    setCustomComponents([
        // {component: Button, knownAs: "EButton"},
        {component: ExternalAccordion, knownAs: "ExternalAccordion"},
        // {component: ECollapsible, knownAs: "ECollapsible"},
        // {component: DatePicker, knownAs: "EDatePicker"},
        // {component: TabComponent, knownAs: "ETab"},
    ]);
}
