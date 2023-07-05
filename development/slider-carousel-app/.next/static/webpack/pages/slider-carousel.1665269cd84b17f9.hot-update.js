"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slider-carousel",{

/***/ "../../components/slider-carousel/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ../../components/slider-carousel/dist/index.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReuseSliderCarousel\": function() { return /* binding */ ReuseSliderCarousel; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"../../node_modules/tailwind-merge/dist/tailwind-merge.mjs\");\n\n\n\nlet useSlider = ({ slides, slideInterval, loop }) => {\n    const [currentSlideIndex, setCurrentSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const currentSlide = slides[currentSlideIndex];\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const [timeWhenHovered, setTimeWhenHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const [previousIndex, setPreviousIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    let remainingPauseTime = previousIndex === currentSlideIndex &&\n        timeWhenHovered > 0 &&\n        timeWhenHovered < slideInterval\n        ? slideInterval - timeWhenHovered\n        : slideInterval;\n    const startSlider = () => {\n        if (loop === true) {\n            setCurrentSlideIndex((previndex) => {\n                const nextIndex = previndex === slides.length - 1 ? 0 : previndex + 1;\n                return nextIndex;\n            });\n        }\n        if (loop === false) {\n            if (currentSlideIndex < slides.length - 1) {\n                setCurrentSlideIndex((preindex) => {\n                    const nextIndex = preindex + 1;\n                    return nextIndex;\n                });\n            }\n        }\n    };\n    const moveSlider = () => {\n        clearInterval(intervalRef.current);\n        setTimer(true);\n        intervalRef.current = setInterval(() => {\n            startSlider();\n        }, remainingPauseTime);\n    };\n    const moveToNextSlide = () => {\n        if (loop === true) {\n            setCurrentSlideIndex((previndex) => {\n                const nextIndex = previndex === slides.length - 1 ? 0 : previndex + 1;\n                return nextIndex;\n            });\n        }\n        else {\n            setCurrentSlideIndex((previndex) => {\n                const nextIndex = previndex === slides.length - 1 ? slides.length - 1 : previndex + 1;\n                return nextIndex;\n            });\n        }\n    };\n    const moveToPreviousSlide = () => {\n        if (loop == true) {\n            setCurrentSlideIndex((previndex) => {\n                const nextIndex = previndex > 0 ? previndex - 1 : slides.length - 1;\n                return nextIndex;\n            });\n        }\n        else {\n            setCurrentSlideIndex((previndex) => {\n                const nextIndex = previndex > 0 ? previndex - 1 : 0;\n                return nextIndex;\n            });\n        }\n    };\n    const pauseSlider = () => {\n        clearInterval(intervalRef.current);\n        setPreviousIndex(currentSlideIndex);\n        setTimer(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        let sliderTimePassed;\n        if (timer === true) {\n            sliderTimePassed = setInterval(() => {\n                setTimeWhenHovered((prevTime) => prevTime + 100);\n            }, 100);\n        }\n        return () => {\n            clearInterval(sliderTimePassed);\n        };\n    }, [timeWhenHovered, timer]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        setTimeWhenHovered(0);\n        remainingPauseTime = slideInterval;\n        moveSlider();\n        return () => {\n            clearInterval(intervalRef.current);\n        };\n    }, [currentSlideIndex]);\n    return {\n        currentSlideIndex,\n        currentSlide,\n        moveSlider,\n        moveToNextSlide,\n        moveToPreviousSlide,\n        pauseSlider,\n    };\n};\n\nconst ReuseSliderCarousel = ({ slideInterval, slides, loop, wrapperClasses, sliderContainerClasses, enableButtons, prefixButton = false, suffixButton, buttonClasses, }) => {\n    const { currentSlide, currentSlideIndex, moveToNextSlide, moveToPreviousSlide, pauseSlider, moveSlider, } = useSlider({\n        slideInterval,\n        slides,\n        loop,\n    });\n    const HandleClickEvent = (e) => {\n        if (!enableButtons) {\n            const rect = e.currentTarget.getBoundingClientRect();\n            const clickPosition = e.clientX - rect.left;\n            const halfWidth = rect.width / 2;\n            if (clickPosition > halfWidth) {\n                moveToNextSlide();\n            }\n            else {\n                moveToPreviousSlide();\n            }\n        }\n    };\n    const defaultWrapperClasses = \"relative flex items-center justify-center h-full w-full bg-gray-200\";\n    const defaultSliderContainerClasses = \"flex justify-center items-center h-full w-full shrink-0\";\n    const defaultButtonClasses = \"flex h-10 w-10 rounded-full text-center mx-6 bg-white items-center justify-center cursor-pointer\";\n    const finalWrapperClasses = (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(defaultWrapperClasses, wrapperClasses);\n    (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(defaultSliderContainerClasses, sliderContainerClasses);\n    const finalButtonClasses = (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(defaultButtonClasses, buttonClasses);\n    const previousButton = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: finalButtonClasses, onClick: moveToPreviousSlide }, prefixButton ? prefixButton : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u226A\")));\n    const nextButton = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: finalButtonClasses, onClick: moveToNextSlide }, suffixButton ? suffixButton : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u226B\")));\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: finalWrapperClasses, onClick: HandleClickEvent, onMouseEnter: pauseSlider, onMouseLeave: moveSlider },\n        enableButtons && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"absolute flex w-full justify-between px-6 h-fit items-center z-50\" },\n            previousButton,\n            nextButton)),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"flex h-full z-10 w-full overflow-hidden items-center justify-center\" }, currentSlide)));\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vY29tcG9uZW50cy9zbGlkZXItY2Fyb3VzZWwvZGlzdC9pbmRleC5lc20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyRDtBQUNsQjs7QUFFekMsbUJBQW1CLDZCQUE2QjtBQUNoRCxzREFBc0QsK0NBQVE7QUFDOUQ7QUFDQSx3QkFBd0IsNkNBQU07QUFDOUIsa0RBQWtELCtDQUFRO0FBQzFELDhDQUE4QywrQ0FBUTtBQUN0RCw4QkFBOEIsK0NBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0Isd0lBQXdJO0FBQ3ZLLFlBQVksa0dBQWtHO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1REFBTztBQUN2QyxJQUFJLHVEQUFPO0FBQ1gsK0JBQStCLHVEQUFPO0FBQ3RDLDRCQUE0QiwwREFBbUIsVUFBVSw2REFBNkQsZ0NBQWdDLDBEQUFtQjtBQUN6Syx3QkFBd0IsMERBQW1CLFVBQVUseURBQXlELGdDQUFnQywwREFBbUI7QUFDakssWUFBWSwwREFBbUIsVUFBVSxnSEFBZ0g7QUFDekosMEJBQTBCLDBEQUFtQixVQUFVLGdGQUFnRjtBQUN2STtBQUNBO0FBQ0EsUUFBUSwwREFBbUIsVUFBVSxrRkFBa0Y7QUFDdkg7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jb21wb25lbnRzL3NsaWRlci1jYXJvdXNlbC9kaXN0L2luZGV4LmVzbS5qcz9lNzEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnO1xuXG5sZXQgdXNlU2xpZGVyID0gKHsgc2xpZGVzLCBzbGlkZUludGVydmFsLCBsb29wIH0pID0+IHtcbiAgICBjb25zdCBbY3VycmVudFNsaWRlSW5kZXgsIHNldEN1cnJlbnRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHNsaWRlc1tjdXJyZW50U2xpZGVJbmRleF07XG4gICAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3RpbWVXaGVuSG92ZXJlZCwgc2V0VGltZVdoZW5Ib3ZlcmVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtwcmV2aW91c0luZGV4LCBzZXRQcmV2aW91c0luZGV4XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBsZXQgcmVtYWluaW5nUGF1c2VUaW1lID0gcHJldmlvdXNJbmRleCA9PT0gY3VycmVudFNsaWRlSW5kZXggJiZcbiAgICAgICAgdGltZVdoZW5Ib3ZlcmVkID4gMCAmJlxuICAgICAgICB0aW1lV2hlbkhvdmVyZWQgPCBzbGlkZUludGVydmFsXG4gICAgICAgID8gc2xpZGVJbnRlcnZhbCAtIHRpbWVXaGVuSG92ZXJlZFxuICAgICAgICA6IHNsaWRlSW50ZXJ2YWw7XG4gICAgY29uc3Qgc3RhcnRTbGlkZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb29wID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50U2xpZGVJbmRleCgocHJldmluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gcHJldmluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2aW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9vcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGVJbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlSW5kZXgoKHByZWluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHByZWluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbW92ZVNsaWRlciA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgc2V0VGltZXIodHJ1ZSk7XG4gICAgICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzdGFydFNsaWRlcigpO1xuICAgICAgICB9LCByZW1haW5pbmdQYXVzZVRpbWUpO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVRvTmV4dFNsaWRlID0gKCkgPT4ge1xuICAgICAgICBpZiAobG9vcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlSW5kZXgoKHByZXZpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHByZXZpbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEgPyAwIDogcHJldmluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50U2xpZGVJbmRleCgocHJldmluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gcHJldmluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSA/IHNsaWRlcy5sZW5ndGggLSAxIDogcHJldmluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVUb1ByZXZpb3VzU2xpZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb29wID09IHRydWUpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRTbGlkZUluZGV4KChwcmV2aW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBwcmV2aW5kZXggPiAwID8gcHJldmluZGV4IC0gMSA6IHNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRTbGlkZUluZGV4KChwcmV2aW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBwcmV2aW5kZXggPiAwID8gcHJldmluZGV4IC0gMSA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBwYXVzZVNsaWRlciA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgc2V0UHJldmlvdXNJbmRleChjdXJyZW50U2xpZGVJbmRleCk7XG4gICAgICAgIHNldFRpbWVyKGZhbHNlKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBzbGlkZXJUaW1lUGFzc2VkO1xuICAgICAgICBpZiAodGltZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNsaWRlclRpbWVQYXNzZWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZVdoZW5Ib3ZlcmVkKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyAxMDApO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZXJUaW1lUGFzc2VkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGltZVdoZW5Ib3ZlcmVkLCB0aW1lcl0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVXaGVuSG92ZXJlZCgwKTtcbiAgICAgICAgcmVtYWluaW5nUGF1c2VUaW1lID0gc2xpZGVJbnRlcnZhbDtcbiAgICAgICAgbW92ZVNsaWRlcigpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgfTtcbiAgICB9LCBbY3VycmVudFNsaWRlSW5kZXhdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U2xpZGVJbmRleCxcbiAgICAgICAgY3VycmVudFNsaWRlLFxuICAgICAgICBtb3ZlU2xpZGVyLFxuICAgICAgICBtb3ZlVG9OZXh0U2xpZGUsXG4gICAgICAgIG1vdmVUb1ByZXZpb3VzU2xpZGUsXG4gICAgICAgIHBhdXNlU2xpZGVyLFxuICAgIH07XG59O1xuXG5jb25zdCBSZXVzZVNsaWRlckNhcm91c2VsID0gKHsgc2xpZGVJbnRlcnZhbCwgc2xpZGVzLCBsb29wLCB3cmFwcGVyQ2xhc3Nlcywgc2xpZGVyQ29udGFpbmVyQ2xhc3NlcywgZW5hYmxlQnV0dG9ucywgcHJlZml4QnV0dG9uID0gZmFsc2UsIHN1ZmZpeEJ1dHRvbiwgYnV0dG9uQ2xhc3NlcywgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudFNsaWRlLCBjdXJyZW50U2xpZGVJbmRleCwgbW92ZVRvTmV4dFNsaWRlLCBtb3ZlVG9QcmV2aW91c1NsaWRlLCBwYXVzZVNsaWRlciwgbW92ZVNsaWRlciwgfSA9IHVzZVNsaWRlcih7XG4gICAgICAgIHNsaWRlSW50ZXJ2YWwsXG4gICAgICAgIHNsaWRlcyxcbiAgICAgICAgbG9vcCxcbiAgICB9KTtcbiAgICBjb25zdCBIYW5kbGVDbGlja0V2ZW50ID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCFlbmFibGVCdXR0b25zKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tQb3NpdGlvbiA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgaWYgKGNsaWNrUG9zaXRpb24gPiBoYWxmV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBtb3ZlVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdmVUb1ByZXZpb3VzU2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZGVmYXVsdFdyYXBwZXJDbGFzc2VzID0gXCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdy1mdWxsIGJnLWdyYXktMjAwXCI7XG4gICAgY29uc3QgZGVmYXVsdFNsaWRlckNvbnRhaW5lckNsYXNzZXMgPSBcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LWZ1bGwgc2hyaW5rLTBcIjtcbiAgICBjb25zdCBkZWZhdWx0QnV0dG9uQ2xhc3NlcyA9IFwiZmxleCBoLTEwIHctMTAgcm91bmRlZC1mdWxsIHRleHQtY2VudGVyIG14LTYgYmctd2hpdGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyXCI7XG4gICAgY29uc3QgZmluYWxXcmFwcGVyQ2xhc3NlcyA9IHR3TWVyZ2UoZGVmYXVsdFdyYXBwZXJDbGFzc2VzLCB3cmFwcGVyQ2xhc3Nlcyk7XG4gICAgdHdNZXJnZShkZWZhdWx0U2xpZGVyQ29udGFpbmVyQ2xhc3Nlcywgc2xpZGVyQ29udGFpbmVyQ2xhc3Nlcyk7XG4gICAgY29uc3QgZmluYWxCdXR0b25DbGFzc2VzID0gdHdNZXJnZShkZWZhdWx0QnV0dG9uQ2xhc3NlcywgYnV0dG9uQ2xhc3Nlcyk7XG4gICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZmluYWxCdXR0b25DbGFzc2VzLCBvbkNsaWNrOiBtb3ZlVG9QcmV2aW91c1NsaWRlIH0sIHByZWZpeEJ1dHRvbiA/IHByZWZpeEJ1dHRvbiA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiXFx1MjI2QVwiKSkpO1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogZmluYWxCdXR0b25DbGFzc2VzLCBvbkNsaWNrOiBtb3ZlVG9OZXh0U2xpZGUgfSwgc3VmZml4QnV0dG9uID8gc3VmZml4QnV0dG9uIDogUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJcXHUyMjZCXCIpKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBmaW5hbFdyYXBwZXJDbGFzc2VzLCBvbkNsaWNrOiBIYW5kbGVDbGlja0V2ZW50LCBvbk1vdXNlRW50ZXI6IHBhdXNlU2xpZGVyLCBvbk1vdXNlTGVhdmU6IG1vdmVTbGlkZXIgfSxcbiAgICAgICAgZW5hYmxlQnV0dG9ucyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhYnNvbHV0ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gcHgtNiBoLWZpdCBpdGVtcy1jZW50ZXIgei01MFwiIH0sXG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbixcbiAgICAgICAgICAgIG5leHRCdXR0b24pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGgtZnVsbCB6LTEwIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSwgY3VycmVudFNsaWRlKSkpO1xufTtcblxuZXhwb3J0IHsgUmV1c2VTbGlkZXJDYXJvdXNlbCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../components/slider-carousel/dist/index.esm.js\n"));

/***/ })

});