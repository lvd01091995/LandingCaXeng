// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.ScrollView)
    scr: cc.ScrollView = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:


    onLoad() {
        switch (cc.sys.os) {
            case cc.sys.OS_WINDOWS:
             // window.location = "https://caxeng.com";
                break;
            case cc.sys.OS_IOS:
           //   window.location = "https://caxeng.com";
                break;
        }
    }
    onClickTaiApp() {
        window.open('https://taicaxeng.com/CaXeng.apk', '_blank');
    }
    onClickChoiNgay() {
        window.location = "https://caxeng.com";
    }
    onClickHuongDan() {
        this.scr.scrollToPercentVertical(0.15, 0.3);
    }

    // start () {

    // }

    // update (dt) {}
}
