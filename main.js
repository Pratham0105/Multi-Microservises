const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				}); 

				var swiper = new Swiper(".mySwiper", {
					spaceBetween: 20,
					loop:true,
					autoplay:{
						delay:2500,
						disableOnInteraction:false,
					},
					breakpoint:{
						640:{
							slidesPerview:1,
						},
						768:{
							slidesPerview:2,
				
						},
						1024:{
							slidesPerview:3,
				
						
						},
					
				},
				});
				