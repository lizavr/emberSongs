import { http, HttpResponse } from 'msw';

//let baseUrl = 'https://json-api.rockandrollwithemberjs.com';
let baseUrl = 'http://localhost:4200';

let bands = [
  {
    id: 'foo-fighters',
    type: 'bands',
    links: {
      self: `${baseUrl}/bands/foo-fighters`,
    },
    attributes: {
      name: 'Foo Fighters',
      description: null,
    },
    relationships: {
      songs: {
        links: {
          self: `${baseUrl}/bands/foo-fighters/relationships/songs`,
          related: `${baseUrl}/bands/foo-fighters/songs`,
        },
      },
    },
  },
  {
    id: 'kaya-project',
    type: 'bands',
    links: {
      self: `${baseUrl}/bands/kaya-project`,
    },
    attributes: {
      name: 'Kaya Project',
      description: null,
    },
    relationships: {
      songs: {
        links: {
          self: `${baseUrl}/bands/kaya-project/relationships/songs`,
          related: `${baseUrl}/bands/kaya-project/songs`,
        },
      },
    },
  },
  {
    id: 'led-zeppelin',
    type: 'bands',
    links: {
      self: `${baseUrl}/bands/led-zeppelin`,
    },
    attributes: {
      name: 'Led Zeppelin',
      description: null,
    },
    relationships: {
      songs: {
        links: {
          self: `${baseUrl}/bands/led-zeppelin/relationships/songs`,
          related: `${baseUrl}/bands/led-zeppelin/songs`,
        },
      },
    },
  },
  {
    id: 'pearl-jam',
    type: 'bands',
    links: {
      self: `${baseUrl}/bands/pearl-jam`,
    },
    attributes: {
      name: 'Pearl Jam',
      description:
        'Pearl Jam is an American rock band, formed in Seattle, Washington in 1990.',
    },
    relationships: {
      songs: {
        links: {
          self: `${baseUrl}/bands/pearl-jam/relationships/songs`,
          related: `${baseUrl}/bands/pearl-jam/songs`,
        },
      },
    },
  },
  {
    id: 'radiohead',
    type: 'bands',
    links: {
      self: `${baseUrl}/bands/radiohead`,
    },
    attributes: {
      name: 'Radiohead',
      description: null,
    },
    relationships: {
      songs: {
        links: {
          self: `${baseUrl}/bands/radiohead/relationships/songs`,
          related: `${baseUrl}/bands/radiohead/songs`,
        },
      },
    },
  },
  {
    id: 'red-hot-chili-peppers',
    type: 'bands',
    links: {
      self: `${baseUrl}/bands/red-hot-chili-peppers`,
    },
    attributes: {
      name: 'Red Hot Chili Peppers',
      description: null,
    },
    relationships: {
      songs: {
        links: {
          self: `${baseUrl}/bands/red-hot-chili-peppers/relationships/songs`,
          related: `${baseUrl}/bands/red-hot-chili-peppers/songs`,
        },
      },
    },
  },
];

let songs = [
  {
    id: '9270',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9270` },
    attributes: { title: 'Yellow Ledbetter', rating: 5, bandId: 'pearl-jam' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9270/relationships/band`,
          related: `${baseUrl}/songs/9270/band`,
        },
      },
    },
  },
  {
    id: '9271',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9271` },
    attributes: { title: 'Daughter', rating: 5, bandId: 'pearl-jam' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9271/relationships/band`,
          related: `${baseUrl}/songs/9271/band`,
        },
      },
    },
  },
  {
    id: '9272',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9272` },
    attributes: { title: 'Animal', rating: 4, bandId: 'pearl-jam' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9272/relationships/band`,
          related: `${baseUrl}/songs/9272/band`,
        },
      },
    },
  },
  {
    id: '9273',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9273` },
    attributes: {
      title: 'State of Love and Trust',
      rating: 4,
      bandId: 'pearl-jam',
    },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9273/relationships/band`,
          related: `${baseUrl}/songs/9273/band`,
        },
      },
    },
  },
  {
    id: '9274',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9274` },
    attributes: { title: 'Alive', rating: 3, bandId: 'pearl-jam' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9274/relationships/band`,
          related: `${baseUrl}/songs/9274/band`,
        },
      },
    },
  },
  {
    id: '9275',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9275` },
    attributes: { title: 'Inside Job', rating: 4, bandId: 'pearl-jam' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9275/relationships/band`,
          related: `${baseUrl}/songs/9275/band`,
        },
      },
    },
  },
  {
    id: '9276',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9276` },
    attributes: { title: 'Black Dog', rating: 4, bandId: 'led-zeppelin' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9276/relationships/band`,
          related: `${baseUrl}/songs/9276/band`,
        },
      },
    },
  },
  {
    id: '9277',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9277` },
    attributes: {
      title: 'Achilles Last Stand',
      rating: 5,
      bandId: 'led-zeppelin',
    },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9277/relationships/band`,
          related: `${baseUrl}/songs/9277/band`,
        },
      },
    },
  },
  {
    id: '9278',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9278` },
    attributes: { title: 'Immigrant Song', rating: 4, bandId: 'led-zeppelin' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9278/relationships/band`,
          related: `${baseUrl}/songs/9278/band`,
        },
      },
    },
  },
  {
    id: '9279',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9279` },
    attributes: {
      title: 'Whole Lotta Love',
      rating: 4,
      bandId: 'led-zeppelin',
    },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9279/relationships/band`,
          related: `${baseUrl}/songs/9279/band`,
        },
      },
    },
  },
  {
    id: '9280',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9280` },
    attributes: { title: 'Always Waiting', rating: 5, bandId: 'kaya-project' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9280/relationships/band`,
          related: `${baseUrl}/songs/9280/band`,
        },
      },
    },
  },
  {
    id: '9281',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9281` },
    attributes: { title: 'The Pretender', rating: 3, bandId: 'foo-fighters' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9281/relationships/band`,
          related: `${baseUrl}/songs/9281/band`,
        },
      },
    },
  },
  {
    id: '9282',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9282` },
    attributes: { title: 'Best of You', rating: 5, bandId: 'foo-fighters' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9282/relationships/band`,
          related: `${baseUrl}/songs/9282/band`,
        },
      },
    },
  },
  {
    id: '9283',
    type: 'songs',
    links: { self: `${baseUrl}/songs/9283` },
    attributes: { title: 'Hey Jude', rating: 2, bandId: 'pearl-jam' },
    relationships: {
      band: {
        links: {
          self: `${baseUrl}/songs/9283/relationships/band`,
          related: `${baseUrl}/songs/9283/band`,
        },
      },
    },
  },
];

export const handlers = [
  // GET /bands
  http.get('/bands', () => {
    return HttpResponse.json({ data: bands });
  }),

  // GET /songs
  http.get('/songs', () => {
    return HttpResponse.json({ data: songs });
  }),

  // POST /bands
  http.post('/bands', async ({ request }) => {
    const body = await request.json();
    const { name, description } = {
      name: body.data.attributes.name,
      description: body.data.attributes.name,
    };
    const newBand = {
      id: `${name.toLowerCase().replace(/ /g, '-')}`,
      type: 'bands',
      links: {
        self: `${baseUrl}/bands/${name.toLowerCase().replace(/ /g, '-')}`,
      },
      attributes: {
        name,
        description: description || null,
      },
      relationships: {
        songs: {
          links: {
            self: `${baseUrl}/bands/${name.toLowerCase().replace(/ /g, '-')}/relationships/songs`,
            related: `${baseUrl}/bands/${name.toLowerCase().replace(/ /g, '-')}/songs`,
          },
        },
      },
    };
    bands.push(newBand);
    return HttpResponse.json({ data: newBand });
  }),

  // POST /songs
  http.post('/songs', async ({ request }) => {
    const body = await request.json();
    const { title, bandId } = {
      title: body.data.attributes.title,
      band: body.data.relationships.band.id,
    };
    const newSong = {
      id: String(songs.length + 1),
      type: 'songs',
      attributes: {
        title,
        bandId,
      },
      links: {
        self: `${baseUrl}/songs/${songs.length + 1}`,
      },
    };
    songs.push(newSong);
    return HttpResponse.json({ data: newSong });
  }),

  // PATCH /bands/:id
  http.patch('/bands/:id', (req) => {
    const { id } = req.params;
    const band = bands.find((b) => b.id === id);
    if (band) {
      //Object.assign(band.attributes, req.body.attributes);
      return HttpResponse.json({ data: band });
    }
    return new HttpResponse('Not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }),

  // PATCH /songs/:id
  http.patch('/songs/:id', (req) => {
    const { id } = req.params;
    const song = songs.find((s) => s.id === id);
    if (song) {
      //Object.assign(song.attributes, req.body.attributes);
      return HttpResponse.json({ data: song });
    }
    return new HttpResponse('Not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }),

  // GET /bands/:id/songs
  http.get('/bands/:id/songs', (req) => {
    const { id } = req.params;
    const bandSongs = songs.filter((song) => song.attributes.bandId === id);
    return HttpResponse.json({ data: bandSongs });
  }),

  // DELETE /bands/:id
  http.delete('/bands/:id', (req) => {
    const { id } = req.params;
    bands = bands.filter((b) => b.id !== id);
    return new HttpResponse(null, { status: 204 });
  }),

  // DELETE /songs/:id
  http.delete('/songs/:id', (req) => {
    const { id } = req.params;
    songs = songs.filter((s) => s.id !== id);
    return new HttpResponse(null, { status: 204 });
  }),
];
