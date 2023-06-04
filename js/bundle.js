/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/counter.js":
/*!***********************************!*\
  !*** ./src/components/counter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ Counter)
  /* harmony export */ });
  /* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
  
  
  const GENDER = {
    MALE: `male`,
    FEMALE: `female`,
  };
  
  const COEFFICIENT = {
    MINIMUM: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAXIMUM: 1.9,
  };
  
  const Parameter = {
    AGE: `age`,
    HEIGHT: `height`,
    WEIGHT: `weight`,
  };
  
  const Activity = {
    MINIMUM: `min`,
    LOW: `low`,
    MEDIUM: `medium`,
    HIGH: `high`,
    MAXIMUM: `max`,
  };
  
  const createCounterTemplate = () => {
    return(`
      <form class="counter__form form" name="counter" action="#" method="post">
        <div class="form__item">
          <h2 class="heading">
            Пол
          </h2>
          <ul class="switcher">
            <li class="switcher__item">
              <input id="gender-male" name="gender" value="male" type="radio" checked required>
              <label for="gender-male">
                Мужчина
              </label>
            </li>
            <li class="switcher__item">
              <input id="gender-female" name="gender" value="female" type="radio" required>
              <label for="gender-female">
                Женщина
              </label>
            </li>
          </ul>
        </div>
        <fieldset class="form__item form__parameters" name="parameters">
          <legend class="visually-hidden">
            Физические параметры
          </legend>
          <div class="inputs-group">
            <div class="input">
              <div class="input__heading">
                <label class="heading" for="age">
                  Возраст
                </label>
                <span class="input__heading-unit">
                  лет
                </span>
              </div>
              <div class="input__wrapper">
                <input type="number" id="age" name="age" placeholder="0" inputmode="decimal" maxlength="3" required>
              </div>
            </div>
            <div class="input">
              <div class="input__heading">
                <label class="heading" for="height">
                  Рост
                </label>
                <span class="input__heading-unit">
                  см
                </span>
              </div>
              <div class="input__wrapper">
                <input type="number" id="height" name="height" placeholder="0" inputmode="decimal" maxlength="3" required>
              </div>
            </div>
            <div class="input">
              <div class="input__heading">
                <label class="heading" for="weight">
                  Вес
                </label>
                <span class="input__heading-unit">
                  кг
                </span>
              </div>
              <div class="input__wrapper">
                <input type="number" id="weight" name="weight" placeholder="0" inputmode="decimal" maxlength="3" required>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="form__item">
          <legend class="heading">
            Физическая активность
          </legend>
          <ul class="radios-group">
            <li class="radio">
              <div class="radio__wrapper">
                <input id="activity-minimal" name="activity" value="min" type="radio" checked required>
                <label for="activity-minimal">
                  Минимальная
                </label>
              </div>
              <p class="radio__description">
                Сидячая работа и нет физических нагрузок
              </p>
            </li>
            <li class="radio">
              <div class="radio__wrapper">
                <input id="activity-low" name="activity" value="low" type="radio" required>
                <label for="activity-low">
                  Низкая
                </label>
              </div>
              <p class="radio__description">
                Редкие, нерегулярные тренировки, активность в быту
              </p>
            </li>
            <li class="radio">
              <div class="radio__wrapper">
                <input id="activity-medium" name="activity" value="medium" type="radio" required>
                <label for="activity-medium">
                  Средняя
                </label>
              </div>
              <p class="radio__description">
                Тренировки 3-5 раз в неделю
              </p>
            </li>
            <li class="radio">
              <div class="radio__wrapper">
                <input id="activity-high" name="activity" value="high" type="radio" required>
                <label for="activity-high">
                  Высокая
                </label>
              </div>
              <p class="radio__description">
                Тренировки 6-7 раз в неделю
              </p>
            </li>
            <li class="radio">
              <div class="radio__wrapper">
                <input id="activity-maximal" name="activity" value="max" type="radio" required>
                <label for="activity-maximal">
                  Очень высокая
                </label>
              </div>
              <p class="radio__description">
                Больше 6 тренировок в неделю и физическая работа
              </p>
            </li>
          </ul>
        </fieldset>
        <div class="form__submit">
          <button class="form__submit-button button" name="submit" type="submit" disabled>
            Рассчитать
          </button>
          <button class="form__reset-button" name="reset-button" type="reset" disabled>
            <svg width="24" height="24" viewbox="0 0 24 24" fill="#FD3636" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"/>
            </svg>
            <span>
              Очистить поля и расчёт
            </span>
          </button>
        </div>
      </form>
    `);
  };
  
  class Counter {
    constructor(result) {
      this._element = null;
      this._result = result;
  
      this._gender = GENDER.MALE;
      this._age = null;
      this._height = null;
      this._weight = null;
      this._coefficient = COEFFICIENT.MINIMUM;
    }
  
    setHandlers() {
      this._setInputsChangeHandler();
      this._setPhysicalActivityRadioChangeHandler();
      this._setGenderInputChangeHandler();
      this._setSubmitButtonClickHandler();
      this._setResetbuttonClickHandler();
    }
  
    _setGenderInputChangeHandler() {
      const inputs = this.getElement().querySelectorAll(`input[name="gender"]`);
      inputs.forEach((el) => el.addEventListener(`change`, (evt) => {
  
        switch (evt.target.value) {
          case GENDER.MALE:
            this._gender = GENDER.MALE;
            break;
          case GENDER.FEMALE:
            this._gender = GENDER.FEMALE;
            break;
        }
  
      }));
    }
  
    _setPhysicalActivityRadioChangeHandler() {
      const radioButtons = this.getElement().querySelectorAll(`input[name="activity"]`);
      radioButtons.forEach((el) => el.addEventListener(`change`, (evt) => {
  
        switch(evt.target.value) {
          case Activity.MINIMUM:
            this._coefficient = COEFFICIENT.MINIMUM;
            break;
  
          case Activity.LOW:
            this._coefficient = COEFFICIENT.LOW;
            break;
  
          case Activity.MEDIUM:
            this._coefficient = COEFFICIENT.MEDIUM;
            break;
  
          case Activity.HIGH:
            this._coefficient = COEFFICIENT.HIGH;
            break;
          
          case Activity.MAXIMUM:
            this._coefficient = COEFFICIENT.MAXIMUM;
            break;
        }  
        
      }));
    }
  
    _setInputsChangeHandler() {
      const inputs = Array.from(this.getElement().querySelectorAll(`.inputs-group input`));
      const submitButton = this.getElement().querySelector(`.form__submit-button`);
      const resetButton = this.getElement().querySelector(`.form__reset-button`);
      
      inputs.forEach((el) => el.addEventListener(`change`, (evt) => {
  
        const isFilled = inputs.some((el) => Number(el.value) > 0);
        const isFilledAll = inputs.every((el) => Number(el.value) > 0);
  
        if (isFilledAll) submitButton.disabled = false;
        if (isFilled) resetButton.disabled = false;
  
  
        switch (evt.target.name) {
          case Parameter.AGE:
            this._age = Number(evt.target.value);
            break;
          case Parameter.HEIGHT:
            this._height = Number(evt.target.value);
            break;
          case Parameter.WEIGHT:
            this._weight = Number(evt.target.value);
            break;
        }
      }));
    }
  
    _setResetbuttonClickHandler() {
      const resetButton = this.getElement().querySelector(`.form__reset-button`);
      const submitButton = this.getElement().querySelector(`.form__submit-button`);
  
      resetButton.addEventListener(`click`, () => {
        this._element.reset();
        this._result.hide();
        submitButton.disabled = true;
        resetButton.disabled = true;
      });
    }
  
    _setSubmitButtonClickHandler() {
      const submitButton = this.getElement().querySelector(`.form__submit-button`);
  
      submitButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const calories = this._countCalories();
  
        if (this._result.hiddenMode) this._result.show(calories);
        else this._result.update(calories)
      });
    }
  
    _countCalories() {
      let calories;
      if (this._gender === GENDER.MALE) {
        calories =  (10 * this._weight) + (6.25 * this._height) - (5 * this._age) + 5;
      }
      if (this._gender === GENDER.FEMALE) {
        calories =  (10 * this._weight) + (6.25 * this._height) - (5 * this._age) - 161;
      }
  
      return calories * this._coefficient;
    }
  
    removeElement() {
      this._element.remove();
      this._element = null;
    }
  
    getElement() {
      if (!this._element) {
        this._element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
      }
  
      return this._element;
    }
  
    getTemplate() {
      return createCounterTemplate();
    }
  }
  
  /***/ }),
  
  /***/ "./src/components/result.js":
  /*!**********************************!*\
    !*** ./src/components/result.js ***!
    \**********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ Result)
  /* harmony export */ });
  /* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
  
  
  const HIDDEN_CLASS = `counter__result--hidden`;
  const createResultTemplate = (calories) => {
    calories = calories ? calories : 0;
    return(`
      <section class="counter__result ${calories ? `` : `counter__result--hidden`}">
        <h2 class="heading">
          Ваша норма калорий
        </h2>
        <ul class="counter__result-list">
          <li class="counter__result-item">
            <h3>
              <span id="calories-norm">${Math.round(calories)}</span> ккал
            </h3>
            <p>
              поддержание веса
            </p>
          </li>
          <li class="counter__result-item">
            <h3>
              <span id="calories-minimal">${Math.round(calories - calories * 0.15)}</span> ккал
            </h3>
            <p>
              снижение веса
            </p>
          </li>
          <li class="counter__result-item">
            <h3>
              <span id="calories-maximal">${Math.round(calories + calories * 0.15)}</span> ккал
            </h3>
            <p>
              набор веса
            </p>
          </li>
        </ul>
      </section>
    `);
  }
  
  class Result {
    constructor () {
      this._calories = null;
      this._element = null;
      this.hiddenMode = true;
    }
  
    update(calories) {
      if (this._calories === calories) return;
      this._calories = calories;
  
      this._element.querySelector(`#calories-norm`).textContent = Math.round(calories);
      this._element.querySelector(`#calories-minimal`).textContent = Math.round(calories - calories * 0.15);
      this._element.querySelector(`#calories-maximal`).textContent = Math.round(calories + calories * 0.15);
    }
  
    show(calories) {
      this.update(calories);
      
      this._element.classList.remove(HIDDEN_CLASS);
      this.hiddenMode = false;
    }
  
    hide() {
      this._element.classList.add(HIDDEN_CLASS);
      this.hiddenMode = true;
  
      this._element.querySelector(`#calories-norm`).textContent = 0;
      this._element.querySelector(`#calories-minimal`).textContent = 0;
      this._element.querySelector(`#calories-maximal`).textContent = 0;
    }
  
    getElement() {
      if (!this._element) {
        this._element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate(this._calories));
      }
  
      return this._element;
    }
  
    removeElement() {
      this._element.remove();
      this._element = null;
    }
  
    getTemplate() {
      return createResultTemplate(this._calories);
    }
  }
  
  /***/ }),
  
  /***/ "./src/utils/render.js":
  /*!*****************************!*\
    !*** ./src/utils/render.js ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "createElement": () => (/* binding */ createElement),
  /* harmony export */   "render": () => (/* binding */ render)
  /* harmony export */ });
  const createElement = (template) => {
    const parent = document.createElement(`div`);
    parent.innerHTML = template.trim();
    return parent.firstChild;
  };
  
  const render = (container, component, place = `beforeend`) => {
    const element = component.getElement();
    container.insertAdjacentElement(place, element);
  };
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!*********************!*\
    !*** ./src/main.js ***!
    \*********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/counter */ "./src/components/counter.js");
  /* harmony import */ var _components_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/result */ "./src/components/result.js");
  /* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");
  
  
  
  
  const container = document.querySelector(`.container`);
  const resultComponent = new _components_result__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const counterComponent = new _components_counter__WEBPACK_IMPORTED_MODULE_0__["default"](resultComponent);
  
  counterComponent.setHandlers();
  (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(container, counterComponent);
  (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(container, resultComponent);
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=bundle.js.map