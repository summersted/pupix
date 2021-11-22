import { LinkContainer } from "react-router-bootstrap";
// import {  useState } from "react";
import { Button } from "react-bootstrap";
import DataTitleLikeButton from "../dataTitleLikeButton";

function DataTitleButtons({ showId }) {
    
    return (
        <>
            <>
                <LinkContainer to={`/shows/${showId}/seasons`}>
                    <Button variant="outline-dark">Show seasons</Button>
                </LinkContainer>
                <LinkContainer to={`/shows/${showId}/episodes`}>
                    <Button
                        variant="outline-dark"
                        className="ms-4">
                        Show episodes
                    </Button>
                </LinkContainer>
                <DataTitleLikeButton showId={showId}/>
            </>
        </>
    )
}
export default DataTitleButtons;