$(document).ready(function(){
	/*Edit button Checkout*/
	$('.edit').click(function()
	{	var name=$(".edit_name").html();
		var card=$(".edit_card").html();
		var date=$(".edit_date").html();
			
		if(name)
		{	var editableText=$('<input class="edit_name" type="text" style="color: grey; background-color: black" required></input>');
			editableText.val(name);
			$(".edit_name").replaceWith(editableText);
			editableText.focus();
		}
		if(card)
		{	var editableText=$('<input class="edit_card"  type="text" style="color: grey; background-color: black" required></input>');
			editableText.val(card);
			$(".edit_card").replaceWith(editableText);
			editableText.focus();
		}	
		if(date)
		{	var editableText=$('<input class="edit_date" type="month" style="color: grey; background-color: black" required></input>');
			editableText.val(date);
			$(".edit_date").replaceWith(editableText);
			editableText.focus();
		}	
	});
/*submit button Checkout*/
	$('.submit').click(function()
	{	var name=$(".edit_name").val();
		var card=$(".edit_card").val();
		var date=$(".edit_date").val();
		
		if(!name)
			{	alert("please Enter Name");
				event.preventDefault();	
				exit();
			}

		if(!card)
			{	alert("please Enter Card Number");
				event.preventDefault();	
				exit();
			}
	
		if(!date)
			{	
				alert("please Select Exp. date");
				event.preventDefault();	
				exit();
			}

		else{	/*show name entered to name area*/
				var editableText=$('<p class="edit_name"/>');
				editableText.text(name);
				$(".edit_name").replaceWith(editableText);

				/*set card no. card area*/
				var newCard=(card)%10000;
				var cardShow='************'+newCard;
				var editableCard=$('<p class="edit_card"/>');
				editableCard.text(cardShow);
				$(".edit_card").replaceWith(editableCard);

				/*show date to  Exp.date area*/
				var date = new Date(date);
				var mm=(date.getMonth() +1);
				var yyyy=date.getFullYear();
                var yy=(yyyy)%100;
				if(mm<10)
				{
					mm= '0'+mm;
				}
				newdate=( mm + '/' + yy );
				var editableDate=$('<p class="edit_date"/>');
				editableDate.text(newdate);
				$(".edit_date").replaceWith(editableDate);
			}		
	});	
/*Edit button Pass info*/
	$('.edit_pass').click(function()
	{	var dur=$(".edit_dur").html();
		var price=$(".edit_price").html();
		var useby=$(".edit_useby").html();

			
		if(dur)
		{	var editableText=$('<input class="edit_dur" type="text" style="color: grey; background-color: black" required></input>');
			editableText.val(dur);
			$(".edit_dur").replaceWith(editableText);
			editableText.focus();
		}
		if(price)
		{	var editableText=$('<input class="edit_price"  type="text" style="color: grey; background-color: black" required></input>');
			editableText.val(price);
			$(".edit_price").replaceWith(editableText);
			editableText.focus();
		}	
		if(useby)
		{	var editableText=$('<input class="edit_useby" type="date" style="color: grey; background-color: black" required></input>');
			editableText.val(useby);
			$(".edit_useby").replaceWith(editableText);
			editableText.focus();
		}
				


	});


});

$(function() {
  $('.pay_details').on('keydown', '.edit_card', function(e)
  	{-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
});
$(function() {
  $('.dur_right').on('keydown', '.edit_price', function(e)
  	{-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
});