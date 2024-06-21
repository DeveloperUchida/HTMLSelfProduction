const img = ["image/bistro_grow.jpg", "image/bistro_grow2.jpg", "image/eyecatch1.jpg", "image/eyecatch2.jpg"];
let count = 0;
let changePic = document.getElementById("changePic");

function picChange() {
    // 画像のソースを変更
    changePic.src = img[count];
    // アクティブクラスを適用してフェードイン
    changePic.style.opacity = 1;

    // 3秒後にフェードアウト
    setTimeout(() => {
        changePic.style.opacity = 0;
    }, 3000); // 画像が表示される時間 (4秒 - フェードイン/アウト時間1秒)

    // 次の画像のインデックスを設定
    count = (count + 1) % img.length;

    // 再度タイマーをセット
    setTimeout(picChange, 4000);
}

// 初回実行
picChange();
