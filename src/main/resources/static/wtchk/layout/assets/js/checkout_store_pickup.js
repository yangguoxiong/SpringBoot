
		var map;
	    var mapCetner;
	    var markerArray = [];
	    var markerArraySave;
	    var markerPosition = [];
	    var markerPositionData = [];
	    var mapOptions;
	    var pin;
	    var map_text;
	    var mobile_lng;
	    var mobile_lat;
	    var show_infoWindow=0;
		$(function(){
			$(".globalWrapper").addClass("checkoutWrapper");
			$("#change-address").click(function(){
				$(".checkout_homeD_content").addClass("show-part-address-list");
			})

			$("button.need-remove-btn").click(function(){
				$(".need-show-red").addClass("red");
				$(".need-show-red .error-msg").removeClass("hide");
			})

			$(".select-filter-title .icon-close").click(function(){
				$(".select-filter").removeClass("show_mobile_filter");
			})
			$(".select-filter-cover").click(function(){
				$(".select-filter").addClass("show_mobile_filter");
			})
			$(".select-filter .green-empty-btn").click(function(){
				$('.select-filter .selectpicker').selectpicker('deselectAll');
			})

			$("#area-code").on("changed.bs.select",function(){
				if($(this).val()=='hongkong'){
					$("#tel-list input").attr("disabled","true");
				}else{
					$("#tel-list input").removeAttr("disabled");
				}
			})

			$("#change-message").click(function(){
				$(".part-add-address").show();
				$(".part-address").hide();
				var that=$(this).parent().parent().parent();
				$(".part-add-address #name").val(that.find("[data-id='name']").text());
				$(".part-add-address #tel").val(that.find("[data-id='tel']").text());
				$(".part-add-address #mail").val(that.find("[data-id='mail']").text());
				$(".part-add-address #city").val(that.find("[data-id='city']").text());
				$(".part-add-address #address").val(that.find("[data-id='address']").text());
				$('#area-code').selectpicker('val', that.find("[data-id='city']").data("name"));				
			})
			$("#next-step").click(function(){
				if($("#name").val().trim().length==0){
					$("#name").addClass("error");
				}
				if($("#mail").val().trim().length==0){
					$("#mail").addClass("error");
				}
				if($("#tel").val().trim().length==0){
					$("#tel").addClass("error");
				}
				$(".checkout_store input").each(function(){
					if($(this).hasClass("error")){
						$("#"+$(this).attr("id")+"-msg").removeClass("hide");
					}
				})
			})

			$(".map-address .icon-back-arrow").click(function(){
				if(!$(".map-address").hasClass("active")){
					map.setZoom(16);
					map.setCenter(
			  			new google.maps.LatLng(mobile_lat, mobile_lng),16
			  		);
			  		if ($(window).width()>=768) {
			  			map.panBy(-200, 0);
			  		};
			  		if(prev_infowindow)
						prev_infowindow.close();
				}else{
					if(prev_infowindow)
						prev_infowindow.open(map, markerArraySave);
				}	
				$(".map-address").toggleClass("active");
			})
			$(".choseStore-searchbox input").on("blur",function(){
				if (!$(".choseStore-searchbox .search-field").hasClass("show-delete")) {
					$(".search-part").removeClass("show_long_input");
				};
		        $(".choseStore-searchbox .miniPopup").slideUp(150);
		    })
			$(".choseStore-searchbox input").on("input",function(){
				$(".search-part").addClass("show_long_input");
				$(".choseStore-searchbox .miniPopup").slideDown(150);
		        $(".choseStore-searchbox input").parent().addClass("show-delete");
		    })
		    $(".choseStore-searchbox .icon-delete").click(function(){
		        $(".choseStore-searchbox input").val("").focus();
		        $(this).parent().removeClass("show-delete");
		        $(".choseStore-searchbox input").trigger("keyup");
		    })

			$("body").on('mousewheel','.google-map', function ( e ) {
			    e.stopPropagation();
			});
			$(".pickup-address-box").on("click",".view-map",function() {
	            var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
	            var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
	            $(".address-box").removeClass("active");
				$(".address-box[data-lat='"+lat+"'][data-lng='"+lng+"']").addClass("active");
	            map_text=$(this).parent().parent().parent().html();
	            $(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");
	            initMap();
	        	addSingleMapMarker(lat, lng);
	        })
	        $(".pickup-address-box").on("click",".change-pickup-address",function() {
	            map_text=$(this).parent().parent().parent().html();
	            var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
	            var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
	            $(".address-box").removeClass("active");
	            $(".address-box[data-lat='"+lat+"'][data-lng='"+lng+"']").addClass("active");
	            $(".checkout_store_content").addClass("show-part-choseStore").removeClass("show-mobile-map");
	            $(".map-address").addClass("active");
	            show_infoWindow=1;
	            initMap();
	        	addSingleMapMarker(lat, lng);
	        })
			$(".map-address ul").on("click","li .view-map",function() {
	            map_text=$(this).parent().parent().parent().html();
	            var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
	            var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
	            if($(window).width()<768){
	            	$(".map-address").removeClass("active"); 
	            	$(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");
	            }
	            initMap();   
	            show_infoWindow=1;     
	        	addSingleMapMarker(lat, lng);
	        })
	        $(".part-choseStore .map-address").on("click",".address-box .green-empty-btn",function(){
	        	map_text=$(this).parent().parent().parent().html();
	    		$(".address-box").removeClass("active");
	            var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
	            var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
	            $(".address-box[data-lat='"+lat+"'][data-lng='"+lng+"']").addClass("active");
	            //$(".checkout_store_content").removeClass("show-part-choseStore").removeClass("show-mobile-map");
	            //$(".map-address").removeClass("active");
	            $(".pickup-address-box").html(map_text); 
	            show_infoWindow=1;        
	        	addSingleMapMarker(lat, lng);
	        })
	        $(".mobile-map-address .icon-close").click(function(){
	        	$(".checkout_store_content").removeClass("show-part-choseStore").removeClass("show-mobile-map");
	        })
	        $(".mobile-map-address").on("click",".address-box .green-empty-btn",function(){
	        	map_text=$(this).parent().parent().parent().html();
	            var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
	            var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
	            //$(".checkout_store_content").removeClass("show-part-choseStore");
	            //$(".map-address").removeClass("active");
	            $(".address-box").removeClass("active");
	            $(".address-box[data-lat='"+lat+"'][data-lng='"+lng+"']").addClass("active");
	            $(".pickup-address-box").html(map_text);       
	        	// addSingleMapMarker(lat, lng);
	        })
	        $(".select-map").click(function(){
	        	$(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");
	        	initMap(); 
	        	addSingleMapMarker(mobile_lat, mobile_lng);
	        })
		})

		function initMap() {
			var centerLat, centerLng;
			markerPositionData=[];
			$('.map-address ul li .address-box').each(function(i) {
        	//Get the full list of store location
	        	markerPosition[i] = new google.maps.LatLng($(this).attr('data-lat'), $(this).attr('data-lng'));

	        	markerPositionData.push([$(this).attr('data-lat'),$(this).attr('data-lng')]);

	        	if (i == 0) {
	        		centerLat = $(this).attr('data-lat');
	        		centerLng = $(this).attr('data-lng');
	        	}
	        });

			mapCetner = new google.maps.LatLng(centerLat, centerLng);
			mapOptions = {
				zoom: 16,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: mapCetner,
				mapTypeControl: false,
				panControl:true,
				zoomControl:true,

			};
			pin = {
				url:'assets/img/mark_location.png',
	  			scaledSize:new google.maps.Size(30, 33),
	  			origin:new google.maps.Point(0, 0),
	  			anchor:new google.maps.Point(15, 34)
			};
			map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

			for (var i = 0; i < markerPosition.length; i++) {
				markerArray[i] = new google.maps.Marker({
					position: markerPosition[i],
					map: map,
					icon: pin,
					a_lat:markerPositionData[i][0],
					a_lng:markerPositionData[i][1]
				});
				showinfomessage2(markerArray[i]);
			}

		}
		var prev_infowindow =false; 
		function showinfomessage(markerArray){
			if( prev_infowindow ) {
				prev_infowindow.close();
			}
			markerArraySave=markerArray;
			var infoWindow =  new InfoBubble({
				maxWidth:375,
				content:map_text,
				shadowStyle: 0,
			    padding: 14,
			    backgroundColor: '#fff',
			    borderRadius: 0,
			    arrowSize: -180,
			    borderWidth: 0,
			    borderColor: '',
			    disableAutoPan: true,
			    hideCloseButton: true,
			    arrowPosition: 111,
			    backgroundClassName: 'transparent',
			    arrowStyle: 1,
			    minHeight:175,
			    maxHeight:180
			});
			prev_infowindow = infoWindow;
	        //infoWindow.open(map, markerArray);
	       	
	       	google.maps.event.addDomListener(infoWindow, 'domready', function() {
			    $("#googleMap .address-box .green-empty-btn").on("click",function(){
		        	map_text=$(this).parent().parent().parent().html();
		            var lat = mobile_lat = $(this).parent().parent().attr('data-lat');
            		var lng = mobile_lng = $(this).parent().parent().attr('data-lng');
		            //$(".checkout_store_content").removeClass("show-part-choseStore");
		            //$(".map-address").removeClass("active");
		            $(".pickup-address-box").html(map_text);
		            $(".address-box").removeClass("active");
            		$(".address-box[data-lat='"+lat+"'][data-lng='"+lng+"']").addClass("active");        
		        	// addSingleMapMarker(lat, lng);
		        })
			});
			if($(window).width()>=768&&show_infoWindow!=1){
				infoWindow.open(map, markerArray);
	    	}else{
	    		$(".mobile-map-address-box").html(map_text);
	    	}
	    	show_infoWindow=0;
			google.maps.event.addListener(markerArray, "click", function(){
		       	// $(".map-address ul li .address-box").each(function(){
		       	// 	if($(this).attr("data-lat")==markerArray.a_lat&&$(this).attr("data-lng")==markerArray.a_lng){
		       	// 		$(this).find(".view-map").click();
		       	// 	}
		       	// })
		       	map_text=$(".map-address .address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").prop("outerHTML");
	  			$(".pickup-address-box , .mobile-map-address-box").html(map_text);
	            $(".address-box").removeClass("active");
        		$(".address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").addClass("active");  
	            $(".map-address").removeClass("active"); 
	            $(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");       
	        	addSingleMapMarker(markerArray.a_lat, markerArray.a_lng);
	        	map.setZoom(16);
				map.setCenter(
		  			new google.maps.LatLng(markerArray.a_lat, markerArray.a_lng),16
		  		);
		  		if ($(window).width()>=768) {
		  			map.panBy(-200, 0);
		  		};
	       	});

	  	}
	  	function showinfomessage2(markerArray){
	  		google.maps.event.addListener(markerArray, "click", function(){
	  			// $(".map-address ul li .address-box").each(function(){
	  			// 	if($(this).attr("data-lat")==markerArray.a_lat&&$(this).attr("data-lng")==markerArray.a_lng){
	  			// 		$(this).find(".view-map").click();
	  			// 	}
	  			// })
	  			map_text=map_text=$(".map-address .address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").prop("outerHTML");
	  			$(".pickup-address-box , .mobile-map-address-box").html(map_text);
	            $(".address-box").removeClass("active");
        		$(".address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").addClass("active");  
	  			$(".map-address").removeClass("active"); 
	            $(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");       
	        	addSingleMapMarker(markerArray.a_lat, markerArray.a_lng);
	        	map.setZoom(16);
				map.setCenter(
		  			new google.maps.LatLng(markerArray.a_lat, markerArray.a_lng),16
		  		);
		  		if ($(window).width()>=768) {
		  			map.panBy(-200, 0);
		  		};
	  		});
	  	}

	  	function addSingleMapMarker(a,b) {
	  		clearMapMarkers();  
	  		var pin2 = {
	  			url:'assets/img/mark_location.png',
	  			scaledSize:new google.maps.Size(45, 50),
	  			origin:new google.maps.Point(0, 0),
	  			anchor:new google.maps.Point(34.5, 77)
	  		};

	  		for (var i = 0; i < markerPosition.length; i++) {
	  			if(a==markerPositionData[i][0]&&b==markerPositionData[i][1]){
	  				markerArray[i] = new google.maps.Marker({
	  					position: markerPosition[i],
	  					map: map,
	  					icon: pin2,
	  					a_lat:a,
	  					a_lng:b
	  				});
	  				showinfomessage(markerArray[i]);
	  			}else{
	  				markerArray[i] = new google.maps.Marker({
	  					position: markerPosition[i],
	  					map: map,
	  					icon: pin,
	  					a_lat:markerPositionData[i][0],
	  					a_lng:markerPositionData[i][1]
	  				});
	  				showinfomessage2(markerArray[i]);
	  			}


	  		}
	  		map.setCenter(
	  			new google.maps.LatLng(a, b),16
	  		);
	  		if ($(window).width()>=768) {
	  			map.panBy(-200, 0);
	  		};
	  		
	  	}
	  	function addAllMapMarkers(JsonReturnFromServer) {
	  		for (var i = 0; i < JsonReturnFromServer.storeLocationList.length; i++) {
	  			markerArray[i] = new google.maps.Marker({
	  				position: JsonReturnFromServer.storeLocationList[i],
	  				map: map,
	  				icon: pin
	  			});
	  			showinfomessage(markerArray[i]);
	  		}
	  	}
	  	function clearMapMarkers() {
	    	for (var i = 0; i < markerArray.length; i++) {
	    		markerArray[i].setMap(null);
	    	}
	    	markerArray=[];
	    }