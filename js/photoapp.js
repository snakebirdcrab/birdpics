'use strict';


(function() {

	class PhotoApp {
		constructor(url, collection) {
			this.url = 'https://api.flickr.com/services/rest/?api_key=aa4263c33573b94e44b541a6c61c2ae3&method=flickr.photos.search&tags=bird&per_page=100&format=json&nojsoncallback=1';
			this.photoCollection = [];
			this.parseFlickrData = this.parseFlickrData.bind(this);
		}

		init() {
			let _this = this;
			this.httpGet(this.url, function(resp) {
				if (resp.stat === 'ok') {	
					_this.parseFlickrData(resp);
				}
			})
		}

		httpGet(url, callback) {

			const xmlHttp = new XMLHttpRequest();
			
			xmlHttp.onreadystatechange = function() { 
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
					callback(JSON.parse(xmlHttp.responseText));
			}
			xmlHttp.open('GET', url, true);
			xmlHttp.send(null);
		}

		parseFlickrData(resp) {
			let _this =  this;
			for (let [index, item] of resp.photos.photo.entries()) {		
				let baseUrl = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret;

				_this.photoCollection[index] = {id: index,
									thumbnailLink: baseUrl + '_q.jpg', // 150x150 thumbnail squares
									link: baseUrl + '_b.jpg', // specifies max 1024px on longest side
									title: item.title
								}

				const photoThumb = new PhotoThumb(_this.photoCollection[index]);
				photoThumb.render();
			}
		}
		
		onThumbClick(photo_id) {
			document.getElementById('greyout').className += 'visible';
			this.lightbox = new PhotoLightbox(photo_id);
			this.lightbox.render();
		}
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
			const template = `<div class="photo-container">
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
