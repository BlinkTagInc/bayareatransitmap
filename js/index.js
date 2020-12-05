jQuery(function ($) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbmRhbm5lZSIsImEiOiJja2lhMGZmOTUwbDFmMnJtbjR3eHA5ZW5tIn0.prz9CNJohxxPji73BhwsZQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-122.273762, 37.91],
    zoom: 8.5
  });

  const popup = new mapboxgl.Popup({ closeOnClick: false });

  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.disable();

  const agencies = [
    {
      id: 'ac',
      name: 'AC Transit',
      center: [-122.21227348565455, 37.803341676501375],
      website: 'http://www.actransit.org',
      color: '#1b9e77',
      routes: 81
    },
    {
      id: 'ace',
      name: 'ACE Train',
      center: [-121.8832131047455, 37.65646571836969],
      website: 'https://acerail.com',
      color: '#a600cb',
      routes: 1
    },
    {
      id: 'bart',
      name: 'Bay Area Rapid Transit (BART)',
      center: [-122.26805027051816, 37.829004502443894],
      website: 'https://bart.gov',
      color: '#e7298a',
      routes: 14
    },
    {
      id: 'caltrain',
      name: 'Caltrain',
      center: [-122.19821936830928, 37.464609613944575],
      website: 'http://caltrain.com',
      color: '#e31a1c',
      routes: 8
    },
    {
      id: 'capitolcorridor',
      name: 'Capitol Corridor',
      center: [-122.30159122343596, 37.87391757899074],
      website: 'http://www.capitolcorridor.org',
      color: '#7570b3',
      routes: 3
    },
    {
      id: 'countyconnection',
      name: 'County Connection',
      center: [-122.04717762753484, 37.95124599000397],
      website: 'https://countyconnection.com',
      color: '#ff7f00',
      routes: 37
    },
    {
      id: 'dumbartonexpress',
      name: 'Dumbarton Express',
      center: [-122.14902061485544, 37.480902966078204],
      website: 'https://dumbartonexpress.com',
      color: '#b15928',
      routes: 2
    },
    {
      id: 'emerygoround',
      name: 'Emery Go-Round',
      center: [-122.29413574804177, 37.84592567385103],
      website: 'https://emerygoround.com',
      color: '#1f78b4',
      routes: 7
    },
    {
      id: 'fast',
      name: 'Fairfield and Suisun Transit (FAST)',
      center: [-122.02140604250775, 38.25525204345428],
      website: 'https://fasttransit.org',
      color: '#00da96',
      routes: 10
    },
    {
      id: 'goldengate',
      name: 'Golden Gate Transit',
      center: [-122.53964385398365, 37.94663098991812],
      website: 'https://www.goldengate.org/',
      color: '#66a61e',
      routes: 14
    },
    {
      id: 'lavta',
      name: 'LAVTA',
      center: [-121.87297131435314, 37.6886769047443],
      website: 'https://www.wheelsbus.com',
      color: '#e6ab02',
      routes: 9
    },
    {
      id: 'marintransit',
      name: 'Marin Transit',
      center: [-122.52049521644679, 38.01983325103447],
      website: 'https://marintransit.org',
      color: '#d47eff',
      routes: 33
    },
    {
      id: 'mvgo',
      name: 'MVgo',
      center: [-122.0806959343335, 37.421463138893856],
      website: 'https://mvgo.org',
      color: '#1b9e77',
      routes: 4
    },
    {
      id: 'napa',
      name: 'Napa Vine Transit',
      center: [-122.3014364572638, 38.32299738893619],
      website: 'https://vinetransit.com',
      color: '#009cff',
      routes: 16
    },
    {
      id: 'petalumatransit',
      name: 'Petaluma Transit',
      center: [-122.62990630072039, 38.23831546327128],
      website: 'https://transit.cityofpetaluma.net',
      color: '#e7298a',
      routes: 12
    },
    {
      id: 'riovista',
      name: 'Rio Vista Delta Breeze',
      center: [-121.69396482355413, 38.17739896466307],
      website: 'https://www.riovistacity.com/delta-breeze-transit-system/',
      color: '#7570b3',
      routes: 2
    },
    {
      id: 'samtrans',
      name: 'SamTrans',
      center: [-122.30632346418753, 37.54076223505852],
      website: 'https://samtrans.com',
      color: '#00da96',
      routes: 38
    },
    {
      id: 'weta',
      name: 'San Francisco Bay Ferry',
      center: [-122.39222552118537, 37.8012584838132],
      website: 'https://sanfranciscobayferry.com',
      color: '#ff7f00',
      routes: 8
    },
    {
      id: 'sfmta',
      name: 'San Francisco Municipal Transportation Agency',
      center: [-122.44575582897917, 37.76816510180318],
      website: 'https://www.sfmta.com',
      color: '#b15928',
      routes: 37
    },
    {
      id: 'santarosa',
      name: 'Santa Rosa CityBus',
      center: [-122.73139029661289, 38.44008074943588],
      website: 'https://samtrans.com',
      color: '#d47eff',
      routes: 13
    },
    {
      id: 'soltrans',
      name: 'SolTrans',
      center: [-122.22109060714959, 38.13222652318734],
      website: 'https://soltrans.org',
      color: '#e31a1c',
      routes: 12
    },
    {
      id: 'sctransit',
      name: 'Sonoma County Transit',
      center: [-122.69544423650687, 38.346709337724775],
      website: 'https://sctransit.com',
      color: '#66a61e',
      routes: 23
    },
    {
      id: 'smart',
      name: 'Sonoma Marin Area Rail Transit (SMART)',
      center: [-122.56716646089573, 38.12372517243497],
      website: 'https://www.sonomamarintrain.org',
      color: '#1f78b4',
      routes: 1
    },
    {
      id: 'southcity',
      name: 'South City Shuttle',
      center: [-122.42891428559913, 37.66770425890881],
      website: 'https://www.ssf.net/services/free-south-city-shuttle',
      color: '#e6ab02',
      routes: 1
    },
    {
      id: 'tdt',
      name: 'Tri Delta Transit',
      center: [-121.81248330790345, 38.01388120832513],
      website: 'https://trideltatransit.com',
      color: '#1b9e77',
      routes: 20
    },
    {
      id: 'unioncity',
      name: 'Union City Transit',
      center: [-122.05818980216819, 37.60344742086579],
      website: 'https://www.unioncity.org/170/Union-City-Transit',
      color: '#009cff',
      routes: 5
    },
    {
      id: 'vacaville',
      name: 'Vacaville City Coach',
      center: [-121.97134508201037, 38.36749594941287],
      website: 'http://www.citycoach.com`',
      color: '#e7298a',
      routes: 6
    },
    {
      id: 'vta',
      name: 'VTA',
      center: [-122.00498752124443, 37.402402729452064],
      website: 'https://www.vta.org',
      color: '#d47eff',
      routes: 58
    },
    {
      id: 'westcat',
      name: 'WESTCAT',
      center: [-122.27677552313732, 38.00895511373281],
      website: 'https://www.westcat.org',
      color: '#7570b3',
      routes: 17
    }
  ];

  map.on('load', () => {
    for (const agency of agencies) {
      map.addSource(agency.id, {
        type: 'geojson',
        data: `/data/${agency.id}.geojson`
      });
  
      map.addLayer({
        'id': agency.id,
        'type': 'fill',
        'source': agency.id,
        'paint': {
          'fill-color': agency.color,
          'fill-opacity': 0.8
        }
      });
    }

    map.on('click', (event) => {
      console.log(event.lngLat)
      const features = map.queryRenderedFeatures(event.point, { layers: agencies.map(agency => agency.id) });
      if (features.length === 1) {
        highlightAgency(features[0].layer.id);
      } else if (features.length > 1) {
        const description = '<h5 style="margin-right: 10px">Agencies</h5>' +  features.map(feature => {
          const agencyInfo = agencies.find(agency => agency.id === feature.layer.id);
          return `<a href="#" onClick="highlightAgency('${feature.layer.id}');">${agencyInfo.name}</a><br>`;
        }).join('')

        popup
          .setLngLat(event.lngLat)
          .setHTML(description)
          .addTo(map);
      }
    });

    map.on('mousemove', (event) => {
      const features = map.queryRenderedFeatures(event.point, { layers: agencies.map(agency => agency.id) });
      if (features.length > 0) {
        map.getCanvas().style.cursor = 'pointer';
      } else {
        map.getCanvas().style.cursor = '';
      }
    });
  });

  $('#map-legend').html(agencies.map(agency => {
    return `<div><a href="#" data-id="${agency.id}" class="agency-map-link" style="color: ${agency.color};"><div class="legend-square" style="background:${agency.color};"></div>${agency.name}</a></div>`;
  }));

  window.highlightAgency =  function highlightAgency(agencyId) {
    const agencyInfo = agencies.find(agency => agency.id === agencyId);

    // Jump to zoom right away
    map.easeTo({
      zoom: 9.3,
      center: agencyInfo.center
    });

    // Highlight selected city
    for (const agency of agencies) {
      map.setPaintProperty(
        agency.id,
        'fill-opacity',
        agency.id === agencyId ? 0.85 : 0.3
      );
    }
    map.moveLayer(agencyInfo.id);

    const description = `<div class="agency-map-link" style="margin-right: 10px; color: ${agencyInfo.color};"><div class="legend-square" style="background:${agencyInfo.color};"></div>${agencyInfo.name}</div><div>Routes: <strong>${agencyInfo.routes}</strong></div><div><a href="${agencyInfo.website}" class="btn btn-blue btn-sm mt-2"><i class="fas fa-link"></i> Agency Website</a></div>`;

    popup
      .setLngLat(agencyInfo.center)
      .setHTML(description)
      .addTo(map);
  }

  $('.agency-map-link').click((event) => {
    event.preventDefault();

    highlightAgency($(event.currentTarget).data('id'));
  });
});
