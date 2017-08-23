# ng2-pagination-module
## what is 'ng2-pagination-module'?
It is a pagination module for angular web application.Angular 2 or above developers can import the module for pagination data show.
## How to use this module?
+ Step 1<br/>
Make sure Node is properly installed in your computer and bootstrap css is imported in your .html, then go to your angular2 application folder.
+ Step 2<br/>
Install the module with npm like below.<br/>
<strong><i>npm install ng2-pagination-module</i></strong>
+ Step 3<br/>
Go to your module declaration file(.ts) and import the module like below.</br>
<pre><code>import { NgModule } from '@angular/core';<br>
import {PagingModule} from 'ng2-pagination-module';<br>
@NgModule({
    imports:
    [  
       // your other modules here
        PagingModule
    ],
    declarations:
    [
        //your components here
    ],
    providers:[
        //your service here
    ]
})
export class ExampleModule{
}</code></pre>

+ Step 4<br/>
Go to your component(parent component) template file(.html) and write pagination tag in the place where you need it.</br></br>
<pre><code>\<page [params]="params" (pageChanged)="onPageChanged($event)"\>\</page\></code></pre></br>
The property 'params' is sent to pagination component by the parent component and the key could be 'recordCount','pageSize' or 'shownPageCountMax'.</br></br>
<strong>The detail explanations:</strong><br>
1.<strong>recordCount:</strong>	the total record number</br>
2.<strong>pageSize:</strong>	the page size</br>
3.<strong>shownPageCountMax:</strong> Max nubmer of page shown in the web page</br> 

+ Step 5<br/>
Go to your component(parent component) file(.ts) and process the emitted event.
<pre><code>public onPageChanged(state:PageState):void{
        console.log("got state from page component:"+state);
        let count = state.pageCount;//the total number
        let pageNo = state.pageNo;//the page number to show
        let pageSize = state.pageSize; // the page size
        //your code here to get pagination data with 'pageNo' and 'pageSize'
 }</code></pre>





