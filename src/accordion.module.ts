import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccordionGroup} from "./accordion-group.component";
import {Accordion} from "./accordion.component";
import {AccordionToggle} from "./accordion-toggle.component";
import {AccordionHeading} from "./accordion-heading.component";

export * from "./accordion.component";
export * from "./accordion-group.component";
export * from "./accordion-toggle.component";
export * from "./accordion-heading.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Accordion,
        AccordionGroup,
        AccordionToggle,
        AccordionHeading
    ],
    exports: [
        Accordion,
        AccordionGroup,
        AccordionToggle,
        AccordionHeading
    ]
})
export class AccordionModule {

}