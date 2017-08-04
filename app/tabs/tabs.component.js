"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var TabsComponent = (function () {
    function TabsComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }
    TabsComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole tab
        * navigation layout as a whole.
        *************************************************************/
    };
    Object.defineProperty(TabsComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    TabsComponent.prototype.getIconSource = function (icon) {
        return platform_1.isAndroid ? "res://" + icon : "res://tabIcons/" + icon;
    };
    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    TabsComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title;
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        selector: "TabsComponent",
        moduleId: module.id,
        templateUrl: "./tabs.component.html",
        styleUrls: ["./tabs.component.css"]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBcUM7QUFTckMsSUFBYSxhQUFhO0lBSXRCO1FBQ0k7OztzRUFHOEQ7SUFDbEUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSTs7O3NFQUc4RDtJQUNsRSxDQUFDO0lBRUQsc0JBQUksZ0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQzs7O09BTkE7SUFRRDs7OztrRUFJOEQ7SUFDOUQscUNBQWEsR0FBYixVQUFjLElBQVk7UUFDdEIsTUFBTSxDQUFDLG9CQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCw4Q0FBc0IsR0FBdEIsVUFBdUIsSUFBbUM7UUFDdEQsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQzs7R0FDVyxhQUFhLENBZ0R6QjtBQWhEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXcsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGFic0NvbXBvbmVudFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RhYnMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB3aWxsIGJlIG5lZWRlZCBmb3JcbiAgICAgICAgKiB0aGUgd2hvbGUgdGFiIG5hdmlnYXRpb24gbGF5b3V0IGFzIGEgd2hvbGUuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB3aG9sZSB0YWJcbiAgICAgICAgKiBuYXZpZ2F0aW9uIGxheW91dCBhcyBhIHdob2xlLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgXCJnZXRJY29uU291cmNlXCIgZnVuY3Rpb24gcmV0dXJucyB0aGUgY29ycmVjdCB0YWIgaWNvbiBzb3VyY2VcbiAgICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBhcHAgaXMgcmFuIG9uIEFuZHJvaWQgb3IgaU9TLlxuICAgICogWW91IGNhbiBmaW5kIGFsbCByZXNvdXJjZXMgaW4gL0FwcF9SZXNvdXJjZXMvb3NcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZCA/IFwicmVzOi8vXCIgKyBpY29uIDogXCJyZXM6Ly90YWJJY29ucy9cIiArIGljb247XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIEdldCB0aGUgY3VycmVudCB0YWIgdmlldyB0aXRsZSBhbmQgc2V0IGl0IGFzIGFuIEFjdGlvbkJhciB0aXRsZS5cbiAgICAqIExlYXJuIG1vcmUgYWJvdXQgdGhlIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQgZXZlbnQgaGVyZTpcbiAgICAqIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2Nvb2tib29rL3VpL3RhYi12aWV3I3VzaW5nLXNlbGVjdGVkaW5kZXhjaGFuZ2VkLWV2ZW50LWZyb20teG1sXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYWJWaWV3SXRlbSA9IHRhYlZpZXcuaXRlbXNbYXJncy5uZXdJbmRleF07XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHNlbGVjdGVkVGFiVmlld0l0ZW0udGl0bGU7XG4gICAgfVxufVxuIl19