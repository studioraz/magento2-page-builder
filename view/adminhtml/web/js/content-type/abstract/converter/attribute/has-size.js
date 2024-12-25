/*eslint-disable */
/* jscs:disable */
define([], function () {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */
    var HasSize = /*#__PURE__*/function () {
        "use strict";

        function HasSize() {}

        var _proto = HasSize.prototype;

        /**
         * Convert value to internal format
         *
         * @param value string
         * @returns {string | object}
         */
        _proto.fromDom = function fromDom(value) {
            return value;
        };

        /**
         * Convert value to knockout format
         *
         * @param {string} name
         * @param {DataObject} data
         * @returns {string | object}
         */
        _proto.toDom = function toDom(name, data) {
            var breakpointName = name.split('_').pop();
            var width = data['image_width_' + breakpointName];
            var height = data['image_height_' + breakpointName];
            var hasSize = !!width && !!height;

            return hasSize.toString();
        };

        return HasSize;
    }();

    return HasSize;
});
