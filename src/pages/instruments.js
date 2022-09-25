import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, dividerClasses } from '@mui/material';

import '../components/instruments/instruments.css';
import NavBar from "../components/navbar";
import instruments_data from '../assets/data/instruments_data';

function Instruments () {
  const data = instruments_data;
  return <div>
    <section className="instruments">
    <NavBar/>
    <div className="instruments">
        {
        data.map(
            (item) => {
                return(
                    <div className="card" key = {item.key}>
                    <Card sx = {{width: "300px", margin : "0 auto auto auto"}}>
                    <CardActionArea>    
                    <CardMedia
                        component="img"
                        height="140"
                        image = {item.src}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {item.desc}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                    </div>
                );
            }
        )
        }
    </div>
    </section>

    </div>
  };

export default Instruments;