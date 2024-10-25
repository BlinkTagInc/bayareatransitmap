document.addEventListener('DOMContentLoaded', () => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/positron',
    center: [-122.273762, 37.91],
    zoom: 8.5
  });

  const popup = new maplibregl.Popup({ closeOnClick: false });

  map.addControl(new maplibregl.NavigationControl());
  map.scrollZoom.disable();

  const agencies = [
    {
      id: 'ac',
      name: 'AC Transit',
      center: [-122.21227348565455, 37.803341676501375],
      website: 'http://www.actransit.org',
      color: '#1b9e77'
    },
    {
      id: 'ace',
      name: 'ACE Train',
      center: [-121.8832131047455, 37.65646571836969],
      website: 'https://acerail.com',
      color: '#a600cb'
    },
    {
      id: 'angelisland',
      name: 'Angel Island - Tiburon Ferry',
      center: [-122.44516894896813, 37.8693285190736],
      website: 'https://angelislandferry.com',
      color: '#e6ab02'
    },
    {
      id: 'bart',
      name: 'Bay Area Rapid Transit (BART)',
      center: [-122.26805027051816, 37.829004502443894],
      website: 'https://bart.gov',
      color: '#e7298a'
    },
    {
      id: 'caltrain',
      name: 'Caltrain',
      center: [-122.19821936830928, 37.464609613944575],
      website: 'http://caltrain.com',
      color: '#e31a1c'
    },
    {
      id: 'capitolcorridor',
      name: 'Capitol Corridor',
      center: [-122.30159122343596, 37.87391757899074],
      website: 'http://www.capitolcorridor.org',
      color: '#7570b3'
    },
    {
      id: 'commuteorg',
      name: 'Commute.org Shuttles',
      center: [-122.31288354213933, 37.55320050156478],
      website: 'https://commute.org',
      color: '#1f78b4'
    },
    {
      id: 'countyconnection',
      name: 'County Connection',
      center: [-122.04717762753484, 37.95124599000397],
      website: 'https://countyconnection.com',
      color: '#ff7f00'
    },
    {
      id: 'dumbartonexpress',
      name: 'Dumbarton Express',
      center: [-122.14902061485544, 37.480902966078204],
      website: 'https://dumbartonexpress.com',
      color: '#b15928'
    },
    {
      id: 'emerygoround',
      name: 'Emery Go-Round',
      center: [-122.29413574804177, 37.84592567385103],
      website: 'https://emerygoround.com',
      color: '#1f78b4'
    },
    {
      id: 'fast',
      name: 'Fairfield and Suisun Transit (FAST)',
      center: [-122.02140604250775, 38.25525204345428],
      website: 'https://fasttransit.org',
      color: '#00da96'
    },
    {
      id: 'goldengate',
      name: 'Golden Gate Transit',
      center: [-122.53964385398365, 37.94663098991812],
      website: 'https://www.goldengate.org/',
      color: '#66a61e'
    },
    {
      id: 'goldengate_ferry',
      name: 'Golden Gate Ferry',
      center: [-122.50910393058969, 37.94560245854578],
      website: 'https://www.goldengate.org/ferry',
      color: '#ff7f00'
    },
    {
      id: 'lavta',
      name: 'LAVTA',
      center: [-121.87297131435314, 37.6886769047443],
      website: 'https://www.wheelsbus.com',
      color: '#e6ab02'
    },
    {
      id: 'marintransit',
      name: 'Marin Transit',
      center: [-122.52049521644679, 38.01983325103447],
      website: 'https://marintransit.org',
      color: '#d47eff'
    },
    {
      id: 'missionbay',
      name: 'Mission Bay Shuttles',
      center: [-122.39055941919756, 37.79044683444745],
      website: 'https://www.missionbaytma.org',
      color: '#009cff'
    },
    {
      id: 'mvcs',
      name: 'Mountain View Community Shuttle',
      center: [-122.0806959343335, 37.421463138893856],
      website: 'https://mvcommunityshuttle.com',
      color: '#ff7f00'
    },
    {
      id: 'mvgo',
      name: 'MVgo',
      center: [-122.0806959343335, 37.421463138893856],
      website: 'https://mvgo.org',
      color: '#1b9e77'
    },
    {
      id: 'napa',
      name: 'Napa Vine Transit',
      center: [-122.3014364572638, 38.32299738893619],
      website: 'https://vinetransit.com',
      color: '#009cff'
    },
    {
      id: 'petalumatransit',
      name: 'Petaluma Transit',
      center: [-122.62990630072039, 38.23831546327128],
      website: 'https://transit.cityofpetaluma.net',
      color: '#e7298a'
    },
    {
      id: 'presidiogo',
      name: 'Presidio GO',
      center: [-122.45347331057468, 37.801027294418],
      website: 'https://presidio.gov/visit/getting-to-and-around-the-park/presidio-go-shuttle',
      color: '#1b9e77'
    },
    {
      id: 'riovista',
      name: 'Rio Vista Delta Breeze',
      center: [-121.69396482355413, 38.17739896466307],
      website: 'https://www.riovistacity.com/deltabreeze/',
      color: '#7570b3'
    },
    {
      id: 'samtrans',
      name: 'SamTrans',
      center: [-122.30632346418753, 37.54076223505852],
      website: 'https://samtrans.com',
      color: '#00da96'
    },
    {
      id: 'weta',
      name: 'San Francisco Bay Ferry',
      center: [-122.35991142637714, 37.91013178791979],
      website: 'https://sanfranciscobayferry.com',
      color: '#ff7f00'
    },
    {
      id: 'sfmta',
      name: 'San Francisco Municipal Transportation Agency',
      center: [-122.44575582897917, 37.76816510180318],
      website: 'https://www.sfmta.com',
      color: '#b15928'
    },
    {
      id: 'sfo',
      name: 'SFO AirTrain',
      center: [-122.40091158829215, 37.63639032314616],
      website: 'https://www.flysfo.com/airtrain',
      color: '#e7298a'
    },
    {
      id: 'santarosa',
      name: 'Santa Rosa CityBus',
      center: [-122.73139029661289, 38.44008074943588],
      website: 'https://samtrans.com',
      color: '#d47eff'
    },
    {
      id: 'soltrans',
      name: 'SolTrans',
      center: [-122.22109060714959, 38.13222652318734],
      website: 'https://soltrans.org',
      color: '#e31a1c'
    },
    {
      id: 'sctransit',
      name: 'Sonoma County Transit',
      center: [-122.69544423650687, 38.346709337724775],
      website: 'https://sctransit.com',
      color: '#66a61e'
    },
    {
      id: 'smart',
      name: 'Sonoma Marin Area Rail Transit (SMART)',
      center: [-122.56716646089573, 38.12372517243497],
      website: 'https://www.sonomamarintrain.org',
      color: '#1f78b4'
    },
    {
      id: 'southcity',
      name: 'South City Shuttle',
      center: [-122.42891428559913, 37.66770425890881],
      website: 'https://www.ssf.net/services/free-south-city-shuttle',
      color: '#e6ab02'
    },
    {
      id: 'stanford',
      name: 'Stanford Marguerite Shuttles',
      center: [-122.16883014066929, 37.43268045909663],
      website: 'https://transportation.stanford.edu/marguerite',
      color: '#66a61e'
    },
    {
      id: 'tdt',
      name: 'Tri Delta Transit',
      center: [-121.88712191684616, 38.03826854351494],
      website: 'https://trideltatransit.com',
      color: '#1b9e77'
    },
    {
      id: 'treasureisland',
      name: 'Treasure Island Ferry',
      center: [-122.38384189068682, 37.806247172768046],
      website: 'https://tisf.com/ferry-service',
      color: '#e6ab02'
    },
    {
      id: 'unioncity',
      name: 'Union City Transit',
      center: [-122.05818980216819, 37.60344742086579],
      website: 'https://www.unioncity.org/170/Union-City-Transit',
      color: '#009cff'
    },
    {
      id: 'vacaville',
      name: 'Vacaville City Coach',
      center: [-121.97134508201037, 38.36749594941287],
      website: 'http://www.citycoach.com`',
      color: '#e7298a'
    },
    {
      id: 'vta',
      name: 'VTA',
      center: [-122.00498752124443, 37.402402729452064],
      website: 'https://www.vta.org',
      color: '#d47eff'
    },
    {
      id: 'westcat',
      name: 'WESTCAT',
      center: [-122.27677552313732, 38.00895511373281],
      website: 'https://www.westcat.org',
      color: '#7570b3'
    }
  ];

  const bufferLayers = agencies.map(agency => `${agency.id}-buffer`)
  const lineLayers = agencies.map(agency => `${agency.id}-lines`)

  map.on('load', () => {
    for (const agency of agencies) {
      map.addSource(`${agency.id}-buffer`, {
        type: 'geojson',
        data: `/data/buffers/${agency.id}.geojson`
      });
  
      map.addLayer({
        'id': `${agency.id}-buffer`,
        'type': 'fill',
        'source': `${agency.id}-buffer`,
        'paint': {
          'fill-color': agency.color,
          'fill-opacity': 0.8
        }
      });

      map.addSource(`${agency.id}-lines`, {
        type: 'geojson',
        data: `/data/lines/${agency.id}.geojson`
      });
  
      map.addLayer({
        'id': `${agency.id}-lines`,
        'type': 'line',
        'source': `${agency.id}-lines`,
        'paint': {
          'line-color': agency.color,
          'line-width': 2
        }
      });
    }

    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, { layers: [...bufferLayers, ...lineLayers] }); 
      const uniqueFeatures = Array.from(new Set(features.map(feature => 
        feature.layer.id.replace('-buffer', '').replace('-lines', '')
      ))).map(agencyId => 
        features.find(feature => 
          feature.layer.id.replace('-buffer', '').replace('-lines', '') === agencyId
        )
      );
      
      if (uniqueFeatures.length === 1) {
        const agencyId = uniqueFeatures[0].layer.id.replace('-buffer', '').replace('-lines', '');
        highlightAgency(agencyId);
      } else if (uniqueFeatures.length > 1) {
        const description = '<h5 style="margin-right: 10px">Agencies</h5>' +  uniqueFeatures.map(feature => {
          const agencyId = feature.layer.id.replace('-buffer', '').replace('-lines', '')
          const agencyInfo = agencies.find(agency => agency.id === agencyId);
          return `<a href="#" onClick="highlightAgency('${agencyId}');">${agencyInfo.name}</a><br>`;
        }).join('')

        popup
          .setLngLat(event.lngLat)
          .setHTML(description)
          .addTo(map);
      }
    });

    map.on('mousemove', (event) => {
      const features = map.queryRenderedFeatures(event.point, { layers: [...bufferLayers, ...lineLayers] });
      if (features.length > 0) {
        map.getCanvas().style.cursor = 'pointer';
      } else {
        map.getCanvas().style.cursor = '';
      }
    });
  });

  document.getElementById('map-legend').innerHTML = agencies.map(agency => {
    return `<a href="#" data-agency-id="${agency.id}" class="agency-map-link" style="color: ${agency.color};"><div class="legend-square" style="background:${agency.color};"></div>${agency.name}</a>`;
  }).join('');

  window.highlightAgency = function highlightAgency(agencyId) {
    const agencyInfo = agencies.find(agency => agency.id === agencyId);

    // Jump to zoom right away
    map.easeTo({
      zoom: 9.3,
      center: agencyInfo.center
    });

    // Highlight selected agency
    for (const agency of agencies) {
      map.setPaintProperty(
        `${agency.id}-buffer`,
        'fill-opacity',
        agency.id === agencyId ? 0.85 : 0.3
      );
      map.setPaintProperty(
        `${agency.id}-buffer`,
        'fill-outline-color',
        agency.id === agencyId ? '#333333' : 'rgba(0,0,0,0)'
      );
      map.setPaintProperty(
        `${agency.id}-lines`,
        'line-opacity',
        agency.id === agencyId ? 0.85 : 0.3
      );
    }
    map.moveLayer(`${agencyId}-lines`);
    map.moveLayer(`${agencyId}-buffer`);

    const description = `<div class="agency-map-link" style="margin-right: 10px; color: ${agencyInfo.color};"><div class="legend-square" style="background:${agencyInfo.color};"></div>${agencyInfo.name}</div><div><a href="${agencyInfo.website}" class="btn btn-blue btn-sm mt-2" target="_blank"><i class="fas fa-link"></i> Agency Website</a></div>`;

    popup
      .setLngLat(agencyInfo.center)
      .setHTML(description)
      .addTo(map);
  }

  document.querySelectorAll('.agency-map-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const agencyId = event.currentTarget.dataset.agencyId;
      highlightAgency(agencyId);
    });
  });
});
