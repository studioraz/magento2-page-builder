/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

/*eslint-disable */
/* jscs:disable */

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(["Magento_PageBuilder/js/content-type-menu/hide-show-option", "Magento_PageBuilder/js/content-type/preview"], function (_hideShowOption, _preview) {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */

    /**
     * @api
     */
    var Preview = /*#__PURE__*/function (_preview2) {
        "use strict";

        _inheritsLoose(Preview, _preview2);

        function Preview() {
            return _preview2.apply(this, arguments) || this;
        }

        var _proto = Preview.prototype;

        /**
         * Return an array of options
         *
         * @returns {OptionsInterface}
         */
        _proto.retrieveOptions = function retrieveOptions() {
            var options = _preview2.prototype.retrieveOptions.call(this);

            options.hideShow = new _hideShowOption({
                preview: this,
                icon: _hideShowOption.showIcon,
                title: _hideShowOption.showText,
                action: this.onOptionVisibilityToggle,
                classes: ["hide-show-content-type"],
                sort: 40
            });
            return options;
        };

        /**.
         * After render callback
         *
         * @param {HTMLVideoElement} videoElement
         * @param {Preview} self
         */
        ;

        _proto.onAfterRender = function onAfterRender(videoElement, self) {
            // Assign muted attribute explicitly due to API issues
            videoElement.muted = (self.data.video.attributes().autoplay && self.data.video.attributes().muted);
        };

        return Preview;
    }(_preview);

    return Preview;
});
//# sourceMappingURL=preview.js.map
