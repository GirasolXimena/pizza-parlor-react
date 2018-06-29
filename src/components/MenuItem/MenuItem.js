import React, { Component } from 'react';
import { render } from 'react-dom';
import 'typeface-roboto'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
      <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
        <div>
          <Card className="card">
            <CardMedia />
              <div className="frame-square" onClick={this.toggleDescription}>
                <div className="crop">
                  <div>
                    <img className="img" src={item.image_path} alt=""/>
                  </div>
                </div>
              </div>
            <CardContent>
              <div className="content">
                <Typography gutterBottom variant="title" component="h4">
                  {item.name}
                </Typography>
              </div>
              <div className="content">
                <Typography gutterBottom>
                  {item.description}
                </Typography>
              </div>

            </CardContent>
            <CardActions className="buttons">
              <Button className="add-button" onClick={this.addItemToCart} size="small" color="primary">
                ADD
              </Button>
              {/* {(item.quantity > 0) && <Button onClick={this.removeAllFromCart} size="small" color="primary" className="controls">
                REMOVE ALL
              </Button>} */}
            </CardActions>
          </Card>
        </div>
      </Grid>
    )
  }
}

export default connect(mapReduxStateToProps)(MenuItem);