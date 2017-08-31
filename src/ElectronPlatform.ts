import * as _ from "lodash";
import { Platform, LogLevel, Environment, Bundle } from "protoculture";


// tslint:disable-next-line:no-namespace
declare global {

    namespace NodeJS {

        interface ProcessVersions {

            electron: any;
        }
    }
}

export class ElectronPlatform implements Platform {

    public bundle: Bundle;

    public name = "electron";

    public get current() {

        return !!process.versions.electron;
    }

    public get environment(): Environment {

        const defaultEnvironment: Environment = {
            debug: true,
            name: undefined,
            logLevel: LogLevel.Fatal,
        };

        return _.assign(defaultEnvironment, process.env);
    }

    public log(messageLines: string[], level: LogLevel) {

        const levelName = `${LogLevel[level]} -`;

        // tslint:disable-next-line:no-console
        _.each(messageLines, (messageLine) => console.log(`${levelName} ${messageLine}`));
    }
}
