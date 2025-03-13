<?php
/*
 * Copyright © 2025 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

declare(strict_types=1);

namespace SR\PageBuilder\Plugin\Catalog\Block\Product;

use Magento\CatalogInventory\Helper\Stock;

class ProductsListPlugin
{

    /**
     * @param Stock $stock
     */
    public function __construct(protected Stock $stock)
    {
    }

    /**
     * Allow to filter product collection
     *
     * @param \Magento\CatalogWidget\Block\Product\ProductsList $subject
     * @param \Magento\Catalog\Model\ResourceModel\Product\Collection $result
     * @return \Magento\Catalog\Model\ResourceModel\Product\Collection
     */
    public function afterCreateCollection(
        \Magento\CatalogWidget\Block\Product\ProductsList $subject,
        \Magento\Catalog\Model\ResourceModel\Product\Collection $result
    ) {
        $isExcludeOutOfStock = $subject->getData('is_exclude_out_of_stock');
        if ($isExcludeOutOfStock) {
            $this->stock->addInStockFilterToCollection($result);
        }
        return $result;
    }
}
