/**
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_PageBuilder/js/modal/modal': {
                'SR_PageBuilder/js/modal/modal-mixin': true
            },
            'Magento_PageBuilder/js/content-type/style-registry': {
                'SR_PageBuilder/js/content-type/style-registry-mixin': true
            }
        }
    }
};
