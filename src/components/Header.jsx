import React, { Component } from "react";

class Header extends Component {
  state = {
    title: ""
  };
  handleOnChange = e => this.setState({ title: e.target.value });
  render() {
    const { title } = this.state;
    return (
      <div className="row">
        <div className="col-sm-6">
          <h1 className="mt-2">Movies</h1>
        </div>
        <div className="col-sm-6 d-flex align-items-center justify-content-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="add a movie..."
              value={title}
              onChange={this.handleOnChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  this.props.onMovieAdded(title);
                }}
              >
                <i className="fa fa-fw fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
