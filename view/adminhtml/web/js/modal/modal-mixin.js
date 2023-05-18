/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

define([
    'Magento_Ui/js/modal/modal-component',
    'Magento_PageBuilder/js/events'
], function (ModalComponent, events) {
    'use strict';

    var mixin = {

        /**
         * Listen for from save.
         *
         * @param {String} id
         */
        startListen: function(id) {},
    };

    return function (target) {
        return target.extend(mixin);
    };
});
