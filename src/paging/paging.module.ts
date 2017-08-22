import { NgModule } from "@angular/core";
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { PaginationComponent } from "./pagination.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        PaginationComponent
    ],
    exports:[
        //component here
        PaginationComponent
    ],
    providers:[
        
    ]

})
export class PagingModule{
}