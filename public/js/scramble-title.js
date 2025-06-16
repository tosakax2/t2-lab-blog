/**
 * タイトルをスクランブル表示しながら最終テキストに収束させる
 * @param {Object} options
 * @param {string} options.selector - 対象セレクタ
 * @param {string} options.letters - スクランブル用文字群
 * @param {number} options.interval - スクランブル更新間隔ms
 * @param {number} options.totalDuration - 全体収束時間ms
 */
export function scrambleTitle({
  selector = "h1[data-scramble]",
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-",
  interval = 40,
  totalDuration = 800,
} = {}) {
  const els = document.querySelectorAll(selector);

  els.forEach((el) => {
    const htmlEl = el;
    const finalText =
      htmlEl.dataset.scrambleText ||
      htmlEl.textContent ||
      "";
    const length = finalText.length;
    let display = Array.from(finalText);
    let fixed = Array(length).fill(false);
    let scrambleTimer;

    const stepsToFix = [...Array(length).keys()].filter(
      (i) => finalText[i] !== " "
    );
    const charsToFix = stepsToFix.length;
    const perChar = totalDuration / charsToFix;

    scrambleTimer = setInterval(() => {
      for (let i = 0; i < length; i++) {
        if (!fixed[i] && finalText[i] !== " ") {
          display[i] = letters[Math.floor(Math.random() * letters.length)];
        } else {
          display[i] = finalText[i];
        }
      }
      htmlEl.textContent = display.join("");
    }, interval);

    let fixIndex = 0;
    function fixNextChar() {
      while (fixIndex < length && finalText[fixIndex] === " ") {
        fixed[fixIndex] = true;
        fixIndex++;
      }
      if (fixIndex < length) {
        fixed[fixIndex] = true;
        fixIndex++;
        setTimeout(fixNextChar, perChar);
      } else {
        clearInterval(scrambleTimer);
        htmlEl.textContent = finalText;
      }
    }
    setTimeout(fixNextChar, perChar);
  });
}

// 自動実行
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    scrambleTitle();
  });
}
