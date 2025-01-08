document
  .querySelector("#js-drawer-button") // Webページ全体の中からid="js-drawer-button"を探す。
  .addEventListener("click", function (e) {
    // id="js-drawer-buttonがクリックされたら、何をするか
    e.preventDefault(); // ブラウザのデフォルトの動作をキャンセルするメソッド。これにより、リンクの移動、フォーム送信、ファイル選択など、通常の動作をカスタマイズしたり、停止させて、JavaScriptで独自の処理を行うことができます。

    document.querySelector("#js-drawer-button").classList.toggle("is-checked"); // Webページ全体の中からid="js-drawer-button"を探し、is-checkedクラスを付けたり、外したりする。
    document.querySelector("#js-drawer-content").classList.toggle("is-checked"); // Webページ全体の中からid="js-drawer-content"を探し、is-checkedクラスを付けたり、外したりする。
  });

// Webページ全体の中からid="js-drawer-content"の中のaタグの中で、href属性の値が#から始まるもの（ページ内リンク）を探す。
// そのページ内リンクがクリックされたら、ドロワーメニューを閉じる
document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      document
        .querySelector("#js-drawer-button")
        .classList.remove("is-checked"); // Webページ全体の中からid="js-drawer-button"を探し、is-checkedクラスを外す。
      document
        .querySelector("#js-drawer-content")
        .classList.remove("is-checked"); // Webページ全体の中からid="js-drawer-content"を探し、is-checkedクラスを外す。
    });
  });
