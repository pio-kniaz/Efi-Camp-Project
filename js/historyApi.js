const getProductsData1 = (endpoint, containerClassName) => {
	$.get('https://efigence-camp.herokuapp.com/api/' + endpoint,
			 (data) => {
		const productsContainer1 = document.querySelector(".history-list");
		const historyList = data.content;


		const productTemplate1 = (historyData) => {

			let color1;
			let cur1;
			let cur2;

			switch (historyData.status) {
				case "income":
					console.log("income");
					cur1='color-green';
					break;

				case "outcome":

					cur1='color-red';
					break;
				default:


			}



		return `
							<div class='history column'>
							<h6>${historyData.date}</h6>

							<div class='text-content'>

							<div class='wrap'><span class='description'>
							${historyData.description}
							</span><span class='cash'>
							${historyData.category}
							</span></div></div>
							 <div class='last-wraper'><span class='inPlus ${cur1}'>
							 ${historyData.amount}</span><span>${historyData.currency}
							</span></div></div>

						`
						// const template = "<div class='history column'>"
			      //     +"<h6>"+response.content[i].date
			      //     +"</h6>"+"<div class='text-content'>"+"<div class='wrap'>"+"<span class='description'>"
			      //     +response.content[i].description
			      //     +"</span>"+"<span class='cash'>"+
			      //     response.content[i].category
			      //     +"</span>"+"</div>"+"</div>"+
			      //      "<div class='last-wraper'>"+"<span class='inPlus'>"
			      //      +response.content[i].amount+"</span>"+"<span>"+ response.content[i].currency+
			      //      "</span>"+"</div>"+"</div>";

		};

		historyList.forEach((element, index) => {

			const template = productTemplate1(element);
			productsContainer1.insertAdjacentHTML('beforeend', template);
		});
});
}
getProductsData1('data/history', '.history1');
