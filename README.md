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
@NgModule({<br>
    imports:<br>
    [  
        // your other modules here<br> 
        PagingModule<br>
    ],<br> 
    declarations:<br> 
    [
        //your components here<br> 
    ],<br> 
    providers:[<br> 
        //your service here<br> 
    ]<br> 
})<br> 
export class ExampleModule{<br> 
}</code></pre>

+ Step 4<br/>
Go to your component(parent component) template file(.html) and write pagination tag in the place where you need it.</br></br>
<pre><code>\<page [params]="params" (pageChanged)="onPageChanged($event)"></page></pre></code></br>
The property 'params' is sent to pagination component by the parent component and the key could be 'recordCount','pageSize' or 'shownPageCountMax'.</br></br>
<strong>The detail explanations:</strong><br>
1.<strong>recordCount:</strong>	the total record number</br>
2.<strong>pageSize:</strong>	the page size</br>
3.<strong>shownPageCountMax:</strong> Max nubmer of page shown in the web page</br> 

+ Step 5<br/>
Go to your component(parent component) file(.ts) and process the emitted event.
<pre><code>public onPageChanged(state:PageState):void{<br/>
        console.log("got state from page component:"+state);{<br/>
        let count = state.pageCount;//the total number{<br/>
        let pageNo = state.pageNo;//the page number to show{<br/>
        let pageSize = state.pageSize; // the page size{<br/>
        //your code here to get pagination data with 'pageNo' and 'pageSize '<br/>
 }</code></pre>





