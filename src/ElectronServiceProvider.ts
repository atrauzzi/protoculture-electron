import { ServiceProvider, reduxSymbols } from "protoculture";
import { ElectronPlatform } from "./ElectronPlatform";
import { compose } from "redux";
import { app } from "electron";
import { electronSymbols } from "./index";


declare const window: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

export class ElectronServiceProvider extends ServiceProvider {

    public async boot(): Promise<void> {

        this.bindPlatform(ElectronPlatform);

        this.bundle.container
            .bind(electronSymbols.App)
            .toConstantValue(app);

        // this.bundle.container.rebind(reduxSymbols.Compose)
        //     .toConstantValue(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
    }
}
