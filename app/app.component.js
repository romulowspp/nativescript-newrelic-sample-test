"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var newRelic = com.newrelic.agent.android.NewRelic;
        console.dir(newRelic);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFXMUMsSUFBYSxZQUFZO0lBQ3JCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDOztHQUNXLFlBQVksQ0FLeEI7QUFMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5kZWNsYXJlIGxldCBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIGxldCBjb206IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbmV3UmVsaWMgPSBjb20ubmV3cmVsaWMuYWdlbnQuYW5kcm9pZC5OZXdSZWxpYztcbiAgICAgICAgY29uc29sZS5kaXIobmV3UmVsaWMpO1xuICAgIH1cbn1cbiJdfQ==