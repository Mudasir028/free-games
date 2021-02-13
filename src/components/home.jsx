import React, { Component } from "react";
import gameService from "../services/game";
import { Link } from "react-router-dom";
import NavbarTop from "./navbar";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import { Footer } from "../footer";

import form from "./common/form";

export default class Home extends form {
  state = {
    content: "",
    inputValue: "",
    isDisable: true,
    searchBar: false,
  };

  componentDidMount() {
    gameService.getAllGames().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        // this.setState({
        //   content:
        //     (error.response && error.response.data) ||
        //     error.message ||
        //     error.toString(),
        // });
      }
    );
  }

  render() {
    const { content, inputValue, isDisable, searchBar } = this.state;
    // console.log(isDisable);

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

          <div className=" container my-3">
            <div className="row ">
              <div className="col-md-9">
                <div className="row d-flex align-items-center text-center ">
                  <div className="col-12 bg-white py-3 mb-3 content-holder">
                    <Carousel>
                      <Carousel.Item>
                        <div className="row">
                          {content ? (
                            content.games
                              .sort(() => 0.5 - Math.random())
                              .slice(0, 4)
                              .map((g) => {
                                return (
                                  <div key={g.id} className="col-md-3  ">
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
                                          <span className="post">
                                            {g.title}
                                          </span>
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
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="row">
                          {content ? (
                            content.games
                              .sort(() => 0.5 - Math.random())
                              .slice(0, 4)
                              .map((g) => {
                                return (
                                  <div key={g.id} className="col-md-3  ">
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
                                          <span className="post">
                                            {g.title}
                                          </span>
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
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="row">
                          {content ? (
                            content.games
                              .sort(() => 0.5 - Math.random())
                              .slice(0, 4)
                              .map((g) => {
                                return (
                                  <div key={g.id} className="col-md-3  ">
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
                                          <span className="post">
                                            {g.title}
                                          </span>
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
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
                <div className="row bg-white py-3 content-holder">
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
