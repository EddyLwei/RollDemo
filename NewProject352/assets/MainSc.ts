import { _decorator, Component, Node, bezierByTime, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainSc')
export class MainSc extends Component {

    @property({ type: Node, tooltip: "滚动列表容器" })
    headParent: Node = null;

    @property({ type: Node, tooltip: "滚动列表容器" })
    head1: Node = null;

    @property({ type: Node, tooltip: "滚动列表容器" })
    head2: Node = null;

    _itemHeadWidth: number = 75;
    _targetX: number = 0;

    _showImg1: boolean = true;
    _itemWidth: number = 750;
    _nowP: number = 750;




    start() {

    }

    update(deltaTime: number) {

        if (Math.abs(this.headParent.position.x) >= this._nowP) {
            this._showImg1 = !this._showImg1;
            let img = this.head1;
            if (this._showImg1) {
                img = this.head2;
            }
            this._nowP = img.position.x + this._itemWidth * 2;
            img.setPosition(new Vec3(this._nowP, 0, 0));
        }
    }


    clickStart() {
        this._showImg1 = true;
        this.head1.setPosition(new Vec3(0, 0, 0))
        this.head2.setPosition(new Vec3(this._itemWidth, 0, 0))
        //目标在第一百个，居中开始表示左侧有一半不需要滚动9/2
        let headNun = 100 - Math.ceil(9 / 2);
        let targetPosX = -this._itemHeadWidth * (headNun);  //计算停止位置
        this._targetX = -this._itemHeadWidth * (headNun);  //计算停止位置

        let spinTime = 15;

        console.warn(targetPosX, " initPox>> ", -this._itemHeadWidth * (headNun), " spinTime>> ", spinTime, " headNun>> ", headNun, "------滚动 开始->");

        this.headParent.setPosition(new Vec3(0, 0, 0));


        let self = this;
        tween(this.headParent)//, { easing: "fade" }//, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) }
            .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) })
            // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => t * (2 - t) })
            // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: "fade" })
            .call(() => {
                // self.spinFinish();
                console.log("结束》》》》》")
            })
            .start();
    }

























    // @property({ type: Node, tooltip: "滚动玩家头像" })
    // rollPlayerItem: Node = null;
    // _headArr: Array<Node> = [];
    // testSpin() {

    //     this.spinNode.active = true;
    //     this._nowState = GameState.SPIN;
    //     GameData.INIT_DATA = true;
    //     //目标在第一百个，居中开始表示左侧有一半不需要滚动9/2
    //     let headNun = 100 - Math.ceil(9 / 2);
    //     let targetPosX = -this._itemHeadWidth * (headNun);  //计算停止位置
    //     this._targetX = -this._itemHeadWidth * (headNun);  //计算停止位置

    //     let spinTime = 15;

    //     Log.warn(targetPosX, " initPox>> ", -this._itemHeadWidth * (headNun), " spinTime>> ", spinTime, " headNun>> ", headNun, "------滚动 开始->", GameData.ResultClientIndexList[99], GameData.ResultClientIndexList);

    //     this._showSpinItemIndex = 0;
    //     this.headParent.setPosition(new Vec3(0, 0, 0));

    //     for (let index = 0; index < this._showSpinItemArr.length; index++) {
    //         this._showSpinItemArr[index].setDataIndex(this._showSpinItemIndex);
    //         this._showSpinItemIndex++;
    //     }
    //     this._timePro = 0;
    //     let self = this;
    //     tween(this.headParent)//, { easing: "fade" }//, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) }
    //         .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) })
    //         // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => t * (2 - t) })
    //         // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: "fade" })
    //         .call(() => {
    //             // self.spinFinish();
    //             Log.log("结束》》》》》")
    //         })
    //         .start();
    // }

    // _targetX: number = 0;

    // /**时间进度*/
    // _timePro: number = 0;

    // /**总时间*/
    // _allPro: number = 12;

    // update(dt) {

    //     //数据还没初始化
    //     if (!GameData.INIT_DATA) {
    //         return;
    //     }

    //     //页面UI还没初始化完成
    //     if (this._initUI < 2) {
    //         return;
    //     }

    //     //滚动逻辑
    //     if (this._nowState == GameState.SPIN) {
    //         // Log.log(this.headParent.position.x, " ==?== ", this._showSpinItemIndex, (this._showSpinItemIndex - 2) * -this._itemWidth)

    //         // // if (this.headParent.position.x > this._targetX) {
    //         // this._timePro += dt;
    //         // let x = this._timePro / this._allPro;
    //         // let posx = (bezierByTime([0.3, 0, 0, 1], x)) * this._targetX;
    //         // this.headParent.setPosition(new Vec3(posx, 0, 0));

    //         // if (x >= 1) {
    //         //     this._nowState = GameState.REWARD;
    //         // }
    //         // else {
    //         //     Log.log(this._targetX, " = ", bezierByTime([0.3, 0, 0, 1], x), "--posx", posx);
    //         // }

    //         // if (this.headParent.position.x < (this._showSpinItemIndex - 2) * -this._itemHeadWidth * this._itemHeadNum) {
    //         //     this.moveItem2End();
    //         // }
    //         // }
    //     }


    // }



}

