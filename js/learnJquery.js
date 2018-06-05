
$('.aaa').click(function(e) {
    // 获取目标元素的class属性名
    var name = $(e.target).prop("className");
    // console.log('name', name);
})

// jquery的$().each,$.each的区别

// $().each,对于这个方法，在dom处理上面用的较多
// 例如：
// $(“input[name=’ch’]”).each(function(i) {
//     if($(this).attr(‘checked’)==true) {
//     //一些操作代码
//     }
// }
// 回调函数是可以传递参数，i就为遍历的索引。

// 对于遍历一个数组，用$.each()来处理
// var arr = [{“name”:”limeng”,”email”:”xfjylimeng”},{“name”:”hehe”,”email”:”xfjylimeng”};
// $.each(arr, function(i,n) {
    // alert(“索引:”+i,”对应值为：”+n.name);
// });
// 银行账号只能输入数字
// $('body').delegate('[esapp-id=beneficiaryAccountNumber]', "input", function() {
//     var curValue = $(this).val();
//     if (isNaN(Number(curValue))) {
//         _.ui.notify({
//             message: '银行账号请输入数字',
//             type: 'warning'
//         });
//         $(this).val('');
//     }
// })
// _.event.listen('beneficiaryAccountNumber', 'change', _.delegate(function (val) {
//     if (isNaN(Number(val))) {
//         _.ui.notify({
//             message: '银行账号请输入数字',
//             type: 'warning'
//         });
//         $("[esapp-id=beneficiaryAccountNumber]").val('');
//         return;
//     } else {
//         getBankName(val)
//     }
// }, this));




