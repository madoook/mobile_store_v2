/**
 * Created by IlyaLitvinov on 26.11.16.
 */
import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "mobile-store",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("App.component init");
    }
    
}