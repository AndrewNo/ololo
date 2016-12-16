<?php 

class ShopProductWritter{
	protected $products;
	public function showDetailedPrice($product){
		echo 'Цена со скидкой: '.$product->getPrice().'Ваша скидка: '.$product->getDiscount();
	}
}

?>