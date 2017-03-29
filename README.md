***************************************************************
NOTES ON PHOTO DISPLAY WEB PAGE
***************************************************************


- The url for this project is: https://snakebirdcrab.github.io/birdpics/

- Uses stylus for CSS preprocessor (compiled into main.css) and fontello for font icon display.

- KNOWN ISSUE: Occasionally a photo will be "no longer available" from the flickr API. This didn't actually happen to me until 2 minutes ago, and it's not immediately clear if there's a way to get around this via the API.



- Because this is a simple demo/MVP app, there are definitely some parts of the code that were simplified for this specific use case, but would be abstracted out to be more reusable and modular in a more complex project.
	
	Some examples of that are:

	- Including httpget inside the main app function (as opposed to making something like 'http requests' as its own module and allowing multiple app components to use it for data retrieval/submission).
	
	- The CSS would include more shared/reusable code at the top level for things such as font styles, margins, basic containers, etc. Not much was reused here, so it's relatively element-specific.

	- Maybe I'd structure my views a bit differently and have a separate GalleryView managing the thumb display, for example. But for now it seems to be okay for the main app view to manage this since the gallery isn't doing much.



- Features I'd add next or would be interesting to have:
	
	- I assumed this was being developed for a regular-sized browser (and also do not have a huge screen to test on), but a next step would be to include some media queries and breakpoints to display different lightbox photo sizes and make this look good even on mobile.

	- Ability to slide-animate lightbox photos.

	- Keyboard event hookups (<, >, esc) to navigate lightbox view.

	- Loader animations for content loading

	- Ability to load more photos and infinte scroll

	- Performance optimization considerations, especially if photo sizes and number displayed gets large