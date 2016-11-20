(function(d, dO, $) {

	var Vars = {
		noOfStars: null,
		star: null
	},
	DOM = {
		starBackgorund: null
	},
	Functions = {
		addStars: function() {
			for(var i = 1; i <= Vars.noOfStars; i++) {
				Vars.star = document.createElement('div');
				Vars.star.className = 'star';
				var r = Functions.getRandomInt(1,3);
					if(r == 1)
						Vars.star.className = 'star1';
					else if(r == 2)
						Vars.star.className = 'star2';
					else if(r == 3)
						Vars.star.className = 'star3';
				Vars.star.style.left = Functions.getRandomInt(0, window.innerWidth) + 'px';
				Vars.star.style.top = Functions.getRandomInt(0, window.innerHeight) +'px'
				DOM.starBackground.append(Vars.star);
			}
		},
		twinkle: function() {
			TweenMax.staggerTo(".star1", 0.5, {
				scale: 2,
				repeat: -1,
				yoyo: true, 
				ease: Power0.easeNone
			}
			, 0.1
			);
			TweenMax.staggerTo(".star2", 0.5, {
				scale: 2.5,
				repeat:-1,
				yoyo: true,
				delay: 1, 
				ease: Power0.easeNone
			}
			, 0.1
			);
			TweenMax.staggerTo(".star3", 0.5, {
				scale: 3,
				repeat:-1,
				yoyo: true,
				delay: 2, 
				ease: Power0.easeNone
			}
			, 0.1
			);
			TweenMax.to("#astronaut", 10, {
				rotationZ: 360, 
				repeat: -1,
				ease: Power0.easeNone
			}
			);
		},
		move: function() {
			var tp = Functions.getRandomInt(0, window.innerHeight-200) + 'px';
			var lft = Functions.getRandomInt(0, (window.innerWidth/6) + 200) + 'px';
			$('#astronaut').animate( {
				left: lft,
				top: tp,
			}, 10000);
		},
		getRandomInt: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;		
		},
		callInterval : function() {
			setInterval(Functions.move(),10000);
		},
					
	};
	dO.ready( function() {
		DOM.starBackground = $('#star-background');
		Vars.noOfStars = Functions.getRandomInt(100, window.innerWidth) / 3;
		Functions.addStars();
		Functions.twinkle();
		Functions.move();
		setTimeout(Functions.callInterval(), 10000);
	});
})(document, jQuery(document), jQuery);
function postToGoogle() {
			var name = $('#Name').val();
        	var email = $('#Email').val();
        	var college = $('#College').val();
			var mno = $('#Mno').val();
			var year = $('#Year').val();
			var cmt1 = $('#cmt1').val();
			var cmt2 = $('#cmt2').val();
			var cmt3 = $('#cmt3').val();
         	$.ajax({
                	url: "https://docs.google.com/forms/d/e/1FAIpQLSe8qPXKvTOCxrsfLgqwGYjda0TckC66eN8-8VcU4HhdVa3nIg/formResponse",
					data: {"entry.2094364885": name, 
							"entry.2003932882": email, 
							"entry.609785890": college, 
							"entry.1438636419": mno, 
							"entry.1320656763": year, 
							"entry.1565698868": cmt1, 
							"entry.902102950": cmt2,
							"entry.1392460848": cmt3
						},
                	type: "POST",
                	dataType: "xml",
          			statusCode: {
                        0: function() {
                            window.location.replace("http://www.google.com");
                        },
                        200: function() {
                            window.location.replace("http://www.google.com");
                        }
                    }
            });
}