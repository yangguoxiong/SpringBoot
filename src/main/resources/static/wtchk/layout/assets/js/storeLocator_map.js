
		var map;
		var pin_one_service = "assets/img/Pin_One_service.png";
		var pin_one_service_selected = "assets/img/Pin_One_service_selected.png";
		var pin_two_service = "assets/img/Pin_Two_service.png";
		var pin_two_service_selected = "assets/img/Pin_Two_service_selected.png";
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
	    var map_first=true;
	    var visit = 0;
			
	  
		$(function(){
			visit = visit + 1;

			$(".mobile-menu-3 span").text("查詢門市");
    		//$(".globalWrapper").addClass("show-mobile-menu-2 menu-2-myAccount");
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

			var mySwiper = new Swiper('#map-swiper', {
		        prevButton:'#map-button-prev',
				nextButton:'#map-button-next',
		        pagination : '#map-swiper-pagination',
		        paginationType : 'fraction',
		        observer: true,
        		observeParents: true,
		        paginationFractionRender: function (swiper, currentClassName, totalClassName) {
		        	return 'Photo <span class="' + currentClassName + '"></span>' +
		        	' / ' +
		        	'<span class="' + totalClassName + '"></span>';
		        }
		    })

		    $(".map-img .close-swiper").click(function(){
		    	$(".map-img").addClass("hide");
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

				$(".map-address ul").niceScroll({
					"horizrailenabled": false,
					"cursorcolor": "#009AA9",
					"cursorwidth": "8px",
					"hidecursordelay": 1000
				});

			})
			$('body').on('blur','.choseStore-searchbox input', function(){
				if (!$(".choseStore-searchbox .search-field").hasClass("show-delete")) {
					$(".search-part").removeClass("show_long_input");
				};
		        $(".choseStore-searchbox .miniPopup").slideUp(150);
			})
			$('body').on('input','.choseStore-searchbox input',function(){
				$(".search-part").addClass("show_long_input");
				$(".choseStore-searchbox .miniPopup").slideDown(150);
		        $(".choseStore-searchbox input").parent().addClass("show-delete");
			})
			$('body').on('click','.choseStore-searchbox .icon-delete', function(){
				$(".choseStore-searchbox input").val("").focus();
		        $(this).parent().removeClass("show-delete");
		        $(".choseStore-searchbox input").trigger("keyup");
			})

			$("body").on('mousewheel','.google-map', function ( e ) {
			    e.stopPropagation();
			});

			$(".mobile-map-address-box").on("click",".address-box .open-swiper",function(){
			    $(".map-img").removeClass("hide");
			})
			$(".map-address ul").on('click','li div.address-selection',function() {
				visit = visit + 1;
	            map_text=$(this).parent().html();
	            var lat = mobile_lat = $(this).children().attr('data-lat');
	            var lng = mobile_lng = $(this).children().attr('data-lng');
	            if($(window).width()<768){
	            	$(".map-address").removeClass("active"); 
	            	$(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");
	            }

	            //initMap(); 
	            google.maps.event.trigger(map, "resize");  
	            show_infoWindow=1;     
	        	addSingleMapMarker(lat, lng);
	        })
	        
	        $(".google-map-back").click(function(){
	        	$(".checkout_store_content").removeClass("show-part-choseStore").removeClass("show-mobile-map");
	        })
	        $(".mobile-map-address .icon-icon_arrow").click(function(){
	        	$(this).parent().toggleClass("active");
	        })
	        $('.google-map .google-map-back').click(function(){
	        	$('.mobile-map-address.active').removeClass('active');
	        })
	        $(".select-map").click(function(){
	        	$(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");
	        	//initMap(); 
	            google.maps.event.trigger(map, "resize"); 
	        	//addSingleMapMarker(mobile_lat, mobile_lng);
	        	if (navigator.geolocation) {
	        		navigator.geolocation.getCurrentPosition(function(position) {
	        			var pos = {
	        				lat: position.coords.latitude,
	        				lng: position.coords.longitude
	        			};

	        			map.setCenter(pos,16);
	        		}, function() {
	        		});
	        	}
	        })
		})

		function initMap() {
			var centerLat, centerLng;
			
			markerPositionData=[];
			$('.map-address ul li .address-box').each(function(i) {
	        	markerPosition[i] = new google.maps.LatLng($(this).attr('data-lat'), $(this).attr('data-lng'));

	        	markerPositionData.push([$(this).attr('data-lat'),$(this).attr('data-lng'),$(this).attr('data-index'),$(this).attr('data-store')]);

	        	if (i == 0) {
	        		mobile_lat = centerLat = $(this).attr('data-lat');
	        		mobile_lng = centerLng = $(this).attr('data-lng');
	        	}
	        });



			mapCetner = new google.maps.LatLng(centerLat, centerLng);
			mapOptions = {
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: mapCetner,
				//center: {lat:22.304468 , lng:114.111016},
				mapTypeControl: false,
				panControl:true,
				zoomControl:true,

			};
			pin = {
				url:'assets/img/Pin_One_service.png',
	  			scaledSize:new google.maps.Size(26, 39),
	  			origin:new google.maps.Point(0, 0),
	  			anchor:new google.maps.Point(15, 34)
			};
			map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

			for (var i = 0; i < markerPosition.length; i++) {
				markerArray[i] = new google.maps.Marker({
					position: markerPosition[i],
					map: map,
					icon: pin,
					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"12px"},
					a_lat:markerPositionData[i][0],
					a_lng:markerPositionData[i][1]
				});
				showinfomessage2(markerArray[i]);
			}
			//map_text=$(".map-address ul .hongkongisland li:first").html();
			//$('.addressFix.transparent').parent().hide();
    		visit = visit + 1; 
        	addSingleMapMarker(mobile_lat, mobile_lng);


		}
		var prev_infowindow =false; 
		function showinfomessage(markerArray){
			if( prev_infowindow ) {
				prev_infowindow.close();
				}


			markerArraySave=markerArray;
			var infoWindow = new InfoBubble({
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
			    backgroundClassName: 'addressFix transparent',
			    arrowStyle: 1,
			    minHeight:100,
			    maxHeight:165
			});
			prev_infowindow = infoWindow;
	        //infoWindow.open(map, markerArray);
	       	
			if($(window).width()>=768&&show_infoWindow!=1){
				infoWindow.open(map, markerArray);
				
	    	}else{
	    		$(".mobile-map-address-box").html(map_text);
	    	}
	    	show_infoWindow=0;
			google.maps.event.addListener(markerArray, "click", function(){
		       	map_text=$(".map-address .address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").prop("outerHTML");
	  			$(".pickup-address-box , .mobile-map-address-box").html(map_text);
	            $(".address-box").removeClass("active");
        		$(".address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").addClass("active");  
	            $(".map-address").removeClass("active"); 
	            $(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");       
	        	addSingleMapMarker(markerArray.a_lat, markerArray.a_lng);
	        	mobile_lat=markerArray.a_lat;
	        	mobile_lng=markerArray.a_lng;
	        	map.setZoom(16);
				map.setCenter(
		  			new google.maps.LatLng(markerArray.a_lat, markerArray.a_lng),16
		  		);
		  		if ($(window).width()>=768) {
		  			map.panBy(-200, 0);	
		  		};
	       	});
	       	google.maps.event.addDomListener(infoWindow, 'domready', function() {
	       		
	       		$('.info-show-more a').click(function(){
			        showmore = true;
			        $('.transparent').parent().css('height','180px');
			        $(this).hide();
			        $('.store-details .expand').show();
			    })

	       		$(".store-map .address-box .open-swiper").on("click",function(){
			    	$(".map-img").removeClass("hide");
			    })
			    $(".store-map .address-box .icon-close").on("click",function(){
			    	if( prev_infowindow ) {
			    		prev_infowindow.close();
			    		showmore = false;
			    		$('.info-show-more a').show();
			        	$('.store-details .expand').hide();
			    	}
			    })
			    $('.map-address .icon-back-arrow').on('click',function(){
			    	showmore = false;
			    	$('.info-show-more a').show();
			        $('.store-details .expand').hide();
			    })
	       		$(".tab.addTooltips").tooltip({
	       			delay : {
	       				show : 0,
	       				hide : 0,
	       			}
        		});
	       	})

	  	}
	  	function showinfomessage2(markerArray){
	  		google.maps.event.addListener(markerArray, "click", function(){
	  			map_text=$(".map-address .address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").prop("outerHTML");
	  			$(".pickup-address-box , .mobile-map-address-box").html(map_text);
	            $(".address-box").removeClass("active");
        		$(".address-box[data-lat='"+markerArray.a_lat+"'][data-lng='"+markerArray.a_lng+"']").addClass("active");  
	  			$(".map-address").removeClass("active"); 
	            $(".checkout_store_content").addClass("show-part-choseStore").addClass("show-mobile-map");     
	            

	        	addSingleMapMarker(markerArray.a_lat, markerArray.a_lng);
	        	mobile_lat=markerArray.a_lat;
	        	mobile_lng=markerArray.a_lng;
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
	  			url:'assets/img/Pin_One_service_selected@2x.png',
	  			scaledSize:new google.maps.Size(40, 60),
	  			origin:new google.maps.Point(0, 0),
	  			anchor:new google.maps.Point(35, 52)
	  		};
	  		var pinTwo = {
	  			url:'assets/img/Pin_Two_service.png',
	  			scaledSize:new google.maps.Size(40, 39),
	  			origin:new google.maps.Point(0, 0),
	  			anchor:new google.maps.Point(35, 34)
	  		};
	  		var pinTwo2 = {
	  			url:'assets/img/Pin_Two_service_selected@2x.png',
	  			scaledSize:new google.maps.Size(62, 60),
	  			origin:new google.maps.Point(0, 0),
	  			anchor:new google.maps.Point(54, 52)
	  		};

	  		for (var i = 0; i < markerPosition.length; i++) {

	  			if(visit == 1){
	  				if(markerPositionData[i][3] == 'normal'){
	  					if(a==markerPositionData[i][0]&&b==markerPositionData[i][1]){
	  						markerArray[i] = new google.maps.Marker({
			  					position: markerPosition[i],
			  					map: map,
			  					icon: pin,
			  					a_lat:a,
			  					a_lng:b,
			  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"24px"}
			  				});
	  					}else{
	  						markerArray[i] = new google.maps.Marker({
			  					position: markerPosition[i],
			  					map: map,
			  					icon: pin,
			  					a_lat:markerPositionData[i][0],
			  					a_lng:markerPositionData[i][1],
			  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"12px"}
			  				});
	  					}
	  					visit = visit + 1;
	  				}else{
	  					if(a==markerPositionData[i][0]&&b==markerPositionData[i][1]){
		  						markerArray[i] = new google.maps.Marker({
			  					position: markerPosition[i],
			  					map: map,
			  					icon: pinTwo,
			  					a_lat:a,
			  					a_lng:b,
			  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"24px"}
			  				});
	  					}else{
	  						markerArray[i] = new google.maps.Marker({
			  					position: markerPosition[i],
			  					map: map,
			  					icon: pinTwo,
			  					a_lat:markerPositionData[i][0],
			  					a_lng:markerPositionData[i][1],
			  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"12px"}
			  				});
	  					}
	  				}

	  			}else{
	  				if(markerPositionData[i][3] == 'normal'){
		  				if(a==markerPositionData[i][0]&&b==markerPositionData[i][1]){
		  				markerArray[i] = new google.maps.Marker({
		  					position: markerPosition[i],
		  					map: map,
		  					icon: pin2,
		  					a_lat:a,
		  					a_lng:b,
		  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"24px"}
		  				});
		  				showinfomessage(markerArray[i]);
			  			}else{
			  				markerArray[i] = new google.maps.Marker({
			  					position: markerPosition[i],
			  					map: map,
			  					icon: pin,
			  					a_lat:markerPositionData[i][0],
			  					a_lng:markerPositionData[i][1],
			  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"12px"}
			  				});
			  				showinfomessage2(markerArray[i]);
			  			}
		  			}else{
		  				if(a==markerPositionData[i][0]&&b==markerPositionData[i][1]){
		  				markerArray[i] = new google.maps.Marker({
		  					position: markerPosition[i],
		  					map: map,
		  					icon: pinTwo2,
		  					a_lat:a,
		  					a_lng:b,
		  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"24px"}
		  				});
		  				showinfomessage(markerArray[i]);
			  			}else{
			  				markerArray[i] = new google.maps.Marker({
			  					position: markerPosition[i],
			  					map: map,
			  					icon: pinTwo,
			  					a_lat:markerPositionData[i][0],
			  					a_lng:markerPositionData[i][1],
			  					label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"12px"}
			  				});
			  				showinfomessage2(markerArray[i]);
			  			}
		  			}
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
	  				icon: pin,
	  				label:{text: markerPositionData[i][2], color: "transparent" , fontSize:"12px"}
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