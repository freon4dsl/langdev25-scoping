import { mount } from 'svelte'
import { FlowbiteFreonLayout, WebappConfigurator } from "@freon4dsl/weblib-flowbite"
import { configureExternals } from "./externals.js"
import { configureLoggers } from "./loggers.js"
import { ServerCommunication } from "@freon4dsl/core"
import { LanguageEnvironment } from "./freon";

/**
 * Initialize everything
 */
WebappConfigurator.getInstance().setEnvironment(
    LanguageEnvironment.getInstance(),
    ServerCommunication.getInstance(),
);

ServerCommunication.getInstance().SERVER_URL = "http://localhost:8001/"

configureExternals()
configureLoggers()

/**
 * Now start the app ...
 */
const app = mount(FlowbiteFreonLayout, {
    target: document.getElementById('freon')!,
})

export default app

