import React, { Component } from "react";
import { Media } from "reactstrap";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: null,
    };
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <h4>{dish.name}</h4>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {
              /* {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment}</p>
                  <p>
                    {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(comment.date)}
                  </p>
                </li>
              );
            })} */
              comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author} , {new Intl.DateTimeFormat("en-us",
                     { year: 'numeric', month: 'short', day: '2-digit' })
                    .format(new Date(comment.date))}
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
      );
    } else return <div></div>;
    // return <div>Hello</div>
  }

  render() {
    if (this.props.dish != null) {
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </>
      );
    } else {
      return <div className=""></div>;
    }
  }
}

export default DishDetail;
