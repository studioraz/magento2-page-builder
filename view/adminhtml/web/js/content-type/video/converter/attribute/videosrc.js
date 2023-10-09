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

        /**
         * Convert value to internal format
         *
         * @param value string
         * @returns {string | object}
         */
        ;

        var _proto = VideoSrc.prototype;

        _proto.fromDom = function fromDom(value) {
            value = value.replace(/\?autoplay=1&mute=1/g, "");
            value = value.replace(/&autoplay=1&mute=1/g, "");
            value = value.replace(/\?title=0&byline=0&portrait=0/g, "");
            value = value.replace(/&autoplay=1&autopause=0&muted=1/g, "");
            return value;
        }
        /**
         * Convert value to knockout format
         *
         * @param name string
         * @param data Object
         * @returns {string}
         */
        ;

        _proto.toDom = function toDom(name, data) {
            var value = (0, _object.get)(data, name);

            if (value === undefined) {
                return "";
            }

            return value;
        };

        return VideoSrc;
    }();

    return VideoSrc;
});
//# sourceMappingURL=videosrc.js.map
