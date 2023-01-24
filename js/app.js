function hideBlocks(btnArr, blockArr, blockName) {
  btnArr.forEach((btn) => {
    btn.classList.remove(`${blockName}-active`);
  });
  blockArr.forEach((block) => {
    block.classList.remove(`${blockName}-active`);
  });
}

function itemTabs() {
  const tabsBtns = Array.from(document.querySelectorAll(".items-tabs__link"));
  const tabsBlocks = Array.from(document.querySelectorAll(".tab-item"));
  const tabsContainer = document.querySelector(".item-tabs__row");

  if (tabsBlocks[0]) {
    tabsBtns[0].classList.add(`tab-active`);
    tabsBlocks[0].classList.add(`tab-active`);

    tabsBtns.forEach((btn) => {
      btn.onclick = () => {
        let currentTabId = btn.id;
        let currentTab = tabsContainer.querySelector(`.${currentTabId}`);

        hideBlocks(tabsBtns, tabsBlocks, "tab");

        btn.classList.add("tab-active");
        currentTab.classList.add("tab-active");
      };
    });
  }
}

function itemSelect() {
  const selectBtn = Array.from(document.querySelectorAll(".select-btn"));
  const selectBlock = Array.from(document.querySelectorAll(".select-block"));

  if (selectBlock[0]) {
    selectBtn[0].classList.add(`select-active`);
    selectBlock[0].classList.add(`select-active`);

    selectBtn.forEach((btn) => {
      btn.onclick = () => {
        hideBlocks(selectBtn, selectBlock, "select");

        let currBlock = selectBtn.indexOf(btn);

        btn.classList.add("select-active");
        selectBlock[currBlock].classList.add("select-active");
      };
    });
  }
}

function sectionCart() {
  const nextBtns = Array.from(document.querySelectorAll(".cart-next"));
  const prevBtns = Array.from(document.querySelectorAll(".cart-back"));
  const sectionCartBlocks = Array.from(
    document.querySelectorAll(".cart-section")
  );
  const sectionCartNav = Array.from(document.querySelectorAll(".step-cart"));
  if (sectionCartBlocks[0]) {
    sectionCartNav[0].classList.add("cart-active");
    sectionCartBlocks[0].classList.add("cart-active");

    nextBtns.forEach((btn) => {
      btn.onclick = () => {
        hideBlocks(sectionCartNav, sectionCartBlocks, "cart");
        let index = nextBtns.indexOf(btn) + 1;
        sectionCartBlocks[index].classList.add("cart-active");
        sectionCartNav[index].classList.add("cart-active");
      };
    });
    prevBtns.forEach((btn) => {
      btn.onclick = () => {
        hideBlocks(sectionCartNav, sectionCartBlocks, "cart");
        let index = prevBtns.indexOf(btn);
        console.log(index);
        sectionCartBlocks[index].classList.add("cart-active");
        sectionCartNav[index].classList.add("cart-active");
      };
    });
  }
}

itemTabs();
itemSelect();
sectionCart();
