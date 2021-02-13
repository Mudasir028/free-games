import React, { Component } from "react";

import gameService from "../services/game";
import { Link } from "react-router-dom";
import NavbarTop from "./navbar";
import Spinner from "react-bootstrap/Spinner";
import { Footer } from "../footer";
import form from "./common/form";

export default class Category extends form {
  state = {
    content: "",
    inputValue: "",
    isDisable: true,
    searchBar: false,
  };

  async componentDidMount() {
    const { data } = await gameService.getSingleCategory(
      this.props.match.params.name
    );
    this.setState({
      content: data,
    });
  }

  render() {
    const { content, inputValue, isDisable, searchBar } = this.state;

    return (
      <>
        <div id="content-wrap">
          <NavbarTop
            value={inputValue}
            submit={this.handleSubmit}
            change={this.handleChange}
            isDisable={isDisable}
            searchBar={searchBar}
          />
          {/* BODY START */}

          <div className="container my-3">
            <div className="row">
              <div className="col-md-9 ">
                <div className="row bg-white content-holder py-3">
                  {content ? (
                    content.games.map((g) => {
                      return (
                        <div key={g.id} className="col-md-3 col-sm-6 mb-3 ">
                          <Link to={`/game/${g.id}  `}>
                            <div className="box rounded">
                              <img
                                src={
                                  "https://www.freeonlinegames.com/" +
                                  g.image_url
                                }
                                alt=""
                              />
                              <div className="box-content">
                                <span className="post">{g.title}</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-md-12 text-center">
                      <Spinner animation="grow" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3 right-sidbar">
                <div className="row">
                  <div className="col-md-12 col-sm-6 bg-white content-holder py-3 text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
