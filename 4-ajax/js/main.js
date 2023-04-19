




$('#getCurrency').on('click', function (e) {
	e.preventDefault();
	
	let text = $("#text").val();
	
	$.ajax({
		
		type: 'GET', // POST
		url: 'https://api.coingecko.com/api/v3/simple/price?ids=' + text + '&vs_currencies=usd',
		dataType: 'json',
		success: function (data) {
			if (data.hasOwnProperty(text)) {
				let currency = data['bitcoin']['usd'];
				$('#btc-usd').text('$' + currency + ' USD');
			}
			else
				alert('Error text 222');
		}
	});
});