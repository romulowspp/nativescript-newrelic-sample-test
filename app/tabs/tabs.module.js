"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var browse_component_1 = require("./browse/browse.component");
var featured_component_1 = require("./featured/featured.component");
var home_component_1 = require("./home/home.component");
var search_component_1 = require("./search/search.component");
var settings_component_1 = require("./settings/settings.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            tabs_routing_module_1.TabsRoutingModule
        ],
        declarations: [
            tabs_component_1.TabsComponent,
            home_component_1.HomeComponent,
            browse_component_1.BrowseComponent,
            search_component_1.SearchComponent,
            featured_component_1.FeaturedComponent,
            settings_component_1.SettingsComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], TabsModule);
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsOERBQTREO0FBQzVELG9FQUFrRTtBQUNsRSx3REFBc0Q7QUFDdEQsOERBQTREO0FBQzVELG9FQUFrRTtBQUNsRSw2REFBMEQ7QUFDMUQsbURBQWlEO0FBbUJqRCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFqQnRCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQix1Q0FBaUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDViw4QkFBYTtZQUNiLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZixrQ0FBZTtZQUNmLHNDQUFpQjtZQUNqQixzQ0FBaUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UvYnJvd3NlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmVhdHVyZWRDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdGFicy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFRhYnNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQnJvd3NlQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgICAgIEZlYXR1cmVkQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfVxuIl19