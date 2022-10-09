import { _decorator, Component, Node, bezierByTime, tween, Vec3, Label, Tween, ScrollView } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainSc')
export class MainSc extends Component {

    @property({ type: Label, tooltip: "滚动列表容器" })
    txt: Label = null;

    @property({ type: Node, tooltip: "滚动列表容器" })
    headParent: Node = null;

    @property({ type: Node, tooltip: "滚动列表容器" })
    head1: Node = null;

    @property({ type: Node, tooltip: "滚动列表容器" })
    head2: Node = null;




    @property({ type: ScrollView, tooltip: "滚动" })
    scView: ScrollView = null;




    _itemHeadWidth: number = 75;
    _targetX: number = 0;

    _showImg1: boolean = true;
    _itemWidth: number = 750;
    _nowP: number = 750;




    start() {

    }

    // update(deltaTime: number) {

    //     if (Math.abs(this.headParent.position.x) >= this._nowP) {
    //         this._showImg1 = !this._showImg1;
    //         let img = this.head1;
    //         if (this._showImg1) {
    //             img = this.head2;
    //         }
    //         this._nowP = img.position.x + this._itemWidth * 2;
    //         img.setPosition(new Vec3(this._nowP, 0, 0));
    //     }
    // }


    clickStart() {
        this._nowState = 0;
        this.scView.node.active = false;
        // this._showImg1 = true;
        // this._nowP = 750;
        // this.head1.setPosition(new Vec3(0, 0, 0))
        // this.head2.setPosition(new Vec3(this._itemWidth, 0, 0))
        //目标在第一百个，居中开始表示左侧有一半不需要滚动9/2
        let headNun = 100 - Math.ceil(9 / 2);
        let targetPosX = -this._itemHeadWidth * (headNun);  //计算停止位置
        this._targetX = -this._itemHeadWidth * (headNun);  //计算停止位置

        let spinTime = 15;

        console.warn(targetPosX, " initPox>> ", -this._itemHeadWidth * (headNun), " spinTime>> ", spinTime, " headNun>> ", headNun, "------滚动 开始->");

        Tween.stopAll();
        this.headParent.setPosition(new Vec3(0, 0, 0));
        this.txt.string = "tween 滚动中 3.5.2";
        let self = this;
        tween(this.headParent)//, { easing: "fade" }//, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) }
            .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) })
            // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => t * (2 - t) })
            // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: "fade" })
            .call(() => {
                // self.spinFinish();
                this.txt.string = "结束 3.5.2";
                console.log("结束》》》》》")
            })
            .start();
    }


    clickTest2() {
        this.scView.node.active = false;
        console.log("-滚动---clickTest2----------")
        Tween.stopAll();
        this.headParent.setPosition(new Vec3(0, 0, 0));
        this.txt.string = "坐标 滚动中 3.5.2";
        this._timePro = 0;
        let headNun = 100 - Math.ceil(9 / 2);
        this._targetX = -this._itemHeadWidth * (headNun);  //计算停止位置

        this._nowState = 1;
    }




    /**时间进度*/
    _timePro: number = 0;

    /**总时间*/
    _allPro: number = 12;

    _nowState: number = 0;


    _intervalTime: number = 0;

    update(dt) {

        //滚动逻辑
        if (this._nowState == 1) {
            this._intervalTime += dt;

            if (this._intervalTime > 0.01) {
                // console.log(this.headParent.position.x, " ==?== ", this._showSpinItemIndex, (this._showSpinItemIndex - 2) * -this._itemWidth)
                this._timePro += 0.01;
                let x = this._timePro / this._allPro;

                this._intervalTime = 0;

                // let posx = (bezierByTime([0.3, 0, 0, 1], x)) * this._targetX;
                let posx = x * this._targetX;
                this.headParent.setPosition(new Vec3(posx, 0, 0));

                if (x >= 1) {
                    this.txt.string = "结束 3.5.2";
                    this._nowState = 0;
                }
                // else {
                //     console.log(this._targetX, " = ", x, " = ", bezierByTime([0.3, 0, 0, 1], x), "--posx", posx);
                // }


            }
        }
    }




    _to: boolean = true;

    clickTest3() {
        this.scView.node.active = true;
        this._to = !this._to;
        if (this._to) {
            this.scView.scrollToLeft(this._allPro + 5);
        }
        else {
            this.scView.scrollToRight(this._allPro + 5);
        }
    }

}

