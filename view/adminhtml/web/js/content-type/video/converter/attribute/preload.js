/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

/*eslint-disable */
/* jscs:disable */
define(["Magento_PageBuilder/js/utils/object"], function (_object) {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */
    var VideoSrc = /*#__PURE__*/function () {
        "use strict";

        function VideoSrc() {}

        var _proto = VideoSrc.prototype;

        /**
         * Convert value to internal format
         *
         * @param value string
         * @returns {string | object}
         */
        _proto.fromDom = function fromDom(value) {
            return 'metadata';
        }
        /**
         * Convert value to knockout format
         *
         * @param name string
         * @param data Object
         * @returns {boolean|string}
         */
        ;

        _proto.toDom = function toDom(name, data) {
            return 'metadata';
        };

        return VideoSrc;
    }();

    return VideoSrc;
});
//# sourceMappingURL=autoplay.js.map
