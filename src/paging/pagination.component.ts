import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from "@angular/core";

export class PageState{
    "pageNo":number;
    "pageCount":number;
    "pageSize":number;

}

@Component({
    selector:"page",
    styleUrls: ['./pagination.component.css'],
    templateUrl:"./pagination.component.html"
    }
)
export class PaginationComponent implements OnInit,OnChanges{
    
    @Input()
    params:{recordCount:number,pageSize:number,shownPageCountMax:number,startPageNo:number};

    // @Input()
    recordCount:number = 0; //总记录数
    
    // @Input()
    pageSize:number = 10; // 每页的记录数量  
    
    pageCount:number = 0;

    // @Input()
    shownPageCountMax:number = 5; //可显示的分页按钮数量最大值
    
    // @Input()
    startPageNo:number = 1; //显示的分页按钮的开始页码
    
    endPageNo:number = 1; //显示的分页按钮的结束页码
    
    selectedPageNo:number = 1 ; //当前选中的按钮页码

    pageList:number[]=[];

    @Output()
    pageChanged:EventEmitter<PageState> = new EventEmitter();

    constructor(){}
    ngOnChanges(changes: SimpleChanges): void {
        // throw new Error("Method not implemented.");
        console.log(changes);
        if(changes['params'] && changes['params'].currentValue) {
            // console.dir(changes['params'].currentValue);
            console.log(this.params);
            this.recordCount = this.params.recordCount;

            if(this.params.pageSize && this.params.pageSize>0){
                this.pageSize = this.params.pageSize;
            }
            if(this.params.startPageNo > 0){
                this.startPageNo = this.params.startPageNo;
            }
            if(this.params.shownPageCountMax > 0){
                let shownPageCountMax = this.params.shownPageCountMax;
            }
            
            this.pageCount = Math.ceil(this.recordCount/this.pageSize) || 1; //至少有1页    
            console.log("pageCount:"+this.pageCount);
            if(this.startPageNo > this.pageCount){
                console.log("开始页码"+this.startPageNo+"比总页数"+this.pageCount+"还大！重新设置开始页码为第一页。");
                this.startPageNo = 1;
            }
            this.selectedPageNo = this.startPageNo;
            this.endPageNo = Math.min(this.pageCount,this.startPageNo+this.shownPageCountMax-1)
           
            this.initPageList();
        }
    }

    ngOnInit(): void {
        console.log("pagination component init...");
        // throw new Error("Method not implemented.");
    }

    private initPageList(){
        this.pageList = [];
        for(let i=this.startPageNo; i<=this.endPageNo; i++){
            this.pageList.push(i);
        }
    }
    /**
     * 点击分页按钮触发
     */
    public onPageChanged(page:number, event:any):void{
        if(!page || page<1 || page>this.pageCount){
            return;
        }
        this.selectedPageNo = page;
        this.emitToParent();
        if (event) {
            event.preventDefault();
        }
    }
    
    //点击上一页
    public onPreviousPage(event:any):void{
        if(this.selectedPageNo == this.startPageNo){
            //当前已经是开始页
            if(this.selectedPageNo == 1){
                alert("已经是第一页！");
                console.log("已经是第一页");
                return;
            }
            else{
                this.endPageNo = this.selectedPageNo-1;
                this.startPageNo = Math.max(1,this.endPageNo-this.shownPageCountMax+1);
                this.initPageList();
                this.selectedPageNo--;
                this.emitToParent();
            }
        }
        else if(this.selectedPageNo > this.startPageNo){
            this.selectedPageNo--;
            this.emitToParent();
            
        }
        if(event){
            event.preventDefault();
        }
    }

    /**
     * 向父组件弹射事件
     */
    private emitToParent():void{
        let state = new PageState();
        state.pageNo = this.selectedPageNo;
        state.pageCount = this.pageCount;
        state.pageSize = this.pageSize;
        this.pageChanged.emit(state);
    }

    /**
     * 点击下一页触发
     */
    public onNextPage(event:any){
        if(this.selectedPageNo == this.endPageNo){
            //已经是结束页
            if(this.selectedPageNo == this.pageCount){
                alert("已经是最后一页！");
                console.log("已经是最后一页");
                return;
            }
            else{
                this.startPageNo = this.selectedPageNo + 1;
                this.endPageNo = Math.min(this.pageCount,this.startPageNo+this.shownPageCountMax-1);
                this.initPageList();
                this.selectedPageNo++;
                this.emitToParent();
            }
        }
        else if(this.selectedPageNo < this.endPageNo){
            this.selectedPageNo++;
            this.emitToParent();
        }
        if(event){
            event.preventDefault();
        }
    }

    /**
     * 点击第一页时触发
     */
    public onFirstPage(event:any){
        if(this.selectedPageNo == 1){
            alert("已经是第一页！");
            console.log("已经是第一页");
        }
        else if(this.selectedPageNo > 1){
            this.startPageNo = 1;
            this.endPageNo = Math.min(this.pageCount,this.shownPageCountMax);
            this.initPageList();
            this.selectedPageNo = 1;
            this.emitToParent();
        }
        if(event){
            event.preventDefault();
        }
    }

    /**
     * 点击最后一页时触发
     */
    public onLastPage(event:any){
        if(this.selectedPageNo == this.pageCount){
            alert("已经是最后一页!");
            console.log("已经是最后一页");
        }
        else if(this.selectedPageNo < this.pageCount){
            this.endPageNo = this.pageCount;
            this.startPageNo = Math.max(1,this.endPageNo-this.shownPageCountMax+1);
            this.initPageList();
            this.selectedPageNo = this.pageCount;
            this.emitToParent();
        }
        if(event){
            event.preventDefault();
        }
    }
}