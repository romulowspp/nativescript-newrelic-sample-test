import { Component } from "@angular/core";

import * as application from "application";

declare let android: any;
declare let com: any;

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor() {
        const newRelic = com.newrelic.agent.android.NewRelic;
        console.dir(newRelic);
    }
}
