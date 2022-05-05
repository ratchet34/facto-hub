import { AddCircle } from '@mui/icons-material';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import '../css/Events.css';

function Events() {
  const data = [
    {
      title: 'Férias 2022',
      desc: 'Faire la fête wesh',
      img: 'https://www.plaisirsdete.fr/wp-content/uploads/2019/02/feria-960x556.jpg',
      alt: 'feria',
    },
    {
      title: 'Vacances été 2022',
      desc: 'Chillax tjrowghn gnoiuwrng owr oiwerhngowe ingoewijf owief wehfnwoeiu weoifh jneoi oweuhnfwue fioweufniue w',
      img: 'https://www.bioalaune.com/img/article/38687-si-cle-bonheur-residait-dans-farniente.png',
      alt: 'chillax',
    },
    {
      title: 'Toto a la plage',
      desc: 'Chillax tjrowghn gnoiuwrng owr oiwerhngowe ingoewijf owief wehfnwoeiu weoifh jneoi oweuhnfwue fioweufniue w',
      img: 'https://www.bioalaune.com/img/article/38687-si-cle-bonheur-residait-dans-farniente.png',
      alt: 'chillax',
    },
    {
      title: 'Toto a la plage',
      desc: 'Chillax tjrowghn gnoiuwrng owr oiwerhngowe ingoewijf owief wehfnwoeiu weoifh jneoi oweuhnfwue fioweufniue w',
      img: 'https://www.bioalaune.com/img/article/38687-si-cle-bonheur-residait-dans-farniente.png',
      alt: 'chillax',
    },
    {
      title: 'Toto a la plage',
      desc: 'Chillax tjrowghn gnoiuwrng owr oiwerhngowe ingoewijf owief wehfnwoeiu weoifh jneoi oweuhnfwue fioweufniue w',
      img: 'https://www.bioalaune.com/img/article/38687-si-cle-bonheur-residait-dans-farniente.png',
      alt: 'chillax',
    },
  ];

  return (
    <Box id="events">
      <Box className="cards">
        <Box className="card-container">
          {data.map((item) => (
            <Card sx={{ maxWidth: '15em' }} className="card">
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ flexDirection: 'row-reverse' }}>
                <Button size="small">Details</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
      <Box className="actions">
        <Button color="neutral" variant="contained" startIcon={<AddCircle />}>
          New
        </Button>
      </Box>
    </Box>
  );
}

export default Events;
