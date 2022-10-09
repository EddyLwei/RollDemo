// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({ type: cc.Node, tooltip: "滚动列表容器" })
    headParent: cc.Node = null;

    @property({ type: cc.Node, tooltip: "滚动列表容器" })
    head1: cc.Node = null;

    @property({ type: cc.Node, tooltip: "滚动列表容器" })
    head2: cc.Node = null;

    @property({ type: cc.Label, tooltip: "" })
    txt: cc.Label = null;

    _itemHeadWidth: number = 75;
    _targetX: number = 0;

    _showImg1: boolean = true;
    _itemWidth: number = 750;
    _nowP: number = 750;



    _state: boolean = false;
    m_BgSpeed: number = 1000;

    start() {
        // cc.game.setFrameRate(45);
    }

    update(dt: number) {

        if (this._state) {

            this.head1.x -= dt * this.m_BgSpeed; this.head2.x -= dt * this.m_BgSpeed;
            if (this.head1.x < -this.head1.width) {
                this.head1.x = this.head1.width - dt * this.m_BgSpeed;
            }
            if (this.head2.x < -this.head2.width) {
                this.head2.x = this.head2.width - dt * this.m_BgSpeed;
            }
        }

        // if (Math.abs(this.headParent.x) >= this._nowP) {
        //     this._showImg1 = !this._showImg1;
        //     let img = this.head1;
        //     if (this._showImg1) {
        //         img = this.head2;
        //     }
        //     this._nowP = img.x + this._itemWidth * 2;
        //     // img.setPosition(new Vec3(this._nowP, 0, 0));
        //     img.x = this._nowP;
        // }
    }


    clickStart() {
        this._state = !this._state;
        console.log("clickStart========", this._state)
        // this._showImg1 = true;
        // // this.head1.setPosition(new Vec3(0, 0, 0))
        // // this.head2.setPosition(new Vec3(this._itemWidth, 0, 0))
        // this.head1.x = 0;
        // this.head2.x = this._itemWidth;
        // this._nowP = this._itemWidth;
        // //目标在第一百个，居中开始表示左侧有一半不需要滚动9/2
        // let headNun = 100 - Math.ceil(9 / 2);
        // let targetPosX = -this._itemHeadWidth * (headNun);  //计算停止位置
        // this._targetX = -this._itemHeadWidth * (headNun);  //计算停止位置

        // let spinTime = 15;

        // console.warn(targetPosX, " initPox>> ", -this._itemHeadWidth * (headNun), " spinTime>> ", spinTime, " headNun>> ", headNun, "------滚动 开始->");

        // this.headParent.x = 0;

        // cc.Tween.stopAll();
        // this.txt.string = "滚动中 2.45";
        // let self = this;
        // cc.tween(this.headParent)//, { easing: "fade" }//, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) }
        //     // .to(spinTime, { position: cc.v3(targetPosX, 0), }, { easing: t => (bezierByTime([0.3, 0, 0, 1], t)) })
        //     // .to(spinTime, { position: new Vec3(targetPosX, 0, 0) }, { easing: t => t * (2 - t) })
        //     .to(spinTime, { position: cc.v3(targetPosX, 0, 0) }, { easing: "fade" })
        //     .call(() => {
        //         // self.spinFinish();
        //         console.log("结束》》》》》")
        //         this.txt.string = "结束 2.45";
        //     })
        //     .start();
    }

}
