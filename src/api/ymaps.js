const createInstance = () => {
	let loadPromise = null;
	let map = null;

	const mapsApi = {
		loadApi(url = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=&mode=release&apikey=5ce5a642-c15c-4814-9517-9947d1fc0f2e`) {
			loadPromise = new Promise((resolve, reject) => {
				const script = document.createElement(`script`);

				script.type = `text/javascript`;
				script.onload = resolve;
				script.onerror = reject;
				script.src = url;
				script.async = `async`;
				document.head.appendChild(script);
			})
				.then(() => window.ymaps.ready());

			return loadPromise;
		},
		loadModules(modulesNames) {
			return new Promise((resolve, reject) => {
				window.ymaps.modules.require(modulesNames)
					.spread((...modules) => {
						modules.forEach((module, i) => window.ymaps[modulesNames[i]] = module);
						resolve();
					}, reject);
			});
		},
		createRoute({points, params, enableRendering}) {
			return window.ymaps.route(points, params)
				.then((route) => {
					if (enableRendering) {
						map.geoObjects.add(route);
					}

					return route;
				})
		},
		destroyRoute({route}) {
			route.model.destroy();
			map.geoObjects.remove(route);
		},
		createRectangle() {},
		createPlaceMark({geometry, options, properties}) {
			return loadPromise.then(() => {
				return new window.ymaps.Placemark(geometry, properties, options);
			});
		},
		renderPlaceMark({placeMark}) {
			return loadPromise.then(() => {
				map.geoObjects.add(placeMark);
			});
		},
		createMap({container, options}) {
			return loadPromise.then(() => {
				return map || (map = new window.ymaps.Map(container, {
					center: options.center,
					zoom: options.zoom,
					controls: []
				}));
			});
		},
	};

	return mapsApi;
};

export {createInstance};

export default createInstance();
