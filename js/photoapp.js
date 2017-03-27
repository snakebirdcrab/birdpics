'use strict';


(function() {

	class PhotoApp {
		constructor(url, collection) {
			this.url = url ? url : 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA18L527SzJ14qMdXQJASglGsrSlYuUFfI&cx=002509394275061747325:nx8so7vpp3m&searchType=image&q=birds+of+paradise'
			this.photoCollection = collection ? collection : [];

		}

		init() {
			let _this = this;
			//httpGet(this.url, function(resp) {
				//console.log(resp.items);
				_this.photoCollection =
				[
					{title: "Birds of Paradise Gallery Interpreter Training | Natural History ...", 
						link: "http://juanvelascoblog.files.wordpress.com/2013/02/birds-of-paradise_final.jpg",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDie3fTpxrtCUq24CjaYJL8tdLVVT2QD_KHNUiMHBvE5gBo_EXWp2DIQfT"},
					{title: "Greater Bird-of-Paradise - YouTube", 
						link: "https://i.ytimg.com/vi/KIYkpwyKEhY/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEVZRdqPikGtehHzyNA4qPoHJwCyxs1IOmHaAKIl04ys7IRl4uKFy7dAx_"},
					{title: "BOP-101004-080---Version-2: BIRDS OF PARADISE: MOTION GALLERIES ...",
						link: "http://cdn.neonsky.com/4bd5ec0079abc/images/BOP-101004-080---Version-2-1.jpg",
						thumbnailLink:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlVEfE5PtSWJKmDQLx4fMkpXvgZkoi2lZ3Y-IpF59m_RmHtE-FkjtVDY"},
					{title: "Bird Of Paradise Makes An Unforgettable First Impression - Animal ...",
						link: "https://i.ytimg.com/vi/iTmHtxJpEWE/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc_TVd21_V2MoDXyTJd5Jq6hsV5Oo8PVWbYcL2OQUlz-u7brVsMKpi8aH"},
					{title: "Bird-of-paradise - Wikipedia",
						link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wilson%27s_Bird_of_Paradise.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLAjK0ujT3K41EA1rrEjqonvDeZHeOWRVqfThQ7dW4hOY-_64yPl8Vbvp1qg"},
					{title: "Birds-of-Paradise Project Introduction - YouTube",
						link: "https://i.ytimg.com/vi/YTR21os8gTA/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTL1AJhv47PJKKj6T8pcOWNFrMfOM-PbF3A9sjYdMu-Nvt-wDEGbvR2Q5D8"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpzQu_kz5EgZWOk6R27uhXBoSysH6NxcZdWN9Z2LP7_wF/",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSooMNug43TN5SmWA9gPr15l58bTx3N0dnYG83G9oRDXIOvdncD_gfpPmAI"},
					{title: "1000+ images about Birds of Paradise on Pinterest | Wallpapers ...",
						link: "https://s-media-cache-ak0.pinimg.com/originals/f9/58/7c/f9587c9591f2aa69598c28772c81dc70.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCd9cbTahP-uQ5fLnbvUEQqJ1QawoSrr72SHNelMPFrUPnsMHbln9KNv0"},
					{title: "birds of paradise - 100 More Photos",
						link: "http://wallpapercave.com/wp/lmPn0LA.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0BK5f9aVfBsoaxaVbySiyMdqO076PreCCHLqDs8SZhVn0vCSdmyEWJmQ"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-Fwsgxo7q8HwYnrMIex4Mp08UgnaatMkLxafvWyKoyl_eXC6OE/",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQURwcGedp9dkDHjzj_b0YLU0Iw7JNTBEZKHMD6ve-q6SiYS7ebzSB8NjA"},
					{title: "Birds-of-Paradise Project Introduction - YouTube",
						link: "https://i.ytimg.com/vi/YTR21os8gTA/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTL1AJhv47PJKKj6T8pcOWNFrMfOM-PbF3A9sjYdMu-Nvt-wDEGbvR2Q5D8"},
					{title: "Greater Bird-of-Paradise - YouTube", 
						link: "https://i.ytimg.com/vi/KIYkpwyKEhY/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEVZRdqPikGtehHzyNA4qPoHJwCyxs1IOmHaAKIl04ys7IRl4uKFy7dAx_"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpzQu_kz5EgZWOk6R27uhXBoSysH6NxcZdWN9Z2LP7_wF/",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSooMNug43TN5SmWA9gPr15l58bTx3N0dnYG83G9oRDXIOvdncD_gfpPmAI"},
					{title: "BOP-101004-080---Version-2: BIRDS OF PARADISE: MOTION GALLERIES ...",
						link: "http://cdn.neonsky.com/4bd5ec0079abc/images/BOP-101004-080---Version-2-1.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlVEfE5PtSWJKmDQLx4fMkpXvgZkoi2lZ3Y-IpF59m_RmHtE-FkjtVDY"},
					{title: "Birds of Paradise Gallery Interpreter Training | Natural History ...", 
						link: "http://juanvelascoblog.files.wordpress.com/2013/02/birds-of-paradise_final.jpg",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDie3fTpxrtCUq24CjaYJL8tdLVVT2QD_KHNUiMHBvE5gBo_EXWp2DIQfT"},
					{title: "Bird Of Paradise Makes An Unforgettable First Impression - Animal ...",
						link: "https://i.ytimg.com/vi/iTmHtxJpEWE/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc_TVd21_V2MoDXyTJd5Jq6hsV5Oo8PVWbYcL2OQUlz-u7brVsMKpi8aH"},
					{title: "Bird-of-paradise - Wikipedia",
						link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wilson%27s_Bird_of_Paradise.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLAjK0ujT3K41EA1rrEjqonvDeZHeOWRVqfThQ7dW4hOY-_64yPl8Vbvp1qg"},
					{title: "1000+ images about Birds of Paradise on Pinterest | Wallpapers ...",
						link: "https://s-media-cache-ak0.pinimg.com/originals/f9/58/7c/f9587c9591f2aa69598c28772c81dc70.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCd9cbTahP-uQ5fLnbvUEQqJ1QawoSrr72SHNelMPFrUPnsMHbln9KNv0"},
					{title: "birds of paradise - 100 More Photos",
						link: "http://wallpapercave.com/wp/lmPn0LA.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0BK5f9aVfBsoaxaVbySiyMdqO076PreCCHLqDs8SZhVn0vCSdmyEWJmQ"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-Fwsgxo7q8HwYnrMIex4Mp08UgnaatMkLxafvWyKoyl_eXC6OE/",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQURwcGedp9dkDHjzj_b0YLU0Iw7JNTBEZKHMD6ve-q6SiYS7ebzSB8NjA"},
						{title: "Birds of Paradise Gallery Interpreter Training | Natural History ...", 
						link: "http://juanvelascoblog.files.wordpress.com/2013/02/birds-of-paradise_final.jpg",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDie3fTpxrtCUq24CjaYJL8tdLVVT2QD_KHNUiMHBvE5gBo_EXWp2DIQfT"},
					{title: "Greater Bird-of-Paradise - YouTube", 
						link: "https://i.ytimg.com/vi/KIYkpwyKEhY/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEVZRdqPikGtehHzyNA4qPoHJwCyxs1IOmHaAKIl04ys7IRl4uKFy7dAx_"},
					{title: "BOP-101004-080---Version-2: BIRDS OF PARADISE: MOTION GALLERIES ...",
						link: "http://cdn.neonsky.com/4bd5ec0079abc/images/BOP-101004-080---Version-2-1.jpg",
						thumbnailLink:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlVEfE5PtSWJKmDQLx4fMkpXvgZkoi2lZ3Y-IpF59m_RmHtE-FkjtVDY"},
					{title: "Bird Of Paradise Makes An Unforgettable First Impression - Animal ...",
						link: "https://i.ytimg.com/vi/iTmHtxJpEWE/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc_TVd21_V2MoDXyTJd5Jq6hsV5Oo8PVWbYcL2OQUlz-u7brVsMKpi8aH"},
					{title: "Bird-of-paradise - Wikipedia",
						link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wilson%27s_Bird_of_Paradise.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLAjK0ujT3K41EA1rrEjqonvDeZHeOWRVqfThQ7dW4hOY-_64yPl8Vbvp1qg"},
					{title: "Birds-of-Paradise Project Introduction - YouTube",
						link: "https://i.ytimg.com/vi/YTR21os8gTA/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTL1AJhv47PJKKj6T8pcOWNFrMfOM-PbF3A9sjYdMu-Nvt-wDEGbvR2Q5D8"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpzQu_kz5EgZWOk6R27uhXBoSysH6NxcZdWN9Z2LP7_wF/",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSooMNug43TN5SmWA9gPr15l58bTx3N0dnYG83G9oRDXIOvdncD_gfpPmAI"},
					{title: "1000+ images about Birds of Paradise on Pinterest | Wallpapers ...",
						link: "https://s-media-cache-ak0.pinimg.com/originals/f9/58/7c/f9587c9591f2aa69598c28772c81dc70.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCd9cbTahP-uQ5fLnbvUEQqJ1QawoSrr72SHNelMPFrUPnsMHbln9KNv0"},
					{title: "birds of paradise - 100 More Photos",
						link: "http://wallpapercave.com/wp/lmPn0LA.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0BK5f9aVfBsoaxaVbySiyMdqO076PreCCHLqDs8SZhVn0vCSdmyEWJmQ"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-Fwsgxo7q8HwYnrMIex4Mp08UgnaatMkLxafvWyKoyl_eXC6OE/",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQURwcGedp9dkDHjzj_b0YLU0Iw7JNTBEZKHMD6ve-q6SiYS7ebzSB8NjA"},
					{title: "Birds-of-Paradise Project Introduction - YouTube",
						link: "https://i.ytimg.com/vi/YTR21os8gTA/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTL1AJhv47PJKKj6T8pcOWNFrMfOM-PbF3A9sjYdMu-Nvt-wDEGbvR2Q5D8"},
					{title: "Greater Bird-of-Paradise - YouTube", 
						link: "https://i.ytimg.com/vi/KIYkpwyKEhY/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEVZRdqPikGtehHzyNA4qPoHJwCyxs1IOmHaAKIl04ys7IRl4uKFy7dAx_"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpzQu_kz5EgZWOk6R27uhXBoSysH6NxcZdWN9Z2LP7_wF/",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSooMNug43TN5SmWA9gPr15l58bTx3N0dnYG83G9oRDXIOvdncD_gfpPmAI"},
					{title: "BOP-101004-080---Version-2: BIRDS OF PARADISE: MOTION GALLERIES ...",
						link: "http://cdn.neonsky.com/4bd5ec0079abc/images/BOP-101004-080---Version-2-1.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDlVEfE5PtSWJKmDQLx4fMkpXvgZkoi2lZ3Y-IpF59m_RmHtE-FkjtVDY"},
					{title: "Birds of Paradise Gallery Interpreter Training | Natural History ...", 
						link: "http://juanvelascoblog.files.wordpress.com/2013/02/birds-of-paradise_final.jpg",
						thumbnailLink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDie3fTpxrtCUq24CjaYJL8tdLVVT2QD_KHNUiMHBvE5gBo_EXWp2DIQfT"},
					{title: "Bird Of Paradise Makes An Unforgettable First Impression - Animal ...",
						link: "https://i.ytimg.com/vi/iTmHtxJpEWE/maxresdefault.jpg",
						thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc_TVd21_V2MoDXyTJd5Jq6hsV5Oo8PVWbYcL2OQUlz-u7brVsMKpi8aH"},
					{title: "Bird-of-paradise - Wikipedia",
						link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wilson%27s_Bird_of_Paradise.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLAjK0ujT3K41EA1rrEjqonvDeZHeOWRVqfThQ7dW4hOY-_64yPl8Vbvp1qg"},
					{title: "1000+ images about Birds of Paradise on Pinterest | Wallpapers ...",
						link: "https://s-media-cache-ak0.pinimg.com/originals/f9/58/7c/f9587c9591f2aa69598c28772c81dc70.jpg",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCd9cbTahP-uQ5fLnbvUEQqJ1QawoSrr72SHNelMPFrUPnsMHbln9KNv0"},
					{title: "birds of paradise - 100 More Photos",
						link: "http://wallpapercave.com/wp/lmPn0LA.jpg",
						thumbnailLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0BK5f9aVfBsoaxaVbySiyMdqO076PreCCHLqDs8SZhVn0vCSdmyEWJmQ"},
					{title: "Birds of Paradise, Bird of Paradise Pictures, Bird of Paradise ...",
						link: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-Fwsgxo7q8HwYnrMIex4Mp08UgnaatMkLxafvWyKoyl_eXC6OE/",
						thumbnailLink: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQURwcGedp9dkDHjzj_b0YLU0Iw7JNTBEZKHMD6ve-q6SiYS7ebzSB8NjA"}
				]//resp.items;

				this.photoCollection = this.photoCollection.concat(this.photoCollection).concat(this.photoCollection);
				for (let [index, item] of _this.photoCollection.entries()) {
					item.id = index;
					const photoThumb = new PhotoThumb(item);
					photoThumb.render();
				}
			//})
		}
		
		onThumbClick(photo_id) {
			document.getElementById('greyout').className += 'visible';
			this.lightbox = new PhotoLightbox(photo_id);
			this.lightbox.render();
		}
	}


	function httpGet(url, callback) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() { 
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
				callback(JSON.parse(xmlHttp.responseText));
		}
		xmlHttp.open('GET', url, true);
		xmlHttp.send(null);
	}

	class PhotoThumb {

		constructor(photoProps) {
			this.photoProps = photoProps;
			this.el = document.getElementById('gallery');
		}

		render() {
			const template = `<div class="photo-container"><img data-id=${this.photoProps.id} src=${this.photoProps.thumbnailLink}></div>`;
			const div = document.createElement('div');
			div.className += 'thumb-block';
			div.innerHTML = template;
			this.el.appendChild(div);
			div.addEventListener('click', this.onThumbClick);
		}

		onThumbClick(e) {
			photoApp.onThumbClick(e.target.getAttribute('data-id'));
		}
	}

	class PhotoLightbox {

		constructor(init_id) {
			this.display_id = parseInt(init_id);
			this.el = document.getElementById('lightbox-container');
			this.onNextClick = this.onNextClick.bind(this);
			this.onPrevClick = this.onPrevClick.bind(this);
			this.onCloseClick = this.onCloseClick.bind(this);

			document.getElementById('prev-button').addEventListener('click', this.onPrevClick);
			document.getElementById('next-button').addEventListener('click', this.onNextClick);
			document.getElementById('close-button').addEventListener('click', this.onCloseClick);
		}

		render() {
			const template = `<div class="photo-container-large">
									<img data-id=${this.display_id} src=${photoApp.photoCollection[this.display_id].link}>
									<div class="title-box">
										<div class="title">${photoApp.photoCollection[this.display_id].title}</div>
									</div>
								</div>`;
			const div = document.getElementById('image-box');
			div.innerHTML = template;
			if (this.el.className !== 'visible') this.el.className += 'visible';
		}

		onNextClick() {
			if (!photoApp.photoCollection[this.display_id + 1]) {
				this.display_id = 0;
			}
			else this.display_id += 1;
			this.render();
		}

		onPrevClick() {
			if (!photoApp.photoCollection[this.display_id - 1]) {
				this.display_id = photoApp.photoCollection.length - 1;
			}
			else this.display_id -= 1;
			this.render();
		}

		onCloseClick() {
			this.el.classList.remove('visible');
			document.getElementById('greyout').classList.remove('visible');
		}
	}
	
	let photoApp = new PhotoApp();
	photoApp.init();

}());
