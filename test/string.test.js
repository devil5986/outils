describe('String API:', function () {
    describe('#digitUppercase()', function () {
        it(`outils.digitUppercase(9999999999) === '玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整' should return true`, function () {
            assert(outils.digitUppercase(9999999999) === "玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整")
        });

        it(`outils.digitUppercase(0) === '零元整' should return true`, function () {
            assert(outils.digitUppercase(0) === "零元整")
        });

        it(`outils.digitUppercase(-235423545) === '欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整' should return true`, function () {
            assert(outils.digitUppercase(-235423545) === "欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整")
        });
    });

    describe('#pinYing()', function () {
        it(`outils.pinYing('火影忍者') === 'HYRZ' should return true`, function () {
            let str = '火影忍者'
            assert(outils.pinYing(str) === "HYRZ")
        });       
    });

    describe('#upperToLower()', function () {
        it(`outils.upperToLower('HYRZ') === 'hyrz' should return true`, function () {
            let str = 'HYRZ'
            assert(outils.upperToLower(str) === "hyrz")
        });       
    });
})


    
