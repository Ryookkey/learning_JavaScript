'use script';
// let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳購入'];
// console.log(todo[0]);
let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳購入'];
todo.push('歯医者に行く');
for(let item of todo) {
    const li = `<li>${item}</li>`;
    // console.log(li);
    document.getElementById('list').insertAdjacentHTML('beforeend', li);
}