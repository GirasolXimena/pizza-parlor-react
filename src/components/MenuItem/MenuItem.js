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
import { connect } from 'react-redux';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
})

class MenuItem extends Component {
  addItemToCart = () => {
    const action = {type: 'ADD_TO_CART', payload: this.props.menuItem._id};
    this.props.dispatch(action);
  }

  removeAllFromCart = () => {
    const action = {type: 'DELETE_FROM_CART', payload: this.props.menuItem._id};
    this.props.dispatch(action);
  }
  
  render() {
    let item = this.props.menuItem;
    return (
      <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
        <div>
          <Card style={{width: '200px', height: '600px'}}>
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
            <CardActions onClick={this.addItemToCart} disableActionSpacing>
              {<p>add to cart</p>}
            </CardActions>
            <CardActions onClick={this.removeAllFromCart} disableActionSpacing>
              {(item.quantity > 0) &&  <p>remove all from cart</p>}
            </CardActions>
          </Card>
        </div>
      </Grid>
    )
  }
}

export default connect(mapReduxStateToProps)(MenuItem);