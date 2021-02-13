import React, { Component } from "react";
import gameService from "../services/game";
import NavbarTop from "./navbar";
import Spinner from "react-bootstrap/Spinner";
import { Footer } from "../footer";

export default class SingleGame extends Component {
  state = {
    game: "",
    data: {
      description: "",
      dev: "",
      iframe: "",
      image_url: "",
      instructions: "",
      publisher: "",
      tags: "",
      title: "",
      type: "",
    },
    isDisable: true,
    searchBar: true,
  };

  async componentDidMount() {
    const data = { ...this.state.data };

    await gameService.getSingleGame(this.props.match.params.id).then(
      (response) => {
        data.description = response.data.games.description;
        data.dev = response.data.games.dev;
        data.iframe = response.data.games.iframe;
        data.image_url = response.data.games.image_url;
        data.instructions = response.data.games.instructions;
        data.publisher = response.data.games.publisher;
        data.tags = response.data.games.tags;
        data.title = response.data.games.title;
        data.type = response.data.games.type;
        this.setState({
          data,
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

    // var myRegex = /<iframe[^>]+src="(http:\/\/[^">]+)"/g;
    // var test = data.games.iframe;
    // var url = myRegex.exec(test);

    // this.setState({ data });
  }

  render() {
    const {
      description,
      dev,
      iframe,
      image_url,
      instructions,
      publisher,
      tags,
      title,
      type,
    } = this.state.data;
    const { searchBar, isDisable } = this.state;

    return (
      <>
        <div id="content-wrap">
          <NavbarTop searchBar={searchBar} isDisable={isDisable} />

          <div className="container my-3">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row mb-3 bg-white content-holder py-3"></div>
                <div className="row bg-white content-holder py-3 mb-3">
                  {iframe ? (
                    <div className="col-md-12 ">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="pt-3 px-2">
                            <img
                              className="rounded"
                              src={
                                "https://www.freeonlinegames.com/" + image_url
                              }
                              alt=""
                              height="90"
                              width="140"
                            />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="pt-3 px-2">
                            <h5>
                              <strong>Game Name: </strong>
                              {title}
                            </h5>
                            <h6>
                              <strong>Tags: </strong> {tags}
                            </h6>
                            <h6>
                              <strong>Publisher Name: </strong>
                              {publisher}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-12 py-3">
                          {dev === "unity" ? (
                            <div className="iframe-container iframe-container-for-wxh-75">
                              <iframe
                                src={
                                  iframe.includes("http")
                                    ? iframe
                                    : "https://www.freeonlinegames.com" + iframe
                                }
                                allowFullScreen
                                frameBorder="no"
                                scrolling="no"
                              ></iframe>
                            </div>
                          ) : (
                            <object
                              type="application/x-shockwave-flash"
                              data={
                                iframe.includes("http")
                                  ? iframe
                                  : "https://www.freeonlinegames.com" + iframe
                              }
                              width="100%"
                              height="700px"
                            >
                              <param name="quality" value="high" />
                              <param name="bgcolor" value="#000000" />
                              <param name="play" value="true" />
                              <param name="loop" value="true" />
                              <param name="wmode" value="window" />
                              <param name="scale" value="showall" />
                              <param name="menu" value="true" />
                              <param name="devicefont" value="false" />
                              <param name="salign" value="" />
                              <param
                                name="allowScriptAccess"
                                value="sameDomain"
                              />
                              <a href="http://www.adobe.com/go/getflash">
                                <img
                                  src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                  alt="Get Adobe Flash player"
                                />
                              </a>
                            </object>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-12 text-center">
                      <Spinner animation="grow" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-9 bg-white content-holder pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="px-2">
                          <h6>
                            <strong>Description: </strong>
                          </h6>
                          <p
                            dangerouslySetInnerHTML={{ __html: description }}
                          />

                          <h6>
                            <strong>Instructions </strong>
                          </h6>

                          <p
                            dangerouslySetInnerHTML={{ __html: instructions }}
                          />
                          <h6>
                            <strong>Type: </strong>
                          </h6>

                          <p dangerouslySetInnerHTML={{ __html: type }} />
                        </div>
                      </div>
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
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
