/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

/*eslint-disable */
/* jscs:disable */

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(["Magento_PageBuilder/js/content-type/master"], function (_master) {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */
    var Master = /*#__PURE__*/function (_master2) {
        "use strict";

        _inheritsLoose(Master, _master2);

        function Master() {
            return _master2.apply(this, arguments) || this;
        }

        var _proto = Master.prototype;

        _proto.isHosted = function isHosted(src) {
            return false;
        };

        return Master;
    }(_master);

    return Master;
});
//# sourceMappingURL=master.js.map
