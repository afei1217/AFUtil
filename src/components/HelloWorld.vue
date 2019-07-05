<template>
    <div class="hello">
        <h2>Essential Links</h2>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            repeatArr: [1,2,1,3,'3','4','3']
        }
    },
    mounted() {
        // 纯数组去重
        // let upiqueArr = this.repeatArr.afUnique();
        // console.log('unique',upiqueArr);

        // 对象数组去重
        // var arr = [
        //     {
        //        key: '01',
        //        value: '乐乐'
        //     }, {
        //        key: '02',
        //        value: '博博'
        //     }, {
        //        key: '03',
        //        value: '淘淘'
        //     },{
        //        key: '04',
        //        value: '哈哈'
        //     },{
        //        key: '01',
        //        value: 'aa'
        //     }
        // ];
        // console.log('uniqueforObj',arr.afUniqueWithKey('key'));

        // 并集
        // let a = [1,2,3,4];
        // let b = [2,3,5,'1'];
        // let c = [3,5,7,'5'];
        // let d = a.afUnion(b,c);
        // console.log(d);


        // 交集
        // let a = [1,2,3,4];
        // let b = [2,3,5,6];
        // console.log(a.afIntersect(b));

        // 对象交集
        // let a = [
        //     {
        //        key: '01',
        //        value: '乐乐'
        //     }, {
        //        key: '02',
        //        value: '博博'
        //     }, {
        //        key: '03',
        //        value: '淘淘'
        //     },{
        //        key: '04',
        //        value: '哈哈'
        //     },{
        //        key: '01',
        //        value: 'aa'
        //     }
        // ];
        // let b = [
        //     {
        //        key: '02',
        //        value: 'aa'
        //     }, {
        //        key: '01',
        //        value: '淘淘'
        //     },
        // ]
        // console.log('afIntersectWithKey',a.afIntersectWithKey(b,'key'));


        // 差集
        // let a = [1,2,3,4,5];
        // let b = [4,5,6,7];
        // console.log(a.afDiff(b));
        // console.log(b.afDiff(a));

         // 对象差集
        // let a = [
        //     {
        //        key: '01',
        //        value: '乐乐'
        //     }, {
        //        key: '02',
        //        value: '博博'
        //     }, {
        //        key: '03',
        //        value: '淘淘'
        //     }
        // ];
        // let b = [
        //     {
        //        key: '02',
        //        value: 'aa'
        //     }, {
        //        key: '03',
        //        value: '淘淘'
        //     },{
        //        key: '04',
        //        value: 'aaaa'
        //     }
        // ]
        // console.log('afIntersectWithKey',b.afDiffWithKey(a,'key'));


        /**              Object 方法               */
        // get
        // var obj = { 'a': { 'b': { 'c': 3 } } };
        // let name = window.afUtil.afGet.call(obj,'a.b.c',4);
        // console.log(name);

        /**              Number 方法               */
        // console.log(Math.afRandom(5,true));
    }
}
</script>
