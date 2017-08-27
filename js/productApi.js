const getProductsData = (endpoint, containerClassName) => {
	$.get('https://efigence-camp.herokuapp.com/api/' + endpoint,
			 (data) => {
		const productsContainer = document.querySelector(".product-list");
		const productsList = data.content;
		console.log(productsList);

		const productTemplate = (productData) => {

			let icon;
			switch(productData.type) {
				case 'Wallet':
					icon =("<img src="+"./img/wallet.png"+" "+ "alt='wallet-icon'>")

					// dupa =("chuj")
					break;
				case 'Deposits':
					icon = ("<img src="+"./img/pig.png"+" "+ "alt='wallet-icon'>")
					break;
				case 'Funds':
					icon = ("<img src="+"./img/coins.png"+" "+ "alt='wallet-icon'>")
					break;
        case 'Bank loans':
				icon = ("<img src="+"./img/finger.png"+" "+ "alt='finger-icon'>")
				break;

				case 'Accounts':
					icon = ("<img src="+"./img/chart.png"+" "+ "alt='finger-icon'>")
					break;
				default:

			}

		return `
							<div class='product'>${icon}

							<div class='product-wraper'>


							<h6>${productData.type}</h6>
							<span class='amount'>${productData.amount}</span>
							<span>${productData.currency}</span></div></div>

						`

		};

		productsList.forEach((element, index) => {

			const template = productTemplate(element);
			productsContainer.insertAdjacentHTML('beforeend', template);
		});
});
}
getProductsData('data/products', '.products');
