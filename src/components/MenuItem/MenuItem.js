import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    let item = this.props.menuItem;
    return (
      <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
        <div>
          <Card style={{width: '200px', height: '400px'}}>
            <CardMedia />
              <div className="frame-square" onClick={this.toggleDescription}>
                <div className="crop">
                  <div>
                    <img src={item.image_path} alt=""/>
                  </div>
                </div>
              </div>
            <CardContent>
            <CardHeader
              // avatar={
              //   <Avatar aria-label="Description">
              //     I
              //   </Avatar>
              // }
              action={
                <IconButton>

                </IconButton>
              }
              title={item.name}
              subheader={item.cost} />
              <Typography component="p">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              {}
            </CardActions>
          </Card>
        </div>
      </Grid>
    )
  }
}

export default MenuItem;