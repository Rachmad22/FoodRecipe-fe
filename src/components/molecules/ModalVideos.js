import React from "react";
import { useSelector } from "react-redux";

function ModalVideos() {
    const { recipe } = useSelector((state) => state);

    const videoLink = recipe?.data?.videos.split(",")

    return (
        <div>
            {/* video 1 */}
            <button type="button" className="btn btn-warning d-block btn-step" data-bs-toggle="modal" data-bs-target=".video">
                <img src="/image/detail/play.png" alt="play-icon" />
            </button>

            <div className="modal fade video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header align-items-baseline">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`${recipe?.data?.name} video` || "Video"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink[0].slice(17)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* video 2 */}
            <button type="button" className="btn btn-warning d-block btn-step" data-bs-toggle="modal" data-bs-target=".video2">
                <img src="/image/detail/play.png" alt="play-icon" />
            </button>

            <div className="modal fade video2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header align-items-baseline">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`${recipe?.data?.name} video 2` || "Video"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink[1].slice(17)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* video 3 */}
            <button type="button" className="btn btn-warning d-block btn-step" data-bs-toggle="modal" data-bs-target=".video3">
                <img src="/image/detail/play.png" alt="play-icon" />
            </button>

            <div className="modal fade video3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header align-items-baseline">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`${recipe?.data?.name} video 3` || "Video"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink[2].slice(17)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default ModalVideos;