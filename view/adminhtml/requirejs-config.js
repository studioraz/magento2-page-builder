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
            'Magento_Ui/js/lib/validation/validator': {
                'SR_PageBuilder/js/form/element/validator-rules-mixin': true
            },
            'Magento_PageBuilder/js/content-type/style-registry': {
                'SR_PageBuilder/js/content-type/style-registry-mixin': true
            },
            'mage/adminhtml/wysiwyg/tiny_mce/tinymce5Adapter': {
                'SR_PageBuilder/js/mixin-tinymce5adapter': true
            },
            'Hyva_CmsTailwindJit/js/pagebuilder/jit/abstractPreview': {
                'SR_PageBuilder/js/pagebuilder/jit/abstractPreview-mixin': true
            }
        }
    }
};
