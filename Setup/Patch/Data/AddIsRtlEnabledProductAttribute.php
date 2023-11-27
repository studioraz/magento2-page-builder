<?php
/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

declare(strict_types=1);

namespace SR\PageBuilder\Setup\Patch\Data;

use Magento\Catalog\Api\Data\ProductAttributeInterface;
use Magento\Eav\Setup\EavSetup;
use Magento\Framework\Setup\Patch\DataPatchInterface;

class AddIsRtlEnabledProductAttribute implements DataPatchInterface
{
    /**
     * @var EavSetup
     */
    private $eavSetup;

    public function __construct(EavSetup $eavSetup)
    {
        $this->eavSetup = $eavSetup;
    }

    public static function getDependencies()
    {
        return [];
    }

    public function getAliases()
    {
        return [];
    }

    public function apply()
    {
        $this->eavSetup->addAttribute(
            ProductAttributeInterface::ENTITY_TYPE_CODE,
            'is_rtl',
            [
                'type'         => 'int',
                'input'        => 'boolean',
                'label'        => 'Is RTL',
                'required'     => 0,
                'user_defined' => 1,
                'default'      => 1,
                'sort_order'   => 3,
                'group'        => 'Content',
            ]
        );
    }
}
